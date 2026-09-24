import type { Project } from '@/lib/types';

// Sumber: repo publik github.com/Fajarrr21/Automation-OrangeHRM.
// Scope diambil dari blok describe/it asli; angka dari laporan Mochawesome
// (4 suites, 105 tests, 105 pass, 0 fail, 100%). Snippet disalin dari repo.

export const orangehrm: Project = {
  slug: 'orangehrm',
  title: 'OrangeHRM Web Automation',
  subtitle: 'Cypress UI + API end-to-end suite',
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
    { value: '105', label: 'End-to-end tests' },
    { value: '100%', label: 'Pass rate' },
    { value: '4', label: 'Spec suites' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/Automation-OrangeHRM' },
    { label: 'Live Report', href: 'https://fajarrr21.github.io/Automation-OrangeHRM/' },
  ],
  // REVIEW(fajar): overview disusun dari isi repo.
  overview: [
    'An end-to-end automation suite for the OrangeHRM open-source demo, covering the authentication and directory flows a user hits first, plus a separate API layer exercised against the public Platzi Fake Store API.',
    'The suite is built on the Page Object Model so selectors and actions live apart from the assertions, and it runs automatically on GitHub Actions with a publicly accessible Mochawesome report.',
  ],
  objective:
    'Cover the Login, Forgot Password, and Directory flows end to end — including UI, responsive, negative, and timing checks — and validate a public REST API for status codes, response structure, and data types.',
  scope: [
    {
      module: 'Login (22 tests)',
      scenarios: [
        'Redirect to login when reaching the dashboard unauthenticated',
        'UI elements, placeholders, and password masking',
        'Valid login via click and via Enter',
        'Invalid username / password / both show an error',
        'Empty-field and special-character validation',
        'Responsive layout and login response time under threshold',
        'Double-click submits a single request',
      ],
    },
    {
      module: 'Forgot Password (30 tests)',
      scenarios: [
        'Navigate from login to the reset page and back via cancel',
        'Form elements, placeholder, and copyright text',
        'Submit with valid, unregistered, and special-character usernames',
        'Confirmation page content after submit',
        'Empty and whitespace-only usernames are blocked',
        'Responsive layout and process timing',
      ],
    },
    {
      module: 'Directory (28 tests)',
      scenarios: [
        'Auth redirect and filter-card labels',
        'Search by valid and unregistered employee name',
        'Clear and refill the name field',
        'Reset restores data and dropdown defaults',
        'Responsive layout with untruncated buttons on mobile',
        'Page load and search results under a time budget',
      ],
    },
    {
      module: 'API — Platzi Fake Store (25 tests)',
      scenarios: [
        'GET categories: array, non-empty, schema (id, name, image)',
        'Content-Type and response time checks',
        'GET category by ID: value and type assertions',
        'PUT update: status 200, name changes, ID stays stable, image updates',
        'DELETE category and GET products by category',
        'Negative: invalid ID and POST without a name return errors',
      ],
    },
  ],
  strategy: [
    'Page Object Model separates selectors and actions from assertions.',
    'Data-driven fixtures hold the credential variants instead of hard-coding them.',
    'cy.intercept asserts the HTTP status of navigation before checking the UI.',
    'Negative and boundary cases: empty fields, whitespace, and special characters.',
    'Responsive checks across viewports, plus response-time budgets.',
    'GitHub Actions runs the suite and publishes the Mochawesome report.',
  ],
  architecture: [
    { label: 'Spec file', note: 'describe / it, test case IDs' },
    { label: 'Page Object', note: 'selectors + actions' },
    { label: 'OrangeHRM demo / Platzi API', note: 'system under test' },
    { label: 'GitHub Actions', note: 'Cypress run on push' },
    { label: 'Mochawesome → GitHub Pages', note: 'published report' },
  ],
  snippets: [
    {
      caption: 'The Page Object keeps selectors and actions in one class so specs stay readable.',
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
      caption: 'cy.intercept confirms the page responds 200 before any UI assertion runs.',
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
      caption: 'Credential variants live in a fixture, keeping the spec data-driven.',
      lang: 'json',
      code: `{
  "validUser":       { "username": "Admin",        "password": "admin123" },
  "invalidUsername": { "username": "admintesting", "password": "admin123" },
  "invalidPassword": { "username": "Admin",         "password": "123" },
  "specialChar":     { "username": "@@$$*&$",       "password": "@@$$*&$" }
}`,
    },
    {
      caption: 'API tests assert status, structure, and types against the Platzi Fake Store API.',
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
    { value: '105', label: 'Tests', note: 'across 4 spec suites' },
    { value: '105', label: 'Passed' },
    { value: '0', label: 'Failed' },
    { value: '100%', label: 'Pass rate' },
  ],
  evidence: [
    {
      alt: 'Mochawesome report summary for the OrangeHRM suite',
      caption: 'Mochawesome report — see the live version linked below.',
      todo: 'TODO(fajar): add a screenshot of the Mochawesome report at public/evidence/orangehrm-report.png',
    },
  ],
};
