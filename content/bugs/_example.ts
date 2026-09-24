import type { Bug } from '@/lib/types';

// ============================================================================
// TEMPLATE BUG - file contoh berisi field KOSONG.
//
// Cara pakai:
//   1. Salin file ini menjadi content/bugs/<id>.ts, mis. content/bugs/bug-0001.ts.
//   2. Ganti nama export `exampleBug` menjadi unik, mis. `bug0001`.
//   3. Isi setiap field di bawah (jangan biarkan kosong pada bug asli).
//   4. Daftarkan di content/bugs/index.ts.
//
// Panduan tiap field:
//   id           : ID unik & stabil, mis. "BUG-0001" (dipakai di URL /bugs/<id>).
//   title        : Ringkasan satu kalimat, spesifik. "X terjadi ketika Y".
//   severity     : 'Critical' | 'High' | 'Medium' | 'Low'.
//   type         : Kategori, mis. "Functional", "UI", "Validation", "Performance".
//   context      : Di mana & pada kondisi apa bug muncul (modul, platform, role).
//   steps        : Langkah reproduksi berurutan, satu langkah per string.
//   expected     : Perilaku yang seharusnya terjadi.
//   actual       : Perilaku yang benar-benar terjadi.
//   investigation: Apa yang kamu telusuri untuk memastikan ini defect nyata.
//   evidence     : Screenshot/video (isi src relatif ke /public, atau biarkan
//                  todo untuk placeholder). Boleh array kosong.
//   status       : mis. "Open", "In review", "Fixed", "Won't fix", "Duplicate".
// ============================================================================

export const exampleBug: Bug = {
  id: '',
  title: '',
  severity: 'Medium',
  type: '',
  context: '',
  steps: [''],
  expected: '',
  actual: '',
  investigation: '',
  evidence: [
    // { src: '/evidence/bug-0001.png', alt: '', caption: '', kind: 'image' },
  ],
  status: '',
};
