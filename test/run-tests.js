/**
 * Test Suite V2.1 - Prompt Shorthand Analyzer
 * Verifikasi Lengkap Semantic Shorthand Knowledge Base & 8 Skenario Uji Wajib (TEST A - TEST H)
 */

import { SemanticEngine, buildOptimalPrompt } from '../src/lib/semanticEngine.js';
import { INITIAL_SHORTHAND_CATALOG, SHORTHAND_CATEGORIES, filterCatalogKnowledgeBase } from '../src/data/catalogData.js';
import { CatalogRepository } from '../src/services/catalogRepository.js';
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
console.log('PROMPT SHORTHAND ANALYZER V2.1 - QUALITY CHECK TEST');
console.log('==================================================\n');

// -----------------------------------------------------------------------------
// KNOWLEDGE BASE STRUCTURE INTEGRITY
// -----------------------------------------------------------------------------
console.log('--- KNOWLEDGE BASE INTEGRITY TEST ---');
{
  const categoryKeys = Object.keys(SHORTHAND_CATEGORIES);
  assert(categoryKeys.length === 15, `Memiliki 15 kategori lengkap (ditemukan: ${categoryKeys.length})`);

  // Verify all 15 required categories A to O
  const expectedCats = [
    'LOCK_PRESERVATION', 'FACE_IDENTITY', 'HAIR', 'HEADWEAR', 'OUTFIT',
    'BODY_POSE', 'BACKGROUND', 'LIGHTING', 'IMAGE_QUALITY', 'COLOR_TONE',
    'CANVAS_RATIO', 'TRANSPARENCY', 'OBJECT_EDITING', 'STYLE_EFFECT', 'CAMERA_PHOTO'
  ];
  const allCatsPresent = expectedCats.every(cat => categoryKeys.includes(cat));
  assert(allCatsPresent, 'Semua 15 kategori A sampai O terdefinisi');

  // Verify shorthand items structure
  const allHaveMetadata = INITIAL_SHORTHAND_CATALOG.every(item =>
    item.code &&
    item.name &&
    item.category &&
    item.target &&
    item.description &&
    Array.isArray(item.semanticTriggers) &&
    Array.isArray(item.negativeTriggers) &&
    Array.isArray(item.conflicts) &&
    Array.isArray(item.compatibleWith) &&
    item.priority &&
    item.whenToUse &&
    item.whenNotToUse
  );
  assert(allHaveMetadata, 'Setiap shorthand memiliki metadata terstruktur lengkap');

  // Verify existing critical shorthands are preserved
  const existingCodes = [
    '/facelock', '/hairlock', '/backgroundlock', '/outfitlock', '/bodylock',
    '/outfit', '/bgremove', '/bgreplace', '/headwear-remove', '/enhance',
    '/sharpen', '/denoise', '/hdr', '/ar 9:16', '/ar 16:9', '/ar 1:1',
    '/fullbody', '/cinematic', '/rawphoto', '/colorgrade'
  ];
  const preserved = existingCodes.every(c => INITIAL_SHORTHAND_CATALOG.some(item => item.code === c));
  assert(preserved, 'Seluruh 20 shorthand existing tetap dipertahankan 100%');
}

