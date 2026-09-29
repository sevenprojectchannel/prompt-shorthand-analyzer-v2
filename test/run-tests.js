/**
 * Test Suite V2.1 - Prompt Shorthand Analyzer
 * Verifikasi Lengkap Semantic Shorthand Knowledge Base & 8 Skenario Uji Wajib (TEST A - TEST H)
 */

import { SemanticEngine } from '../src/lib/semanticEngine.js';
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

console.log('\n==================================================');
console.log(`HASIL AKHIR: ${passed} PASSED, ${failed} FAILED`);
console.log('==================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
