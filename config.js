// ============================================================
//  config.js — Kas RT Digital
//  Edit file ini sesuai data RT Anda
// ============================================================

// ── 1. URL Apps Script (dari Google Sheets) ──────────────────
//  Isi dengan URL deployment Apps Script Anda.
//  Cara mendapatkan URL: lihat README.md langkah 3-5
//const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSqloCklpz_ECqPvt-0JiIfO-mW9ZfENJq4ChsXVrcqjkJ4NqgwAAbSX1Cllt_BCkwJw/exec";
// Contoh:
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzSqloCklpz_ECqPvt-0JiIfO-mW9ZfENJq4ChsXVrcqjkJ4NqgwAAbSX1Cllt_BCkwJw/exec';


// ── 2. Identitas RT ──────────────────────────────────────────
const RT_NAME = 'Faisal';


// ── 3. Login Admin (bendahara) ───────────────────────────────
//  Tambah akun jika ada lebih dari satu bendahara.
//  Format: 'username': 'password'
const ADMIN_CREDENTIALS = {
  'ad': '123456',
  // 'ketua': 'password123',
};


// ── 4. Nominal Iuran (Rp) ────────────────────────────────────
//  Sesuaikan dengan besaran iuran RT Anda.
//  Digunakan untuk menghitung total terkumpul.
const NOMINAL_IURAN = {
  Kas:      20000,
  Listrik:  50000,
  Air:      30000,
  Sampah:   15000,
  Keamanan: 25000,
  Masjid: 10000
};
