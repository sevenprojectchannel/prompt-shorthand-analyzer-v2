/**
 * Shorthand Catalog Data V2
 * Struktur modular, dapat ditambah, dan dilengkapi atribut semantik lengkap.
 */

export const SHORTHAND_CATEGORIES = {
  LOCK_PRESERVATION: {
    id: 'LOCK_PRESERVATION',
    label: 'Lock & Preservation',
    color: '#3b82f6',
    description: 'Mengunci identitas, wajah, latar, atau pakaian agar tidak berubah'
  },
  IMAGE_EDIT: {
    id: 'IMAGE_EDIT',
    label: 'Edit & Transformasi Gambar',
    color: '#8b5cf6',
    description: 'Mengubah bagian tertentu seperti pakaian, background, atau objek'
  },
  QUALITY_ENHANCE: {
    id: 'QUALITY_ENHANCE',
    label: 'Kualitas & Pencahayaan',
    color: '#10b981',
    description: 'Meningkatkan ketajaman, resolusi, dan pencahayaan foto'
  },
  CANVAS_RATIO: {
    id: 'CANVAS_RATIO',
    label: 'Canvas & Rasio Aspek',
    color: '#f59e0b',
    description: 'Mengatur dimensi kanvas dan rasio aspek generasi'
  },
  STYLE_EFFECT: {
    id: 'STYLE_EFFECT',
    label: 'Gaya & Efek Visual',
    color: '#ec4899',
    description: 'Menerapkan grading warna, sinematik, atau kedalaman'
  }
};

