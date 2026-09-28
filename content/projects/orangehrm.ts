import type { Project } from '@/lib/types';

// Sumber: repo publik github.com/Fajarrr21/Automation-OrangeHRM.
// Scope diambil dari blok describe/it asli; angka dari laporan Mochawesome
// (4 suites, 105 tests, 105 pass, 0 fail, 100%). Snippet disalin dari repo.
//
// REVIEW(fajar): string `id:` adalah terjemahan dari versi Inggris. Kode di
// dalam snippet sengaja tidak diterjemahkan.

export const orangehrm: Project = {
  slug: 'orangehrm',
  title: 'OrangeHRM Web Automation',
  subtitle: {
    en: 'Cypress UI + API end-to-end suite',
    id: 'Suite end-to-end Cypress UI + API',
  },
  label: 'Personal project',
  tags: ['Automation', 'API'],
  featured: true,
  order: 1,
  techStack: [
    'Cypress',
    'JavaScript',
    'Page Object Model',
    'GitHub Actions',
    'Mochawesome',
    'Platzi Fake Store API',
  ],
  metrics: [
    { value: '105', label: { en: 'End-to-end tests', id: 'Test end-to-end' } },
    { value: '100%', label: 'Pass rate' },
    { value: '4', label: { en: 'Spec suites', id: 'Suite spec' } },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/Automation-OrangeHRM' },
    { label: 'Live Report', href: 'https://fajarrr21.github.io/Automation-OrangeHRM/' },
  ],
  // REVIEW(fajar): overview disusun dari isi repo.
  overview: [
    {
      en: 'An end-to-end automation suite for the OrangeHRM open-source demo, covering the authentication and directory flows a user hits first, plus a separate API layer exercised against the public Platzi Fake Store API.',
      id: 'Suite automation end-to-end untuk demo open-source OrangeHRM, mencakup alur autentikasi dan directory yang pertama kali ditemui pengguna, ditambah lapisan API terpisah yang diuji terhadap Platzi Fake Store API publik.',
    },
    {
      en: 'The suite is built on the Page Object Model so selectors and actions live apart from the assertions, and it runs automatically on GitHub Actions with a publicly accessible Mochawesome report.',
      id: 'Suite ini dibangun di atas Page Object Model supaya selector dan action terpisah dari assertion, dan berjalan otomatis di GitHub Actions dengan laporan Mochawesome yang bisa diakses publik.',
    },
  ],
  objective: {
    en: 'Cover the Login, Forgot Password, and Directory flows end to end - including UI, responsive, negative, and timing checks - and validate a public REST API for status codes, response structure, and data types.',
    id: 'Menutup alur Login, Forgot Password, dan Directory secara end-to-end - termasuk pemeriksaan UI, responsive, negatif, dan waktu respons - serta memvalidasi REST API publik untuk status code, struktur response, dan tipe data.',
  },
  scope: [
    {
      module: { en: 'Login (22 tests)', id: 'Login (22 test)' },
      scenarios: [
        {
          en: 'Redirect to login when reaching the dashboard unauthenticated',
          id: 'Redirect ke login saat membuka dashboard tanpa autentikasi',
        },
        {
          en: 'UI elements, placeholders, and password masking',
          id: 'Elemen UI, placeholder, dan penyamaran password',
        },
        {
          en: 'Valid login via click and via Enter',
          id: 'Login valid lewat klik dan lewat tombol Enter',
        },
        {
          en: 'Invalid username / password / both show an error',
          id: 'Username / password / keduanya salah memunculkan error',
        },
        {
          en: 'Empty-field and special-character validation',
          id: 'Validasi field kosong dan karakter spesial',
        },
        {
          en: 'Responsive layout and login response time under threshold',
          id: 'Layout responsive dan waktu respons login di bawah threshold',
        },
        {
          en: 'Double-click submits a single request',
          id: 'Klik ganda hanya mengirim satu request',
        },
      ],
    },
    {
      module: { en: 'Forgot Password (30 tests)', id: 'Forgot Password (30 test)' },
      scenarios: [
        {
          en: 'Navigate from login to the reset page and back via cancel',
          id: 'Navigasi dari login ke halaman reset dan kembali lewat cancel',
        },
        {
          en: 'Form elements, placeholder, and copyright text',
          id: 'Elemen form, placeholder, dan teks copyright',
        },
        {
          en: 'Submit with valid, unregistered, and special-character usernames',
          id: 'Submit dengan username valid, tidak terdaftar, dan berkarakter spesial',
        },
        {
          en: 'Confirmation page content after submit',
          id: 'Isi halaman konfirmasi setelah submit',
        },
        {
          en: 'Empty and whitespace-only usernames are blocked',
          id: 'Username kosong dan hanya berisi spasi ditolak',
        },
        {
          en: 'Responsive layout and process timing',
          id: 'Layout responsive dan waktu proses',
        },
      ],
    },
    {
      module: { en: 'Directory (28 tests)', id: 'Directory (28 test)' },
      scenarios: [
        {
          en: 'Auth redirect and filter-card labels',
          id: 'Redirect autentikasi dan label kartu filter',
        },
        {
          en: 'Search by valid and unregistered employee name',
          id: 'Pencarian dengan nama karyawan valid dan tidak terdaftar',
        },
        {
          en: 'Clear and refill the name field',
          id: 'Mengosongkan lalu mengisi ulang field nama',
        },
        {
          en: 'Reset restores data and dropdown defaults',
          id: 'Reset mengembalikan data dan nilai awal dropdown',
        },
        {
          en: 'Responsive layout with untruncated buttons on mobile',
          id: 'Layout responsive dengan tombol tidak terpotong di mobile',
        },
        {
          en: 'Page load and search results under a time budget',
          id: 'Pemuatan halaman dan hasil pencarian di bawah batas waktu',
        },
      ],
    },
    {
      module: {
        en: 'API - Platzi Fake Store (25 tests)',
        id: 'API - Platzi Fake Store (25 test)',
      },
      scenarios: [
        {
          en: 'GET categories: array, non-empty, schema (id, name, image)',
          id: 'GET categories: array, tidak kosong, skema (id, name, image)',
        },
        {
          en: 'Content-Type and response time checks',
          id: 'Pemeriksaan Content-Type dan waktu respons',
        },
        {
          en: 'GET category by ID: value and type assertions',
          id: 'GET category by ID: assertion nilai dan tipe data',
        },
        {
          en: 'PUT update: status 200, name changes, ID stays stable, image updates',
          id: 'PUT update: status 200, nama berubah, ID tetap, image ikut diperbarui',
        },
        {
          en: 'DELETE category and GET products by category',
          id: 'DELETE category dan GET products by category',
        },
        {
          en: 'Negative: invalid ID and POST without a name return errors',
          id: 'Negatif: ID tidak valid dan POST tanpa nama mengembalikan error',
        },
      ],
    },
  ],
  strategy: [
    {
      en: 'Page Object Model separates selectors and actions from assertions.',
      id: 'Page Object Model memisahkan selector dan action dari assertion.',
    },
    {
      en: 'Data-driven fixtures hold the credential variants instead of hard-coding them.',
      id: 'Fixture data-driven menampung varian kredensial, bukan ditulis langsung di spec.',
    },
    {
      en: 'cy.intercept asserts the HTTP status of navigation before checking the UI.',
      id: 'cy.intercept memastikan status HTTP navigasi sebelum UI diperiksa.',
    },
    {
      en: 'Negative and boundary cases: empty fields, whitespace, and special characters.',
      id: 'Kasus negatif dan boundary: field kosong, spasi, dan karakter spesial.',
    },
    {
      en: 'Responsive checks across viewports, plus response-time budgets.',
      id: 'Pemeriksaan responsive di berbagai viewport, plus batas waktu respons.',
    },
    {
      en: 'GitHub Actions runs the suite and publishes the Mochawesome report.',
      id: 'GitHub Actions menjalankan suite dan menerbitkan laporan Mochawesome.',
    },
  ],
  architecture: [
    {
      label: { en: 'Spec file', id: 'File spec' },
      note: { en: 'describe / it, test case IDs', id: 'describe / it, test case ID' },
    },
    {
      label: 'Page Object',
      note: { en: 'selectors + actions', id: 'selector + action' },
    },
    {
      label: 'OrangeHRM demo / Platzi API',
      note: { en: 'system under test', id: 'sistem yang diuji' },
    },
    {
      label: 'GitHub Actions',
      note: { en: 'Cypress run on push', id: 'Cypress berjalan saat push' },
    },
    {
      label: 'Mochawesome → GitHub Pages',
      note: { en: 'published report', id: 'laporan yang dipublikasikan' },
    },
  ],
  snippets: [
    {
      caption: {
        en: 'The Page Object keeps selectors and actions in one class so specs stay readable.',
        id: 'Page Object menyimpan selector dan action dalam satu class supaya spec tetap mudah dibaca.',
      },
      lang: 'js',
      code: `class LoginPage {
  // Selectors
  get usernameInput() { return cy.get('input[name="username"]') }
  get passwordInput() { return cy.get('input[name="password"]') }
  get submitButton()  { return cy.get('button[type="submit"]') }
  get alertMessage()  { return cy.get('.oxd-alert-content-text') }

  // Actions
  login(username, password) {
    this.usernameInput.type(username)
    this.passwordInput.type(password)
    this.submitButton.click()
  }

  // Assertions
  assertInvalidCredentials() {
    this.alertMessage.should('be.visible').and('contain', 'Invalid credentials')
  }
}
export default LoginPage`,
    },
    {
      caption: {
        en: 'cy.intercept confirms the page responds 200 before any UI assertion runs.',
        id: 'cy.intercept memastikan halaman merespons 200 sebelum assertion UI dijalankan.',
      },
      lang: 'js',
      code: `it('login page returns 200 before UI checks', () => {
  cy.intercept('GET', '**/auth/login').as('loginPage')
  loginPage.visitLogin()
  cy.wait('@loginPage').then((interception) => {
    expect(interception.response.statusCode).to.eq(200)
  })
  loginPage.assertBrandingVisible()
})`,
    },
    {
      caption: {
        en: 'Credential variants live in a fixture, keeping the spec data-driven.',
        id: 'Varian kredensial disimpan di fixture supaya spec tetap data-driven.',
      },
      lang: 'json',
      code: `{
  "validUser":       { "username": "Admin",        "password": "admin123" },
  "invalidUsername": { "username": "admintesting", "password": "admin123" },
  "invalidPassword": { "username": "Admin",         "password": "123" },
  "specialChar":     { "username": "@@$$*&$",       "password": "@@$$*&$" }
}`,
    },
    {
      caption: {
        en: 'API tests assert status, structure, and types against the Platzi Fake Store API.',
        id: 'Test API memeriksa status, struktur, dan tipe data terhadap Platzi Fake Store API.',
      },
      lang: 'js',
      code: `it('GET categories returns a non-empty array', () => {
  cy.request('GET', \`\${BASE_URL}/categories\`).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.be.an('array')
    expect(response.body.length).to.be.greaterThan(0)
    expect(response.body[0]).to.have.all.keys('id', 'name', 'image')
  })
})`,
    },
  ],
  results: [
    {
      value: '105',
      label: { en: 'Tests', id: 'Test' },
      note: { en: 'across 4 spec suites', id: 'di 4 suite spec' },
    },
    { value: '105', label: { en: 'Passed', id: 'Lulus' } },
    { value: '0', label: { en: 'Failed', id: 'Gagal' } },
    { value: '100%', label: 'Pass rate' },
  ],
  evidence: [
    {
      src: '/evidence/orangehrm-report.png',
      width: 2880,
      height: 1800,
      alt: {
        en: 'Mochawesome report for the OrangeHRM suite: 105 tests, 105 passed, 0 failed, with each test labelled by its test case ID',
        id: 'Laporan Mochawesome suite OrangeHRM: 105 test, 105 lulus, 0 gagal, dengan setiap test diberi label test case ID-nya',
      },
      caption: {
        en: 'Mochawesome report: 105 tests across 4 suites, all passing. Every test carries its test case ID (TC-DIR001 and so on), so a result maps straight back to the test case documentation.',
        id: 'Laporan Mochawesome: 105 test di 4 suite, semuanya lulus. Setiap test membawa test case ID-nya (TC-DIR001 dan seterusnya), jadi satu hasil bisa ditelusuri langsung ke dokumentasi test case.',
      },
    },
  ],
};
