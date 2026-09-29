/**
 * Semantic Engine V2
 * Pipeline lengkap:
 * Normalisasi -> Semantic Intent -> Entity/Area -> Edit vs Preservation ->
 * Conflict Detection -> Shorthand Mapping (WAJIB, DISARANKAN, OPSIONAL) ->
 * Exclusions -> Visual Transformation -> Optimal Prompt.
 */

import { INITIAL_SHORTHAND_CATALOG } from '../data/catalogData.js';

export class SemanticEngine {
  constructor(catalog = INITIAL_SHORTHAND_CATALOG) {
    this.catalog = catalog;
  }

  setCatalog(catalog) {
    this.catalog = catalog;
  }

  /**
   * Main pipeline execution
   */
  analyze(rawPrompt, installedOverrides = null) {
    if (!rawPrompt || typeof rawPrompt !== 'string' || !rawPrompt.trim()) {
      return this.getEmptyResult();
    }

    const normalizedPrompt = this.normalize(rawPrompt);
    const existingShorthands = this.extractExistingShorthands(rawPrompt);
    const textWithoutShorthands = this.stripShorthands(rawPrompt);

    // 1. Intent Analysis
    const intentData = this.analyzeIntent(textWithoutShorthands);

    // 2. Entity & Area Extraction (Separating Edit vs Preservation)
    const { editAreas, lockedAreas, unchangedAreas } = this.extractAreas(textWithoutShorthands, intentData);

    // 3. Conflict Detection
    const conflicts = this.detectConflicts(editAreas, lockedAreas, existingShorthands);

    // 4. Shorthand Recommendations & Exclusions
    const { recommendations, exclusions } = this.evaluateShorthands(
      intentData,
      editAreas,
      lockedAreas,
      existingShorthands
    );

    // Determine installed shorthands (default recommended WAJIB + DISARANKAN, or user override)
    let installedShorthands = [];
    if (installedOverrides && Array.isArray(installedOverrides)) {
      installedShorthands = [...installedOverrides];
    } else {
      // Default auto-install WAJIB and DISARANKAN recommendations
      const autoInclude = recommendations
        .filter(r => r.priority === 'WAJIB' || r.priority === 'DISARANKAN')
        .map(r => r.code);
      
      // Combine with explicit existing shorthands typed by user
      const set = new Set([...existingShorthands, ...autoInclude]);
      installedShorthands = Array.from(set);
    }

    // 5. Visual Transformation FROM -> TO
    const visualTransformation = this.generateVisualTransformation(editAreas, lockedAreas, textWithoutShorthands);

    // 6. Optimal Prompt Construction
    const optimalPrompt = this.buildOptimalPrompt(textWithoutShorthands, installedShorthands);

    return {
      rawPrompt,
      normalizedPrompt,
      cleanText: textWithoutShorthands,
      intent: intentData,
      editAreas,
      lockedAreas,
      unchangedAreas,
      conflicts,
      recommendations,
      exclusions,
      installedShorthands,
      visualTransformation,
      optimalPrompt,
      timestamp: new Date().toISOString()
    };
  }

  normalize(prompt) {
    return prompt.trim().replace(/\s+/g, ' ');
  }

