import type { Project } from '@/lib/types';

// Sumber: repo publik github.com/Fajarrr21/cypress-ui-api-automation.
// Scope dari blok describe/it asli; angka dari Mochawesome (9 suites, 38 tests,
// 38 pass, 0 fail, 100%). Snippet disalin dari repo. Tidak tampil di Home.

export const ecommerce: Project = {
  slug: 'ecommerce',
  title: 'E-Commerce Web Automation',
  subtitle: 'Cypress UI + API automation',
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
    { value: '38', label: 'End-to-end tests' },
    { value: '100%', label: 'Pass rate' },
    { value: '9', label: 'Spec suites' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/cypress-ui-api-automation' },
    { label: 'Live Report', href: 'https://fajarrr21.github.io/cypress-ui-api-automation/' },
  ],
  // REVIEW(fajar): overview disusun dari isi repo.
  overview: [
    'A Cypress suite that covers a full e-commerce shopping journey on the Automation Exercise demo site - from register and login through products, cart, and checkout - alongside an API layer.',
    'API testing is split across two targets: Restful Booker as a stable CRUD-with-auth target, and the Automation Exercise API for status-code and negative checks. UI flows use the Page Object Model.',
  ],
  objective:
    'Automate the register → login → browse → cart → checkout journey with real UI assertions, and cover a REST API end to end: auth, CRUD, and negative status codes.',
  scope: [
    {
      module: 'Login & Register',
      scenarios: [
        'Reject login with wrong credentials and with an empty email',
        'Log in successfully with a registered account',
        'Register a new user through to Account Created',
        'Reject registration with an already-registered email',
      ],
    },
    {
      module: 'Products',
      scenarios: [
        'List all products and open a product detail from the list',
        'Search returns matching results',
        'Search for a missing product returns an empty result',
        'Filter by category (Women > Dress)',
      ],
    },
    {
      module: 'Cart & Checkout',
      scenarios: [
        'Add one and multiple products; verify the displayed price',
        'Remove a product, and remove one of several leaving the rest correct',
        'Checkout end to end: cart → address → payment → order placed',
        'Guests cannot check out - the Register/Login modal appears',
      ],
    },
    {
      module: 'Contact & Video Tutorials',
      scenarios: [
        'Submit the Contact Us form with a file upload',
        'Block submit when the required email is missing',
        'The Video Tutorials link points to YouTube',
      ],
    },
    {
      module: 'API - Restful Booker (CRUD + auth)',
      scenarios: [
        'POST /auth returns a token',
        'GET list, POST create, GET by id',
        'PUT update and DELETE require the token',
        'GET the deleted booking returns 404',
      ],
    },
    {
      module: 'API - Automation Exercise',
      scenarios: [
        'Negative verifyLogin: 404 unknown user, 400 missing email, 405 wrong method',
        'GET products and GET brands',
        'POST search products by keyword',
        'Full account lifecycle: create → verify → delete',
      ],
    },
  ],
  strategy: [
    'Page Object Model with a per-page element map and chainable actions.',
    'API split: Restful Booker for stable CRUD, Automation Exercise for status codes.',
    'Sequential CRUD passes the auth token and booking id between tests.',
    'Dynamic test data - timestamped names and computed dates - avoids collisions.',
    'File upload and required-field validation on the Contact form.',
    'GitHub Actions runs the suite and publishes the Mochawesome report.',
  ],
  architecture: [
    { label: 'Spec file', note: 'UI + API describe / it' },
    { label: 'Page Object', note: 'element map + actions' },
    { label: 'Automation Exercise / Restful Booker', note: 'systems under test' },
    { label: 'GitHub Actions', note: 'Cypress run on push' },
    { label: 'Mochawesome → GitHub Pages', note: 'published report' },
  ],
  snippets: [
    {
      caption: 'The Page Object groups selectors in one map and returns this for chainable actions.',
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
      caption: 'The auth test captures a token that later PUT and DELETE calls reuse.',
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
      caption: 'Booking data is generated per run so tests never collide on stale records.',
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
    { value: '38', label: 'Tests', note: 'across 9 spec suites' },
    { value: '38', label: 'Passed' },
    { value: '0', label: 'Failed' },
    { value: '100%', label: 'Pass rate' },
  ],
  evidence: [
    {
      alt: 'Mochawesome report summary for the e-commerce suite',
      caption: 'Mochawesome report - see the live version linked below.',
      todo: 'TODO(fajar): add a screenshot of the Mochawesome report at public/evidence/ecommerce-report.png',
    },
  ],
};
