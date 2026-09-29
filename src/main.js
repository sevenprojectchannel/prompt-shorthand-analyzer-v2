/**
 * Main Application Orchestrator V2
 * Prompt Shorthand Analyzer V2.0
 */

import './styles/main.css';
import './styles/components.css';

import { INITIAL_SHORTHAND_CATALOG } from './data/catalogData.js';
import { StorageService } from './services/storageService.js';
import { GeminiService, GEMINI_STATUS } from './services/geminiService.js';
import { cleanPromptForCopy } from './lib/promptFormatter.js';

import { renderHeader } from './components/Header.js';
import { renderAnalyzerPage } from './components/AnalyzerPage.js';
import { renderJsonTestPage } from './components/JsonTestPage.js';
import { renderCatalogPage } from './components/CatalogPage.js';
import { renderSettingsPage } from './components/SettingsPage.js';

class App {
  constructor() {
    this.appRoot = document.getElementById('app');
    this.catalog = [...INITIAL_SHORTHAND_CATALOG];
    this.geminiService = new GeminiService(this.catalog);

    // Initial state
    this.activeTab = 'analyzer';
    this.currentPrompt = '';
    this.isAnalyzing = false;
    this.catalogCategory = 'ALL';
    this.catalogSearchQuery = '';

    // Initialize with empty analysis result
    this.analysisResult = this.geminiService.localEngine.getEmptyResult();

    // Check saved API key status
    this.initGeminiStatus();
  }

