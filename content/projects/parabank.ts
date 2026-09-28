import type { Project } from '@/lib/types';

// PERSONAL PROJECT - repo publik, jadi snippet boleh memakai kode asli
// (beda dengan cards-school-v3 yang snippet-nya ilustratif).
//
// Sumber seluruh angka & klaim di file ini: README repo project-parabank.
// 43 test case, 39 lulus, 4 gagal - dan yang 4 itu memang dibiarkan merah.
// JANGAN "membulatkan" jadi 100% pass rate; justru 4 yang merah itu intinya.
//
// REVIEW(fajar): string `id:` menyalin dari README-mu; `en:` terjemahannya.

export const parabank: Project = {
  slug: 'parabank',
  title: 'ParaBank Automation Testing',
  subtitle: {
    en: 'UI and API automation for an online banking demo - with four tests left failing on purpose',
    id: 'Automation UI dan API untuk aplikasi demo online banking - dengan empat test yang sengaja dibiarkan gagal',
  },
  label: 'Personal project',
  tags: ['Automation', 'API'],
  featured: true,
  order: 1,
  techStack: [
    'Cypress 15',
    'JavaScript',
    'Page Object Model',
    'cy.session',
    'cy.intercept',
    'REST API',
    'Mochawesome',
    'GitHub Actions',
  ],
  metrics: [
    { value: '43', label: { en: 'Test cases', id: 'Test case' } },
    { value: '9', label: { en: 'Spec files', id: 'File spec' } },
    { value: '8', label: { en: 'Application bugs found', id: 'Bug aplikasi ditemukan' } },
  ],
  links: [{ label: 'GitHub', href: 'https://github.com/Fajarrr21/project-parabank' }],
  overview: [
    {
      en: 'ParaBank is Parasoft\'s demo online banking application. It is a useful target precisely because it is imperfect: transfers, bill payments, loan requests, and account management all work well enough to automate, and several of them are broken in ways worth catching.',
      id: 'ParaBank adalah aplikasi demo online banking milik Parasoft. Ia jadi target yang berguna justru karena tidak sempurna: transfer, pembayaran tagihan, pengajuan pinjaman, dan manajemen akun semuanya cukup berjalan untuk diotomasi, dan beberapa di antaranya rusak dengan cara yang layak ditangkap.',
    },
    {
      en: 'The suite covers nine modules across UI and REST API. Forty-three test cases run, thirty-nine pass, and four fail. The four failures are not flaky tests or unfinished work - they are ParaBank behaving incorrectly, and they are left red on purpose.',
      id: 'Suite ini mencakup sembilan modul di UI dan REST API. Empat puluh tiga test case dijalankan, tiga puluh sembilan lulus, empat gagal. Keempat kegagalan itu bukan test yang flaky atau pekerjaan yang belum selesai - itu ParaBank yang berperilaku salah, dan sengaja dibiarkan merah.',
    },
  ],
  objective: {
    en: 'Build a suite that can be re-run any number of times without data collisions, verifies what the application actually sends rather than only what it displays, and reports application defects honestly instead of being tuned until it is green.',
    id: 'Membangun suite yang bisa dijalankan berulang kali tanpa data bentrok, memverifikasi apa yang benar-benar dikirim aplikasi - bukan hanya yang ditampilkan - dan melaporkan cacat aplikasi apa adanya, bukan disetel sampai hijau.',
  },
  scope: [
    {
      module: 'Login',
      scenarios: [
        { en: 'Valid login, logout, and session handling', id: 'Login valid, logout, dan penanganan sesi' },
        { en: 'Rejection on unknown username, wrong password, and empty fields', id: 'Penolakan saat username tidak terdaftar, password salah, dan field kosong' },
        { en: 'Password field masking, and access to internal pages without a session', id: 'Masking field password, dan akses halaman internal tanpa sesi' },
      ],
    },
    {
      module: 'Register',
      scenarios: [
        { en: 'Successful registration with complete data', id: 'Pendaftaran berhasil dengan data lengkap' },
        { en: 'Duplicate username, empty required fields, mismatched password confirmation', id: 'Username duplikat, field wajib kosong, konfirmasi password tidak cocok' },
      ],
    },
    {
      module: 'Transfer Funds',
      scenarios: [
        { en: 'Transfer between own accounts, with balances verified afterwards', id: 'Transfer antar akun sendiri, dengan saldo diverifikasi sesudahnya' },
        { en: 'Amount of zero, negative amount, and amount exceeding the source balance', id: 'Nominal nol, nominal negatif, dan nominal melebihi saldo akun sumber' },
      ],
    },
    {
      module: { en: 'Account, Bill Pay, Find Transactions, Loan, Update Profile', id: 'Account, Bill Pay, Find Transactions, Loan, Update Profile' },
      scenarios: [
        { en: 'Opening CHECKING and SAVINGS accounts and seeing them in the overview', id: 'Membuka akun CHECKING dan SAVINGS lalu melihatnya di overview' },
        { en: 'Bill payment with balance deduction verified', id: 'Pembayaran tagihan dengan pengurangan saldo yang diverifikasi' },
        { en: 'Transaction search, loan request, and profile update', id: 'Pencarian transaksi, pengajuan pinjaman, dan pembaruan profil' },
      ],
    },
    {
      module: { en: 'REST API', id: 'REST API' },
      scenarios: [
        { en: 'Login, account, transaction, and transfer endpoints checked directly', id: 'Endpoint login, akun, transaksi, dan transfer diperiksa langsung' },
      ],
    },
  ],
  strategy: [
    {
      en: 'Selectors are read from the real markup rather than guessed: id, then name, then stable attributes, then text. Generated classes and nth-child are avoided. Register and Update Profile use ids containing a dot (customer.firstName), handled with an attribute selector instead of escaping.',
      id: 'Selector dibaca dari markup asli, bukan ditebak: id, lalu name, lalu atribut stabil, lalu teks. Class hasil generate dan nth-child dihindari. Register dan Update Profile memakai id yang mengandung titik (customer.firstName), ditangani dengan attribute selector alih-alih di-escape.',
    },
    {
      en: 'The suite is re-runnable by design. ParaBank\'s database is reset once per run through a Node-level memoised task, and every spec registers its own customer with a timestamped username. The shared john/demo account is deliberately not used: its balances shift constantly, and during development it disappeared entirely until the database was reset.',
      id: 'Suite dirancang agar bisa dijalankan ulang. Database ParaBank direset sekali per eksekusi lewat task yang dimemoisasi di level Node, dan tiap spec mendaftarkan customer-nya sendiri dengan username ber-timestamp. Akun bersama john/demo sengaja tidak dipakai: saldonya berubah terus, dan saat pengembangan akun itu sempat hilang sama sekali sampai database direset.',
    },
    {
      en: 'Preconditions that are not the thing under test - a second account, an existing transaction - are created through the REST API, so a broken UI elsewhere cannot fail a test about transfers. The UI flow is still what gets tested, and balances are cross-checked through the API so assertions do not rest on rendered text alone.',
      id: 'Prasyarat yang bukan objek pengujian - akun kedua, transaksi yang sudah ada - dibuat lewat REST API, sehingga UI yang rusak di tempat lain tidak menggagalkan test tentang transfer. Yang diuji tetap alur UI-nya, dan saldo diperiksa silang lewat API supaya assertion tidak hanya bersandar pada teks di layar.',
    },
    {
      en: 'Intercept patterns are written as regular expressions, not globs. ParaBank injects ;jsessionid=... into form URLs, so a glob never matches and cy.wait() times out with "No request ever occurred" - which is exactly what happened before the patterns were changed.',
      id: 'Pola intercept ditulis sebagai regex, bukan glob. ParaBank menyisipkan ;jsessionid=... ke URL form, sehingga glob tidak pernah cocok dan cy.wait() timeout dengan pesan "No request ever occurred" - persis yang terjadi sebelum polanya diganti.',
    },
    {
      en: 'Empty-field expectations follow the application\'s real behaviour rather than one blanket rule: where validation is client-side, the assertion is that no request was sent at all; where it is server-side, the request is expected and what gets checked is the payload and the validation message that comes back.',
      id: 'Ekspektasi untuk field kosong mengikuti perilaku asli aplikasi, bukan satu aturan pukul rata: kalau validasinya client-side, yang di-assert adalah tidak ada request terkirim sama sekali; kalau server-side, request memang diharapkan terkirim dan yang diperiksa adalah payload serta pesan validasi yang dibalas.',
    },
    {
      en: 'Uncaught exceptions are filtered by keyword, not switched off. ParaBank has JavaScript errors of its own; ignoring all of them would hide real defects, so only the known ones are allowed through and anything else still fails the test.',
      id: 'Uncaught exception disaring per keyword, bukan dimatikan. ParaBank punya error JavaScript-nya sendiri; mengabaikan semuanya akan menyembunyikan cacat yang nyata, jadi hanya yang sudah dikenali yang dilewatkan dan sisanya tetap menggagalkan test.',
    },
  ],
  architecture: [
    {
      label: { en: 'GitHub Actions', id: 'GitHub Actions' },
      note: { en: 'push & pull request, Node 22, Chrome', id: 'push & pull request, Node 22, Chrome' },
    },
    {
      label: { en: 'Database reset', id: 'Reset database' },
      note: { en: 'once per run, memoised', id: 'sekali per eksekusi, dimemoisasi' },
    },
    {
      label: { en: 'Unique user per spec', id: 'User unik per spec' },
      note: { en: 'registered through the API', id: 'didaftarkan lewat API' },
    },
    {
      label: { en: 'Spec + Page Object', id: 'Spec + Page Object' },
      note: { en: '9 specs, 8 page objects', id: '9 spec, 8 page object' },
    },
    {
      label: { en: 'Mochawesome report', id: 'Laporan Mochawesome' },
      note: { en: 'screenshots & video on failure', id: 'screenshot & video saat gagal' },
    },
  ],
  snippets: [
    {
      caption: {
        en: 'Every spec registers its own customer, so the suite can be re-run without data collisions.',
        id: 'Tiap spec mendaftarkan customer-nya sendiri, sehingga suite bisa dijalankan ulang tanpa data bentrok.',
      },
      lang: 'js',
      code: `Cypress.Commands.add('registerUniqueUser', () => {
  const username = \`qa\${Date.now()}\`;

  return cy.fixture('users').then((users) => {
    const profile = users.profile;
    const password = users.defaultPassword;

    // ParaBank butuh JSESSIONID aktif sebelum form register diproses.
    cy.request('/parabank/register.htm');

    cy.request({
      method: 'POST',
      url: '/parabank/register.htm',
      form: true,
      body: {
        'customer.firstName': profile.firstName,
        'customer.username': username,
        'customer.password': password,
        repeatedPassword: password,
      },
    })
      .its('body')
      .should('include', 'created successfully');
  });
});`,
    },
    {
      caption: {
        en: 'A negative test that survives timing. An earlier version passed while the application was in fact accepting the transfer: the DOM assertion ran before the AJAX response arrived. It now waits for the request, asserts the status, and cross-checks the balance through the API - a check that does not depend on render timing.',
        id: 'Test negatif yang tahan terhadap timing. Versi awalnya lulus padahal aplikasinya justru menerima transfer: assertion DOM dievaluasi sebelum response AJAX tiba. Sekarang ia menunggu request, meng-assert status-nya, lalu memeriksa silang saldo lewat API - pemeriksaan yang tidak bergantung pada waktu render.',
      },
      lang: 'js',
      code: `// KNOWN ISSUE (BUG-03): ParaBank menerima transfer dengan nominal negatif.
// Efeknya arah transfer terbalik tanpa validasi apa pun.
it('TC-TRF003 : transfer dengan nominal negatif ditolak', () => {
  const amount = Number(users.transfer.negativeAmount);
  cy.intercept('POST', /\\/services_proxy\\/bank\\/transfer/).as('transferRequest');

  cy.apiGetAccount(sourceAccountId).then((sourceBefore) => {
    transferPage.transfer(amount, sourceAccountId, targetAccountId);

    cy.wait('@transferRequest')
      .its('response.statusCode')
      .should('be.gte', 400);

    cy.apiGetAccount(sourceAccountId).then((sourceAfter) => {
      expect(sourceAfter.balance, 'saldo akun sumber tidak berubah').to.eq(
        sourceBefore.balance
      );
    });
    transferPage.assertTransferRejected();
  });
});`,
    },
  ],
  results: [
    { value: '43', label: { en: 'Test cases', id: 'Test case' } },
    {
      value: '39',
      label: { en: 'Passing', id: 'Lulus' },
      note: { en: 'across 9 spec files', id: 'di 9 file spec' },
    },
    {
      value: '4',
      label: { en: 'Failing on purpose', id: 'Gagal dengan sengaja' },
      note: {
        en: 'application defects, not flaky tests',
        id: 'cacat aplikasi, bukan test yang flaky',
      },
    },
    {
      value: '8',
      label: { en: 'Bugs documented', id: 'Bug terdokumentasi' },
      note: {
        en: 'including a negative transfer that reverses direction',
        id: 'termasuk transfer negatif yang membalik arah',
      },
    },
  ],
};
