/**
 * Centralized Gemini Service V2
 * 
 * Prinsip:
 * 1. SATU titik akses terpusat untuk seluruh interaksi Gemini API.
 * 2. 100% BYOK (Bring Your Own Key) - tidak ada API key developer yang di-hardcode.
 * 3. Graceful Fallback: Jika key kosong, offline, atau gagal, aplikasi beralih
 *    mulus ke Local Semantic Engine tanpa crash.
 */

import { StorageService } from './storageService.js';
import { SemanticEngine } from '../lib/semanticEngine.js';

export const GEMINI_STATUS = {
  CONNECTED: 'CONNECTED',     // 🟢 Tersambung
  UNCONFIGURED: 'UNCONFIGURED', // 🟡 Belum diuji / konfigurasi
  FAILED: 'FAILED'            // 🔴 Gagal
};

export class GeminiService {
  constructor(catalog = []) {
    this.localEngine = new SemanticEngine(catalog);
    this.status = GEMINI_STATUS.UNCONFIGURED;
    this.lastError = null;
    this.initStatusFromStorage();
  }

  setCatalog(catalog) {
    this.localEngine.setCatalog(catalog);
  }

  initStatusFromStorage() {
    const key = StorageService.getApiKey();
    if (!key) {
      this.status = GEMINI_STATUS.UNCONFIGURED;
    }
  }

  getStatus() {
    return {
      status: this.status,
      error: this.lastError,
      hasKey: Boolean(StorageService.getApiKey())
    };
  }

  /**
   * Test connection using the user's API Key
   */
  async testConnection(apiKey, modelName) {
    const key = (apiKey || StorageService.getApiKey()).trim();
    const model = modelName || StorageService.getModel() || 'gemini-2.5-flash';

    if (!key) {
      this.status = GEMINI_STATUS.UNCONFIGURED;
      this.lastError = 'API Key belum dimasukkan';
      return {
        success: false,
        status: GEMINI_STATUS.UNCONFIGURED,
        message: 'Masukkan Gemini API Key Anda terlebih dahulu.'
      };
    }

    try {
      // Testing with a lightweight request to models endpoint or minimal ping
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}?key=${encodeURIComponent(key)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`;
        this.status = GEMINI_STATUS.FAILED;
        this.lastError = errMsg;
        return {
          success: false,
          status: GEMINI_STATUS.FAILED,
          message: `Gagal tersambung ke Gemini: ${errMsg}`
        };
      }

      this.status = GEMINI_STATUS.CONNECTED;
      this.lastError = null;
      return {
        success: true,
        status: GEMINI_STATUS.CONNECTED,
        message: `Berhasil terhubung ke model ${model}!`
      };
    } catch (err) {
      this.status = GEMINI_STATUS.FAILED;
      this.lastError = err.message || 'Koneksi jaringan gagal';
      return {
        success: false,
        status: GEMINI_STATUS.FAILED,
        message: `Koneksi gagal: ${this.lastError}`
      };
    }
  }

  /**
   * Analyze prompt: Calls Gemini API if configured & connected;
   * otherwise transparently falls back to local SemanticEngine.
   */
  async analyzePrompt(rawPrompt, installedOverrides = null) {
    const key = StorageService.getApiKey().trim();
    const model = StorageService.getModel() || 'gemini-2.5-flash';

    // If no key or not connected, immediately use local engine
    if (!key) {
      const localResult = this.localEngine.analyze(rawPrompt, installedOverrides);
      return {
        ...localResult,
        source: 'LOCAL_ENGINE',
        engineNotice: 'Analisis berjalan menggunakan Heuristic Semantic Engine Lokal (BYOK Gemini belum disetel).'
      };
    }

    try {
      const aiResult = await this.callGeminiAPI(rawPrompt, key, model);
      if (aiResult) {
        // Merge AI structured result with shorthand catalog
        const finalResult = this.mergeAiWithCatalog(aiResult, rawPrompt, installedOverrides);
        this.status = GEMINI_STATUS.CONNECTED;
        this.lastError = null;
        return {
          ...finalResult,
          source: 'GEMINI_AI',
          engineNotice: `Dianalisis menggunakan ${model} melalui BYOK.`
        };
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local engine:', err);
      this.status = GEMINI_STATUS.FAILED;
      this.lastError = err.message;
    }

    // Fallback to local deterministic engine
    const localResult = this.localEngine.analyze(rawPrompt, installedOverrides);
    return {
      ...localResult,
      source: 'LOCAL_ENGINE_FALLBACK',
      engineNotice: 'Gemini API tidak merespons, beralih otomatis ke Engine Semantik Lokal.'
    };
  }

  /**
   * Private: Call Gemini generateContent with structured JSON prompt
   */
  async callGeminiAPI(prompt, apiKey, model) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const systemInstruction = `Anda adalah Prompt Shorthand Analyzer V2. Tugas Anda menganalisis instruksi prompt gambar dari user dan memetakan maksud semantik, area yang diubah (editAreas), area yang dikunci (lockedAreas), deteksi konflik, rekomendasi shorthand (WAJIB, DISARANKAN, OPSIONAL), dan visual transformation.
Jawab HANYA dalam format JSON valid tanpa markdown formatting.`;

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${systemInstruction}\n\nPrompt User: "${prompt}"\n\nKatalog Shorthand yang didukung: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /denoise, /hdr, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade.`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json'
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Respon Gemini kosong.');

    try {
      return JSON.parse(rawText);
    } catch {
      // Clean possible markdown wrapper ```json ... ```
      const cleaned = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleaned);
    }
  }

  /**
   * Ensure AI response adheres to V2 format or fall back smoothly
   */
  mergeAiWithCatalog(aiResult, rawPrompt, installedOverrides) {
    // If AI result has valid fields, enrich with local engine consistency
    const fallback = this.localEngine.analyze(rawPrompt, installedOverrides);

    return {
      rawPrompt,
      normalizedPrompt: fallback.normalizedPrompt,
      cleanText: fallback.cleanText,
      intent: {
        primaryAction: aiResult.intent?.primaryAction || fallback.intent.primaryAction,
        primaryTarget: aiResult.intent?.primaryTarget || fallback.intent.primaryTarget,
        summary: aiResult.intent?.summary || aiResult.summary || fallback.intent.summary,
        priority: aiResult.intent?.priority || fallback.intent.priority,
        category: fallback.intent.category
      },
      editAreas: (aiResult.editAreas && aiResult.editAreas.length > 0) ? aiResult.editAreas : fallback.editAreas,
      lockedAreas: (aiResult.lockedAreas && aiResult.lockedAreas.length > 0) ? aiResult.lockedAreas : fallback.lockedAreas,
      unchangedAreas: fallback.unchangedAreas,
      conflicts: (aiResult.conflicts && aiResult.conflicts.length > 0) ? aiResult.conflicts : fallback.conflicts,
      recommendations: fallback.recommendations, // Maintain strict catalog consistency
      exclusions: fallback.exclusions,
      installedShorthands: fallback.installedShorthands,
      visualTransformation: aiResult.visualTransformation || fallback.visualTransformation,
      optimalPrompt: fallback.optimalPrompt,
      timestamp: new Date().toISOString()
    };
  }
}