// -----------------------------------------------------------------------------
// TEST A
// -----------------------------------------------------------------------------
console.log('\n--- TEST A: "perbaiki pencahayaan foto" ---');
{
  const res = engine.analyze('perbaiki pencahayaan foto');
  assert(res.editAreas.some(e => e.entity === 'LIGHTING'), 'Target area terdeteksi sebagai LIGHTING');
  assert(res.installedShorthands.includes('/enhance'), 'Shorthand /enhance terpasang');
  assert(!res.installedShorthands.includes('/facelock'), 'Tidak otomatis menambahkan /facelock');
  assert(!res.installedShorthands.includes('/hairlock'), 'Tidak otomatis menambahkan /hairlock');
  assert(!res.installedShorthands.includes('/outfit'), 'Tidak otomatis menambahkan /outfit');
  assert(!res.installedShorthands.includes('/bgremove'), 'Tidak otomatis menambahkan /bgremove');
  assert(res.optimalPrompt === 'perbaiki pencahayaan foto. /enhance', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST B
// -----------------------------------------------------------------------------
console.log('\n--- TEST B: "hapus hijab, jangan ubah wajah" ---');
{
  const res = engine.analyze('hapus hijab, jangan ubah wajah');
  assert(res.editAreas.some(e => e.entity === 'HEADWEAR'), 'EDIT terdeteksi sebagai headwear removal');
  assert(res.lockedAreas.some(l => l.entity === 'FACE'), 'LOCK terdeteksi sebagai facelock');
  assert(res.installedShorthands.includes('/headwear-remove'), 'Shorthand /headwear-remove terpasang');
  assert(res.installedShorthands.includes('/facelock'), 'Shorthand /facelock terpasang');
  assert(res.optimalPrompt === 'hapus hijab, jangan ubah wajah. /headwear-remove /facelock', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST C
// -----------------------------------------------------------------------------
console.log('\n--- TEST C: "ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah" ---');
{
  const res = engine.analyze('ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  assert(res.editAreas.some(e => e.entity === 'OUTFIT'), 'EDIT terdeteksi sebagai outfit');
  assert(res.lockedAreas.some(l => l.entity === 'FACE'), 'LOCK terdeteksi sebagai facelock');
  assert(res.installedShorthands.includes('/outfit'), 'Shorthand /outfit terpasang');
  assert(res.installedShorthands.includes('/facelock'), 'Shorthand /facelock terpasang');
  assert(res.optimalPrompt === 'ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah. /outfit /facelock', `Prompt optimal: "${res.optimalPrompt}"`);
  assert(res.primaryShorthands.some(p => p.code === '/outfit') && res.primaryShorthands.some(p => p.code === '/facelock'), 'Primary shorthands terpisah: /outfit dan /facelock');
  assert(res.relatedShorthands.length > 0 && res.relatedShorthands.every(r => !r.isPrimary && !r.checked), 'Related shorthands tampil terpisah dan OFF secara default');
  assert(res.relatedShorthands.some(r => r.code === '/hairlock') && res.relatedShorthands.some(r => r.code === '/backgroundlock'), 'Cross-domain related preservation items terdeteksi');
  assert(res.exclusions.some(e => e.code === '/outfitlock' && e.reason.includes('Bertentangan')), 'Exclusion outfitlock terdeteksi dengan alasan konflik');
}

// -----------------------------------------------------------------------------
// TEST D
// -----------------------------------------------------------------------------
console.log('\n--- TEST D: "hapus latar belakang" ---');
{
  const res = engine.analyze('hapus latar belakang');
  assert(res.editAreas.some(e => e.entity === 'BACKGROUND'), 'EDIT terdeteksi sebagai bgremove');
  assert(res.installedShorthands.includes('/bgremove'), 'Shorthand /bgremove terpasang');
  assert(res.optimalPrompt === 'hapus latar belakang. /bgremove', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST E
// -----------------------------------------------------------------------------
console.log('\n--- TEST E: "gunakan latar baru" ---');
{
  const res = engine.analyze('gunakan latar baru');
  assert(res.editAreas.some(e => e.entity === 'BACKGROUND'), 'EDIT terdeteksi sebagai bgreplace');
  assert(res.installedShorthands.includes('/bgreplace'), 'Shorthand /bgreplace terpasang');
  assert(res.optimalPrompt === 'gunakan latar baru. /bgreplace', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST F
// -----------------------------------------------------------------------------
console.log('\n--- TEST F: "pertahankan rambut asli tetapi ubah pakaian" ---');
{
  const res = engine.analyze('pertahankan rambut asli tetapi ubah pakaian');
  assert(res.lockedAreas.some(l => l.entity === 'HAIR'), 'LOCK terdeteksi sebagai hairlock');
  assert(res.editAreas.some(e => e.entity === 'OUTFIT'), 'EDIT terdeteksi sebagai outfit');
  assert(res.installedShorthands.includes('/hairlock'), 'Shorthand /hairlock terpasang');
  assert(res.installedShorthands.includes('/outfit'), 'Shorthand /outfit terpasang');
  assert(res.optimalPrompt === 'pertahankan rambut asli tetapi ubah pakaian. /hairlock /outfit', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST G
// -----------------------------------------------------------------------------
console.log('\n--- TEST G: "ubah rasio menjadi 9:16" ---');
{
  const res = engine.analyze('ubah rasio menjadi 9:16');
  assert(res.editAreas.some(e => e.entity === 'CANVAS_RATIO'), 'ASPECT RATIO terdeteksi sebagai 9:16');
  assert(res.installedShorthands.includes('/ar 9:16'), 'Shorthand /ar 9:16 terpasang');
  assert(!res.installedShorthands.includes('/facelock'), 'Tidak menambahkan facelock');
  assert(!res.installedShorthands.includes('/outfit'), 'Tidak menambahkan outfit');
  assert(!res.installedShorthands.includes('/bgremove'), 'Tidak menambahkan bgremove');
  assert(res.optimalPrompt === 'ubah rasio menjadi 9:16. /ar 9:16', `Prompt optimal: "${res.optimalPrompt}"`);
}

// -----------------------------------------------------------------------------
// TEST H
// -----------------------------------------------------------------------------
console.log('\n--- TEST H: "pertahankan rambut asli tetapi ubah gaya rambut" ---');
{
  const res = engine.analyze('pertahankan rambut asli tetapi ubah gaya rambut');
  assert(res.conflicts.length > 0, 'Deteksi konflik aktif: CONFLICT DETECTED');
  assert(res.conflicts[0].entity === 'HAIR', 'Entitas konflik adalah HAIR');
  assert(res.conflicts[0].type === 'EDIT_VS_LOCK', 'Tipe konflik adalah LOCK vs EDIT');
  assert(res.conflicts[0].shorthandA === '/hairlock', 'Shorthand A adalah /hairlock');
  assert(res.conflicts[0].shorthandB === '/hairchange', 'Shorthand B adalah /hairchange');
}

// -----------------------------------------------------------------------------
// SEMANTIC SEARCH VARIATIONS TEST
// -----------------------------------------------------------------------------
console.log('\n--- SEMANTIC SEARCH VARIATIONS TEST ---');
{
  const searchQueries = [
    { q: 'jangan ubah wajah', expected: '/facelock' },
    { q: 'wajah harus tetap sama', expected: '/facelock' },
    { q: 'hapus hijab', expected: '/headwear-remove' },
    { q: 'lepaskan penutup kepala', expected: '/headwear-remove' },
    { q: 'pertahankan rambut asli', expected: '/hairlock' },
    { q: 'jangan mengubah pakaian', expected: '/outfitlock' },
    { q: 'ganti baju', expected: '/outfit' },
    { q: 'hapus background', expected: '/bgremove' },
    { q: 'gunakan latar baru', expected: '/bgreplace' }
  ];

  for (const t of searchQueries) {
    const res = filterCatalogKnowledgeBase(INITIAL_SHORTHAND_CATALOG, { searchQuery: t.q });
    const codes = res.map(r => r.code);
    assert(codes[0] === t.expected, `Pencarian semantik "${t.q}" menghasilkan top match ${t.expected}`);
  }
}

// -----------------------------------------------------------------------------
// COPY PROMPT SANITIZATION
// -----------------------------------------------------------------------------
console.log('\n--- COPY PROMPT SANITIZATION TEST ---');
{
  const optimal = 'hapus hijab, jangan ubah wajah. /headwear-remove /facelock';
  const copied = cleanPromptForCopy(optimal);
  assert(copied === optimal, 'SALIN PROMPT hanya menyalin main prompt bersih');
  assert(!copied.includes('Alasan'), 'Tidak mengandung penjelasan alasan');
  assert(!copied.includes('Commercial stock'), 'Tidak mengandung boilerplate IP safety');
  assert(!copied.includes('Metadata'), 'Tidak mengandung metadata internal');
}

// -----------------------------------------------------------------------------
// PATCH V2.1 - 11 NEW COMPREHENSIVE TESTS
// -----------------------------------------------------------------------------

// 1. TEST SEMANTIC DEDUP 1
console.log('\n--- TEST SEMANTIC DEDUP 1: Multiple candidates with same functionGroup ---');
{
  const candidates = [
    {
      code: '/facelock',
      name: 'Penguncian Wajah',
      item: {
        code: '/facelock',
        functionGroup: 'FACELOCK_PRESERVATION',
        preferredRepresentative: true,
        status: 'CORE',
        equivalentTo: []
      },
      score: 100
    },
    {
      code: '/facepreserve',
      name: 'Preservasi Wajah Alternatif',
      item: {
        code: '/facepreserve',
        functionGroup: 'FACELOCK_PRESERVATION',
        preferredRepresentative: false,
        status: 'APPROVED',
        equivalentTo: []
      },
      score: 90
    }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 1, 'Hanya 1 representatif yang dipilih dari functionGroup yang sama');
  assert(deduped[0].code === '/facelock', 'Representatif terpilih adalah /facelock');
  assert(deduped[0].equivalentTo.includes('/facepreserve'), 'Kandidat lain (/facepreserve) disimpan di equivalentTo');
}

// 2. TEST SEMANTIC DEDUP 2
console.log('\n--- TEST SEMANTIC DEDUP 2: HEADWEAR_REMOVAL candidate deduplication ---');
{
  const candidates = [
    {
      code: '/headwear-remove',
      name: 'Pelepasan Penutup Kepala',
      item: {
        code: '/headwear-remove',
        functionGroup: 'HEADWEAR_REMOVAL',
        preferredRepresentative: true,
        status: 'CORE',
        equivalentTo: []
      },
      score: 95
    },
    {
      code: '/hijaboff',
      name: 'Buka Hijab Alias',
      item: {
        code: '/hijaboff',
        functionGroup: 'HEADWEAR_REMOVAL',
        preferredRepresentative: false,
        status: 'APPROVED',
        equivalentTo: []
      },
      score: 85
    }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 1, 'Hanya 1 representatif terpilih untuk HEADWEAR_REMOVAL');
  assert(deduped[0].code === '/headwear-remove', 'Representatif terbaik adalah /headwear-remove');
  assert(deduped[0].equivalentTo.includes('/hijaboff'), '/hijaboff terdaftar dalam equivalentTo');
}

// 3. TEST FUNCTION DIFFERENCE
console.log('\n--- TEST FUNCTION DIFFERENCE: Distinct function groups are preserved ---');
{
  const candidates = [
    {
      code: '/facelock',
      name: 'Penguncian Wajah',
      item: {
        code: '/facelock',
        functionGroup: 'FACELOCK_PRESERVATION',
        preferredRepresentative: true,
        status: 'CORE'
      }
    },
    {
      code: '/hairlock',
      name: 'Penguncian Rambut',
      item: {
        code: '/hairlock',
        functionGroup: 'HAIRLOCK_PRESERVATION',
        preferredRepresentative: true,
        status: 'CORE'
      }
    }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 2, 'Kedua shorthand dipertahankan karena memiliki functionGroup berbeda');
  assert(deduped.some(d => d.code === '/facelock'), 'Shorthand /facelock tetap ada');
  assert(deduped.some(d => d.code === '/hairlock'), 'Shorthand /hairlock tetap ada');
}

// 4. TEST RELATED
console.log('\n--- TEST RELATED: Semantic graph related shorthands discovered and OFF by default ---');
{
  const res = engine.analyze('hapus hijab, jangan ubah wajah');
  assert(res.primaryShorthands.length >= 2, 'Primary shorthands terdeteksi (/headwear-remove & /facelock)');
  assert(res.relatedShorthands.length > 0, `Related shorthands ditemukan (total: ${res.relatedShorthands.length})`);
  const allRelatedOff = res.relatedShorthands.every(r => r.isPrimary === false && r.checked === false);
  assert(allRelatedOff, 'Semua related shorthands berstatus isPrimary === false dan checked === false secara default');
  const relatedInInstalled = res.relatedShorthands.some(r => res.installedShorthands.includes(r.code));
  assert(!relatedInInstalled, 'Tidak ada related shorthand yang masuk ke installedShorthands secara default');
}

// 5. TEST MANUAL SELECTION
console.log('\n--- TEST MANUAL SELECTION: Related shorthand added to optimal prompt when selected ---');
{
  const baseRes = engine.analyze('hapus hijab, jangan ubah wajah');
  const manualOverrides = [...baseRes.installedShorthands, '/naturalhair'];
  const resWithManual = engine.analyze('hapus hijab, jangan ubah wajah', manualOverrides);
  assert(resWithManual.installedShorthands.includes('/naturalhair'), 'Shorthand /naturalhair masuk ke installedShorthands saat dipilih manual');
  assert(resWithManual.optimalPrompt.includes('/naturalhair'), 'Shorthand /naturalhair masuk ke Prompt Optimal');
  assert(resWithManual.optimalPrompt === 'hapus hijab, jangan ubah wajah. /headwear-remove /facelock /naturalhair', `Prompt optimal terkonfirmasi: "${resWithManual.optimalPrompt}"`);
}

// 6. TEST NO ARBITRARY LIMIT
console.log('\n--- TEST NO ARBITRARY LIMIT: No truncation on distinct relevant function groups ---');
{
  const res = engine.analyze('ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  const relatedCount = res.relatedShorthands.length;
  assert(relatedCount >= 3, `Menampilkan seluruh relasi yang relevan (${relatedCount} relasi) tanpa batasan sembarangan`);
  const uniqueGroups = new Set(res.relatedShorthands.map(r => r.functionGroup || r.item?.functionGroup));
  assert(uniqueGroups.size === res.relatedShorthands.length, 'Setiap related shorthand mewakili functionGroup yang unik');
}

// 7. TEST ONLINE DUPLICATE
console.log('\n--- TEST ONLINE DUPLICATE: Duplicate detection on exact code, function group, or alias ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const dupCode = repo.detectSimilarFunction({ code: '/facelock' });
  assert(dupCode.hasSimilar === true && dupCode.matchType === 'EXACT_CODE', 'Mendeteksi duplikasi exact code /facelock');

  const dupGroup = repo.detectSimilarFunction({ code: '/myfacelock', functionGroup: 'FACE_PRESERVATION' });
  assert(dupGroup.hasSimilar === true && dupGroup.matchType === 'SAME_FUNCTION_GROUP', 'Mendeteksi duplikasi functionGroup FACE_PRESERVATION');

  const unique = repo.detectSimilarFunction({ code: '/unique_shorthand_v2', functionGroup: 'BRAND_NEW_GROUP' });
  assert(unique.hasSimilar === false, 'Entri unik baru tidak memicu peringatan duplikasi');
}

// 8. TEST CATALOG PERSISTENCE
console.log('\n--- TEST CATALOG PERSISTENCE: User catalog entry persists alongside core catalog ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const initialCount = repo.getAll().length;
  await repo.add({
    code: '/customcinematic',
    name: 'Custom Cinematic Grade',
    category: 'STYLE_EFFECT',
    target: 'Visual Style',
    functionGroup: 'CINEMATIC_ATMOSPHERE_GRADE',
    description: 'Custom atmospheric cinematic grading'
  });
  const updatedList = repo.getAll();
  assert(updatedList.length === initialCount + 1, `Jumlah katalog bertambah dari ${initialCount} menjadi ${updatedList.length}`);
  assert(updatedList.some(c => c.code === '/customcinematic' && c.source === 'USER'), 'Shorthand kustom tersimpan dengan source USER');
  assert(repo.coreCatalog.length === INITIAL_SHORTHAND_CATALOG.length, 'CORE CATALOG bawaan tidak berubah');
}

// 9. TEST RESET
console.log('\n--- TEST RESET: Analyzer reset clears prompt but preserves Catalog ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.add({
    code: '/testreset',
    name: 'Test Reset Shorthand',
    category: 'IMAGE_QUALITY',
    target: 'Quality',
    functionGroup: 'CUSTOM_TEST'
  });

  // Simulate Analyzer Reset
  const emptyAnalysis = engine.getEmptyResult();
  assert(emptyAnalysis.optimalPrompt === '', 'Prompt optimal kosong setelah reset');
  assert(emptyAnalysis.installedShorthands.length === 0, 'Installed shorthands kosong setelah reset');

  // Verify CatalogRepository is NOT altered
  assert(repo.getAll().some(c => c.code === '/testreset'), 'User catalog item tetap tersimpan di repository setelah Analyzer reset');
  assert(repo.coreCatalog.length === INITIAL_SHORTHAND_CATALOG.length, 'Core catalog tetap utuh 100% setelah Analyzer reset');
}

// 10. TEST IMPORT / EXPORT
console.log('\n--- TEST IMPORT / EXPORT: Catalog export and import with MERGE and REPLACE modes ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.add({
    code: '/exportitem',
    name: 'Export Test Item',
    category: 'LIGHTING',
    target: 'Lighting',
    functionGroup: 'LIGHTING_TEST'
  });

  const exportedJson = repo.exportCatalog();
  const parsed = JSON.parse(exportedJson);
  assert(parsed.catalogVersion === '2.1', 'Versi katalog ekspor adalah 2.1');
  assert(Array.isArray(parsed.entries), 'Ekspor memiliki array entries');
  assert(parsed.entries.some(e => e.code === '/exportitem'), 'Item kustom masuk ke dalam ekspor');

  // Import into fresh repo with MERGE
  const repo2 = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  const importRes = await repo2.importCatalog(exportedJson, 'MERGE');
  assert(importRes.success === true, 'Impor katalog dengan mode MERGE berhasil');
  assert(repo2.getAll().some(e => e.code === '/exportitem'), 'Item hasil impor tersedia di repository baru');

  // Import with REPLACE (replaces user entries, preserves core)
  await repo2.importCatalog(JSON.stringify({ catalogVersion: '2.1', entries: [] }), 'REPLACE');
  assert(repo2.coreCatalog.length === INITIAL_SHORTHAND_CATALOG.length, 'Core catalog tetap aman setelah impor mode REPLACE');
}

// 11. TEST API SECURITY
console.log('\n--- TEST API SECURITY: No API keys, credentials, or secrets in export or import ---');
{
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.add({
    code: '/secretitem',
    name: 'Secret Item',
    category: 'LIGHTING',
    target: 'Light',
    functionGroup: 'SEC_TEST',
    apiKey: 'AIzaSySecretApiKey12345',
    geminiKey: 'gemini-token-secret-999',
    secret: 'super-confidential-token'
  });

  const exportedStr = repo.exportCatalog();
  assert(!exportedStr.includes('AIzaSySecretApiKey12345'), 'Ekspor TIDAK mengandung apiKey rahasia');
  assert(!exportedStr.includes('gemini-token-secret-999'), 'Ekspor TIDAK mengandung geminiKey rahasia');
  assert(!exportedStr.includes('super-confidential-token'), 'Ekspor TIDAK mengandung secret');
}

// =============================================================================
// REGRESSION & SEMANTIC CLASSIFICATION TESTS (PATCH V2.1 REQUIREMENTS)
// =============================================================================
console.log('\n--- PATCH V2.1 MANDATORY CLASSIFICATION & UI SPEC TESTS ---');

// 1. Primary classification
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.primaryShorthands.length === 2, 'Primary classification: exactly 2 primary shorthands');
  assert(res.primaryShorthands.some(p => p.code === '/outfit'), 'Primary classification: contains /outfit');
  assert(res.primaryShorthands.some(p => p.code === '/facelock'), 'Primary classification: contains /facelock');
  assert(res.primaryShorthands.every(p => p.isPrimary === true && p.checked === true), 'Primary classification: all isPrimary === true and checked === true');
}

// 2. Related classification
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.relatedShorthands.length > 0, 'Related classification: contains discovered related items');
  assert(res.relatedShorthands.some(r => r.code === '/hairlock'), 'Related classification: contains /hairlock');
  assert(res.relatedShorthands.some(r => r.code === '/bodylock'), 'Related classification: contains /bodylock');
  assert(res.relatedShorthands.some(r => r.code === '/backgroundlock'), 'Related classification: contains /backgroundlock');
  assert(res.relatedShorthands.some(r => r.code === '/enhance'), 'Related classification: contains /enhance');
  assert(res.relatedShorthands.some(r => r.code === '/sharpen'), 'Related classification: contains /sharpen');
}

// 3. Excluded classification
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.exclusions.length > 0, 'Excluded classification: contains non-relevant & conflicting items');
  // Conflicting items
  assert(res.exclusions.some(e => e.code === '/outfitlock' && e.reason.includes('Bertentangan')), 'Excluded classification: /outfitlock excluded due to conflict with /outfit');
  assert(res.exclusions.some(e => e.code === '/faceedit' && e.reason.includes('Bertentangan')), 'Excluded classification: /faceedit excluded due to conflict with /facelock');
  // Irrelevant domain items
  assert(res.exclusions.some(e => e.code === '/headwear-remove'), 'Excluded classification: /headwear-remove excluded (headwear not requested)');
  assert(res.exclusions.some(e => e.code === '/ar 9:16'), 'Excluded classification: /ar 9:16 excluded (ratio not requested)');
  assert(res.exclusions.some(e => e.code === '/bgremove'), 'Excluded classification: /bgremove excluded (alpha background transparency not requested)');
}

// 4. Related OFF by default
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.relatedShorthands.every(r => r.checked === false), 'Related OFF by default: all related items have checked === false');
  assert(res.relatedShorthands.every(r => !res.installedShorthands.includes(r.code)), 'Related OFF by default: no related items in installedShorthands');
}

