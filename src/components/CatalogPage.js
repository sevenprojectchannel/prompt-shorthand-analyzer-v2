/**
 * CatalogPage Component V2
 * Katalog interaktif shorthand dengan pencarian cerdas, filter kategori,
 * dan tombol sekali klik untuk menambahkan shorthand ke prompt.
 */

import { SHORTHAND_CATEGORIES } from '../data/catalogData.js';

export function renderCatalogPage({
  catalog = [],
  activeCategory = 'ALL',
  searchQuery = '',
  onSelectCategory,
  onSearchChange,
  onAddShorthandToPrompt
}) {
  // Filter catalog
  const filtered = catalog.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesCode = item.code.toLowerCase().includes(query);
    const matchesName = item.name.toLowerCase().includes(query);
    const matchesDesc = item.description.toLowerCase().includes(query);
    const matchesTarget = item.target.toLowerCase().includes(query);
    const matchesTriggers = (item.triggerSemantics || []).some(t => t.toLowerCase().includes(query));

    return matchesCategory && (matchesCode || matchesName || matchesDesc || matchesTarget || matchesTriggers);
  });

  // Category filter tabs
  const categoryKeys = ['ALL', ...Object.keys(SHORTHAND_CATEGORIES)];
  const categoryTabsHtml = categoryKeys.map(key => {
    const label = key === 'ALL' ? 'Semua Kategori' : SHORTHAND_CATEGORIES[key].label;
    const isActive = activeCategory === key;
    return `
      <button type="button" class="category-tab-btn ${isActive ? 'active' : ''}" data-cat="${key}">
        ${label}
      </button>
    `;
  }).join('');

  // Cards grid
  const cardsHtml = filtered.length > 0
    ? filtered.map(item => `
        <div class="catalog-item-card" data-code="${item.code}">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
              <span class="catalog-item-code">${item.code}</span>
              <span class="badge badge-neutral">${item.category}</span>
            </div>
            <h3 class="catalog-item-name">${item.name}</h3>
            <p class="catalog-item-desc" style="margin-top: 0.4rem;">${item.description}</p>
          </div>

          <div class="catalog-meta-list">
            <div><strong>Target:</strong> ${item.target}</div>
            <div><strong>Triggers:</strong> ${(item.triggerSemantics || []).slice(0, 3).join(', ')}</div>
            ${item.conflicts && item.conflicts.length > 0 ? `<div style="color: #fca5a5;"><strong>Konflik:</strong> ${item.conflicts.join(', ')}</div>` : ''}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05);">
            <span class="badge ${item.priority === 'WAJIB' ? 'badge-wajib' : (item.priority === 'DISARANKAN' ? 'badge-disarankan' : 'badge-opsional')}">
              ${item.priority}
            </span>
            <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${item.code}">
              + Tambah ke Prompt
            </button>
          </div>
        </div>
      `).join('')
    : '<div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-muted);">Tidak ada shorthand yang cocok dengan kriteria pencarian.</div>';

  const html = `
    <section class="panel">
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">KATALOG &amp; REFERENSI SHORTHAND</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Daftar lengkap direktif shorthand prompt visual, deskripsi semantik, target, dan aturan kompatibilitas.
          </p>
        </div>
      </div>

      <!-- Controls: Search & Category Filter -->
      <div class="catalog-controls">
        <div class="category-tabs" id="catalog-category-tabs">
          ${categoryTabsHtml}
        </div>
        <div style="flex: 1; max-width: 340px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari kode, target, atau kata kunci semantik..."
            value="${searchQuery || ''}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${cardsHtml}
      </div>
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      container.querySelectorAll('.category-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const cat = btn.getAttribute('data-cat');
          if (onSelectCategory) onSelectCategory(cat);
        });
      });

      const searchInput = container.querySelector('#catalog-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          if (onSearchChange) onSearchChange(e.target.value);
        });
      }

      container.querySelectorAll('.btn-add-from-catalog').forEach(btn => {
        btn.addEventListener('click', () => {
          const code = btn.getAttribute('data-code');
          if (onAddShorthandToPrompt) onAddShorthandToPrompt(code);
        });
      });
    }
  };
}