  async initGeminiStatus() {
    const key = StorageService.getApiKey();
    if (key) {
      // Test quietly in background to set accurate status indicator
      const res = await this.geminiService.testConnection(key);
      this.render();
    }
  }

  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : (type === 'error' ? '❌' : 'ℹ️')}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  async runAnalysis(promptText, installedOverrides = null) {
    if (!promptText || !promptText.trim()) {
      this.showToast('Silakan masukkan prompt terlebih dahulu', 'error');
      return;
    }

    this.currentPrompt = promptText;
    this.isAnalyzing = true;
    this.render();

    try {
      const result = await this.geminiService.analyzePrompt(promptText, installedOverrides);
      this.analysisResult = result;
      this.showToast('Analisis prompt selesai!');
    } catch (err) {
      this.showToast(`Gagal menganalisis: ${err.message}`, 'error');
    } finally {
      this.isAnalyzing = false;
      this.render();
    }
  }

  handleReset() {
    this.currentPrompt = '';
    this.analysisResult = this.geminiService.localEngine.getEmptyResult();
    this.showToast('Aplikasi telah di-reset ke kondisi awal.');
    this.render();
  }

  handleClear() {
    this.currentPrompt = '';
    this.analysisResult = this.geminiService.localEngine.getEmptyResult();
    this.render();
  }

  handleSelectPreset(presetPrompt) {
    this.currentPrompt = presetPrompt;
    this.runAnalysis(presetPrompt);
  }

  handleCopyPrompt(promptToCopy) {
    const clean = cleanPromptForCopy(promptToCopy);
    if (!clean) {
      this.showToast('Tidak ada prompt untuk disalin', 'error');
      return;
    }

    navigator.clipboard.writeText(clean).then(() => {
      this.showToast('✅ Main Prompt berhasil disalin ke clipboard!');
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = clean;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      this.showToast('✅ Main Prompt berhasil disalin!');
    });
  }

  handleAddShorthand(code) {
    if (!code) return;
    const currentInstalled = this.analysisResult.installedShorthands || [];
    if (!currentInstalled.includes(code)) {
      const updated = [...currentInstalled, code];
      this.updateInstalledShorthands(updated);
      this.showToast(`Shorthand ${code} ditambahkan.`);
    }
  }

  handleRemoveShorthand(code) {
    const currentInstalled = this.analysisResult.installedShorthands || [];
    const updated = currentInstalled.filter(c => c !== code);
    this.updateInstalledShorthands(updated);
    this.showToast(`Shorthand ${code} dilepas.`);
  }

  handleToggleRecommendation(code) {
    const currentInstalled = this.analysisResult.installedShorthands || [];
    if (currentInstalled.includes(code)) {
      this.handleRemoveShorthand(code);
    } else {
      this.handleAddShorthand(code);
    }
  }

  updateInstalledShorthands(newInstalledList) {
    this.analysisResult.installedShorthands = newInstalledList;
    // Reconstruct optimal prompt
    this.analysisResult.optimalPrompt = this.geminiService.localEngine.buildOptimalPrompt(
      this.analysisResult.cleanText,
      newInstalledList
    );
    this.render();
  }

  handleResolveConflict(conflictId, action) {
    const conflict = this.analysisResult.conflicts.find(c => c.id === conflictId);
    if (!conflict) return;

    let updated = [...(this.analysisResult.installedShorthands || [])];

    if (action === 'use_user_edit') {
      // Keep edit, remove lock
      updated = updated.filter(c => c !== conflict.shorthandA);
      this.showToast(`Kunci ${conflict.shorthandA} dilepas sesuai instruksi ubah.`);
    } else if (action === 'keep_lock') {
      // Keep lock, remove edit
      updated = updated.filter(c => c !== conflict.shorthandB);
      if (!updated.includes(conflict.shorthandA)) {
        updated.push(conflict.shorthandA);
      }
      this.showToast(`Lock ${conflict.shorthandA} dipertahankan.`);
    }

    // Filter out resolved conflict
    this.analysisResult.conflicts = this.analysisResult.conflicts.filter(c => c.id !== conflictId);
    this.updateInstalledShorthands(updated);
  }

  async handleTestConnection(apiKey, modelName) {
    this.showToast('Menguji koneksi ke Gemini API...', 'info');
    const res = await this.geminiService.testConnection(apiKey, modelName);
    if (res.success) {
      this.showToast(res.message, 'success');
    } else {
      this.showToast(res.message, 'error');
    }
    this.render();
  }

  handleSaveSettings(apiKey, modelName) {
    StorageService.setApiKey(apiKey);
    StorageService.setModel(modelName);
    this.showToast('Pengaturan BYOK berhasil disimpan!', 'success');
    this.geminiService.testConnection(apiKey, modelName).then(() => this.render());
  }

  handleClearKey() {
    StorageService.clearApiKey();
    this.geminiService.status = GEMINI_STATUS.UNCONFIGURED;
    this.showToast('API Key telah dihapus dari perangkat ini.');
    this.render();
  }

  render() {
    const geminiStatusInfo = this.geminiService.getStatus();

    // 1. Header
    const headerComponent = renderHeader(
      this.activeTab,
      geminiStatusInfo,
      (tab) => {
        this.activeTab = tab;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      () => {
        this.activeTab = 'settings';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );

    // 2. Main Page View
    let pageContent = null;

    if (this.activeTab === 'analyzer') {
      pageContent = renderAnalyzerPage({
        analysisResult: this.analysisResult,
        currentPrompt: this.currentPrompt,
        catalog: this.catalog,
        isAnalyzing: this.isAnalyzing,
        onAnalyze: (text) => this.runAnalysis(text),
        onReset: () => this.handleReset(),
        onClear: () => this.handleClear(),
        onSelectPreset: (text) => this.handleSelectPreset(text),
        onCopyPrompt: (prompt) => this.handleCopyPrompt(prompt),
        onAddShorthand: (code) => this.handleAddShorthand(code),
        onRemoveShorthand: (code) => this.handleRemoveShorthand(code),
        onToggleRecommendation: (code) => this.handleToggleRecommendation(code),
        onResolveConflict: (id, act) => this.handleResolveConflict(id, act)
      });
    } else if (this.activeTab === 'json-test') {
      pageContent = renderJsonTestPage({
        analysisResult: this.analysisResult,
        onCopyJson: (jsonStr) => {
          navigator.clipboard.writeText(jsonStr);
          this.showToast('Output JSON berhasil disalin!');
        }
      });
    } else if (this.activeTab === 'catalog') {
      pageContent = renderCatalogPage({
        catalog: this.catalog,
        activeCategory: this.catalogCategory,
        searchQuery: this.catalogSearchQuery,
        onSelectCategory: (cat) => {
          this.catalogCategory = cat;
          this.render();
        },
        onSearchChange: (query) => {
          this.catalogSearchQuery = query;
          this.render();
        },
        onAddShorthandToPrompt: (code) => {
          this.handleAddShorthand(code);
          this.activeTab = 'analyzer';
          this.render();
          this.showToast(`Shorthand ${code} ditambahkan ke prompt analyzer!`);
        }
      });
    } else if (this.activeTab === 'settings') {
      pageContent = renderSettingsPage({
        geminiStatusInfo,
        onTestConnection: (key, model) => this.handleTestConnection(key, model),
        onSaveSettings: (key, model) => this.handleSaveSettings(key, model),
        onClearKey: () => this.handleClearKey()
      });
    }

    // 3. Assemble DOM
    this.appRoot.innerHTML = `
      <div class="app-container">
        ${headerComponent.html}
        <main class="main-content">
          ${pageContent.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V2.0</strong> &mdash; 100% Client-Side Static App
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; GitHub Pages Ready
            </div>
          </div>
        </footer>
      </div>
    `;

    // 4. Bind interactive events
    headerComponent.bindEvents(this.appRoot);
    if (pageContent.bindEvents) {
      pageContent.bindEvents(this.appRoot);
    }
  }
}

// Bootstrapping
document.addEventListener('DOMContentLoaded', () => {
  window.__PSA_APP__ = new App();
  window.__PSA_APP__.render();
});
