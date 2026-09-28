// Label antarmuka (bukan konten). Semua teks UI tinggal di sini, bukan di
// dalam komponen, supaya menambah bahasa cukup menyentuh satu file.
//
// REVIEW(fajar): seluruh string `id:` di file ini adalah terjemahan dari versi
// Inggris yang sudah ada - mohon dibaca ulang, terutama istilah QA yang biasa
// kamu pakai sehari-hari (mis. "Proyek" vs "Karya", "pengujian" vs "testing").

import type { L10n } from '@/lib/i18n';

export const ui = {
  a11y: {
    skipToContent: { en: 'Skip to content', id: 'Lompat ke konten' },
    mainNav: { en: 'Main', id: 'Utama' },
    openMenu: { en: 'Open menu', id: 'Buka menu' },
    closeMenu: { en: 'Close menu', id: 'Tutup menu' },
    language: { en: 'Language', id: 'Bahasa' },
    filterProjects: { en: 'Filter projects', id: 'Filter proyek' },
  },

  nav: {
    work: { en: 'Work', id: 'Proyek' },
    about: { en: 'About', id: 'Tentang' },
    contact: { en: 'Contact', id: 'Kontak' },
    resume: { en: 'Resume', id: 'CV' },
    resumeEn: { en: 'English (PDF)', id: 'Inggris (PDF)' },
    resumeId: { en: 'Bahasa Indonesia (PDF)', id: 'Bahasa Indonesia (PDF)' },
  },

  home: {
    heroCta: { en: 'Explore my work', id: 'Lihat proyek saya' },
    downloadCv: { en: 'Download CV', id: 'Unduh CV' },
    whatIDoEyebrow: { en: 'What I do', id: 'Yang saya kerjakan' },
    whatIDoTitle: {
      en: 'Testing across the stack',
      id: 'Pengujian di seluruh lapisan sistem',
    },
    featuredEyebrow: { en: 'Featured work', id: 'Proyek pilihan' },
    featuredTitle: { en: 'Selected case studies', id: 'Studi kasus pilihan' },
    viewAllWork: { en: 'View all work', id: 'Lihat semua proyek' },
    viewExperience: { en: 'View experience', id: 'Lihat pengalaman' },
    // Versi EN sengaja provokatif ("needs breaking"). Versi ID dibuat menjaga
    // energi yang sama tapi tanpa bahasa gaul - "sampai jebol" terasa terlalu
    // santai untuk halaman yang dibaca recruiter.
    ctaTitle: {
      en: 'Have software that needs breaking?',
      id: 'Punya software yang perlu diuji sampai batasnya?',
    },
    ctaSubtitle: { en: "Let's talk.", id: 'Mari ngobrol.' },
  },

  about: {
    metaTitle: { en: 'About', id: 'Tentang' },
    metaDescription: {
      en: 'Profile, experience, QA journey, testing approach, and tools.',
      id: 'Profil, pengalaman, perjalanan QA, pendekatan pengujian, dan tools.',
    },
    eyebrow: { en: 'About', id: 'Tentang' },
    title: { en: 'About me', id: 'Tentang saya' },
    experienceEyebrow: { en: 'Experience', id: 'Pengalaman' },
    experienceTitle: { en: 'Where I work', id: 'Tempat saya bekerja' },
    journeyEyebrow: { en: 'QA journey', id: 'Perjalanan QA' },
    journeyTitle: { en: 'How I got here', id: 'Bagaimana saya sampai di sini' },
    howEyebrow: { en: 'How I test', id: 'Cara saya menguji' },
    howTitle: { en: 'My approach', id: 'Pendekatan saya' },
    howDescription: {
      en: 'A repeatable path from understanding a feature to protecting it against regressions.',
      id: 'Alur yang berulang dan konsisten, dari memahami sebuah fitur sampai menjaganya dari regresi.',
    },
    toolsEyebrow: { en: 'Tools', id: 'Tools' },
    toolsTitle: { en: 'What I work with', id: 'Yang saya pakai' },
    journeyRailNote: {
      en: 'Manual testing runs continuously beneath the milestones above - automation is added on top, not in its place.',
      id: 'Manual testing berjalan terus di bawah seluruh milestone di atas. Automation ditambahkan di atasnya, bukan menggantikannya.',
    },
  },

  work: {
    metaTitle: { en: 'Work', id: 'Proyek' },
    metaDescription: {
      en: 'Selected QA projects: automation, testing, bug investigation, and performance work.',
      id: 'Proyek QA pilihan: automation, pengujian, investigasi bug, dan pekerjaan performance.',
    },
    eyebrow: { en: 'Selected QA projects', id: 'Proyek QA pilihan' },
    title: { en: 'Work', id: 'Proyek' },
    description: {
      en: 'Automation, testing, bug investigation, and performance work.',
      id: 'Automation, pengujian, investigasi bug, dan pekerjaan performance.',
    },
    filterAll: { en: 'All', id: 'Semua' },
    emptyFilter: {
      en: 'No projects match this filter.',
      id: 'Tidak ada proyek yang cocok dengan filter ini.',
    },
  },

  contact: {
    metaTitle: { en: 'Contact', id: 'Kontak' },
    eyebrow: { en: 'Contact', id: 'Kontak' },
    title: { en: "Let's connect", id: 'Mari terhubung' },
    description: {
      en: 'Open to QA Engineer opportunities, testing projects, and collaborations.',
      id: 'Terbuka untuk peluang sebagai QA Engineer, proyek pengujian, dan kolaborasi.',
    },
    // Status ketersediaan - ditampilkan di atas kartu kanal kontak.
    statusTitle: { en: 'Open to opportunities', id: 'Terbuka untuk peluang' },
    statusDetail: {
      en: 'QA Engineer roles - remote, hybrid, or onsite.',
      id: 'Peran QA Engineer - remote, hybrid, maupun onsite.',
    },
    basedIn: { en: 'Based in', id: 'Berbasis di' },
    respondNote: {
      en: 'Email is the fastest way to reach me.',
      id: 'Email adalah cara tercepat menghubungi saya.',
    },
  },

  project: {
    personal: { en: 'Personal project', id: 'Proyek pribadi' },
    professional: { en: 'Professional work', id: 'Pekerjaan profesional' },
    viewCaseStudy: { en: 'View case study', id: 'Lihat studi kasus' },
    allWork: { en: 'All work', id: 'Semua proyek' },
  },

  // Judul section di halaman case study. Section hanya dirender kalau datanya ada.
  caseStudy: {
    overview: { en: 'Overview', id: 'Ringkasan' },
    objective: { en: 'Objective', id: 'Tujuan' },
    benchmarkDesign: { en: 'Benchmark design', id: 'Desain benchmark' },
    scope: { en: 'Testing scope', id: 'Cakupan pengujian' },
    strategy: { en: 'Test strategy', id: 'Strategi pengujian' },
    measurementIntegrity: { en: 'Measurement integrity', id: 'Integritas pengukuran' },
    architecture: { en: 'Architecture', id: 'Arsitektur' },
    implementation: { en: 'Implementation', id: 'Implementasi' },
    resultsThroughput: { en: 'Results - throughput', id: 'Hasil - throughput' },
    results: { en: 'Results', id: 'Hasil' },
    evidence: { en: 'Evidence', id: 'Bukti' },
    showAsTable: { en: 'Show as table', id: 'Tampilkan sebagai tabel' },
    loadLevel: { en: 'Load', id: 'Beban' },
    bugLog: { en: 'Bug log', id: 'Catatan bug' },
    links: { en: 'Links', id: 'Tautan' },
    illustrative: {
      en: 'Illustrative example - not production code',
      id: 'Contoh ilustratif - bukan kode production',
    },
  },

  bug: {
    context: { en: 'Context', id: 'Konteks' },
    status: { en: 'Status', id: 'Status' },
    steps: { en: 'Steps to reproduce', id: 'Langkah reproduksi' },
    expected: { en: 'Expected', id: 'Hasil yang diharapkan' },
    actual: { en: 'Actual', id: 'Hasil aktual' },
    investigation: { en: 'Investigation', id: 'Investigasi' },
    viewDetail: { en: 'View detail', id: 'Lihat detail' },
    emptyLog: {
      en: 'No bugs published yet. This is a template - each bug is one file under content/bugs/, recording id, title, severity, type, context, steps, expected, actual, investigation, evidence, and status.',
      id: 'Belum ada bug yang dipublikasikan. Ini template - satu bug adalah satu file di content/bugs/, berisi id, judul, severity, tipe, konteks, langkah, hasil yang diharapkan, hasil aktual, investigasi, bukti, dan status.',
    },
  },

  notFound: {
    title: { en: 'Page not found', id: 'Halaman tidak ditemukan' },
    description: {
      en: "The page you're looking for doesn't exist or may have moved.",
      id: 'Halaman yang kamu cari tidak ada atau mungkin sudah dipindahkan.',
    },
    back: { en: 'Back to home', id: 'Kembali ke beranda' },
  },

  meta: {
    siteDescription: {
      en: 'QA Engineer portfolio: manual, API, automation, and performance testing across web, mobile, and POS.',
      id: 'Portofolio QA Engineer: manual, API, automation, dan performance testing di web, mobile, dan POS.',
    },
  },
} satisfies Record<string, Record<string, L10n>>;
