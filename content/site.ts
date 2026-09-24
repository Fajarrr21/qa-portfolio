// Semua teks situs tinggal di sini (bukan di dalam komponen).
// Sumber fakta: resume "CV - Fajar Ardiansyah - QA Engineer (EN)".
// Paragraf yang ditulis ulang dari fakta ditandai // REVIEW(fajar).

export interface SkillCard {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  context: string;
  bullets: string[];
}

export interface JourneyItem {
  date: string;
  title: string;
}

export const site = {
  name: 'Fajar Ardiansyah',
  role: 'Quality Assurance Engineer',
  location: 'Purwokerto, Central Java, Indonesia',
  tagline: 'I test software beyond the happy path.',
  subline: 'Manual · API · Automation · Performance',

  links: {
    github: 'https://github.com/Fajarrr21',
    linkedin: 'https://www.linkedin.com/in/fajarardiansy/',
    email: 'fajarardiansyah912@gmail.com',
  },

  // File PDF diletakkan di public/resume/ (path tanpa basePath — dibungkus asset()).
  resume: {
    en: '/resume/Fajar-Ardiansyah-QA-Engineer-EN.pdf',
    id: '/resume/Fajar-Ardiansyah-QA-Engineer-ID.pdf',
  },

  // Home — Stats (nilai persis sesuai brief §4).
  stats: [
    { value: '1+', label: 'Year in QA' },
    { value: '847+', label: 'Automated test cases on CARDS School V3' },
    { value: '60+', label: 'QA interns coordinated' },
    { value: '712K+', label: 'Requests in a load-test benchmark' },
  ],

  // Home — What I do (empat kartu, isi dari kategori skill di resume).
  skills: [
    {
      title: 'Manual Testing',
      items: [
        'Test scenario & test case design',
        'Regression, UI & responsive testing',
        'Exploratory testing',
        'User Acceptance Testing',
      ],
    },
    {
      title: 'Automation',
      items: [
        'End-to-end UI testing with Cypress',
        'Page Object Model',
        'Data-driven fixtures & custom commands',
        'Test case ID traceability',
      ],
    },
    {
      title: 'API Testing',
      items: [
        'REST API testing with Postman',
        'Status code & response structure validation',
        'Negative testing & auth token flow',
        'End-to-end CRUD',
      ],
    },
    {
      title: 'Performance Testing',
      items: [
        'Load testing with k6',
        'Load scenario design',
        'Thresholds & SLA',
        'Throughput & latency analysis',
      ],
    },
  ] as SkillCard[],

  // About — Experience (context line + 8 bullet dari resume).
  experience: {
    role: 'QA Engineer',
    org: 'PT. Cazh Teknologi Inovasi (CARDS)',
    period: 'Jul 2025 — Present',
    location: 'Purwokerto, Central Java, Indonesia',
    context:
      'Sole QA engineer in a development team of five developers, two PMs, and one UI/UX designer; defining test coverage and bug reporting standards.',
    bullets: [
      'Tested the CARDS ecosystem used by 700+ educational institutions — CARDS School (web dashboard), CARDS Parents, CARDS EDU, and Cazh POS together with its web dashboard on both Android and iOS — covering finance modules (student admissions, invoices, arrears, donations, savings, balance top-up and withdrawal) and the attendance module, as well as selected modules of the core banking system for BKD Pekalongan.',
      'Designed test scenarios and test cases for new and changed features, ran regression, UI, exploratory, and responsive testing across web, mobile, and POS platforms, and prepared and executed User Acceptance Testing scenarios before release.',
      'Built end-to-end automation in Cypress using the Page Object Model for the latest major releases: ~847 test cases across 64 spec files on CARDS School V3, and 86 test cases on the Cazh POS web dashboard (CPA V2).',
      'Designed the automation suite to stay traceable to the test case documentation, with every test carrying its own test case ID, using data-driven fixtures, cy.intercept for request and response verification, cy.session to avoid repeating login per test, and Mochawesome reporting.',
      'Validated incoming daily bug reports from the service team and other reporters: reproduced the findings, determined whether each was an actual defect, and explained the outcome back to the reporter.',
      'Performed bug hunting beyond documented test cases, both while testing specific features and during full sweeps across all products, then documented and tracked findings in Jira/Zephyr, Notion, and Google Sheets.',
      'Coordinated more than 60 QA interns: distributing test coverage, receiving their test reports, and deciding which findings were escalated to the development team.',
      "Reviewed interns' test cases and verified their bug reports so that anything reaching developers was valid and consistently formatted, while collaborating with Developers, PMs, and UI/UX in an Agile workflow.",
    ],
  } as ExperienceItem,

  // About — QA journey (final, dari revisi brief §7.3).
  // Catatan: manual testing bukan titik timeline; dirender sebagai jalur
  // berkelanjutan "Manual testing · Jul 2025 — Present" (lihat komponen Journey).
  journey: [
    { date: 'Jul 2025', title: 'Joined PT. Cazh Teknologi Inovasi as QA Engineer' },
    { date: 'Jan 2026', title: 'Started coordinating QA interns — first batch, 20 interns' },
    { date: '2026', title: 'Quality Assurance Bootcamp, Sanbercode' },
    { date: 'Apr 2026', title: 'Started building Cypress automation for CARDS School V3 and the Cazh POS web dashboard' },
    { date: 'Jul 2026', title: 'Second intern batch, 60+ interns' },
    { date: '2026', title: 'K6 for Engineers: Load Testing Real-World Apps at Scale, BuildWithAngga' },
  ] as JourneyItem[],
  manualTestingRail: 'Manual testing · Jul 2025 — Present',

  // About — How I test (alur §7.4).
  howITest: [
    'Understand the feature',
    'Identify risk',
    'Design scenarios (positive, negative, boundary, business logic)',
    'Exploratory testing',
    'Regression',
  ],

  // About — Tools (§7.5).
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

  // About — About me (2 paragraf, draft dari fakta).
  // REVIEW(fajar): paragraf berikut saya susun dari fakta di resume — mohon dicek.
  about: [
    'I am a Quality Assurance Engineer with over a year of experience testing school-management and digital-payment products across web, mobile, and POS. At PT. Cazh Teknologi Inovasi I am the sole QA engineer on the development team, which means I own test coverage and bug-reporting standards end to end — from designing test cases and running regression, exploratory, and acceptance testing to validating the bug reports that reach the developers.',
    'My work spans manual testing, API testing, and end-to-end automation in Cypress built on the Page Object Model, with every automated test traceable back to its test case ID. Alongside the day-to-day testing I coordinate a team of QA interns, and outside of work I run controlled experiments — like a Go vs Node.js load-testing benchmark — to keep my performance-testing skills sharp.',
  ],
} as const;

export type Site = typeof site;
