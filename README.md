# Prompt Shorthand Analyzer V2

> **Aplikasi Web Cerdas Analisis Prompt Semantik, Rekomendasi Notasi Shorthand Visual, dan Preservasi Identitas.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-success.svg)](https://sevenprojectchannel.github.io/prompt-shorthand-analyzer-v2/)
[![BYOK Gemini](https://img.shields.io/badge/Gemini%20API-BYOK%20Enabled-blueviolet.svg)](https://aistudio.google.com/)

Aplikasi web modern (V2) berarsitektur modular yang dirancang untuk menganalisis prompt generasi dan pengeditan gambar secara semantik — memetakan instruksi user ke direktif shorthand visual yang optimal, mengunci elemen identitas (face, outfit, background lock), dan mendeteksi konflik instruksi secara otomatis.

---

## 🚀 Fitur Utama

- **Pipeline Analisis Semantik Menyeluruh**:
  - `User Prompt` &rarr; `Normalisasi` &rarr; `Semantic Intent` &rarr; `Ekstraksi Area & Entitas` &rarr; `Edit vs Lock Intent` &rarr; `Deteksi Konflik` &rarr; `Pemetaan Shorthand` &rarr; `Rekomendasi Berjenjang` &rarr; `Prompt Optimal`.
- **Preservasi & Lock Cerdas**:
  - Memahami instruksi preservasi: misal *"hapus hijab, jangan ubah wajah"* secara akurat mengunci wajah subjek (`/facelock`) tanpa mengubah background atau pakaian.
- **Deteksi Konflik Otomatis**:
  - Mendeteksi instruksi yang saling bertentangan (misal: perintah mempertahankan rambut vs perintah mencukur botak) dan menyediakan opsi resolusi interaktif.
- **Rekomendasi Berjenjang (WAJIB, DISARANKAN, OPSIONAL)**:
  - Disertai target spesifik dan alasan rasional dalam bahasa Indonesia yang mudah dipahami.
- **Daftar Shorthand Dikecualikan (Bagian H)**:
  - Menampilkan shorthand yang tidak relevan beserta alasannya untuk transparansi keputusan engine.
- **Shorthand Terpasang Interaktif**:
  - Pengguna dapat menambah atau menghapus tag shorthand secara manual dengan pembaruan instan pada Prompt Optimal.
- **Salin Prompt Murni**:
  - Tombol **SALIN PROMPT** hanya menyalin teks prompt bersih dan tag shorthand aktif, bebas dari boilerplate atau metadata.
- **Centralized BYOK (Bring Your Own Key) Gemini API**:
  - Dukungan Google Gemini API (model `gemini-2.5-flash`, `gemini-2.5-pro`, `gemini-2.0-flash`, `gemini-1.5-flash`).
  - Indikator status koneksi real-time: 🟢 Tersambung, 🟡 Belum diuji, 🔴 Gagal.
  - **Fallback Heuristic Otomatis**: Jika API Key tidak diisi atau offline, engine lokal tetap berjalan normal tanpa kendala.
- **Menu Test (JSON)**:
  - Inspeksi data input & output JSON terstruktur, status validasi, dan salin JSON.
- **Katalog Lengkap & Interaktif**:
  - Pencarian pintar dan filter kategori untuk menemukan seluruh direktif shorthand visual.

---

## 🛠️ Arsitektur Folder

```
/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── .env.example
├── README.md
├── dist/                   # Production build untuk GitHub Pages
├── src/
│   ├── main.js             # Application orchestrator
│   ├── components/         # Modular UI components
│   │   ├── Header.js
│   │   ├── AnalyzerPage.js
│   │   ├── PromptInput.js
│   │   ├── PresetTests.js
│   │   ├── ConflictBanner.js
│   │   ├── PromptOptimal.js
│   │   ├── InstalledShorthands.js
│   │   ├── SemanticIntent.js
│   │   ├── EditAreas.js
│   │   ├── LockedAreas.js
│   │   ├── VisualTransformation.js
│   │   ├── ShorthandRecommendations.js
│   │   ├── ExcludedShorthands.js
│   │   ├── CatalogPage.js
│   │   ├── JsonTestPage.js
│   │   └── SettingsPage.js
│   ├── services/
│   │   ├── geminiService.js   # Centralized BYOK Gemini API
│   │   └── storageService.js  # Client-side localStorage
│   ├── lib/
│   │   ├── semanticEngine.js  # Heuristic & semantic pipeline
│   │   └── promptFormatter.js # Metric counters & prompt cleaner
│   ├── data/
│   │   ├── catalogData.js     # Modular shorthand catalog
│   │   └── presetsData.js     # Preset test cases
│   └── styles/
│       ├── main.css           # Dark theme design system
│       └── components.css     # Component-specific styles
└── test/
    └── run-tests.js        # Node.js automated test suite
```

---

## 💻 Menjalankan Secara Lokal

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/sevenprojectchannel/prompt-shorthand-analyzer-v2.git
   cd prompt-shorthand-analyzer-v2
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan unit test**:
   ```bash
   npm test
   ```

4. **Jalankan local development server**:
   ```bash
   npm run dev
   ```

5. **Build produksi**:
   ```bash
   npm run build
   ```

---

## 🔒 Privasi & Keamanan

- Kunci API pengguna disimpan secara eksklusif di `localStorage` peramban lokal perangkat pengguna.
- Tidak ada panggilan API pihak ketiga atau pelacakan telemetri eksternal.
- Tidak ada hardcoded credentials.

---

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT.
