/**
 * ConflictBanner Component V2.1
 * Menampilkan Card G: SHORTHAND KONFLIK (Deteksi konflik semantik antara lock vs edit atau direktif bertentangan).
 */

export function renderConflictBanner(conflicts = [], onResolveConflict) {
  const hasConflicts = conflicts && conflicts.length > 0;

  const conflictsHtml = hasConflicts ? conflicts.map(c => `
    <div class="conflict-banner" data-conflict-id="${c.id}" style="margin-bottom: 0.75rem;">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>DETEKSI KONFLIK &mdash; CONFLICT DETECTED</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${c.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${c.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${c.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${c.instructionA || c.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${c.instructionB || c.shorthandB}"</em>
        </span>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${c.id}">
          Gunakan Instruksi User (Abaikan Kunci)
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${c.id}">
          Pertahankan Lock (Abaikan Ubah)
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${c.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `).join('') : '';

  const html = `
    <!-- CARD G: SHORTHAND KONFLIK (CONFLICT DETECTED) -->
    <section class="panel analyzer-card" id="card-conflicts">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: ${hasConflicts ? '#dc2626' : 'var(--badge-neutral-bg)'}; color: #fff;">G</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${hasConflicts ? 'badge-wajib' : 'badge-neutral'}">
          ${hasConflicts ? `${conflicts.length} Konflik Terdeteksi` : '0 Konflik'}
        </span>
      </div>

      ${hasConflicts ? `
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${conflictsHtml}
        </div>
      ` : `
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik direktif yang terdeteksi. Seluruh instruksi prompt konsisten.</span>
        </div>
      `}
    </section>
  `;

  return {
    html,
    bindEvents(container) {
      container.querySelectorAll('.btn-resolve').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.getAttribute('data-action');
          const conflictId = btn.getAttribute('data-conflict-id');
          if (onResolveConflict) {
            onResolveConflict(conflictId, action);
          }
        });
      });
    }
  };
}
