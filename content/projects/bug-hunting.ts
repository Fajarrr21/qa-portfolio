import type { Project } from '@/lib/types';

// Isi bug ada di content/bugs/ dan dirender oleh komponen BugLog di
// components/pages/CaseStudyPage.tsx.
//
// KERAHASIAAN: seluruh temuan di sini berasal dari ParaBank, aplikasi demo
// publik. Jangan menambahkan temuan dari produk kantor - aturan yang sama
// dengan cards-school-v3 berlaku penuh.

export const bugHunting: Project = {
  slug: 'bug-hunting',
  title: { en: 'Bug Hunting Log', id: 'Catatan Bug Hunting' },
  subtitle: {
    en: 'Eleven defects written up so a developer can act on them without asking a follow-up question',
    id: 'Sebelas cacat yang ditulis supaya developer bisa menindaklanjuti tanpa perlu bertanya lagi',
  },
  label: 'Personal project',
  tags: ['Manual'],
  featured: false,
  order: 6,
  // techStack tidak diterjemahkan (nama tool apa adanya).
  techStack: ['Cypress', 'Chrome DevTools'],
  metrics: [
    { value: '11', label: { en: 'Defects logged', id: 'Cacat tercatat' } },
    { value: '3', label: { en: 'Rated Critical', id: 'Berstatus Critical' } },
    { value: '4', label: { en: 'Reflected as failing tests', id: 'Tercermin sebagai test gagal' } },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/project-parabank' },
  ],
  overview: [
    {
      en: 'Defects from two pieces of work. Six come from ParaBank, Parasoft\'s public demo banking application, found while building the automation suite for it. Five come from a design-compliance review, comparing a delivered chat interface against its design file. They are logged here rather than inside those case studies because writing a defect up is a different skill from finding one: the suite proves the behaviour is wrong, the report is what makes it fixable.',
      id: 'Cacat dari dua pekerjaan. Enam berasal dari ParaBank, aplikasi demo perbankan publik milik Parasoft, ditemukan saat membangun suite automation untuknya. Lima berasal dari review kesesuaian desain, membandingkan antarmuka chat yang dikirim dengan berkas desainnya. Dicatat di sini alih-alih di dalam case study masing-masing karena menuliskan sebuah cacat adalah keterampilan yang berbeda dari menemukannya: suite membuktikan perilakunya salah, laporannyalah yang membuatnya bisa diperbaiki.',
    },
    {
      en: 'Four of the eleven are reflected as tests deliberately left failing. Two were found by reading the application\'s own markup rather than by any test - the part automation cannot do for you.',
      id: 'Empat dari sebelas tercermin sebagai test yang sengaja dibiarkan gagal. Dua ditemukan dengan membaca markup aplikasinya sendiri, bukan oleh test mana pun - bagian yang tidak bisa digantikan automation.',
    },
    {
      en: 'This is a selection, not the full log. Findings that were purely about spacing are left out, and defects found in the products I test at work are not published at all - those appear only as a total in the CARDS case study. A bug log is judged by how deeply one entry is understood, not by how long the list is.',
      id: 'Ini pilihan, bukan catatan lengkapnya. Temuan yang murni soal jarak antar elemen tidak dimasukkan, dan cacat yang ditemukan di produk yang saya uji di tempat kerja tidak ditayangkan sama sekali - yang itu hanya muncul sebagai jumlah di case study CARDS. Catatan bug dinilai dari sedalam apa satu entri dipahami, bukan dari sepanjang apa daftarnya.',
    },
  ],
  objective: {
    en: 'Record each defect so that someone who has never seen it can reproduce it, understand why it matters, and judge how urgent it is - without asking a follow-up question.',
    id: 'Mencatat tiap cacat supaya orang yang belum pernah melihatnya bisa mereproduksi, memahami kenapa itu penting, dan menilai seberapa mendesaknya - tanpa perlu bertanya lagi.',
  },
  strategy: [
    {
      en: 'Expected and actual are always written as two separate statements. "Does not work" is not a bug report.',
      id: 'Expected dan actual selalu ditulis sebagai dua pernyataan terpisah. "Tidak berfungsi" bukan laporan bug.',
    },
    {
      en: 'Severity describes how bad the behaviour is, judged by consequence rather than by how visible it is. A reversed transfer outranks a missing error message.',
      id: 'Severity menggambarkan seberapa buruk perilakunya, dinilai dari akibatnya, bukan dari seberapa kelihatan. Transfer yang terbalik arah lebih berat daripada pesan error yang tidak muncul.',
    },
    {
      en: 'Defects that share a root cause are still logged separately when a fix for one would not fix the other, with the relationship stated in the investigation.',
      id: 'Cacat yang berakar sama tetap dicatat terpisah kalau perbaikan untuk satu belum tentu memperbaiki yang lain, dengan kaitannya disebutkan di bagian investigasi.',
    },
    {
      en: 'The investigation field records what was checked to confirm this is a real defect rather than a misread - including, where relevant, why no automated test covers it.',
      id: 'Bagian investigasi mencatat apa yang diperiksa untuk memastikan ini benar-benar cacat dan bukan salah baca - termasuk, kalau relevan, kenapa tidak ada test otomatis yang mencakupnya.',
    },
  ],
};
