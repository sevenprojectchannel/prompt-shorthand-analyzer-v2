/**
 * ExcludedShorthands Component V2
 * Menampilkan shorthand yang TIDAK diperlukan (dikecualikan) disertai alasan rasional.
 */

export function renderExcludedShorthands(exclusions = []) {
  const items = exclusions.length > 0
    ? exclusions.map(ex => `
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${ex.code}</span>
            <span class="exclusion-target">&bull; ${ex.target}</span>
          </div>
          <p class="exclusion-reason">
            ${ex.reason}
          </p>
        </div>
      `).join('')
    : '<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';

  const html = `
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">H</span>
          <h2>SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <span class="badge badge-neutral">${exclusions.length} Dikecualikan</span>
      </div>

      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Engine secara cerdas mengecualikan shorthand di bawah ini karena tidak relevan dengan konteks prompt:
      </p>

      <div class="exclusions-grid">
        ${items}
      </div>
    </section>
  `;

  return { html, bindEvents() {} };
}
