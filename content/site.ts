// Semua teks situs tinggal di sini (bukan di dalam komponen).
// Sumber fakta: resume "CV - Fajar Ardiansyah - QA Engineer (EN)".
// Paragraf yang ditulis ulang dari fakta ditandai // REVIEW(fajar).
//
// Dwibahasa: field prosa bertipe Text - string biasa kalau sama di kedua
// bahasa (nama tool, nama produk, istilah QA yang memang dipakai apa adanya),
// atau { en, id } kalau perlu terjemahan. Lihat lib/i18n.ts.
//
// REVIEW(fajar): seluruh string `id:` di file ini adalah terjemahan dari versi
// Inggris yang faktanya sudah kamu setujui. Angka, nama produk, dan nama tool
// tidak diubah. Mohon dibaca ulang untuk pemilihan istilahnya.

import type { Text } from '@/lib/i18n';

export interface SkillCard {
  title: Text;
  items: Text[];
}

export interface ExperienceItem {
  role: Text;
  org: string;
  period: Text;
  location: Text;
  context: Text;
  bullets: Text[];
}

export interface JourneyItem {
  date: Text;
  title: Text;
  /** Tautan verifikasi sertifikat. Harus permanen - jangan signed URL yang kedaluwarsa. */
  href?: string;
  /** Keterangan kecil di bawah judul, mis. nomor atau ID sertifikat. */
  note?: Text;
}

export interface StatItem {
  value: string;
  label: Text;
}

