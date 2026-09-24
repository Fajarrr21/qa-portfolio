import type { Project } from '@/lib/types';

// draft:true - TIDAK ditampilkan & tidak di-build di production; hanya tampil di `next dev`.
// Ini hanya TEMPLATE. Tidak ada konten bug yang diisi (brief §6).
// Kartu bug & detail dirender dari content/bugs (kosong secara default).

export const bugHunting: Project = {
  slug: 'bug-hunting',
  title: 'Bug Hunting Log',
  subtitle: 'Documented defects, investigations, and outcomes',
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
    'A template for logging bugs found during testing. Each entry records the context, exact reproduction steps, expected vs. actual behaviour, the investigation, and the final status.',
    'No bugs are published yet - add one file per bug under content/bugs/ using content/bugs/_example.ts as the starting point.',
  ],
  objective:
    'Keep a clear, reproducible record of defects: what was found, how to reproduce it, what was expected, and how it was investigated and resolved.',
};
