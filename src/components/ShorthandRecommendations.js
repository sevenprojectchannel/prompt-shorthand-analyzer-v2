/**
 * ShorthandRecommendations Component V2
 * Menampilkan rekomendasi berjenjang (WAJIB, DISARANKAN, OPSIONAL) dengan target dan alasan jelas.
 */

export function renderShorthandRecommendations({
  recommendations = [],
  installedShorthands = [],
  onToggleShorthand
}) {
  const recItems = recommendations.length > 0
    ? recommendations.map(rec => {
        const isInstalled = installedShorthands.includes(rec.code);
        let badgeClass = 'badge-opsional';
        if (rec.priority === 'WAJIB') badgeClass = 'badge-wajib';
        if (rec.priority === 'DISARANKAN') badgeClass = 'badge-disarankan';

        return `
          <div class="rec-card" data-code="${rec.code}">
            <div>
              <div class="rec-card-header">
                <span class="rec-code">${rec.code}</span>
                <span class="badge ${badgeClass}">${rec.priority}</span>
              </div>
              <div class="rec-target-label">Target: ${rec.target}</div>
              <p class="rec-reason" style="margin-top: 0.45rem;">
                <strong>Alasan:</strong> ${rec.reason}
              </p>
            </div>

            <div class="rec-toggle-row">
              <span style="font-size: 0.775rem; color: var(--text-muted);">
                ${rec.description}
              </span>
              <button 
                type="button" 
                class="btn ${isInstalled ? 'btn-danger' : 'btn-primary'} btn-xs btn-toggle-rec" 
                data-code="${rec.code}"
                title="${isInstalled ? 'Hapus dari prompt' : 'Pasang ke prompt'}"
              >
                ${isInstalled ? 'Lepas' : '+ Pasang'}
              </button>
            </div>
          </div>
        `;
      }).join('')
    : '<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Belum ada rekomendasi shorthand. Jalankan analisis prompt di atas.</div>';

  const html = `
    <section class="panel analyzer-card" id="card-recommendations">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">E</span>
          <h2>REKOMENDASI SHORTHAND SEMANTIK</h2>
        </div>
        <span class="badge badge-blue">${recommendations.length} Rekomendasi</span>
      </div>

      <div class="rec-grid">
        ${recItems}
      </div>
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      container.querySelectorAll('.btn-toggle-rec').forEach(btn => {
        btn.addEventListener('click', () => {
          const code = btn.getAttribute('data-code');
          if (onToggleShorthand) {
            onToggleShorthand(code);
          }
        });
      });
    }
  };
}
