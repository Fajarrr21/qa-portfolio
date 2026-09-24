import type { Project } from '@/lib/types';

// PROFESSIONAL WORK — PT. Cazh Teknologi Inovasi. draft:false (izin diberikan).
// ATURAN KERAHASIAAN (brief §6) berlaku penuh:
//  - Tidak ada kode dari repo kantor. Semua snippet ILUSTRATIF & generik (illustrative:true).
//  - Tidak ada URL/staging/endpoint internal, kredensial, API key, atau data pengguna.
//  - Nama modul hanya yang disebut di brief §10 / resume.
//  - JANGAN mengklaim automation berjalan di CI — suite dijalankan lokal.

export const cardsSchoolV3: Project = {
  slug: 'cards-school-v3',
  title: 'CARDS School V3 — QA & Test Automation',
  subtitle: 'Professional QA on a school-management platform',
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
    { value: '847+', label: 'Automated test cases' },
    { value: '64', label: 'Spec files' },
    { value: '700+', label: 'Institutions using CARDS' },
  ],
  links: [],
  // REVIEW(fajar): overview disusun dari fakta resume + brief; tanpa detail internal.
  overview: [
    'CARDS is a school-management ecosystem used by 700+ educational institutions: a web dashboard, a parents app, a school app, and a POS app together with its own web dashboard. As the sole QA engineer on the team, I own test coverage and bug-reporting standards across all of it.',
    'My role here spans test design, manual testing, regression, exploratory testing, and UAT, plus bug validation, end-to-end automation, and coordinating QA interns. Automation focuses on the latest major releases and stays traceable to the test case documentation.',
    'To respect confidentiality, this case study contains no internal URLs, credentials, user data, or code from the company repository. The code below is illustrative — rewritten generically to show the patterns I use, not production source.',
  ],
  objective:
    'Keep the CARDS ecosystem release-ready across web, mobile, and POS through test design, manual testing, and automation that maps one-to-one to the test case documentation.',
  scope: [
    {
      module: 'CARDS School V3 — automation (847+ cases, 64 specs)',
      scenarios: [
        'Onboarding and authentication',
        'Academic Year settings',
        'Subject settings',
        'Grade Level settings',
        'Tag settings',
      ],
    },
    {
      module: 'Cazh POS web dashboard — CPA V2 (86 cases)',
      scenarios: ['Login', 'Dashboard', 'Employee'],
    },
    {
      module: 'Manual testing across the ecosystem',
      scenarios: [
        'Finance: student admissions, invoices, arrears, donations, savings, balance top-up & withdrawal',
        'Attendance module',
        'Regression, UI, exploratory, and responsive testing on web, mobile & POS',
        'UAT scenarios prepared and executed before release',
      ],
    },
  ],
  strategy: [
    'Page Object Model separates selectors and actions from the assertions.',
    'Data-driven fixtures feed each scenario its own inputs.',
    'cy.intercept verifies request and response behaviour, not just the rendered UI.',
    'cy.session establishes the login once instead of repeating it per test.',
    'Every test carries its own test case ID, so the suite stays traceable to Zephyr.',
    'Mochawesome produces the run report. The suite is executed locally, not in CI.',
  ],
  architecture: [
    { label: 'Test case docs (Zephyr)', note: 'each case has an ID' },
    { label: 'Spec + Page Object', note: 'ID in the test name' },
    { label: 'Application under test', note: 'web / POS dashboard' },
    { label: 'Mochawesome report', note: 'run locally' },
  ],
  snippets: [
    {
      illustrative: true,
      caption: 'A Page Object with generic selectors keeps specs readable and stable.',
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
      caption: 'cy.session logs in once; the test name carries its test case ID for traceability.',
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
      caption: 'A fixture drives positive and negative cases from one data table.',
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
    { value: '847+', label: 'Automated test cases', note: 'CARDS School V3, 64 spec files' },
    { value: '86', label: 'Automated test cases', note: 'Cazh POS web dashboard (CPA V2)' },
    { value: '700+', label: 'Institutions on the platform' },
    { value: '60+', label: 'QA interns coordinated' },
  ],
  // Tanpa evidence: screenshot aplikasi tidak diizinkan (kerahasiaan).
};
