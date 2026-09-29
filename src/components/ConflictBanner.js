/**
 * ConflictBanner Component V2
 * Menampilkan peringatan jelas jika terdeteksi konflik semantik antara lock vs edit.
 */

export function renderConflictBanner(conflicts = [], onResolveConflict) {
  if (!conflicts || conflicts.length === 0) {
    return { html: '', bindEvents() {} };
  }

  const conflictsHtml = conflicts.map(c => `
    <div class="conflict-banner" data-conflict-id="${c.id}">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>CONFLICT DETECTED &mdash; KONFLIK SEMANTIK TERDETEKSI</span>
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
  `).join('');

  return {
    html: conflictsHtml,
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