  extractExistingShorthands(prompt) {
    const regex = /\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(prompt)) !== null) {
      matches.push(match[0]);
    }
    return Array.from(new Set(matches));
  }

  stripShorthands(prompt) {
    return prompt
      .replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  analyzeIntent(text) {
    const lower = text.toLowerCase();
    let primaryAction = 'MODIFIKASI_VISUAL';
    let primaryTarget = 'Gambar';
    let summary = 'Memproses instruksi visual pada gambar.';
    let priority = 'MEDIUM';
    let category = 'GENERAL';

    if (lower.includes('pencahayaan') || lower.includes('lighting') || lower.includes('terangkan') || lower.includes('gelap')) {
      primaryAction = 'PENINGKATAN_PENCAHAYAAN';
      primaryTarget = 'Pencahayaan & Tata Cahaya';
      summary = 'Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.';
      priority = 'HIGH';
      category = 'LIGHTING';
    } else if (lower.includes('hijab') || lower.includes('kerudung') || lower.includes('headwear')) {
      primaryAction = 'PELEPASAN_PENUTUP_KEPALA';
      primaryTarget = 'Hijab / Headwear';
      summary = 'Melepaskan atau menghapus penutup kepala/hijab dengan tetap menjaga integritas subjek.';
      priority = 'HIGH';
      category = 'HEADWEAR';
    } else if (lower.includes('baju') || lower.includes('pakaian') || lower.includes('outfit') || lower.includes('tanktop') || lower.includes('gaun')) {
      primaryAction = 'PENGGANTIAN_BUSANA';
      primaryTarget = 'Pakaian & Outfit';
      summary = 'Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.';
      priority = 'HIGH';
      category = 'OUTFIT';
    } else if (lower.includes('tajam') || lower.includes('sharpen') || lower.includes('perjelas') || lower.includes('jernih')) {
      primaryAction = 'PENAJAMAN_DETAIL';
      primaryTarget = 'Mikrokontras & Detail';
      summary = 'Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.';
      priority = 'HIGH';
      category = 'QUALITY';
    } else if (lower.includes('hapus latar') || lower.includes('hapus background') || lower.includes('transparan') || lower.includes('hilangkan background')) {
      primaryAction = 'PENGHAPUSAN_LATAR';
      primaryTarget = 'Latar Belakang / Background';
      summary = 'Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan.';
      priority = 'CRITICAL';
      category = 'BACKGROUND';
    } else if (lower.includes('rasio') || lower.includes('9:16') || lower.includes('16:9') || lower.includes('1:1') || lower.includes('aspect ratio')) {
      primaryAction = 'PENYESUAIAN_RASIO_KANVAS';
      primaryTarget = 'Kanvas & Dimensi';
      summary = 'Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.';
      priority = 'HIGH';
      category = 'RATIO';
    } else if (lower.includes('rambut') || lower.includes('hair') || lower.includes('botak')) {
      primaryAction = 'MODIFIKASI_RAMBUT';
      primaryTarget = 'Rambut & Gaya Rambut';
      summary = 'Menyesuaikan struktur, warna, atau gaya rambut subjek.';
      priority = 'HIGH';
      category = 'HAIR';
    }

    return {
      primaryAction,
      primaryTarget,
      summary,
      priority,
      category
    };
  }

  extractAreas(text, intentData) {
    const lower = text.toLowerCase();
    const editAreas = [];
    const lockedAreas = [];
    const detectedTargets = new Set();

    // Helper to check for negation/preservation keywords preceding an entity
    const checkPreservation = (entityKeywords) => {
      for (const kw of entityKeywords) {
        if (!lower.includes(kw)) continue;
        const preservationPatterns = [
          `jangan ubah ${kw}`,
          `jangan ganti ${kw}`,
          `jangan sentuh ${kw}`,
          `pertahankan ${kw}`,
          `kunci ${kw}`,
          `jaga ${kw}`,
          `${kw} asli`,
          `${kw} tetap`,
          `keep ${kw}`,
          `same ${kw}`
        ];
        if (preservationPatterns.some(p => lower.includes(p))) {
          return true;
        }
      }
      return false;
    };

    // Helper to check for explicit edit keywords preceding an entity
    const checkEdit = (entityKeywords) => {
      for (const kw of entityKeywords) {
        if (!lower.includes(kw)) continue;
        const editPatterns = [
          `ubah ${kw}`,
          `ganti ${kw}`,
          `hapus ${kw}`,
          `hilangkan ${kw}`,
          `perbaiki ${kw}`,
          `tingkatkan ${kw}`,
          `buat ${kw}`,
          `lepas ${kw}`,
          `buka ${kw}`,
          `change ${kw}`,
          `remove ${kw}`
        ];
        if (editPatterns.some(p => lower.includes(p))) {
          return true;
        }
        // Direct descriptive action matching
        if (kw === 'pencahayaan' && (lower.includes('perbaiki pencahayaan') || lower.includes('lighting') || lower.includes('terangkan'))) return true;
        if (kw === 'hijab' && (lower.includes('hapus hijab') || lower.includes('buka hijab') || lower.includes('tanpa hijab'))) return true;
        if (kw === 'baju' && (lower.includes('tanktop') || lower.includes('kemeja') || lower.includes('gaun') || lower.includes('jaket'))) return true;
        if (kw === 'rasio' && (lower.includes('9:16') || lower.includes('16:9') || lower.includes('1:1'))) return true;
      }
      return false;
    };

    // 1. WAJAH (FACE)
    const faceKw = ['wajah', 'muka', 'face', 'identitas', 'paras'];
    if (faceKw.some(k => lower.includes(k))) {
      detectedTargets.add('FACE');
      if (checkPreservation(faceKw)) {
        lockedAreas.push({
          entity: 'FACE',
          label: 'Wajah & Identitas',
          action: 'LOCKED',
          description: 'Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.',
          shorthand: '/facelock'
        });
      } else if (checkEdit(faceKw)) {
        editAreas.push({
          entity: 'FACE',
          label: 'Wajah & Fitur Wajah',
          action: 'EDIT',
          description: 'Memodifikasi karakteristik atau ekspresi wajah subjek.'
        });
      }
    }

    // 2. HIJAB / PENUTUP KEPALA
    const hijabKw = ['hijab', 'kerudung', 'jilbab', 'penutup kepala', 'topi'];
    if (hijabKw.some(k => lower.includes(k))) {
      detectedTargets.add('HEADWEAR');
      if (checkPreservation(hijabKw)) {
        lockedAreas.push({
          entity: 'HEADWEAR',
          label: 'Penutup Kepala / Hijab',
          action: 'LOCKED',
          description: 'Penutup kepala asli dipertahankan tanpa perubahan.',
          shorthand: '/headwearlock'
        });
      } else {
        editAreas.push({
          entity: 'HEADWEAR',
          label: 'Penutup Kepala / Hijab',
          action: 'REMOVE / EDIT',
          description: 'Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.',
          shorthand: '/headwear-remove'
        });
      }
    }

    // 3. PAKAIAN / OUTFIT
    const outfitKw = ['baju', 'pakaian', 'outfit', 'busana', 'tanktop', 'kemeja', 'celana', 'gaun'];
    if (outfitKw.some(k => lower.includes(k))) {
      detectedTargets.add('OUTFIT');
      if (checkPreservation(outfitKw)) {
        lockedAreas.push({
          entity: 'OUTFIT',
          label: 'Pakaian & Busana',
          action: 'LOCKED',
          description: 'Busana dan tekstur kain asli subjek tetap dipertahankan.',
          shorthand: '/outfitlock'
        });
      } else {
        let outfitDetail = 'Pakaian subjek';
        if (lower.includes('tanktop putih tali tipis')) outfitDetail = 'Tanktop putih tali tipis';
        else if (lower.includes('tanktop')) outfitDetail = 'Tanktop';
        else if (lower.includes('gaun')) outfitDetail = 'Gaun';
        else if (lower.includes('kemeja')) outfitDetail = 'Kemeja';

        editAreas.push({
          entity: 'OUTFIT',
          label: 'Pakaian (Outfit)',
          action: 'REPLACE',
          description: `Mengganti pakaian subjek menjadi: ${outfitDetail}.`,
          shorthand: '/outfit'
        });
      }
    }

    // 4. LATAR BELAKANG (BACKGROUND)
    const bgKw = ['latar', 'background', 'backdrop', 'lingkungan'];
    if (bgKw.some(k => lower.includes(k))) {
      detectedTargets.add('BACKGROUND');
      if (checkPreservation(bgKw)) {
        lockedAreas.push({
          entity: 'BACKGROUND',
          label: 'Latar Belakang (Background)',
          action: 'LOCKED',
          description: 'Lingkungan, latar belakang, dan pencahayaan ambien dikunci.',
          shorthand: '/backgroundlock'
        });
      } else if (lower.includes('hapus') || lower.includes('transparan') || lower.includes('hilangkan')) {
        editAreas.push({
          entity: 'BACKGROUND',
          label: 'Latar Belakang (Background)',
          action: 'REMOVE / TRANSPARENT',
          description: 'Latar belakang dihapus dan diubah menjadi transparan bersih.',
          shorthand: '/bgremove'
        });
      } else if (lower.includes('ganti') || lower.includes('ubah')) {
        editAreas.push({
          entity: 'BACKGROUND',
          label: 'Latar Belakang (Background)',
          action: 'REPLACE',
          description: 'Mengganti latar belakang dengan pemandangan baru.',
          shorthand: '/bgreplace'
        });
      }
    }

    // 5. PENCAHAYAAN (LIGHTING)
    if (lower.includes('pencahayaan') || lower.includes('lighting') || lower.includes('terangkan') || lower.includes('cahaya')) {
      detectedTargets.add('LIGHTING');
      editAreas.push({
        entity: 'LIGHTING',
        label: 'Pencahayaan (Lighting)',
        action: 'ENHANCE',
        description: 'Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.',
        shorthand: '/enhance'
      });
    }

    // 6. KETAJAMAN & KUALITAS (SHARPNESS)
    if (lower.includes('tajam') || lower.includes('sharpen') || lower.includes('perjelas') || lower.includes('detail')) {
      detectedTargets.add('QUALITY');
      editAreas.push({
        entity: 'QUALITY',
        label: 'Ketajaman & Mikrokontras',
        action: 'SHARPEN',
        description: 'Detail halus dan mikrokontras foto dipertajam secara profesional.',
        shorthand: '/sharpen'
      });
    }

    // 7. RASIO ASPEK (ASPECT RATIO / CANVAS)
    if (lower.includes('rasio') || lower.includes('9:16') || lower.includes('16:9') || lower.includes('1:1') || lower.includes('format')) {
      detectedTargets.add('CANVAS');
      let targetRatio = 'Rasio baru';
      let code = '/ar 9:16';
      if (lower.includes('9:16')) { targetRatio = '9:16 (Vertical)'; code = '/ar 9:16'; }
      else if (lower.includes('16:9')) { targetRatio = '16:9 (Landscape)'; code = '/ar 16:9'; }
      else if (lower.includes('1:1')) { targetRatio = '1:1 (Persegi)'; code = '/ar 1:1'; }

      editAreas.push({
        entity: 'CANVAS',
        label: 'Dimensi & Rasio Kanvas',
        action: 'SET_ASPECT_RATIO',
        description: `Mengatur rasio kanvas gambar menjadi format ${targetRatio}.`,
        shorthand: code
      });
    }

    // 8. FRAMING / FULL BODY
    if (lower.includes('full body') || lower.includes('seluruh tubuh') || lower.includes('badan penuh')) {
      detectedTargets.add('COMPOSITION');
      editAreas.push({
        entity: 'COMPOSITION',
        label: 'Komposisi & Framing',
        action: 'FULL_BODY_EXPAND',
        description: 'Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.',
        shorthand: '/fullbody'
      });
    }

    // 9. RAMBUT (HAIR)
    const hairKw = ['rambut', 'hair', 'botak'];
    if (hairKw.some(k => lower.includes(k))) {
      detectedTargets.add('HAIR');
      const isPreserved = checkPreservation(hairKw);
      const isEdited = checkEdit(hairKw) || lower.includes('botak') || lower.includes('merah') || lower.includes('cat');

      if (isPreserved && isEdited) {
        // Both preserved AND edited -> this will be caught by conflict detector!
        lockedAreas.push({
          entity: 'HAIR',
          label: 'Rambut Subjek',
          action: 'LOCKED',
          description: 'Struktur dan warna rambut asli subjek diminta dipertahankan.',
          shorthand: '/hairlock'
        });
        editAreas.push({
          entity: 'HAIR',
          label: 'Rambut Subjek',
          action: 'EDIT_STYLE',
          description: lower.includes('botak') ? 'Memangkas rambut menjadi botak' : 'Mengubah gaya/warna rambut'
        });
      } else if (isPreserved) {
        lockedAreas.push({
          entity: 'HAIR',
          label: 'Rambut Subjek',
          action: 'LOCKED',
          description: 'Gaya dan warna rambut asli dipertahankan konsisten.',
          shorthand: '/hairlock'
        });
      } else if (isEdited) {
        editAreas.push({
          entity: 'HAIR',
          label: 'Rambut Subjek',
          action: 'EDIT',
          description: lower.includes('botak') ? 'Mengubah gaya rambut menjadi botak' : 'Mengubah warna/gaya rambut'
        });
      }
    }

    // 10. TUBUH / BODY POSE
    const bodyKw = ['tubuh', 'badan', 'pose', 'postur'];
    if (bodyKw.some(k => lower.includes(k))) {
      detectedTargets.add('BODY');
      if (checkPreservation(bodyKw)) {
        lockedAreas.push({
          entity: 'BODY',
          label: 'Postur Tubuh & Anatomi',
          action: 'LOCKED',
          description: 'Pose, siluet, dan proporsi anatomis tubuh dipertahankan.',
          shorthand: '/bodylock'
        });
      }
    }

    // Determine unchanged areas: all common domains not in editAreas or lockedAreas
    const allKnownDomains = [
      { key: 'FACE', label: 'Wajah & Identitas' },
      { key: 'BACKGROUND', label: 'Latar Belakang' },
      { key: 'OUTFIT', label: 'Pakaian & Busana' },
      { key: 'BODY', label: 'Postur & Anatomi Tubuh' },
      { key: 'LIGHTING', label: 'Pencahayaan' }
    ];

    const unchangedAreas = allKnownDomains
      .filter(d => !detectedTargets.has(d.key))
      .map(d => ({
        entity: d.key,
        label: d.label,
        status: 'UNCHANGED',
        description: `Tidak termodifikasi karena tidak ada permintaan perubahan pada ${d.label.toLowerCase()}.`
      }));

    return { editAreas, lockedAreas, unchangedAreas };
  }

  detectConflicts(editAreas, lockedAreas, existingShorthands) {
    const conflicts = [];

    // 1. Conflict between Edit Area and Locked Area on the same entity
    for (const edit of editAreas) {
      const matchingLock = lockedAreas.find(l => l.entity === edit.entity);
      if (matchingLock) {
        conflicts.push({
          id: `conflict-${edit.entity.toLowerCase()}`,
          entity: edit.entity,
          label: edit.label,
          type: 'EDIT_VS_LOCK',
          shorthandA: matchingLock.shorthand || `[Lock ${edit.entity}]`,
          shorthandB: edit.shorthand || `[Ubah ${edit.entity}]`,
          instructionA: matchingLock.description,
          instructionB: edit.description,
          reason: `Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${edit.label} sekaligus meminta mengubahnya.`,
          options: [
            { id: 'use_user_edit', label: 'Gunakan Instruksi Ubah (Abaikan Kunci)' },
            { id: 'keep_lock', label: 'Pertahankan Kunci (Batalkan Ubah)' },
            { id: 'edit_shorthand', label: 'Sesuaikan Shorthand Manual' }
          ]
        });
      }
    }

    // 2. Conflict between explicit Shorthands typed by user (e.g. /facelock vs /faceedit, /bgremove vs /backgroundlock)
    if (existingShorthands.includes('/backgroundlock') && (existingShorthands.includes('/bgremove') || existingShorthands.includes('/bgreplace'))) {
      conflicts.push({
        id: 'conflict-bg-shorthand',
        entity: 'BACKGROUND',
        label: 'Latar Belakang',
        type: 'SHORTHAND_CLASH',
        shorthandA: '/backgroundlock',
        shorthandB: existingShorthands.includes('/bgremove') ? '/bgremove' : '/bgreplace',
        reason: 'Shorthand /backgroundlock bertentangan langsung dengan perintah manipulasi latar belakang.',
        options: [
          { id: 'keep_lock', label: 'Gunakan /backgroundlock' },
          { id: 'keep_edit', label: 'Gunakan Shorthand Ubah Latar' }
        ]
      });
    }

    return conflicts;
  }

  evaluateShorthands(intentData, editAreas, lockedAreas, existingShorthands) {
    const recommendations = [];
    const exclusions = [];

    // Helper map of actively needed codes
    const activeDirectives = new Map();

    // From locked areas -> WAJIB
    for (const lock of lockedAreas) {
      if (lock.shorthand) {
        activeDirectives.set(lock.shorthand, {
          priority: 'WAJIB',
          target: lock.label,
          reason: `Kritis untuk menjamin ${lock.description.toLowerCase()}`
        });
      }
    }

    // From edit areas -> WAJIB or DISARANKAN
    for (const edit of editAreas) {
      if (edit.shorthand) {
        const priority = (edit.entity === 'BACKGROUND' && edit.action.includes('REMOVE')) || edit.entity === 'CANVAS'
          ? 'WAJIB'
          : 'DISARANKAN';
        activeDirectives.set(edit.shorthand, {
          priority,
          target: edit.label,
          reason: `Mendukung eksekusi ${edit.description.toLowerCase()}`
        });
      }
    }

    // Special synergies:
    // If lighting requested, /enhance is DISARANKAN
    if (intentData.category === 'LIGHTING' && !activeDirectives.has('/enhance')) {
      activeDirectives.set('/enhance', {
        priority: 'DISARANKAN',
        target: 'Seluruh Gambar',
        reason: 'Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.'
      });
    }

    // If sharpness requested, /sharpen is DISARANKAN
    if (intentData.category === 'QUALITY' && !activeDirectives.has('/sharpen')) {
      activeDirectives.set('/sharpen', {
        priority: 'DISARANKAN',
        target: 'Detail & Mikrokontras',
        reason: 'Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.'
      });
    }

    // Secondary synergies (OPSIONAL)
    if (activeDirectives.has('/enhance') && !activeDirectives.has('/sharpen')) {
      activeDirectives.set('/sharpen', {
        priority: 'OPSIONAL',
        target: 'Detail Tekstur',
        reason: 'Opsional: menyempurnakan ketajaman setelah pencahayaan ditingkatkan.'
      });
    }

    if (activeDirectives.has('/sharpen') && !activeDirectives.has('/denoise')) {
      activeDirectives.set('/denoise', {
        priority: 'OPSIONAL',
        target: 'Area Bayangan & Noise',
        reason: 'Opsional: mereduksi noise digital saat ketajaman ditingkatkan.'
      });
    }

    // Evaluate all items in catalog against active directives
    for (const item of this.catalog) {
      if (activeDirectives.has(item.code)) {
        const match = activeDirectives.get(item.code);
        recommendations.push({
          code: item.code,
          name: item.name,
          category: item.category,
          target: match.target || item.target,
          description: item.description,
          priority: match.priority,
          reason: match.reason,
          active: true
        });
      } else {
        // Excluded shorthand with specific human-friendly Indonesian rationale
        let exclusionReason = 'Tidak ada permintaan yang relevan dengan fungsi shorthand ini pada prompt user.';
        if (item.code === '/facelock') {
          exclusionReason = 'Tidak ada permintaan yang menyentuh atau mengunci wajah subjek.';
        } else if (item.code === '/bgremove') {
          exclusionReason = 'Tidak ada permintaan penghapusan latar belakang menjadi transparan.';
        } else if (item.code === '/backgroundlock') {
          exclusionReason = 'Latar belakang tidak diminta untuk dikunci secara eksplisit.';
        } else if (item.code === '/outfit' || item.code === '/outfitlock') {
          exclusionReason = 'Tidak ada instruksi yang memodifikasi atau mengunci pakaian.';
        } else if (item.code.startsWith('/ar')) {
          exclusionReason = 'Tidak ada instruksi pengubahan rasio aspek atau kanvas.';
        } else if (item.code === '/fullbody') {
          exclusionReason = 'Tidak ada permintaan framing subjek dari kepala ke kaki.';
        } else if (item.code === '/cinematic' || item.code === '/colorgrade') {
          exclusionReason = 'Gaya artistik atau grading warna tidak dispesifikasikan.';
        }

        exclusions.push({
          code: item.code,
          name: item.name,
          category: item.category,
          target: item.target,
          description: item.description,
          reason: exclusionReason
        });
      }
    }

    // Sort recommendations: WAJIB first, then DISARANKAN, then OPSIONAL
    const priorityWeight = { WAJIB: 1, DISARANKAN: 2, OPSIONAL: 3 };
    recommendations.sort((a, b) => (priorityWeight[a.priority] || 4) - (priorityWeight[b.priority] || 4));

    return { recommendations, exclusions };
  }

  generateVisualTransformation(editAreas, lockedAreas, cleanPrompt) {
    if (editAreas.length === 0 && lockedAreas.length === 0) {
      return {
        from: 'Kondisi visual awal gambar sebelum diproses',
        to: cleanPrompt || 'Belum ada transformasi yang diterapkan',
        summary: 'Tidak ada modifikasi visual signifikan yang terdeteksi.'
      };
    }

    const editSummaries = editAreas.map(e => e.label).join(', ');
    const lockSummaries = lockedAreas.map(l => l.label).join(', ');

    let fromText = 'Elemen visual awal gambar';
    let toText = 'Elemen visual teroptimasi';

    if (editAreas.some(e => e.entity === 'LIGHTING')) {
      fromText = 'Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)';
      toText = 'Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh';
    } else if (editAreas.some(e => e.entity === 'HEADWEAR')) {
      fromText = 'Subjek mengenakan penutup kepala / hijab asli';
      toText = 'Penutup kepala dilepas dengan rekonstruksi rambut alami; ' + (lockSummaries ? `wajah & identitas tetap 100% konsisten.` : '');
    } else if (editAreas.some(e => e.entity === 'OUTFIT')) {
      const outfitEdit = editAreas.find(e => e.entity === 'OUTFIT');
      fromText = 'Busana awal subjek';
      toText = `${outfitEdit ? outfitEdit.description : 'Busana baru terpasang'}` + (lockSummaries ? `; ${lockSummaries} tetap terkunci aman.` : '');
    } else if (editAreas.some(e => e.entity === 'BACKGROUND' && e.action.includes('REMOVE'))) {
      fromText = 'Foto subjek dengan latar belakang bawaan';
      toText = 'Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)';
    } else if (editAreas.some(e => e.entity === 'CANVAS')) {
      const canvasEdit = editAreas.find(e => e.entity === 'CANVAS');
      fromText = 'Dimensi kanvas bawaan foto';
      toText = `${canvasEdit ? canvasEdit.description : 'Dimensi kanvas baru disesuaikan'}`;
    }

    return {
      from: fromText,
      to: toText,
      summary: `Transformasi pada [${editSummaries || 'Tanpa Edit'}] dengan preservasi pada [${lockSummaries || 'Elemen Lain'}].`
    };
  }

  buildOptimalPrompt(cleanText, installedShorthands) {
    if (!cleanText && installedShorthands.length === 0) {
      return '';
    }

    // Clean prompt base
    let base = cleanText.trim();
    // Ensure terminal period before shorthand tags if prompt is non-empty
    if (base && !base.endsWith('.') && !base.endsWith('!') && !base.endsWith('?')) {
      base += '.';
    }

    // Append installed shorthands
    const shorthandsString = installedShorthands.join(' ');
    if (base && shorthandsString) {
      return `${base} ${shorthandsString}`;
    } else if (shorthandsString) {
      return shorthandsString;
    }
    return base;
  }

  getEmptyResult() {
    return {
      rawPrompt: '',
      normalizedPrompt: '',
      cleanText: '',
      intent: {
        primaryAction: '-',
        primaryTarget: '-',
        summary: 'Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.',
        priority: '-',
        category: '-'
      },
      editAreas: [],
      lockedAreas: [],
      unchangedAreas: [],
      conflicts: [],
      recommendations: [],
      exclusions: [],
      installedShorthands: [],
      visualTransformation: {
        from: '-',
        to: '-',
        summary: '-'
      },
      optimalPrompt: '',
      timestamp: null
    };
  }
}