// 5. Selected Related enters Prompt Optimal
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  // Simulate user selecting /hairlock and /enhance from Related
  const overrides = ['/outfit', '/facelock', '/hairlock', '/enhance'];
  const res = engine.analyze(prompt, overrides);
  assert(res.installedShorthands.includes('/hairlock'), 'Selected Related enters Prompt Optimal: installedShorthands includes /hairlock');
  assert(res.installedShorthands.includes('/enhance'), 'Selected Related enters Prompt Optimal: installedShorthands includes /enhance');
  assert(res.optimalPrompt.includes('/hairlock'), 'Selected Related enters Prompt Optimal: optimalPrompt text includes /hairlock');
  assert(res.optimalPrompt.includes('/enhance'), 'Selected Related enters Prompt Optimal: optimalPrompt text includes /enhance');
}

// 6. Unselected Related does not enter Prompt Optimal
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(!res.optimalPrompt.includes('/hairlock'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /hairlock');
  assert(!res.optimalPrompt.includes('/bodylock'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /bodylock');
  assert(!res.optimalPrompt.includes('/enhance'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /enhance');
  assert(!res.optimalPrompt.includes('/sharpen'), 'Unselected Related does not enter Prompt Optimal: optimalPrompt excludes unselected /sharpen');
}

// 7. Same function deduplicated
{
  const candidates = [
    { code: '/facelock', score: 95, item: { functionGroup: 'FACE_PRESERVATION', status: 'CORE', preferredRepresentative: true } },
    { code: '/facepreserve', score: 90, item: { functionGroup: 'FACE_PRESERVATION', status: 'CORE', preferredRepresentative: false } }
  ];
  const deduped = engine.deduplicateByFunctionGroup(candidates);
  assert(deduped.length === 1, 'Same function deduplicated: returns exactly 1 representative');
  assert(deduped[0].code === '/facelock', 'Same function deduplicated: selects preferred representative /facelock');
  assert(deduped[0].equivalentTo.includes('/facepreserve'), 'Same function deduplicated: alias stored in equivalentTo');
}

// 8. Different functions remain separate
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  const relatedCodes = res.relatedShorthands.map(r => r.code);
  assert(relatedCodes.includes('/enhance') && relatedCodes.includes('/sharpen'), 'Different functions remain separate: both /enhance (LIGHTING) and /sharpen (QUALITY) appear');
  assert(relatedCodes.includes('/hairlock') && relatedCodes.includes('/bodylock'), 'Different functions remain separate: both /hairlock and /bodylock appear');
}

// 9. No arbitrary related limit
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah';
  const res = engine.analyze(prompt);
  assert(res.relatedShorthands.length >= 10, `No arbitrary related limit: displays all valid functions (found: ${res.relatedShorthands.length})`);
  const functionGroups = new Set(res.relatedShorthands.map(r => r.functionGroup || r.item?.functionGroup || r.category));
  assert(functionGroups.size === res.relatedShorthands.length, 'No arbitrary related limit: every related shorthand represents a distinct function group');
}

// =============================================================================
// PATCH V2.2 - SMART ADAPTIVE PROMPT OPTIMIZER TEST SUITE (TEST 1 - TEST 14)
// =============================================================================
console.log('\n==================================================');
console.log('PATCH V2.2 — SMART ADAPTIVE PROMPT OPTIMIZER TESTS');
console.log('==================================================\n');

const adaptiveEngine = new SemanticEngine(INITIAL_SHORTHAND_CATALOG, { adaptive: true });

// TEST 1: Simple lighting prompt
console.log('--- TEST 1: Simple lighting prompt ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  assert(res.optimalPrompt.toLowerCase().includes('pencahayaan') && res.optimalPrompt.includes('/enhance'), 'Test 1: lighting-focused optimization produced');
  assert(res.adaptiveMetadata?.complexity === 'SIMPLE', 'Test 1: complexity classified as SIMPLE');
  assert(res.adaptiveMetadata?.targetAreas.includes('Pencahayaan (Lighting)'), 'Test 1: targetAreas includes lighting');
}

// TEST 2: Lighting shorthand
console.log('\n--- TEST 2: Lighting shorthand ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto. /enhance');
  assert(res.installedShorthands.includes('/enhance'), 'Test 2: /enhance retained in installedShorthands');
  assert(res.optimalPrompt.includes('/enhance'), 'Test 2: /enhance retained at the end of prompt');
}

// TEST 3: No semantic drift
console.log('\n--- TEST 3: No semantic drift ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  const lower = res.optimalPrompt.toLowerCase();
  assert(!lower.includes('baju') && !lower.includes('pakaian') && !lower.includes('tanktop'), 'Test 3: No outfit drift');
  assert(!lower.includes('background') && !lower.includes('latar'), 'Test 3: No background drift');
  assert(!lower.includes('rambut') && !lower.includes('hair'), 'Test 3: No hair drift');
  assert(!lower.includes('pose') && !lower.includes('badan'), 'Test 3: No pose/body drift');
  assert(!res.optimalPrompt.includes('/outfit') && !res.optimalPrompt.includes('/bgremove') && !res.optimalPrompt.includes('/hairlock'), 'Test 3: No unrelated shorthand drift');
}

// TEST 4: Related not auto injected
console.log('\n--- TEST 4: Related not auto injected ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  assert(!res.optimalPrompt.includes('/sharpen'), 'Test 4: unselected related /sharpen not in optimal prompt');
  assert(!res.optimalPrompt.includes('/denoise'), 'Test 4: unselected related /denoise not in optimal prompt');
  assert(!res.optimalPrompt.includes('/warmtone'), 'Test 4: unselected related /warmtone not in optimal prompt');
  assert(!res.optimalPrompt.includes('/cooltone'), 'Test 4: unselected related /cooltone not in optimal prompt');
}

// TEST 5: Selected related
console.log('\n--- TEST 5: Selected related ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto', ['/enhance', '/sharpen']);
  assert(res.installedShorthands.includes('/sharpen'), 'Test 5: user-selected /sharpen in installedShorthands');
  assert(res.optimalPrompt.includes('/sharpen'), 'Test 5: user-selected /sharpen appended to optimal prompt');
  assert(!res.optimalPrompt.includes('/denoise'), 'Test 5: unselected related still excluded');
}

// TEST 6: Explicit face lock
console.log('\n--- TEST 6: Explicit face lock ---');
{
  const res = adaptiveEngine.analyze('Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  assert(res.installedShorthands.includes('/outfit') && res.installedShorthands.includes('/facelock'), 'Test 6: primary shorthands include /outfit and /facelock');
  assert(res.optimalPrompt.includes('/outfit') && res.optimalPrompt.includes('/facelock'), 'Test 6: optimal prompt includes /outfit and /facelock');
  assert(res.optimalPrompt.toLowerCase().includes('tanktop putih tali tipis'), 'Test 6: preserves specific outfit detail');
  assert(res.optimalPrompt.toLowerCase().includes('wajah') && res.optimalPrompt.toLowerCase().includes('kunci'), 'Test 6: preserves face locking instruction');
}

// TEST 7: No unnecessary additions
console.log('\n--- TEST 7: No unnecessary additions ---');
{
  const res = adaptiveEngine.analyze('Ganti baju');
  const lower = res.optimalPrompt.toLowerCase();
  assert(!lower.includes('rambut'), 'Test 7: does not add hair transformation');
  assert(!lower.includes('pose'), 'Test 7: does not add pose transformation');
  assert(!lower.includes('latar') && !lower.includes('background'), 'Test 7: does not add background transformation');
  assert(!lower.includes('pencahayaan') && !lower.includes('lighting'), 'Test 7: does not add lighting transformation');
  assert(res.installedShorthands.length === 1 && res.installedShorthands[0] === '/outfit', 'Test 7: only /outfit is installed');
}

// TEST 8: Complex prompt preservation
console.log('\n--- TEST 8: Complex prompt preservation ---');
{
  const res = adaptiveEngine.analyze('Ganti baju menjadi tanktop putih, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16');
  const lower = res.optimalPrompt.toLowerCase();
  assert(lower.includes('tanktop putih'), 'Test 8: preserves tanktop putih instruction');
  assert(lower.includes('wajah') && (lower.includes('kunci') || lower.includes('pertahankan')), 'Test 8: preserves face locking instruction');
  assert(lower.includes('rambut') && lower.includes('pertahankan'), 'Test 8: preserves hair locking instruction');
  assert(lower.includes('9:16'), 'Test 8: preserves 9:16 aspect ratio instruction');
  assert(res.installedShorthands.includes('/outfit'), 'Test 8: includes /outfit');
  assert(res.installedShorthands.includes('/facelock'), 'Test 8: includes /facelock');
  assert(res.installedShorthands.includes('/hairlock'), 'Test 8: includes /hairlock');
  assert(res.installedShorthands.includes('/ar 9:16'), 'Test 8: includes /ar 9:16');
  assert(res.adaptiveMetadata?.complexity === 'COMPLEX', 'Test 8: complexity classified as COMPLEX');
}

// TEST 9: Duplicate semantic instruction
console.log('\n--- TEST 9: Duplicate semantic instruction ---');
{
  const res = adaptiveEngine.analyze('Jangan ubah wajah wajah tetap sama');
  const faceSentences = res.optimalPrompt.split('.').filter(s => s.toLowerCase().includes('wajah'));
  assert(faceSentences.length <= 1, 'Test 9: deduplicated natural language face preservation without repetition');
  assert(res.lockedAreas.length === 1, 'Test 9: exactly one lockedArea detected for face');
}

// TEST 10: Natural language + shorthand consistency
console.log('\n--- TEST 10: Natural language + shorthand consistency ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto /enhance');
  assert(res.conflicts.length === 0, 'Test 10: no conflicts between natural language and matching shorthand');
  const count = (res.optimalPrompt.match(/\/enhance/g) || []).length;
  assert(count === 1, 'Test 10: /enhance appears cleanly once at the end without duplicate tag');
}

// TEST 11: Gemini unavailable
console.log('\n--- TEST 11: Gemini unavailable ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  assert(typeof res.optimalPrompt === 'string' && res.optimalPrompt.length > 20, 'Test 11: deterministic prompt generated without external API');
  assert(res.adaptiveMetadata !== null, 'Test 11: adaptive metadata generated deterministically');
  assert(res.intent.primaryTarget === 'Pencahayaan & Tata Cahaya', 'Test 11: deterministic intent classification intact');
}

// TEST 12: Language preservation
console.log('\n--- TEST 12: Language preservation ---');
{
  const resId = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  assert(resId.optimalPrompt.includes('Perbaiki pencahayaan') || resId.optimalPrompt.includes('Hindari'), 'Test 12: Indonesian input yields Indonesian output');
  
  const resEn = adaptiveEngine.analyze('Enhance photo lighting');
  assert(resEn.optimalPrompt.includes('Enhance photo lighting') || resEn.optimalPrompt.includes('Avoid'), 'Test 12: English input yields English output');
}

// TEST 13: Empty / minimal prompt
console.log('\n--- TEST 13: Empty / minimal prompt ---');
{
  const emptyRes1 = adaptiveEngine.analyze('');
  assert(emptyRes1.optimalPrompt === '', 'Test 13: empty string handled safely without crash');
  assert(emptyRes1.installedShorthands.length === 0, 'Test 13: installedShorthands is empty array');

  const emptyRes2 = adaptiveEngine.analyze('   ');
  assert(emptyRes2.optimalPrompt === '', 'Test 13: whitespace string handled safely without crash');

  const minimalRes = adaptiveEngine.analyze('a');
  assert(typeof minimalRes.optimalPrompt === 'string', 'Test 13: minimal 1-char prompt handled without throwing error');
}

// TEST 14: Existing regression
console.log('\n--- TEST 14: Existing regression ---');
{
  assert(passed >= 130, `Test 14: all 130 existing tests passed (current passed: ${passed})`);
  assert(failed === 0, 'Test 14: zero regressions / zero failures');
}

// =============================================================================
// PATCH V2.2.1 — SEMANTIC FAITHFULNESS GUARD TESTS (TEST 15 - TEST 20)
// =============================================================================
console.log('\n==================================================');
console.log('PATCH V2.2.1 — SEMANTIC FAITHFULNESS GUARD TESTS');
console.log('==================================================\n');

// TEST 15: Semantic Faithfulness Guard - No Invented Attributes
console.log('--- TEST 15: Semantic Faithfulness Guard - No Invented Attributes ---');
{
  const res = adaptiveEngine.analyze('Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah');
  const lower = res.optimalPrompt.toLowerCase();
  assert(!lower.includes('potongan pas'), 'Test 15: No unrequested "potongan pas"');
  assert(!lower.includes('tekstur kain'), 'Test 15: No unrequested "tekstur kain"');
  assert(!lower.includes('katun'), 'Test 15: No unrequested fabric material "katun"');
  assert(!lower.includes('premium'), 'Test 15: No unrequested adjective "premium"');
  assert(!lower.includes('elegan'), 'Test 15: No unrequested adjective "elegan"');
  assert(!lower.includes('cinematic'), 'Test 15: No unrequested style "cinematic"');
  assert(!lower.includes('fitted'), 'Test 15: No unrequested style "fitted"');
}

// TEST 16: Complex Prompt Exact Phrasing Alignment
console.log('\n--- TEST 16: Complex Prompt Exact Phrasing Alignment ---');
{
  const complexPrompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16';
  const res = adaptiveEngine.analyze(complexPrompt);
  const expectedOptimalPrompt = 'Ganti pakaian subjek menjadi tanktop putih tali tipis. Kunci dan pertahankan wajah serta identitas asli subjek tanpa perubahan, serta pertahankan rambut asli. Gunakan rasio kanvas 9:16. Jangan mengubah area lain yang tidak diminta dan hindari distorsi bentuk tubuh atau pakaian. /outfit /facelock /hairlock /ar 9:16';
  assert(res.optimalPrompt === expectedOptimalPrompt, `Test 16: Matches exact ideal output\n    Expected: "${expectedOptimalPrompt}"\n    Actual:   "${res.optimalPrompt}"`);
  assert(res.installedShorthands.length === 4, 'Test 16: Exactly 4 installed shorthands');
  assert(res.installedShorthands[0] === '/outfit' && res.installedShorthands[1] === '/facelock' && res.installedShorthands[2] === '/hairlock' && res.installedShorthands[3] === '/ar 9:16', 'Test 16: Preserves natural shorthand sequence');
}

// TEST 17: Traceability Metadata (optimizationTrace)
console.log('\n--- TEST 17: Traceability Metadata (optimizationTrace) ---');
{
  const complexPrompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16';
  const res = adaptiveEngine.analyze(complexPrompt);
  const trace = res.adaptiveMetadata?.optimizationTrace;
  assert(trace !== undefined, 'Test 17: optimizationTrace exists in adaptiveMetadata');
  assert(Array.isArray(trace?.added), 'Test 17: optimizationTrace.added is an array');
  assert(Array.isArray(trace?.removed), 'Test 17: optimizationTrace.removed is an array');
  assert(trace.added.some(a => a.source === 'USER_EXPLICIT'), 'Test 17: trace.added contains USER_EXPLICIT source');
  assert(trace.added.some(a => a.source === 'RELEVANT_PRESERVATION'), 'Test 17: trace.added contains RELEVANT_PRESERVATION source');
  assert(trace.added.some(a => a.source === 'RELEVANT_SAFETY_OR_QUALITY_CONSTRAINT'), 'Test 17: trace.added contains RELEVANT_SAFETY_OR_QUALITY_CONSTRAINT source');
  assert(trace.removed.some(r => r.reason === 'UNSUPPORTED_EXPANSION'), 'Test 17: trace.removed contains UNSUPPORTED_EXPANSION entries');
}

// TEST 18: Allowed Negative Constraints - Domain Context Sensitivity
console.log('\n--- TEST 18: Allowed Negative Constraints - Domain Context Sensitivity ---');
{
  // Outfit prompt gets body/outfit constraint
  const outfitRes = adaptiveEngine.analyze('Ganti baju menjadi tanktop putih');
  assert(outfitRes.optimalPrompt.toLowerCase().includes('distorsi bentuk tubuh atau pakaian'), 'Test 18: Outfit transformation receives body/clothing distortion constraint');
  assert(!outfitRes.optimalPrompt.toLowerCase().includes('overexposure'), 'Test 18: Outfit does NOT receive lighting constraint');

  // Lighting prompt gets exposure constraint
  const lightingRes = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  assert(lightingRes.optimalPrompt.toLowerCase().includes('overexposure'), 'Test 18: Lighting transformation receives exposure constraint');
  assert(!lightingRes.optimalPrompt.toLowerCase().includes('distorsi bentuk tubuh'), 'Test 18: Lighting does NOT receive body distortion constraint');

  // Background removal gets halo/fringing constraint
  const bgRes = adaptiveEngine.analyze('Hapus latar belakang foto');
  assert(bgRes.optimalPrompt.toLowerCase().includes('potongan tepi kasar') || bgRes.optimalPrompt.toLowerCase().includes('halo effect'), 'Test 18: Background removal receives edge/halo constraint');
}

// TEST 19: English Complex Prompt Semantic Faithfulness
console.log('\n--- TEST 19: English Complex Prompt Semantic Faithfulness ---');
{
  const enRes = adaptiveEngine.analyze('Replace outfit with white tank top, keep face, keep hair, use 9:16 ratio');
  const lowerEn = enRes.optimalPrompt.toLowerCase();
  assert(!lowerEn.includes('realistic fabric texture'), 'Test 19: English prompt has no unprompted "realistic fabric texture"');
  assert(!lowerEn.includes('natural fit'), 'Test 19: English prompt has no unprompted "natural fit"');
  assert(!lowerEn.includes('proportional framing'), 'Test 19: English prompt has no unprompted "proportional framing"');
  assert(enRes.installedShorthands.includes('/outfit') && enRes.installedShorthands.includes('/facelock') && enRes.installedShorthands.includes('/hairlock') && enRes.installedShorthands.includes('/ar 9:16'), 'Test 19: English shorthands correctly installed');
}

// TEST 20: Regression & Non-interference
console.log('\n--- TEST 20: Regression & Non-interference ---');
{
  assert(passed >= 180, `Test 20: Baseline 180 tests all passed (currently: ${passed})`);
  assert(failed === 0, 'Test 20: Zero regressions / zero failures');
}

// =============================================================================
// PATCH V2.2.2 — EXPLICIT MULTI-INTENT + STRICT SEMANTIC FAITHFULNESS (TEST 21 - TEST 27)
// =============================================================================
console.log('\n==================================================');
console.log('PATCH V2.2.2 — EXPLICIT MULTI-INTENT & FAITHFULNESS TESTS');
console.log('==================================================\n');

// TEST 21: Explicit Multi-Intent Detection (TEST A)
console.log('--- TEST 21: Explicit Multi-Intent Detection (TEST A) ---');
{
  const res = adaptiveEngine.analyze('Buka hijab dan tampilkan rambut secara natural');
  const primaryCodes = res.primaryShorthands.map(p => p.code);
  assert(primaryCodes.includes('/headwear-remove'), 'Test 21: Primary includes /headwear-remove');
  assert(primaryCodes.includes('/naturalhair'), 'Test 21: Primary includes /naturalhair');
  assert(!res.relatedShorthands.some(r => r.code === '/naturalhair'), 'Test 21: /naturalhair is NOT in Related');
  assert(res.optimalPrompt.includes('/headwear-remove') && res.optimalPrompt.includes('/naturalhair'), 'Test 21: Both installed in Prompt Optimal');
}

// TEST 22: Strict Entailment & Complex Intent (TEST B)
console.log('\n--- TEST 22: Strict Entailment & Complex Intent (TEST B) ---');
{
  const res = adaptiveEngine.analyze('Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16');
  const primaryCodes = res.primaryShorthands.map(p => p.code);
  assert(primaryCodes.includes('/outfit') && primaryCodes.includes('/facelock') && primaryCodes.includes('/hairlock') && primaryCodes.includes('/ar 9:16'), 'Test 22: All 4 explicit intents are Primary');
  const lower = res.optimalPrompt.toLowerCase();
  assert(!lower.includes('potongan pas'), 'Test 22: No "potongan pas"');
  assert(!lower.includes('tekstur kain realistis'), 'Test 22: No "tekstur kain realistis"');
  assert(!lower.includes('framing komposisi'), 'Test 22: No "framing komposisi"');
}

// TEST 23: Single Intent No Drift (TEST C)
console.log('\n--- TEST 23: Single Intent No Drift (TEST C) ---');
{
  const res = adaptiveEngine.analyze('Perbaiki pencahayaan foto');
  const lower = res.optimalPrompt.toLowerCase();
  assert(res.primaryShorthands.length === 1 && res.primaryShorthands[0].code === '/enhance', 'Test 23: Only /enhance is Primary');
  assert(!lower.includes('baju') && !lower.includes('pakaian'), 'Test 23: No outfit invention');
  assert(!lower.includes('rambut') && !lower.includes('hair'), 'Test 23: No hair invention');
  assert(!lower.includes('latar') && !lower.includes('background'), 'Test 23: No background invention');
  assert(!lower.includes('cinematic') && !lower.includes('style'), 'Test 23: No style invention');
}

// TEST 24: Single Explicit Intent - No Unrequested Expansion (TEST D)
console.log('\n--- TEST 24: Single Explicit Intent - No Unrequested Expansion (TEST D) ---');
{
  const res = adaptiveEngine.analyze('Buka hijab');
  const primaryCodes = res.primaryShorthands.map(p => p.code);
  assert(primaryCodes.includes('/headwear-remove'), 'Test 24: Primary includes /headwear-remove');
  assert(!primaryCodes.includes('/naturalhair'), 'Test 24: Does NOT automatically add /naturalhair to Primary');
  assert(res.relatedShorthands.some(r => r.code === '/naturalhair'), 'Test 24: /naturalhair remains available in Related');
}

// TEST 25: Isolation Constraint (TEST E)
console.log('\n--- TEST 25: Isolation Constraint (TEST E) ---');
{
  const res = adaptiveEngine.analyze('Ganti baju');
  assert(res.primaryShorthands.length === 1 && res.primaryShorthands[0].code === '/outfit', 'Test 25: Only /outfit is Primary');
  const lower = res.optimalPrompt.toLowerCase();
  assert(!lower.includes('wajah'), 'Test 25: No face lock assumption');
  assert(!lower.includes('rambut'), 'Test 25: No hair lock assumption');
  assert(!lower.includes('latar') && !lower.includes('background'), 'Test 25: No background assumption');
  assert(!lower.includes('pose'), 'Test 25: No pose assumption');
}

// TEST 26: Forbidden Invented Attributes Guard
console.log('\n--- TEST 26: Forbidden Invented Attributes Guard ---');
{
  const forbidden = [
    'rapi dan realistis', 'potongan pas', 'tekstur kain realistis', 'natural texture',
    'vertical cinematic framing', 'smart composition', 'katun', 'premium',
    'elegan', 'cinematic', 'dramatic', 'luxury', 'studio look', 'professional',
    'photorealistic', 'seksi', 'fitted'
  ];
  const res = adaptiveEngine.analyze('Buka hijab dan tampilkan rambut secara natural');
  const lower = res.optimalPrompt.toLowerCase();
  for (const word of forbidden) {
    assert(!lower.includes(word), `Test 26: Guard blocks forbidden attribute "${word}"`);
  }
}

// TEST 27: Shorthand Order Preservation
console.log('\n--- TEST 27: Shorthand Order Preservation ---');
{
  const res = adaptiveEngine.analyze('Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16');
  const expectedOrder = ['/outfit', '/facelock', '/hairlock', '/ar 9:16'];
  assert(res.installedShorthands.length === 4, 'Test 27: Exactly 4 shorthands installed');
  const matchesOrder = expectedOrder.every((code, idx) => res.installedShorthands[idx] === code);
  assert(matchesOrder, `Test 27: Shorthand order matches natural user intent: ${res.installedShorthands.join(' ')}`);
}

// =============================================================================
// PATCH V2.2.3 — UNIFIED RUNTIME PROMPT COMPOSER TESTS (TEST 28 - TEST 32)
// =============================================================================
console.log('\n==================================================');
console.log('PATCH V2.2.3 — UNIFIED RUNTIME PROMPT COMPOSER TESTS');
console.log('==================================================\n');

// TEST 28: Live Snapshot Parity Test (UI Runtime Parity)
console.log('--- TEST 28: Live Snapshot Parity Test (UI Runtime Parity) ---');
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16';
  const res = adaptiveEngine.analyze(prompt);
  
  // 1. Initial Prompt Optimal parity
  const initialOptimal = res.optimalPrompt;
  const directBuild = adaptiveEngine.buildOptimalPrompt(res);
  const standaloneBuild = buildOptimalPrompt(res);
  assert(directBuild === initialOptimal, 'Test 28: Direct buildOptimalPrompt(res) matches res.optimalPrompt exactly');
  assert(standaloneBuild === initialOptimal, 'Test 28: Standalone buildOptimalPrompt(res) matches res.optimalPrompt exactly');

  // 2. Simulating UI unchecking /hairlock
  const updatedList = res.installedShorthands.filter(c => c !== '/hairlock');
  const simResult = { ...res, installedShorthands: updatedList };
  const uiUpdatedPrompt = adaptiveEngine.buildOptimalPrompt(simResult);
  assert(!uiUpdatedPrompt.includes('/hairlock'), 'Test 28: Unchecked shorthand /hairlock removed from optimal prompt');
  assert(uiUpdatedPrompt.includes('/outfit') && uiUpdatedPrompt.includes('/facelock') && uiUpdatedPrompt.includes('/ar 9:16'), 'Test 28: Retained shorthands remain in optimal prompt');
  assert(uiUpdatedPrompt.toLowerCase().includes('tanktop putih tali tipis'), 'Test 28: Core prompt text retained without corruption');

  // 3. Simulating UI adding related shorthand /enhance
  const withAdded = { ...res, installedShorthands: [...res.installedShorthands, '/enhance'] };
  const uiAddedPrompt = adaptiveEngine.buildOptimalPrompt(withAdded);
  assert(uiAddedPrompt.endsWith('/enhance'), 'Test 28: User-added shorthand appended cleanly at the end');
}

