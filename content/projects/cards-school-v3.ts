import type { Project } from '@/lib/types';

// PROFESSIONAL WORK - PT. Cazh Teknologi Inovasi. draft:false (izin diberikan).
// ATURAN KERAHASIAAN (brief §6) berlaku penuh:
//  - Tidak ada kode dari repo kantor. Semua snippet ILUSTRATIF & generik (illustrative:true).
//  - Tidak ada URL/staging/endpoint internal, kredensial, API key, atau data pengguna.
//  - Nama modul hanya yang disebut di brief §10 / resume.
//  - JANGAN mengklaim automation berjalan di CI - suite dijalankan lokal.
//
// REVIEW(fajar): string `id:` adalah terjemahan dari versi Inggris yang sudah
// lolos aturan kerahasiaan di atas. Terjemahan tidak menambah detail apa pun.

export const cardsSchoolV3: Project = {
  slug: 'cards-school-v3',
  title: 'CARDS School V3 - QA & Test Automation',
  subtitle: {
    en: 'Professional QA on a school-management platform',
    id: 'QA profesional di platform manajemen sekolah',
  },
  label: 'Professional work',
  professionalOrg: 'PT. Cazh Teknologi Inovasi',
  tags: ['Automation', 'Manual'],
  featured: true,
  order: 2,
  techStack: [
    'Cypress',
    'Page Object Model',
    'Data-driven fixtures',
    'cy.intercept',
    'cy.session',
    'Mochawesome',
    'Jira & Zephyr',
  ],
  metrics: [
    {
      value: '847+',
      label: { en: 'Automated test cases', id: 'Test case otomatis' },
    },
    { value: '64', label: { en: 'Spec files', id: 'File spec' } },
    {
      value: '700+',
      label: { en: 'Institutions using CARDS', id: 'Lembaga pengguna CARDS' },
    },
  ],
  links: [],
  // REVIEW(fajar): overview disusun dari fakta resume + brief; tanpa detail internal.
  overview: [
    {
      en: 'CARDS is a school-management ecosystem used by 700+ educational institutions: a web dashboard, a parents app, a school app, and a POS app together with its own web dashboard. As the sole QA engineer on the team, I own test coverage and bug-reporting standards across all of it.',
      id: 'CARDS adalah ekosistem manajemen sekolah yang dipakai 700+ lembaga pendidikan: dashboard web, aplikasi untuk orang tua, aplikasi sekolah, dan aplikasi POS beserta dashboard web-nya sendiri. Sebagai satu-satunya QA engineer di tim, saya memegang standar cakupan pengujian dan pelaporan bug untuk semuanya.',
    },
    {
      en: 'My role here spans test design, manual testing, regression, exploratory testing, and UAT, plus bug validation, end-to-end automation, and coordinating QA interns. Automation focuses on the latest major releases and stays traceable to the test case documentation.',
      id: 'Peran saya mencakup perancangan test, manual testing, regression, exploratory testing, dan UAT, ditambah validasi bug, automation end-to-end, dan mengoordinasi intern QA. Automation difokuskan pada rilis mayor terbaru dan tetap tertelusur ke dokumentasi test case.',
    },
    {
      en: 'To respect confidentiality, this case study contains no internal URLs, credentials, user data, or code from the company repository. The code below is illustrative - rewritten generically to show the patterns I use, not production source.',
      id: 'Demi menjaga kerahasiaan, studi kasus ini tidak memuat URL internal, kredensial, data pengguna, maupun kode dari repo perusahaan. Kode di bawah bersifat ilustratif - ditulis ulang secara generik untuk menunjukkan pola yang saya pakai, bukan sumber production.',
    },
  ],
  objective: {
    en: 'Keep the CARDS ecosystem release-ready across web, mobile, and POS through test design, manual testing, and automation that maps one-to-one to the test case documentation.',
    id: 'Menjaga ekosistem CARDS siap rilis di web, mobile, dan POS lewat perancangan test, manual testing, dan automation yang dipetakan satu-satu ke dokumentasi test case.',
  },
  scope: [
    {
      module: {
        en: 'CARDS School V3 - automation (847+ cases, 64 specs)',
        id: 'CARDS School V3 - automation (847+ case, 64 spec)',
      },
      scenarios: [
        { en: 'Onboarding and authentication', id: 'Onboarding dan autentikasi' },
        { en: 'Academic Year settings', id: 'Pengaturan Academic Year' },
        { en: 'Subject settings', id: 'Pengaturan Subject' },
        { en: 'Grade Level settings', id: 'Pengaturan Grade Level' },
        { en: 'Tag settings', id: 'Pengaturan Tag' },
      ],
    },
    {
      module: {
        en: 'Cazh POS web dashboard - CPA V2 (86 cases)',
        id: 'Dashboard web Cazh POS - CPA V2 (86 case)',
      },
      scenarios: ['Login', 'Dashboard', 'Employee'],
    },
    {
      module: {
        en: 'Manual testing across the ecosystem',
        id: 'Manual testing di seluruh ekosistem',
      },
      scenarios: [
        {
          en: 'Finance: student admissions, invoices, arrears, donations, savings, balance top-up & withdrawal',
          id: 'Keuangan: penerimaan siswa baru, tagihan, tunggakan, donasi, tabungan, top-up & penarikan saldo',
        },
        { en: 'Attendance module', id: 'Modul presensi' },
        {
          en: 'Regression, UI, exploratory, and responsive testing on web, mobile & POS',
          id: 'Regression, UI, exploratory, dan responsive testing di web, mobile & POS',
        },
        {
          en: 'UAT scenarios prepared and executed before release',
          id: 'Skenario UAT disiapkan dan dijalankan sebelum rilis',
        },
      ],
    },
  ],
  strategy: [
    {
      en: 'Page Object Model separates selectors and actions from the assertions.',
      id: 'Page Object Model memisahkan selector dan action dari assertion.',
    },
    {
      en: 'Data-driven fixtures feed each scenario its own inputs.',
      id: 'Fixture data-driven memberi tiap skenario input-nya sendiri.',
    },
    {
      en: 'cy.intercept verifies request and response behaviour, not just the rendered UI.',
      id: 'cy.intercept memverifikasi perilaku request dan response, bukan cuma UI yang tampil.',
    },
    {
      en: 'cy.session establishes the login once instead of repeating it per test.',
      id: 'cy.session membuat sesi login sekali saja, tidak diulang di tiap test.',
    },
    {
      en: 'Every test carries its own test case ID, so the suite stays traceable to Zephyr.',
      id: 'Setiap test membawa test case ID-nya sendiri, sehingga suite tetap tertelusur ke Zephyr.',
    },
    {
      en: 'Mochawesome produces the run report. The suite is executed locally, not in CI.',
      id: 'Mochawesome menghasilkan laporan eksekusi. Suite dijalankan secara lokal, bukan di CI.',
    },
  ],
  architecture: [
    {
      label: { en: 'Test case docs (Zephyr)', id: 'Dokumentasi test case (Zephyr)' },
      note: { en: 'each case has an ID', id: 'tiap case punya ID' },
    },
    {
      label: { en: 'Spec + Page Object', id: 'Spec + Page Object' },
      note: { en: 'ID in the test name', id: 'ID ada di nama test' },
    },
    {
      label: { en: 'Application under test', id: 'Aplikasi yang diuji' },
      note: { en: 'web / POS dashboard', id: 'dashboard web / POS' },
    },
    {
      label: { en: 'Mochawesome report', id: 'Laporan Mochawesome' },
      note: { en: 'run locally', id: 'dijalankan lokal' },
    },
  ],
  snippets: [
    {
      illustrative: true,
      caption: {
        en: 'A Page Object with generic selectors keeps specs readable and stable.',
        id: 'Page Object dengan selector generik membuat spec tetap mudah dibaca dan stabil.',
      },
      lang: 'js',
      code: `class SettingsPage {
  elements = {
    createButton: () => cy.get('[data-testid="create"]'),
    nameField:    () => cy.get('[data-testid="name"]'),
    saveButton:   () => cy.get('[data-testid="save"]'),
    toast:        () => cy.get('[data-testid="toast"]'),
  };
  visit() { cy.visit(\`\${Cypress.env('baseUrl')}/settings\`); return this; }
  create(name) {
    this.elements.createButton().click();
    this.elements.nameField().type(name);
    this.elements.saveButton().click();
    return this;
  }
  assertSaved() { this.elements.toast().should('contain', 'Saved'); }
}`,
    },
    {
      illustrative: true,
      caption: {
        en: 'cy.session logs in once; the test name carries its test case ID for traceability.',
        id: 'cy.session login sekali; nama test membawa test case ID-nya untuk ketertelusuran.',
      },
      lang: 'js',
      code: `beforeEach(() => {
  cy.session('qa-user', () => {
    cy.request('POST', '/api/login', Cypress.env('creds'))
      .its('body.token')
      .then((t) => window.localStorage.setItem('token', t));
  });
});

it('TC-AY-012 create a new academic year', () => {
  cy.intercept('POST', '/api/academic-years').as('create');
  settingsPage.visit().create('2026/2027');
  cy.wait('@create').its('response.statusCode').should('eq', 201);
});`,
    },
    {
      illustrative: true,
      caption: {
        en: 'A fixture drives positive and negative cases from one data table.',
        id: 'Satu fixture menggerakkan kasus positif dan negatif dari satu tabel data.',
      },
      lang: 'js',
      code: `// fixtures/subjects.json
// [ { "id": "TC-SUB-001", "name": "Mathematics", "valid": true },
//   { "id": "TC-SUB-002", "name": "",            "valid": false } ]

cy.fixture('subjects').then((rows) => {
  rows.forEach((row) => {
    it(\`\${row.id} \${row.valid ? 'accepts' : 'rejects'} the name\`, () => {
      subjectPage.create(row.name);
      row.valid ? subjectPage.assertSaved() : subjectPage.assertError();
    });
  });
});`,
    },
  ],
  results: [
    {
      value: '847+',
      label: { en: 'Automated test cases', id: 'Test case otomatis' },
      note: {
        en: 'CARDS School V3, 64 spec files',
        id: 'CARDS School V3, 64 file spec',
      },
    },
    {
      value: '86',
      label: { en: 'Automated test cases', id: 'Test case otomatis' },
      note: {
        en: 'Cazh POS web dashboard (CPA V2)',
        id: 'Dashboard web Cazh POS (CPA V2)',
      },
    },
    {
      value: '700+',
      label: { en: 'Institutions on the platform', id: 'Lembaga di platform ini' },
    },
    {
      value: '60+',
      label: { en: 'QA interns coordinated', id: 'Intern QA yang dikoordinasi' },
    },
  ],
  // Tanpa evidence: screenshot aplikasi tidak diizinkan (kerahasiaan).
};
