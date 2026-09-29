/**
 * Test Suite V2 - Prompt Shorthand Analyzer
 * Verifikasi 7 Skenario Uji Semantik Utama + Fitur Reset
 */

import { SemanticEngine } from '../src/lib/semanticEngine.js';
import { INITIAL_SHORTHAND_CATALOG } from '../src/data/catalogData.js';
import { cleanPromptForCopy } from '../src/lib/promptFormatter.js';

const engine = new SemanticEngine(INITIAL_SHORTHAND_CATALOG);

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

console.log('\n==================================================');
console.log('PROMPT SHORTHAND ANALYZER V2 - QUALITY CHECK TEST');
console.log('==================================================\n');

// TEST 1
console.log('TEST 1: "perbaiki pencahayaan foto"');
{
  const res = engine.analyze('perbaiki pencahayaan foto');
  assert(res.editAreas.some(e => e.entity === 'LIGHTING'), 'Edit Area terdeteksi sebagai LIGHTING');
  assert(res.installedShorthands.includes('/enhance'), 'Shorthand terpasang memuat /enhance');
  assert(res.recommendations.some(r => r.code === '/enhance'), 'Rekomendasi memuat /enhance');
  assert(!res.installedShorthands.includes('/facelock'), 'Tidak memuat /facelock sembarangan');
  assert(res.exclusions.some(x => x.code === '/bgremove'), '/bgremove masuk daftar pengecualian dengan alasan');
  assert(res.optimalPrompt.includes('/enhance'), 'Prompt optimal memuat /enhance');
}

// TEST 2
console.log('\nTEST 2: "hapus hijab, jangan ubah wajah"');
{
  const res = engine.analyze('hapus hijab, jangan ubah wajah');
  assert(res.editAreas.some(e => e.entity === 'HEADWEAR'), 'Edit Area terdeteksi sebagai HEADWEAR / Hijab');
  assert(res.lockedAreas.some(l => l.entity === 'FACE'), 'Locked Area terdeteksi sebagai FACE / Wajah');
  assert(res.installedShorthands.includes('/facelock'), 'Shorthand /facelock terpasang (WAJIB)');
  assert(!res.editAreas.some(e => e.entity === 'BACKGROUND'), 'Latar belakang TIDAK otomatis disentuh');
  assert(!res.editAreas.some(e => e.entity === 'OUTFIT'), 'Outfit TIDAK otomatis disentuh');
}

// TEST 3
console.log('\nTEST 3: "ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah"');
{
  const res = engine.analyze('ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  assert(res.editAreas.some(e => e.entity === 'OUTFIT'), 'Edit Area terdeteksi sebagai OUTFIT');
  assert(res.lockedAreas.some(l => l.entity === 'FACE'), 'Locked Area terdeteksi sebagai FACE');
  assert(res.installedShorthands.includes('/facelock'), 'Shorthand /facelock terpasang');
  assert(!res.editAreas.some(e => e.entity === 'BACKGROUND'), 'Latar belakang tidak disentuh');
  assert(!res.editAreas.some(e => e.entity === 'BODY'), 'Body tidak disentuh');
}

// TEST 4
console.log('\nTEST 4: "hapus latar belakang"');
{
  const res = engine.analyze('hapus latar belakang');
  assert(res.editAreas.some(e => e.entity === 'BACKGROUND'), 'Edit Area terdeteksi sebagai BACKGROUND');
  assert(res.installedShorthands.includes('/bgremove'), 'Shorthand /bgremove terpasang');
  assert(!res.installedShorthands.includes('/facelock'), 'Facelock TIDAK otomatis ditambahkan');
  assert(!res.installedShorthands.includes('/outfit'), 'Outfit TIDAK otomatis ditambahkan');
}

// TEST 5
console.log('\nTEST 5: "ubah rasio menjadi 9:16"');
{
  const res = engine.analyze('ubah rasio menjadi 9:16');
  assert(res.editAreas.some(e => e.entity === 'CANVAS'), 'Edit Area terdeteksi sebagai CANVAS / Rasio Aspek');
  assert(res.installedShorthands.includes('/ar 9:16'), 'Shorthand /ar 9:16 terpasang');
  assert(!res.editAreas.some(e => e.entity === 'FACE'), 'Tidak memotong atau mengedit wajah');
  assert(!res.editAreas.some(e => e.entity === 'OUTFIT'), 'Tidak mengedit outfit');
}

// TEST 6
console.log('\nTEST 6: "pertahankan rambut asli tetapi ubah pakaian"');
{
  const res = engine.analyze('pertahankan rambut asli tetapi ubah pakaian');
  assert(res.lockedAreas.some(l => l.entity === 'HAIR'), 'Locked Area terdeteksi sebagai HAIR / Rambut');
  assert(res.editAreas.some(e => e.entity === 'OUTFIT'), 'Edit Area terdeteksi sebagai OUTFIT');
  assert(res.installedShorthands.includes('/hairlock'), 'Shorthand /hairlock terpasang');
}

// TEST 7
console.log('\nTEST 7: "pertahankan rambut asli tetapi ubah gaya rambut menjadi botak" (Conflict Test)');
{
  const res = engine.analyze('pertahankan rambut asli tetapi ubah gaya rambut menjadi botak');
  assert(res.conflicts.length > 0, 'Deteksi konflik berhasil mendeteksi pertentangan');
  assert(res.conflicts[0].entity === 'HAIR', 'Entitas konflik adalah HAIR');
  assert(res.conflicts[0].type === 'EDIT_VS_LOCK', 'Tipe konflik adalah EDIT_VS_LOCK');
}

// TEST 8: Prompt Copy Sanitization
console.log('\nTEST 8: Prompt Copy Sanitization');
{
  const optimal = 'perbaiki pencahayaan foto. /enhance';
  const copied = cleanPromptForCopy(optimal);
  assert(copied === 'perbaiki pencahayaan foto. /enhance', 'Prompt hasil salin bersih dari metadata');
  assert(!copied.includes('Commercial stock'), 'Tidak ada boilerplate IP safety');
  assert(!copied.includes('Rekomendasi'), 'Tidak ada metadata rekomendasi');
}

console.log('\n==================================================');
console.log(`HASIL AKHIR: ${passed} PASSED, ${failed} FAILED`);
console.log('==================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
