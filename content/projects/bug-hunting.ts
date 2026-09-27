import type { Project } from '@/lib/types';

// draft:true - TIDAK ditampilkan & tidak di-build di production; hanya tampil di `next dev`.
// Ini hanya TEMPLATE. Tidak ada konten bug yang diisi (brief §6).
// Kartu bug & detail dirender dari content/bugs (kosong secara default).

export const bugHunting: Project = {
  slug: 'bug-hunting',
  title: { en: 'Bug Hunting Log', id: 'Catatan Bug Hunting' },
  subtitle: {
    en: 'Documented defects, investigations, and outcomes',
    id: 'Defect terdokumentasi, investigasi, dan hasilnya',
  },
  label: 'Personal project',
  tags: ['Manual'],
  featured: false,
  draft: true,
  order: 5,
  techStack: [],
  metrics: [],
  links: [],
  // REVIEW(fajar): teks pengantar template - bug asli diisi di content/bugs/.
  overview: [
    {
      en: 'A template for logging bugs found during testing. Each entry records the context, exact reproduction steps, expected vs. actual behaviour, the investigation, and the final status.',
      id: 'Template untuk mencatat bug yang ditemukan saat pengujian. Setiap entri merekam konteks, langkah reproduksi yang persis, perilaku yang diharapkan vs aktual, investigasinya, dan status akhirnya.',
    },
    {
      en: 'No bugs are published yet - add one file per bug under content/bugs/ using content/bugs/_example.ts as the starting point.',
      id: 'Belum ada bug yang dipublikasikan - tambahkan satu file per bug di content/bugs/ dengan content/bugs/_example.ts sebagai titik awal.',
    },
  ],
  objective: {
    en: 'Keep a clear, reproducible record of defects: what was found, how to reproduce it, what was expected, and how it was investigated and resolved.',
    id: 'Menyimpan catatan defect yang jelas dan dapat direproduksi: apa yang ditemukan, cara mereproduksinya, apa yang diharapkan, serta bagaimana diinvestigasi dan diselesaikan.',
  },
};