export const site = {
  name: 'Fajar Ardiansyah',
  role: 'Quality Assurance Engineer',
  location: {
    en: 'Purwokerto, Central Java, Indonesia',
    id: 'Purwokerto, Jawa Tengah, Indonesia',
  } as Text,
  tagline: {
    en: 'I test software beyond the happy path.',
    id: 'Saya menguji software melampaui happy path.',
  } as Text,
  subline: 'Manual · API · Automation · Performance',

  links: {
    github: 'https://github.com/Fajarrr21',
    linkedin: 'https://www.linkedin.com/in/fajarardiansy/',
    email: 'fajarardiansyah912@gmail.com',
  },

  // File PDF diletakkan di public/resume/ (path tanpa basePath - dibungkus asset()).
  resume: {
    en: '/resume/Fajar-Ardiansyah-QA-Engineer-EN.pdf',
    id: '/resume/Fajar-Ardiansyah-QA-Engineer-ID.pdf',
  },

  // Home - Stats (nilai persis sesuai brief §4).
  stats: [
    { value: '1+', label: { en: 'Year in QA', id: 'Tahun di QA' } },
    {
      value: '847+',
      label: {
        en: 'Automated test cases on CARDS School V3',
        id: 'Test case otomatis di CARDS School V3',
      },
    },
    {
      value: '60+',
      label: { en: 'QA interns coordinated', id: 'Intern QA yang dikoordinasi' },
    },
    {
      value: '712K+',
      label: {
        en: 'Requests in a load-test benchmark',
        id: 'Request dalam benchmark load test',
      },
    },
  ] as StatItem[],

  // Home - What I do (empat kartu, isi dari kategori skill di resume).
  skills: [
    {
      title: 'Manual Testing',
      items: [
        {
          en: 'Test scenario & test case design',
          id: 'Perancangan skenario & test case',
        },
        'Regression, UI & responsive testing',
        'Exploratory testing',
        'User Acceptance Testing',
      ],
    },
    {
      title: 'Automation',
      items: [
        {
          en: 'End-to-end UI testing with Cypress',
          id: 'UI testing end-to-end dengan Cypress',
        },
        'Page Object Model',
        {
          en: 'Data-driven fixtures & custom commands',
          id: 'Fixture data-driven & custom command',
        },
        { en: 'Test case ID traceability', id: 'Ketertelusuran test case ID' },
      ],
    },
    {
      title: 'API Testing',
      items: [
        { en: 'REST API testing with Postman', id: 'Pengujian REST API dengan Postman' },
        {
          en: 'Status code & response structure validation',
          id: 'Validasi status code & struktur response',
        },
        {
          en: 'Negative testing & auth token flow',
          id: 'Negative testing & alur auth token',
        },
        { en: 'End-to-end CRUD', id: 'CRUD end-to-end' },
      ],
    },
    {
      title: 'Performance Testing',
      items: [
        { en: 'Load testing with k6', id: 'Load testing dengan k6' },
        { en: 'Load scenario design', id: 'Perancangan skenario beban' },
        { en: 'Thresholds & SLA', id: 'Threshold & SLA' },
        { en: 'Throughput & latency analysis', id: 'Analisis throughput & latency' },
      ],
    },
  ] as SkillCard[],

  // About - Experience (context line + 8 bullet dari resume).
  experience: {
    role: 'QA Engineer',
    org: 'PT. Cazh Teknologi Inovasi (CARDS)',
    period: { en: 'Jul 2025 - Present', id: 'Jul 2025 - Sekarang' },
    location: {
      en: 'Purwokerto, Central Java, Indonesia',
      id: 'Purwokerto, Jawa Tengah, Indonesia',
    },
    context: {
      en: 'Sole QA engineer in a development team of five developers, two PMs, and one UI/UX designer; defining test coverage and bug reporting standards.',
      id: 'Satu-satunya QA engineer di tim development yang berisi lima developer, dua PM, dan satu desainer UI/UX; menetapkan standar cakupan pengujian dan pelaporan bug.',
    },
    bullets: [
      {
        en: 'Tested the CARDS ecosystem used by 700+ educational institutions - CARDS School (web dashboard), CARDS Parents, CARDS EDU, and Cazh POS together with its web dashboard on both Android and iOS - covering finance modules (student admissions, invoices, arrears, donations, savings, balance top-up and withdrawal) and the attendance module, as well as selected modules of the core banking system for BKD Pekalongan.',
        id: 'Menguji ekosistem CARDS yang dipakai 700+ lembaga pendidikan - CARDS School (dashboard web), CARDS Parents, CARDS EDU, dan Cazh POS beserta dashboard web-nya di Android maupun iOS - mencakup modul keuangan (penerimaan siswa baru, tagihan, tunggakan, donasi, tabungan, top-up dan penarikan saldo) dan modul presensi, serta sejumlah modul core banking system untuk BKD Pekalongan.',
      },
      {
        en: 'Designed test scenarios and test cases for new and changed features, ran regression, UI, exploratory, and responsive testing across web, mobile, and POS platforms, and prepared and executed User Acceptance Testing scenarios before release.',
        id: 'Merancang skenario dan test case untuk fitur baru maupun fitur yang berubah, menjalankan regression, UI, exploratory, dan responsive testing di platform web, mobile, dan POS, serta menyiapkan dan menjalankan skenario User Acceptance Testing sebelum rilis.',
      },
      {
        en: 'Built end-to-end automation in Cypress using the Page Object Model for the latest major releases: ~847 test cases across 64 spec files on CARDS School V3, and 86 test cases on the Cazh POS web dashboard (CPA V2).',
        id: 'Membangun automation end-to-end dengan Cypress memakai Page Object Model untuk rilis mayor terbaru: ~847 test case di 64 file spec pada CARDS School V3, dan 86 test case pada dashboard web Cazh POS (CPA V2).',
      },
      {
        en: 'Designed the automation suite to stay traceable to the test case documentation, with every test carrying its own test case ID, using data-driven fixtures, cy.intercept for request and response verification, cy.session to avoid repeating login per test, and Mochawesome reporting.',
        id: 'Merancang automation suite agar tetap tertelusur ke dokumentasi test case, dengan setiap test membawa test case ID-nya sendiri, memakai fixture data-driven, cy.intercept untuk verifikasi request dan response, cy.session supaya tidak login berulang di tiap test, dan pelaporan Mochawesome.',
      },
      {
        en: 'Validated incoming daily bug reports from the service team and other reporters: reproduced the findings, determined whether each was an actual defect, and explained the outcome back to the reporter.',
        id: 'Memvalidasi laporan bug harian yang masuk dari tim service dan pelapor lain: mereproduksi temuan, menentukan apakah masing-masing benar-benar defect, lalu menjelaskan hasilnya kembali ke pelapor.',
      },
      {
        en: 'Performed bug hunting beyond documented test cases, both while testing specific features and during full sweeps across all products, then documented and tracked findings in Jira/Zephyr, Notion, and Google Sheets.',
        id: 'Melakukan bug hunting di luar test case yang terdokumentasi, baik saat menguji fitur tertentu maupun saat penyisiran menyeluruh ke semua produk, lalu mendokumentasikan dan melacak temuannya di Jira/Zephyr, Notion, dan Google Sheets.',
      },
      {
        en: 'Coordinated more than 60 QA interns: distributing test coverage, receiving their test reports, and deciding which findings were escalated to the development team.',
        id: 'Mengoordinasi lebih dari 60 intern QA: membagi cakupan pengujian, menerima laporan pengujian mereka, dan memutuskan temuan mana yang dieskalasi ke tim development.',
      },
      {
        en: "Reviewed interns' test cases and verified their bug reports so that anything reaching developers was valid and consistently formatted, while collaborating with Developers, PMs, and UI/UX in an Agile workflow.",
        id: 'Mereview test case para intern dan memverifikasi laporan bug mereka supaya yang sampai ke developer valid dan formatnya konsisten, sambil berkolaborasi dengan Developer, PM, dan UI/UX dalam alur kerja Agile.',
      },
    ],
  } as ExperienceItem,

  // About - QA journey (final, dari revisi brief §7.3).
  // Catatan: manual testing bukan titik timeline; dirender sebagai jalur
  // berkelanjutan "Manual testing · Jul 2025 - Present" (lihat komponen Journey).
  journey: [
    {
      date: 'Jul 2025',
      title: {
        en: 'Joined PT. Cazh Teknologi Inovasi as QA Engineer',
        id: 'Bergabung dengan PT. Cazh Teknologi Inovasi sebagai QA Engineer',
      },
    },
    {
      date: 'Jan 2026',
      title: {
        en: 'Started coordinating QA interns - first batch, 20 interns',
        id: 'Mulai mengoordinasi intern QA - batch pertama, 20 intern',
      },
    },
    {
      date: 'Apr 2026',
      title: {
        en: 'Started building Cypress automation for CARDS School V3 and the Cazh POS web dashboard',
        id: 'Mulai membangun automation Cypress untuk CARDS School V3 dan dashboard web Cazh POS',
      },
    },
    // Berjalan bersamaan dengan automation di atas, bukan sesudahnya.
    {
      date: { en: 'Apr - May 2026', id: 'Apr - Mei 2026' },
      title: 'Quality Assurance Bootcamp, Sanbercode',
      href: 'https://sanbercode.com/certificate/in/e049f3ef-b52e-4d2a-bc96-37609598df10',
      note: { en: 'Certificate no. 49357/871/SNBR/BOOTCAMP/V/2026', id: 'Sertifikat no. 49357/871/SNBR/BOOTCAMP/V/2026' },
    },
    {
      date: 'Jul 2026',
      title: {
        en: 'Second intern batch, 60+ interns',
        id: 'Batch intern kedua, 60+ intern',
      },
    },
    {
      date: 'Jul 2026',
      title: 'K6 for Engineers: Load Testing Real-World Apps at Scale, BuildWithAngga',
      // Tanpa href: link yang tersedia dari BuildWithAngga adalah signed URL
      // ber-expires (habis dalam hitungan hari) dan terikat akun, jadi tidak
      // layak dipasang. ID di bawah ini yang dipakai untuk verifikasi.
      // TODO(fajar): ganti ke href kalau ketemu permalink publik di dashboard BWA.
      note: { en: 'Credential ID: vd5IuchyYl', id: 'ID kredensial: vd5IuchyYl' },
    },
  ] as JourneyItem[],

  manualTestingRail: {
    en: 'Manual testing · Jul 2025 - Present',
    id: 'Manual testing · Jul 2025 - Sekarang',
  } as Text,

  // About - How I test (alur §7.4).
  howITest: [
    { en: 'Understand the feature', id: 'Memahami fitur' },
    { en: 'Identify risk', id: 'Mengidentifikasi risiko' },
    {
      en: 'Design scenarios (positive, negative, boundary, business logic)',
      id: 'Merancang skenario (positif, negatif, boundary, business logic)',
    },
    'Exploratory testing',
    'Regression',
  ] as Text[],

  // About - Tools (§7.5). Nama tool tidak diterjemahkan.
  tools: [
    'Cypress',
    'Postman',
    'k6',
    'GitHub Actions',
    'Jira',
    'Zephyr',
    'Git',
    'SQL',
    'Docker Compose',
    'Notion',
    'Google Sheets',
  ],

  // About - About me (2 paragraf, draft dari fakta).
  // REVIEW(fajar): paragraf berikut saya susun dari fakta di resume - mohon dicek.
  about: [
    {
      en: 'I am a Quality Assurance Engineer with over a year of experience testing school-management and digital-payment products across web, mobile, and POS. At PT. Cazh Teknologi Inovasi I am the sole QA engineer on the development team, which means I own test coverage and bug-reporting standards end to end - from designing test cases and running regression, exploratory, and acceptance testing to validating the bug reports that reach the developers.',
      id: 'Saya seorang Quality Assurance Engineer dengan pengalaman lebih dari satu tahun menguji produk manajemen sekolah dan pembayaran digital di web, mobile, dan POS. Di PT. Cazh Teknologi Inovasi saya adalah satu-satunya QA engineer di tim development, yang berarti saya memegang standar cakupan pengujian dan pelaporan bug dari hulu ke hilir - mulai dari merancang test case, menjalankan regression, exploratory, dan acceptance testing, sampai memvalidasi laporan bug yang sampai ke developer.',
    },
    {
      en: 'My work spans manual testing, API testing, and end-to-end automation in Cypress built on the Page Object Model, with every automated test traceable back to its test case ID. Alongside the day-to-day testing I coordinate a team of QA interns, and outside of work I run controlled experiments - like a Go vs Node.js load-testing benchmark - to keep my performance-testing skills sharp.',
      id: 'Pekerjaan saya mencakup manual testing, API testing, dan automation end-to-end dengan Cypress yang dibangun di atas Page Object Model, dengan setiap test otomatis dapat ditelusuri kembali ke test case ID-nya. Selain pengujian sehari-hari, saya mengoordinasi tim intern QA, dan di luar pekerjaan saya menjalankan eksperimen terkontrol - seperti benchmark load testing Go vs Node.js - untuk menjaga kemampuan performance testing saya tetap tajam.',
    },
  ] as Text[],
};

export type Site = typeof site;