export const INITIAL_SHORTHAND_CATALOG = [
  // --- LOCK & PRESERVATION ---
  {
    code: '/facelock',
    name: 'Face Lock & Identity Preservation',
    category: 'LOCK_PRESERVATION',
    target: 'Wajah, Fitur Muka, Identitas Karakter',
    description: 'Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.',
    triggerSemantics: ['jangan ubah wajah', 'pertahankan wajah', 'kunci muka', 'wajah asli', 'face lock', 'keep face', 'preserve identity', 'same face'],
    compatibility: ['/outfit', '/bgremove', '/bgreplace', '/enhance', '/ar 9:16', '/ar 16:9', '/sharpen'],
    conflicts: ['/faceedit', 'ubah wajah', 'ganti wajah', 'ekspresi baru', 'makeover wajah'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/hairlock',
    name: 'Hair Structure & Color Lock',
    category: 'LOCK_PRESERVATION',
    target: 'Rambut Subjek, Bentuk & Warna Rambut',
    description: 'Menjaga gaya rambut, tekstur, helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.',
    triggerSemantics: ['pertahankan rambut', 'jangan ubah rambut', 'rambut asli', 'kunci rambut', 'keep hair', 'same haircut'],
    compatibility: ['/facelock', '/outfit', '/bgremove', '/enhance'],
    conflicts: ['ganti gaya rambut', 'potong rambut', 'botak', 'ubah warna rambut', 'cat rambut'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/backgroundlock',
    name: 'Background Environment Lock',
    category: 'LOCK_PRESERVATION',
    target: 'Latar Belakang & Tata Ruang Sekitar',
    description: 'Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.',
    triggerSemantics: ['jangan ubah latar', 'pertahankan background', 'latar asli', 'kunci background', 'keep background', 'same backdrop'],
    compatibility: ['/facelock', '/outfit', '/enhance', '/sharpen'],
    conflicts: ['/bgremove', '/bgreplace', 'hapus background', 'ganti latar', 'latar transparan'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/outfitlock',
    name: 'Outfit & Clothing Lock',
    category: 'LOCK_PRESERVATION',
    target: 'Pakaian, Baju, Celana & Busana',
    description: 'Mempertahankan busana, warna, dan tekstur pakaian asli subjek agar tidak berubah.',
    triggerSemantics: ['jangan ubah baju', 'pertahankan pakaian', 'baju asli', 'kunci outfit', 'keep outfit', 'same clothes'],
    compatibility: ['/facelock', '/backgroundlock', '/enhance', '/ar 9:16'],
    conflicts: ['/outfit', 'ganti baju', 'ubah pakaian', 'tanktop', 'jaket', 'gaun'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/bodylock',
    name: 'Body Anatomy & Pose Lock',
    category: 'LOCK_PRESERVATION',
    target: 'Postur Tubuh, Anatomi & Siluet',
    description: 'Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.',
    triggerSemantics: ['jangan ubah tubuh', 'pertahankan pose', 'postur asli', 'kunci pose', 'keep body', 'same pose'],
    compatibility: ['/facelock', '/outfit', '/bgremove', '/enhance'],
    conflicts: ['ubah pose', 'ganti gestur', 'langsingkan', 'tubuh berotot'],
    priority: 'WAJIB',
    status: 'active'
  },

  // --- IMAGE EDIT & REMOVAL ---
  {
    code: '/outfit',
    name: 'Selective Outfit Replacement',
    category: 'IMAGE_EDIT',
    target: 'Area Busana & Pakaian Subjek',
    description: 'Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.',
    triggerSemantics: ['ganti baju', 'ubah pakaian', 'ganti outfit', 'pakai tanktop', 'pakai kemeja', 'baju baru', 'change clothes'],
    compatibility: ['/facelock', '/hairlock', '/enhance', '/ar 9:16'],
    conflicts: ['/outfitlock', 'pertahankan pakaian', 'jangan ubah baju'],
    priority: 'DISARANKAN',
    status: 'active'
  },
  {
    code: '/bgremove',
    name: 'Background Removal / Transparent Alpha',
    category: 'IMAGE_EDIT',
    target: 'Latar Belakang / Backdrop',
    description: 'Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.',
    triggerSemantics: ['hapus background', 'hapus latar', 'latar transparan', 'hilangkan latar belakang', 'remove background', 'clean cutout'],
    compatibility: ['/facelock', '/outfit', '/enhance', '/sharpen'],
    conflicts: ['/backgroundlock', '/bgreplace', 'pertahankan background', 'jangan ubah latar'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/bgreplace',
    name: 'Background Scene Replacement',
    category: 'IMAGE_EDIT',
    target: 'Latar Belakang & Pencahayaan Lingkungan',
    description: 'Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.',
    triggerSemantics: ['ganti background', 'ganti latar belakang', 'pindah ke studio', 'latar pantai', 'change background', 'new backdrop'],
    compatibility: ['/facelock', '/outfit', '/enhance'],
    conflicts: ['/backgroundlock', '/bgremove', 'pertahankan background'],
    priority: 'DISARANKAN',
    status: 'active'
  },
  {
    code: '/headwear-remove',
    name: 'Headwear / Hijab Removal',
    category: 'IMAGE_EDIT',
    target: 'Penutup Kepala / Aksesori Kepala / Hijab',
    description: 'Melepaskan atau menghapus hijab, topi, atau penutup kepala sambil merekonstruksi rambut dan garis leher secara anatomis.',
    triggerSemantics: ['hapus hijab', 'lepas hijab', 'buka hijab', 'tanpa hijab', 'hapus topi', 'remove headwear', 'no hijab'],
    compatibility: ['/facelock', '/outfit', '/enhance'],
    conflicts: ['pertahankan hijab', 'jangan ubah hijab'],
    priority: 'WAJIB',
    status: 'active'
  },

  // --- QUALITY & ENHANCEMENT ---
  {
    code: '/enhance',
    name: 'Global Lighting & Color Enhancement',
    category: 'QUALITY_ENHANCE',
    target: 'Seluruh Gambar, Ambience & Kontras',
    description: 'Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.',
    triggerSemantics: ['perbaiki pencahayaan', 'pencahayaan foto', 'terangkan foto', 'tata cahaya', 'enhance lighting', 'fix lighting', 'lighting balance'],
    compatibility: ['/facelock', '/sharpen', '/outfit', '/hdr', '/denoise'],
    conflicts: [],
    priority: 'DISARANKAN',
    status: 'active'
  },
  {
    code: '/sharpen',
    name: 'High-Frequency Detail Sharpening',
    category: 'QUALITY_ENHANCE',
    target: 'Detail Tekstur, Tepian Objek, Mata',
    description: 'Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.',
    triggerSemantics: ['buat foto lebih tajam', 'lebih tajam', 'tajamkan', 'perjelas detail', 'sharpen image', 'crisp focus', 'high clarity'],
    compatibility: ['/enhance', '/facelock', '/rawphoto', '/denoise'],
    conflicts: ['efek blur', 'soft focus'],
    priority: 'DISARANKAN',
    status: 'active'
  },
  {
    code: '/denoise',
    name: 'ISO Noise & Grain Reduction',
    category: 'QUALITY_ENHANCE',
    target: 'Area Berbintik, Bayangan, Langit',
    description: 'Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.',
    triggerSemantics: ['hilangkan noise', 'bersihkan bintik', 'hapus grain', 'foto bersih', 'clean noise', 'remove grain'],
    compatibility: ['/enhance', '/sharpen', '/facelock'],
    conflicts: ['vintage grain', 'film grain'],
    priority: 'OPSIONAL',
    status: 'active'
  },
  {
    code: '/hdr',
    name: 'High Dynamic Range Reconstruction',
    category: 'QUALITY_ENHANCE',
    target: 'Highlight Terbakar & Shadow Gelap',
    description: 'Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).',
    triggerSemantics: ['hdr', 'dynamic range', 'pulihkan bayangan', 'jangan terlalu silau', 'seimbangkan highlight'],
    compatibility: ['/enhance', '/colorgrade', '/rawphoto'],
    conflicts: [],
    priority: 'OPSIONAL',
    status: 'active'
  },

  // --- CANVAS & RATIO ---
  {
    code: '/ar 9:16',
    name: 'Vertical Aspect Ratio 9:16',
    category: 'CANVAS_RATIO',
    target: 'Kanvas & Komposisi Vertikal (Stories / Reels)',
    description: 'Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.',
    triggerSemantics: ['ubah rasio menjadi 9:16', 'rasio 9:16', 'format vertical', 'story format', 'reels format', 'ar 9:16', 'potret tinggi'],
    compatibility: ['/facelock', '/outfit', '/enhance', '/fullbody'],
    conflicts: ['/ar 16:9', '/ar 1:1', '/ar 4:5', 'rasio 16:9', 'rasio 1:1'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/ar 16:9',
    name: 'Widescreen Aspect Ratio 16:9',
    category: 'CANVAS_RATIO',
    target: 'Kanvas & Komposisi Horizontal (Landscape / YouTube)',
    description: 'Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.',
    triggerSemantics: ['ubah rasio menjadi 16:9', 'rasio 16:9', 'format landscape', 'layar lebar', 'ar 16:9', 'widescreen'],
    compatibility: ['/facelock', '/enhance', '/cinematic'],
    conflicts: ['/ar 9:16', '/ar 1:1', 'rasio 9:16'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/ar 1:1',
    name: 'Square Aspect Ratio 1:1',
    category: 'CANVAS_RATIO',
    target: 'Kanvas Persegi Simetris (Feed Instagram)',
    description: 'Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.',
    triggerSemantics: ['rasio 1:1', 'format persegi', 'kotak', 'square aspect', 'ar 1:1'],
    compatibility: ['/facelock', '/outfit', '/enhance'],
    conflicts: ['/ar 9:16', '/ar 16:9'],
    priority: 'WAJIB',
    status: 'active'
  },
  {
    code: '/fullbody',
    name: 'Full Body Framing & Shot Scale',
    category: 'CANVAS_RATIO',
    target: 'Skala Subjek dari Ujung Kepala ke Kaki',
    description: 'Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).',
    triggerSemantics: ['tampilkan full body', 'seluruh tubuh', 'tampak badan penuh', 'full body shot', 'head to toe'],
    compatibility: ['/ar 9:16', '/outfit', '/bodylock', '/facelock'],
    conflicts: ['close up', 'zoom wajah'],
    priority: 'DISARANKAN',
    status: 'active'
  },

  // --- STYLE & EFFECT ---
  {
    code: '/cinematic',
    name: 'Cinematic Mood & Depth Lighting',
    category: 'STYLE_EFFECT',
    target: 'Atmosfer Sinematik, Kontras & Grading',
    description: 'Memberikan sentuhan sinematik ala layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.',
    triggerSemantics: ['gaya sinematik', 'nuansa film', 'cinematic lighting', 'film look', 'dramatis'],
    compatibility: ['/enhance', '/facelock', '/colorgrade'],
    conflicts: [],
    priority: 'OPSIONAL',
    status: 'active'
  },
  {
    code: '/rawphoto',
    name: 'Authentic RAW Photography Look',
    category: 'STYLE_EFFECT',
    target: 'Tekstur Kulit Alami & Sensor Kamera',
    description: 'Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami.',
    triggerSemantics: ['foto asli', 'raw photo', 'seperti jepretan kamera', 'tekstur kulit nyata', 'realistic camera'],
    compatibility: ['/facelock', '/enhance', '/sharpen'],
    conflicts: ['kartun', 'anime', 'vektor'],
    priority: 'OPSIONAL',
    status: 'active'
  },
  {
    code: '/colorgrade',
    name: 'Master Color Grading',
    category: 'STYLE_EFFECT',
    target: 'Harmonisasi Palet Warna & Suasana',
    description: 'Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.',
    triggerSemantics: ['color grading', 'atur warna', 'tone warna', 'palet warna estetik'],
    compatibility: ['/enhance', '/cinematic', '/facelock'],
    conflicts: [],
    priority: 'OPSIONAL',
    status: 'active'
  }
];
