import type { Project } from '@/lib/types';

// PROFESSIONAL WORK - PT. Cazh Teknologi Inovasi. draft:false (izin diberikan).
// ATURAN KERAHASIAAN (brief §6) berlaku penuh:
//  - Tidak ada kode dari repo kantor. Semua snippet ILUSTRATIF & generik (illustrative:true).
//  - Tidak ada URL/staging/endpoint internal, kredensial, API key, atau data pengguna.
//  - Nama modul hanya yang disebut di brief §10 / resume.
//  - JANGAN mengklaim automation berjalan di CI - suite dijalankan lokal.
//  - JANGAN mengklaim pass rate, durasi eksekusi, atau jumlah test yang lulus:
//    suite-nya belum pernah dijalankan penuh satu putaran (per 28 Sep 2026).
//    Kalau nanti sudah, angkanya boleh masuk - tapi angka hasil eksekusi nyata,
//    bukan perkiraan.
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
      en: 'The automation work splits two ways. I designed the framework and wrote the page objects, then led the QA intern team that produced the ~847 test cases across 64 spec files, reviewing and correcting the specs they wrote. The 86 test cases on the Cazh POS web dashboard are entirely my own. Getting a large intern team to produce a suite that stays consistent is a different problem from writing every test myself, and the conventions below are what make it possible.',
      id: 'Pekerjaan automation-nya terbagi dua. Saya merancang kerangkanya dan menulis seluruh Page Object, lalu memimpin tim intern QA yang menghasilkan ~847 test case di 64 file spec, sekaligus mereview dan memperbaiki spec yang mereka tulis. Sementara 86 test case pada dashboard web Cazh POS sepenuhnya pekerjaan saya sendiri. Membuat tim intern yang besar menghasilkan suite yang tetap konsisten itu persoalan yang berbeda dari menulis semua test sendirian, dan konvensi-konvensi di bawah inilah yang membuatnya mungkin.',
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
      en: 'The suite is configured with Mochawesome reporting and runs locally during development, not in CI. It has not yet been executed as one full end-to-end run, so there is no aggregate pass rate to quote.',
      id: 'Suite dikonfigurasi dengan pelaporan Mochawesome dan dijalankan lokal saat pengembangan, bukan di CI. Belum pernah dieksekusi penuh dalam satu putaran, jadi belum ada pass rate gabungan yang bisa disebutkan.',
    },
    // --- Koordinasi UAT ---
    // Angka dari dokumen UAT internal. SENGAJA tanpa nama modul, nama orang,
    // dan URL environment - lihat aturan kerahasiaan di atas.
    {
      en: 'For the major release UAT I wrote the test case document myself - 6,452 cases across twenty modules - and then ran it as a coordinated pass with thirty testers rather than executing it alone.',
      id: 'Untuk UAT rilis mayor, dokumen test case-nya saya susun sendiri - 6.452 kasus uji di dua puluh modul - lalu dijalankan sebagai pengujian terkoordinasi bersama tiga puluh tester, bukan dieksekusi sendirian.',
    },
    {
      en: 'Tracking it needed more than pass and fail. Each case carries one of eight states, and the two that matter most are the ones a simpler scheme would hide: Blocked, for a case that cannot be judged yet, and Merged, for a fix that exists but has not been deployed. Without them, both look like failures and the same case gets re-tested for no reason.',
      id: 'Melacaknya butuh lebih dari sekadar lulus dan gagal. Tiap kasus membawa satu dari delapan status, dan dua yang paling penting justru yang akan disembunyikan skema sederhana: Blocked, untuk kasus yang memang belum bisa dinilai, dan Merged, untuk perbaikan yang sudah ada tapi belum ter-deploy. Tanpa keduanya, dua-duanya terbaca sebagai kegagalan dan kasus yang sama diuji ulang tanpa alasan.',
    },
    {
      en: 'Coverage rolls up automatically from the twenty module sheets, so completion is read rather than compiled by hand. Alongside it sit an assignment sheet, a question log giving testers one place to ask instead of thirty scattered chats, and separate lists for blocked and invalid cases.',
      id: 'Cakupannya terangkum otomatis dari dua puluh sheet modul, sehingga kemajuannya dibaca, bukan direkap manual. Di sampingnya ada sheet pembagian tugas, log pertanyaan supaya tester punya satu tempat bertanya alih-alih tiga puluh percakapan terpencar, serta daftar terpisah untuk kasus blocked dan invalid.',
    },
    {
      en: 'The pass closed at zero untested. 282 cases - 4.4% - were marked invalid: my own test cases that turned out not to apply or to have been written against behaviour that had since changed. Recording them as invalid rather than quietly deleting them keeps the coverage figure honest.',
      id: 'Pengujiannya ditutup dengan nol kasus yang belum diuji. 282 kasus - 4,4% - ditandai invalid: test case buatan saya sendiri yang ternyata tidak berlaku atau ditulis untuk perilaku yang sudah berubah. Mencatatnya sebagai invalid alih-alih menghapusnya diam-diam membuat angka cakupannya tetap jujur.',
    },
    {
      en: 'On the POS product\'s UAT the split with a senior QA was by device class: I took the Android phone pass, they took the Android tablet.',
      id: 'Pada UAT produk POS, pembagian dengan senior QA dilakukan per kelas perangkat: saya mengambil pengujian di handphone Android, beliau di tablet Android.',
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
      note: { en: 'configured; local runs', id: 'dikonfigurasi; dijalankan lokal' },
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
  // Sengaja digeneralisasi - tidak menyebut modul atau versi produk. Yang
  // dinilai pembaca adalah temuannya dan akibatnya, bukan fitur mana di
  // produk mana. Lihat aturan di interface Finding (lib/types.ts).
  findings: [
    {
      title: {
        en: 'A bulk import that looked like it worked',
        id: 'Impor massal yang terlihat berhasil',
      },
      body: {
        en: 'The save button entered its loading state and gave no error, but the data never persisted - the request had failed on the server. Nothing on screen said so. A tester following the happy path and trusting the UI would have marked it passed.',
        id: 'Tombol simpan masuk ke keadaan loading dan tidak menampilkan error apa pun, tetapi datanya tidak pernah tersimpan - request-nya gagal di server. Tidak ada yang memberitahukannya di layar. Penguji yang mengikuti happy path dan percaya pada UI akan menandainya lulus.',
      },
      impact: {
        en: 'Without bulk import, each record has to be entered one at a time. On a product where a single customer onboards hundreds of records, that is the difference between minutes and hours - and the kind of first impression that costs a partner relationship rather than a support ticket.',
        id: 'Tanpa impor massal, setiap data harus dimasukkan satu per satu. Pada produk yang satu pelanggannya memasukkan ratusan data, itu perbedaan antara hitungan menit dan hitungan jam - dan kesan pertama yang harganya bukan satu tiket support, melainkan hubungan dengan partner.',
      },
    },
    {
      title: {
        en: 'A flow that changed between major versions',
        id: 'Alur yang berubah antar versi mayor',
      },
      body: {
        en: 'What used to be a single save became two ordered steps, and saving at the first step moved the user to a page that showed the record as complete when the second step had never been filled in. Reaching the second step at all meant either editing from that history page or going back to the start.',
        id: 'Yang sebelumnya sekali simpan menjadi dua langkah berurutan, dan menyimpan di langkah pertama memindahkan pengguna ke halaman yang menampilkan datanya seolah sudah lengkap padahal langkah kedua belum pernah diisi. Untuk sampai ke langkah kedua, pengguna harus mengedit dari halaman riwayat itu atau kembali ke awal.',
      },
      impact: {
        en: 'Existing users would run it from muscle memory built on the previous version and believe they had finished. The cost here is not a defect report - it is retraining every existing user, and the work that lands on whoever does the training.',
        id: 'Pengguna lama akan menjalankannya dengan kebiasaan dari versi sebelumnya dan mengira sudah selesai. Ongkosnya di sini bukan laporan cacat - melainkan melatih ulang seluruh pengguna lama, dan beban kerja yang jatuh ke siapa pun yang menangani pelatihan.',
      },
    },
  ],
  results: [
    // Angka UAT & defect diambil dari dokumen internal. Yang boleh tampil hanya
    // agregatnya - tanpa rincian per modul, per produk, atau per orang.
    {
      value: { en: '6,452', id: '6.452' },
      label: { en: 'UAT test cases written', id: 'Test case UAT yang disusun' },
      note: {
        en: 'across 20 modules, executed by 30 testers',
        id: 'di 20 modul, dieksekusi 30 tester',
      },
    },
    {
      value: '0',
      label: { en: 'Cases left untested', id: 'Kasus yang belum diuji' },
      note: {
        en: '282 marked invalid rather than quietly dropped',
        id: '282 ditandai invalid, bukan dihapus diam-diam',
      },
    },
    {
      value: '141',
      label: { en: 'Defects logged and tracked', id: 'Defect dicatat & dilacak' },
      note: {
        en: '77 closed; 3 Critical, 21 Major',
        id: '77 selesai; 3 Critical, 21 Major',
      },
    },
    {
      value: '~10',
      label: { en: 'Bug reports validated weekly', id: 'Laporan bug divalidasi tiap minggu' },
      note: {
        en: 'reproduced, judged, and answered back to the reporter',
        id: 'direproduksi, diputuskan, lalu dijelaskan kembali ke pelapor',
      },
    },
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