// TEST 29: Final Output Test A (Hijab & Natural Hair)
console.log('\n--- TEST 29: Final Output Test A (Hijab & Natural Hair) ---');
{
  const prompt = 'Buka hijab dan tampilkan rambut secara natural';
  const res = adaptiveEngine.analyze(prompt);
  const output = adaptiveEngine.buildOptimalPrompt(res);
  const lower = output.toLowerCase();

  assert(!lower.includes('rapi'), 'Test 29: Fail if contains "rapi"');
  assert(!lower.includes('realistis'), 'Test 29: Fail if contains "realistis"');
  assert(!lower.includes('rambut indah'), 'Test 29: Fail if contains "rambut indah"');
  assert(!lower.includes('rambut sehat'), 'Test 29: Fail if contains "rambut sehat"');
  assert(output.includes('/headwear-remove') && output.includes('/naturalhair'), 'Test 29: Both /headwear-remove and /naturalhair present in final prompt');
  assert(lower.includes('lepaskan penutup kepala/hijab') && lower.includes('tampilkan rambut secara natural'), 'Test 29: Clean natural language instruction preserved');
}

// TEST 30: Final Output Test B (Outfit Complex)
console.log('\n--- TEST 30: Final Output Test B (Outfit Complex) ---');
{
  const prompt = 'Ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah, pertahankan rambut, gunakan rasio 9:16';
  const res = adaptiveEngine.analyze(prompt);
  const output = adaptiveEngine.buildOptimalPrompt(res);
  const lower = output.toLowerCase();

  assert(!lower.includes('potongan pas'), 'Test 30: Fail if contains "potongan pas"');
  assert(!lower.includes('tekstur kain realistis'), 'Test 30: Fail if contains "tekstur kain realistis"');
  assert(!lower.includes('premium'), 'Test 30: Fail if contains "premium"');
  assert(!lower.includes('elegan'), 'Test 30: Fail if contains "elegan"');
  assert(!lower.includes('bahan premium'), 'Test 30: Fail if contains "bahan premium"');
  assert(!lower.includes('framing proporsional'), 'Test 30: Fail if contains "framing proporsional"');

  assert(lower.includes('tanktop putih tali tipis'), 'Test 30: Preserves user explicit outfit detail');
  assert(lower.includes('wajah') && (lower.includes('kunci') || lower.includes('pertahankan')), 'Test 30: Preserves face preservation instruction');
  assert(lower.includes('rambut asli'), 'Test 30: Preserves hair preservation instruction');
  assert(lower.includes('9:16'), 'Test 30: Preserves aspect ratio instruction');
  assert(output.includes('/outfit') && output.includes('/facelock') && output.includes('/hairlock') && output.includes('/ar 9:16'), 'Test 30: All 4 explicit shorthands installed');
}

