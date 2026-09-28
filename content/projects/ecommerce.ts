import type { Project } from '@/lib/types';

// Sumber: repo publik github.com/Fajarrr21/cypress-ui-api-automation.
// Scope dari blok describe/it asli; angka dari Mochawesome (9 suites, 38 tests,
// 38 pass, 0 fail, 100%). Snippet disalin dari repo. Tidak tampil di Home.
//
// REVIEW(fajar): string `id:` adalah terjemahan dari versi Inggris. Kode di
// dalam snippet sengaja tidak diterjemahkan.

export const ecommerce: Project = {
  slug: 'ecommerce',
  title: 'E-Commerce Web Automation',
  subtitle: {
    en: 'Cypress UI + API automation',
    id: 'Automation Cypress UI + API',
  },
  label: 'Personal project',
  tags: ['Automation', 'API'],
  featured: false,
  order: 4,
  techStack: [
    'Cypress',
    'JavaScript',
    'Page Object Model',
    'GitHub Actions',
    'Mochawesome',
    'Restful Booker',
    'Automation Exercise',
  ],
  metrics: [
    { value: '38', label: { en: 'End-to-end tests', id: 'Test end-to-end' } },
    { value: '100%', label: 'Pass rate' },
    { value: '9', label: { en: 'Spec suites', id: 'Suite spec' } },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/cypress-ui-api-automation' },
    { label: 'Live Report', href: 'https://fajarrr21.github.io/cypress-ui-api-automation/' },
  ],
  // REVIEW(fajar): overview disusun dari isi repo.
  overview: [
    {
      en: 'A Cypress suite that covers a full e-commerce shopping journey on the Automation Exercise demo site - from register and login through products, cart, and checkout - alongside an API layer.',
      id: 'Suite Cypress yang menutup perjalanan belanja e-commerce secara utuh di situs demo Automation Exercise - mulai dari register dan login, lalu produk, keranjang, sampai checkout - berikut lapisan API-nya.',
    },
    {
      en: 'API testing is split across two targets: Restful Booker as a stable CRUD-with-auth target, and the Automation Exercise API for status-code and negative checks. UI flows use the Page Object Model.',
      id: 'Pengujian API dibagi ke dua target: Restful Booker sebagai target CRUD-dengan-auth yang stabil, dan API Automation Exercise untuk pemeriksaan status code dan kasus negatif. Alur UI memakai Page Object Model.',
    },
  ],
  objective: {
    en: 'Automate the register → login → browse → cart → checkout journey with real UI assertions, and cover a REST API end to end: auth, CRUD, and negative status codes.',
    id: 'Mengotomasi perjalanan register → login → jelajah produk → keranjang → checkout dengan assertion UI yang nyata, serta menutup REST API secara end-to-end: auth, CRUD, dan status code negatif.',
  },
  scope: [
    {
      module: { en: 'Login & Register', id: 'Login & Register' },
      scenarios: [
        {
          en: 'Reject login with wrong credentials and with an empty email',
          id: 'Menolak login dengan kredensial salah dan dengan email kosong',
        },
        {
          en: 'Log in successfully with a registered account',
          id: 'Login berhasil dengan akun yang sudah terdaftar',
        },
        {
          en: 'Register a new user through to Account Created',
          id: 'Mendaftarkan user baru sampai halaman Account Created',
        },
        {
          en: 'Reject registration with an already-registered email',
          id: 'Menolak registrasi dengan email yang sudah terdaftar',
        },
      ],
    },
    {
      module: { en: 'Products', id: 'Produk' },
      scenarios: [
        {
          en: 'List all products and open a product detail from the list',
          id: 'Menampilkan semua produk dan membuka detail produk dari daftar',
        },
        {
          en: 'Search returns matching results',
          id: 'Pencarian mengembalikan hasil yang cocok',
        },
        {
          en: 'Search for a missing product returns an empty result',
          id: 'Pencarian produk yang tidak ada mengembalikan hasil kosong',
        },
        {
          en: 'Filter by category (Women > Dress)',
          id: 'Filter berdasarkan kategori (Women > Dress)',
        },
      ],
    },
    {
      module: { en: 'Cart & Checkout', id: 'Keranjang & Checkout' },
      scenarios: [
        {
          en: 'Add one and multiple products; verify the displayed price',
          id: 'Menambah satu dan beberapa produk; memverifikasi harga yang tampil',
        },
        {
          en: 'Remove a product, and remove one of several leaving the rest correct',
          id: 'Menghapus satu produk, dan menghapus satu dari beberapa produk tanpa mengacaukan sisanya',
        },
        {
          en: 'Checkout end to end: cart → address → payment → order placed',
          id: 'Checkout end-to-end: keranjang → alamat → pembayaran → pesanan dibuat',
        },
        {
          en: 'Guests cannot check out - the Register/Login modal appears',
          id: 'Tamu tidak bisa checkout - modal Register/Login muncul',
        },
      ],
    },
    {
      module: { en: 'Contact & Video Tutorials', id: 'Contact & Video Tutorials' },
      scenarios: [
        {
          en: 'Submit the Contact Us form with a file upload',
          id: 'Mengirim form Contact Us beserta unggahan berkas',
        },
        {
          en: 'Block submit when the required email is missing',
          id: 'Memblokir submit saat email wajib belum diisi',
        },
        {
          en: 'The Video Tutorials link points to YouTube',
          id: 'Tautan Video Tutorials mengarah ke YouTube',
        },
      ],
    },
    {
      module: {
        en: 'API - Restful Booker (CRUD + auth)',
        id: 'API - Restful Booker (CRUD + auth)',
      },
      scenarios: [
        { en: 'POST /auth returns a token', id: 'POST /auth mengembalikan token' },
        {
          en: 'GET list, POST create, GET by id',
          id: 'GET daftar, POST buat baru, GET berdasarkan id',
        },
        {
          en: 'PUT update and DELETE require the token',
          id: 'PUT update dan DELETE mewajibkan token',
        },
        {
          en: 'GET the deleted booking returns 404',
          id: 'GET booking yang sudah dihapus mengembalikan 404',
        },
      ],
    },
    {
      module: { en: 'API - Automation Exercise', id: 'API - Automation Exercise' },
      scenarios: [
        {
          en: 'Negative verifyLogin: 404 unknown user, 400 missing email, 405 wrong method',
          id: 'verifyLogin negatif: 404 user tidak dikenal, 400 email tidak ada, 405 method salah',
        },
        { en: 'GET products and GET brands', id: 'GET products dan GET brands' },
        {
          en: 'POST search products by keyword',
          id: 'POST pencarian produk berdasarkan kata kunci',
        },
        {
          en: 'Full account lifecycle: create → verify → delete',
          id: 'Siklus akun penuh: buat → verifikasi → hapus',
        },
      ],
    },
  ],
  strategy: [
    {
      en: 'Page Object Model with a per-page element map and chainable actions.',
      id: 'Page Object Model dengan peta elemen per halaman dan action yang bisa dirantai.',
    },
    {
      en: 'API split: Restful Booker for stable CRUD, Automation Exercise for status codes.',
      id: 'API dipisah: Restful Booker untuk CRUD yang stabil, Automation Exercise untuk status code.',
    },
    {
      en: 'Sequential CRUD passes the auth token and booking id between tests.',
      id: 'CRUD berurutan mengoper token auth dan booking id antar test.',
    },
    {
      en: 'Dynamic test data - timestamped names and computed dates - avoids collisions.',
      id: 'Data test dinamis - nama bertimestamp dan tanggal yang dihitung - menghindari tabrakan data.',
    },
    {
      en: 'File upload and required-field validation on the Contact form.',
      id: 'Unggah berkas dan validasi field wajib pada form Contact.',
    },
    {
      en: 'GitHub Actions runs the suite and publishes the Mochawesome report.',
      id: 'GitHub Actions menjalankan suite dan menerbitkan laporan Mochawesome.',
    },
  ],
  architecture: [
    {
      label: { en: 'Spec file', id: 'File spec' },
      note: { en: 'UI + API describe / it', id: 'describe / it UI + API' },
    },
    {
      label: 'Page Object',
      note: { en: 'element map + actions', id: 'peta elemen + action' },
    },
    {
      label: 'Automation Exercise / Restful Booker',
      note: { en: 'systems under test', id: 'sistem yang diuji' },
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
        en: 'The Page Object groups selectors in one map and returns this for chainable actions.',
        id: 'Page Object mengumpulkan selector dalam satu peta dan mengembalikan this supaya action bisa dirantai.',
      },
      lang: 'js',
      code: `class LoginPage {
  elements = {
    emailInput:    () => cy.get('input[data-qa="login-email"]'),
    passwordInput: () => cy.get('input[data-qa="login-password"]'),
    loginButton:   () => cy.get('[data-qa="login-button"]'),
  };

  visit() {
    cy.visit('https://automationexercise.com');
    cy.get('a[href="/login"]').click();
    return this;
  }
  fillEmail(email)       { this.elements.emailInput().type(email); return this; }
  fillPassword(password) { this.elements.passwordInput().type(password); return this; }
  submit()               { this.elements.loginButton().click(); return this; }
}`,
    },
    {
      caption: {
        en: 'The auth test captures a token that later PUT and DELETE calls reuse.',
        id: 'Test auth menangkap token yang dipakai ulang oleh panggilan PUT dan DELETE berikutnya.',
      },
      lang: 'js',
      code: `it('POST /auth returns a token', () => {
  cy.request({
    method: 'POST',
    url: \`\${baseUrl}/auth\`,
    body: { username: 'admin', password: 'password123' },
  }).then((res) => {
    expect(res.status).to.eq(200)
    expect(res.body.token).to.be.a('string').and.not.be.empty
    token = res.body.token // reused by PUT & DELETE
  })
})`,
    },
    {
      caption: {
        en: 'Booking data is generated per run so tests never collide on stale records.',
        id: 'Data booking dibuat ulang tiap eksekusi supaya test tidak bertabrakan dengan data lama.',
      },
      lang: 'js',
      code: `const fmt = (d) => d.toISOString().split('T')[0]
const checkout = new Date()
checkout.setDate(checkout.getDate() + 3)

const booking = {
  firstname: \`Fajar\${Date.now()}\`,
  lastname: 'QA',
  totalprice: 250,
  depositpaid: true,
  bookingdates: { checkin: fmt(new Date()), checkout: fmt(checkout) },
  additionalneeds: 'Breakfast',
}`,
    },
  ],
  results: [
    {
      value: '38',
      label: { en: 'Tests', id: 'Test' },
      note: { en: 'across 9 spec suites', id: 'di 9 suite spec' },
    },
    { value: '38', label: { en: 'Passed', id: 'Lulus' } },
    { value: '0', label: { en: 'Failed', id: 'Gagal' } },
    { value: '100%', label: 'Pass rate' },
  ],
  evidence: [
    {
      src: '/evidence/ecommerce-report.png',
      width: 2880,
      height: 1800,
      alt: {
        en: 'Mochawesome report for the e-commerce suite: 38 tests across 9 spec files, 38 passed, 0 failed',
        id: 'Laporan Mochawesome suite e-commerce: 38 test di 9 file spec, 38 lulus, 0 gagal',
      },
      caption: {
        en: 'Mochawesome report: 38 tests across 9 spec files, all passing. Test names state the behaviour being checked, so a failure reads as a broken requirement rather than a broken selector.',
        id: 'Laporan Mochawesome: 38 test di 9 file spec, semuanya lulus. Nama test menyebutkan perilaku yang diperiksa, jadi kegagalan terbaca sebagai kebutuhan yang rusak, bukan sekadar selector yang meleset.',
      },
    },
  ],
};