// TEST 31: Final Output Test C (Lighting Focused)
console.log('\n--- TEST 31: Final Output Test C (Lighting Focused) ---');
{
  const prompt = 'Perbaiki pencahayaan foto';
  const res = adaptiveEngine.analyze(prompt);
  const output = adaptiveEngine.buildOptimalPrompt(res);
  const lower = output.toLowerCase();

  assert(lower.includes('pencahayaan') || lower.includes('lighting'), 'Test 31: Expected lighting-focused instruction');
  assert(output.includes('/enhance'), 'Test 31: Shorthand /enhance installed');
  assert(!output.includes('/outfit'), 'Test 31: No outfit invention');
  assert(!output.includes('/hairlock') && !lower.includes('rambut'), 'Test 31: No hair invention');
  assert(!output.includes('/bgremove') && !output.includes('/bgreplace'), 'Test 31: No background invention');
  assert(!lower.includes('cinematic') && !lower.includes('vintage') && !lower.includes('dramatis'), 'Test 31: No unrequested style invention');
}

// TEST 32: Final Output Test D (Background Removal & Transparency)
console.log('\n--- TEST 32: Final Output Test D (Background Removal & Transparency) ---');
{
  const prompt = 'Hapus background dan buat transparan';
  const res = adaptiveEngine.analyze(prompt);
  const output = adaptiveEngine.buildOptimalPrompt(res);
  const lower = output.toLowerCase();

  assert(lower.includes('latar belakang') && lower.includes('transparan'), 'Test 32: Background removal and transparency preserved');
  assert(output.includes('/bgremove'), 'Test 32: Shorthand /bgremove installed');
  assert(!output.includes('/bgreplace') && !lower.includes('pemandangan baru'), 'Test 32: No new background invention');
  assert(!lower.includes('cinematic') && !lower.includes('sinematik'), 'Test 32: No cinematic invention');
  assert(!lower.includes('color grading') && !output.includes('/colorgrade'), 'Test 32: No color grading invention');
  assert(!lower.includes('vintage') && !lower.includes('mewah'), 'Test 32: No unrequested style');
}

console.log('\n==================================================');
console.log(`HASIL AKHIR: ${passed} PASSED, ${failed} FAILED`);
console.log('==================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
