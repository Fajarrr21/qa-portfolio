// Artefak dokumentasi QA: test plan, test case, bug report.
//
// Sumbernya dokumen asli milik Fajar (test plan CazhPOS yang ia susun sendiri,
// sheet test case Login, sheet bug report design review). Yang ditayangkan di
// sini adalah STRUKTUR dan kutipan yang menunjukkan cara mengambil keputusan -
// bukan tempelan seluruh isi dokumen. Tidak ada yang membaca test plan utuh di
// portfolio.
//
// KERAHASIAAN: nama rekan kerja yang muncul di dokumen asli (PM, Lead Dev,
// penyetuju) diganti menjadi peran. Mereka tidak ikut memutuskan namanya
// tayang, dan dokumen ini disusun sendiri - bukan benar-benar mereka review.
// Daftar partner payment gateway sengaja tidak dicantumkan.
//
// REVIEW(fajar): seluruh string `en:` adalah terjemahan dari dokumenmu yang
// aslinya berbahasa Indonesia. Angka, nama kolom, dan ID tidak diubah.

import type { Text } from '@/lib/i18n';

/** Fakta ringkas yang tampil sebagai chip di kepala tiap artefak. */
export interface ArtifactFact {
  label: Text;
  value: Text;
}

/** Satu bab pada kerangka dokumen. */
export interface ArtifactOutlineItem {
  heading: Text;
  note?: Text;
}

/** Bagian yang menunjukkan penilaian, bukan sekadar isi dokumen. */
export interface ArtifactHighlight {
  title: Text;
  body: Text;
  /** Daftar poin opsional di bawah body. */
  points?: Text[];
}

/** Satu baris contoh, dirender sebagai daftar label-nilai (bukan tabel lebar). */
export interface ArtifactSample {
  id: string;
  title: Text;
  status?: { label: Text; tone: 'pass' | 'fail' | 'info' };
  fields: { label: Text; value: Text }[];
}

export interface Artifact {
  slug: string;
  kind: Text;
  title: Text;
  subtitle: Text;
  /** Dari mana dokumen ini berasal - ditulis apa adanya, tanpa dibesarkan. */
  provenance: Text;
  context: Text[];
  facts: ArtifactFact[];
  columns?: Text[];
  outline?: ArtifactOutlineItem[];
  highlights?: ArtifactHighlight[];
  samples?: ArtifactSample[];
}

// ---------------------------------------------------------------- test plan

const testPlan: Artifact = {
  slug: 'test-plan',
  kind: { en: 'Test plan', id: 'Test plan' },
  title: {
    en: 'Test plan for a school-canteen POS application',
    id: 'Test plan untuk aplikasi POS kantin sekolah',
  },
  subtitle: {
    en: 'Scope, risk tiering, entry and exit criteria for a release',
    id: 'Ruang lingkup, penjenjangan risiko, entry dan exit criteria untuk satu rilis',
  },
  provenance: {
    en: 'A document I wrote myself for a point-of-sale product I know well. Colleague names in the original are replaced with roles here.',
    id: 'Dokumen yang saya susun sendiri untuk produk point-of-sale yang saya kenal. Nama rekan kerja di dokumen asli diganti menjadi peran di sini.',
  },
  context: [
    {
      en: 'The application sits in school canteens and handles real money: students pay by tapping a card, by cash, or through QRIS and other digital methods. That changes what testing has to cover.',
      id: 'Aplikasinya dipakai di kantin sekolah dan menyangkut uang sungguhan: siswa membayar dengan menempelkan kartu, tunai, atau lewat QRIS dan metode digital lain. Itu mengubah apa yang harus dicakup pengujian.',
    },
    {
      en: 'Four characteristics drive the whole plan: traffic spikes at break time, canteen internet is unreliable so offline mode and later sync are mandatory, physical hardware is involved (card reader, thermal printer, barcode scanner), and one canteen may run several cashier devices whose stock must stay consistent.',
      id: 'Empat karakteristik yang menyetir seluruh rencana: lonjakan transaksi saat jam istirahat, internet kantin yang tidak stabil sehingga mode offline dan sinkronisasi menyusul jadi wajib, adanya perangkat keras fisik (card reader, printer thermal, scanner barcode), dan satu kantin bisa memakai beberapa perangkat kasir yang stoknya harus tetap konsisten.',
    },
  ],
  facts: [
    { label: { en: 'Document version', id: 'Versi dokumen' }, value: 'v2.0' },
    {
      label: { en: 'Testing types', id: 'Tipe pengujian' },
      value: 'Functional · Regression · UAT · Release',
    },
    {
      label: { en: 'Test window', id: 'Periode pengujian' },
      value: { en: '23 Apr - 5 May 2026', id: '23 Apr - 5 Mei 2026' },
    },
    { label: { en: 'Risk tiers', id: 'Tingkat risiko' }, value: '4' },
  ],
  outline: [
    {
      heading: { en: '1. Introduction', id: '1. Pendahuluan' },
      note: {
        en: 'Purpose, what the product is, and the characteristics that make testing it unusual',
        id: 'Tujuan, produknya apa, dan karakteristik yang membuat pengujiannya tidak biasa',
      },
    },
    {
      heading: { en: '2. Scope', id: '2. Ruang lingkup' },
      note: {
        en: 'Modules in scope with priority - and an explicit out-of-scope list',
        id: 'Modul yang diuji beserta prioritasnya - dan daftar yang eksplisit TIDAK diuji',
      },
    },
    {
      heading: { en: '3. Strategy and approach', id: '3. Strategi & pendekatan' },
      note: {
        en: 'Test types with owner and timing, risk-based tiering, shift-left practices',
        id: 'Tipe pengujian beserta PIC dan waktunya, penjenjangan berbasis risiko, praktik shift-left',
      },
    },
    {
      heading: { en: '4. Entry and exit criteria', id: '4. Entry & exit criteria' },
      note: {
        en: 'What must be ready before testing starts, what must be true before release, and when testing is suspended',
        id: 'Apa yang harus siap sebelum pengujian dimulai, apa yang harus terpenuhi sebelum rilis, dan kapan pengujian dihentikan sementara',
      },
    },
    {
      heading: { en: '5. Environment and tools', id: '5. Lingkungan & tools' },
      note: {
        en: 'Environments, device matrix, supporting hardware, tooling, and the test data that must exist first',
        id: 'Environment, matriks device, hardware pendukung, tooling, dan test data yang wajib tersedia lebih dulu',
      },
    },
    {
      heading: { en: '6. Critical scenarios', id: '6. Skenario kritis' },
      note: {
        en: 'Situations that actually happen in a canteen; skipping any one of them blocks the release',
        id: 'Situasi yang benar-benar terjadi di kantin; melewatkan salah satunya = blocker rilis',
      },
    },
  ],
  highlights: [
    {
      title: {
        en: 'Effort follows business risk, not module size',
        id: 'Usaha mengikuti risiko bisnis, bukan besarnya modul',
      },
      body: {
        en: 'Modules are sorted into four tiers, and each tier gets a different depth of testing. Everything cannot be critical - saying so out loud is what makes the plan usable when time runs short.',
        id: 'Modul dibagi ke empat tingkat, dan tiap tingkat mendapat kedalaman pengujian yang berbeda. Tidak semua bisa kritis - menyatakannya terang-terangan itulah yang membuat rencana ini tetap terpakai saat waktu mepet.',
      },
      points: [
        {
          en: 'Tier 1 (transactions, balance, offline and sync): every test case, plus negative, edge, and concurrency cases',
          id: 'Tier 1 (transaksi, saldo, offline & sync): seluruh test case, plus negative, edge, dan concurrency',
        },
        {
          en: 'Tier 2 (stock, sales reports, login, receipt printing): every test case plus the main negative cases',
          id: 'Tier 2 (stok, laporan penjualan, login, cetak struk): seluruh test case plus negative case utama',
        },
        {
          en: 'Tier 3 (promos, membership, online store): happy path plus two or three negative cases',
          id: 'Tier 3 (promo, membership, toko online): happy path plus dua-tiga negative case',
        },
        {
          en: 'Tier 4 (profile settings, minor display): smoke test only',
          id: 'Tier 4 (pengaturan profil, tampilan minor): smoke test saja',
        },
      ],
    },
    {
      title: {
        en: 'Exit criteria are numbers, not opinions',
        id: 'Exit criteria berupa angka, bukan pendapat',
      },
      body: {
        en: 'Release readiness is written so that it can be checked rather than argued about. The thresholds drop with the tier, which keeps them honest - demanding 100% everywhere would only guarantee the criteria get waived.',
        id: 'Kesiapan rilis ditulis supaya bisa dicek, bukan diperdebatkan. Ambangnya menurun mengikuti tingkat risiko, dan justru itu yang membuatnya jujur - menuntut 100% di semua lini hanya akan membuat kriterianya diabaikan.',
      },
      points: [
        {
          en: '100% of Tier 1 (Critical) test cases executed and passed',
          id: '100% test case Tier 1 (Critical) dieksekusi dan lulus',
        },
        {
          en: '100% of Tier 2 (High) executed, at least 98% passed',
          id: '100% test case Tier 2 (High) dieksekusi, minimal 98% lulus',
        },
        { en: 'At least 95% of Tier 3 (Medium) executed', id: 'Minimal 95% test case Tier 3 (Medium) dieksekusi' },
        {
          en: 'Zero open Critical bugs; zero open High bugs in the transaction and sync modules',
          id: 'Nol bug Critical terbuka; nol bug High terbuka di modul transaksi dan sync',
        },
        {
          en: 'Remaining open Medium bugs must have a workaround or be deferred with sign-off',
          id: 'Bug Medium yang masih terbuka harus punya workaround atau di-defer dengan persetujuan',
        },
      ],
    },
    {
      title: {
        en: 'Testing can be stopped on purpose',
        id: 'Pengujian boleh dihentikan dengan sengaja',
      },
      body: {
        en: 'A suspend and resume section names the conditions under which testing pauses and what has to be true to restart. Without it, a QA whose environment is broken keeps producing results that mean nothing.',
        id: 'Ada bagian suspend & resume yang menyebutkan kondisi kapan pengujian dihentikan dan apa yang harus terpenuhi untuk melanjutkan. Tanpa itu, QA yang lingkungannya rusak akan terus menghasilkan temuan yang tidak berarti apa-apa.',
      },
      points: [
        {
          en: 'A critical transaction bug (wrong balance, double debit) pauses testing until a hotfix passes ten consecutive successful transactions',
          id: 'Bug critical di transaksi (saldo salah, double-debit) menghentikan pengujian sampai hotfix lolos sepuluh transaksi berturut-turut',
        },
        {
          en: 'A payment sandbox down for more than two hours means skipping that test type and continuing elsewhere, not waiting idle',
          id: 'Sandbox payment down lebih dari dua jam berarti melewati tipe pengujian itu dan lanjut ke modul lain, bukan menunggu menganggur',
        },
      ],
    },
    {
      title: {
        en: 'The critical scenarios are the ones that cost money',
        id: 'Skenario kritis adalah yang berujung pada uang',
      },
      body: {
        en: 'This section is written from what actually happens at a canteen counter, not from the feature list. Each one is a way the system can take or lose money incorrectly.',
        id: 'Bagian ini ditulis dari apa yang benar-benar terjadi di meja kasir kantin, bukan dari daftar fitur. Masing-masing adalah cara sistem bisa salah mengambil atau kehilangan uang.',
      },
      points: [
        {
          en: 'Card scanned repeatedly in quick succession must never double-debit',
          id: 'Kartu di-scan cepat berkali-kali tidak boleh menyebabkan double-debit',
        },
        {
          en: 'Connection dropping mid-verification must have defined behaviour - retry or queue, never silence',
          id: 'Koneksi putus saat verifikasi harus punya perilaku yang jelas - retry atau queue, bukan diam',
        },
        {
          en: 'Cancelling before confirmation must leave the balance untouched',
          id: 'Membatalkan sebelum konfirmasi tidak boleh mengurangi saldo',
        },
        {
          en: 'Wrong PIN three times must block the card according to policy',
          id: 'PIN salah tiga kali harus memblokir kartu sesuai policy',
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------- test case

const testCase: Artifact = {
  slug: 'test-case',
  kind: { en: 'Test case', id: 'Test case' },
  title: {
    en: 'Test cases for a login module',
    id: 'Test case untuk modul login',
  },
  subtitle: {
    en: 'Eight scenarios broken into twenty-five traceable cases',
    id: 'Delapan skenario yang dipecah menjadi dua puluh lima kasus uji yang tertelusur',
  },
  provenance: {
    en: 'Written against the OrangeHRM demo application - the same target as the automation case study.',
    id: 'Disusun untuk aplikasi demo OrangeHRM - target yang sama dengan case study automation.',
  },
  context: [
    {
      en: 'A login page looks like the smallest possible feature, which is exactly why it is a good test of documentation discipline: it is easy to write three cases and call it done.',
      id: 'Halaman login terlihat seperti fitur paling kecil, dan justru karena itu ia jadi ujian yang baik untuk disiplin dokumentasi: gampang sekali menulis tiga kasus lalu merasa selesai.',
    },
  ],
  facts: [
    { label: { en: 'Scenarios', id: 'Skenario' }, value: '8' },
    { label: { en: 'Test cases', id: 'Kasus uji' }, value: '25' },
    { label: { en: 'Columns', id: 'Kolom' }, value: '15' },
    { label: { en: 'Positive / negative', id: 'Positive / negative' }, value: '16 / 9' },
    { label: { en: 'Result', id: 'Hasil' }, value: { en: '24 passed, 1 failed', id: '24 lulus, 1 gagal' } },
  ],
  columns: [
    { en: 'Scenario ID', id: 'ID Skenario' },
    { en: 'Test scenario', id: 'Skenario Pengujian' },
    { en: 'Test case ID', id: 'ID Kasus Uji' },
    { en: 'Feature', id: 'Fitur' },
    { en: 'Type of testing', id: 'Type Testing' },
    { en: 'Test case name', id: 'Testcase Name' },
    { en: 'Pre-condition', id: 'Pre-Condition' },
    { en: 'Test steps', id: 'Test Steps' },
    { en: 'Data', id: 'Data' },
    { en: 'Expected result', id: 'Expected Result' },
    { en: 'Actual result', id: 'Actual Result' },
    { en: 'Priority', id: 'Priority' },
    { en: 'Status', id: 'Status' },
    { en: 'Evidence', id: 'Evidence' },
    { en: 'Comment', id: 'Komentar' },
  ],
  highlights: [
    {
      title: {
        en: 'Scenarios group cases, so coverage is traceable',
        id: 'Skenario mengelompokkan kasus uji, sehingga cakupannya tertelusur',
      },
      body: {
        en: 'Each scenario ID owns several case IDs. That turns the sheet from a flat checklist into something you can reason about: a scenario states the intent, the cases under it are the ways that intent can be checked, and a gap in coverage becomes visible rather than implied.',
        id: 'Satu ID skenario menaungi beberapa ID kasus uji. Itu mengubah sheet dari daftar centang datar menjadi sesuatu yang bisa ditalar: skenario menyatakan maksudnya, kasus uji di bawahnya adalah cara memeriksanya, dan lubang cakupan jadi terlihat, bukan tersirat.',
      },
      points: [
        {
          en: 'TS-LOGIN001 - user can reach the login page and it renders correctly',
          id: 'TS-LOGIN001 - pengguna dapat mengakses halaman login dan halamannya tampil benar',
        },
        {
          en: 'TS-LOGIN002 - every UI element on the page: fields, placeholder, layout, hidden password',
          id: 'TS-LOGIN002 - seluruh elemen UI di halaman: field, placeholder, layout, hide password',
        },
        {
          en: 'TS-LOGIN004 - the system rejects invalid credentials',
          id: 'TS-LOGIN004 - sistem menolak kredensial yang tidak valid',
        },
        {
          en: 'TS-LOGIN006 - the login button behaves, including preventing duplicate requests',
          id: 'TS-LOGIN006 - tombol login berfungsi, termasuk mencegah duplicate request',
        },
        {
          en: 'TS-LOGIN008 - the page stays consistent across screen sizes',
          id: 'TS-LOGIN008 - halaman tampil konsisten di berbagai ukuran layar',
        },
      ],
    },
    {
      title: {
        en: 'Priority is assigned per case, not per feature',
        id: 'Priority ditetapkan per kasus, bukan per fitur',
      },
      body: {
        en: 'One Critical, nine High, eleven Medium, four Low - all within a single login module. Logging in with valid credentials is Critical; the placeholder text is Low. Rating everything the same would make the column decorative.',
        id: 'Satu Critical, sembilan High, sebelas Medium, empat Low - semuanya di dalam satu modul login. Login dengan kredensial valid itu Critical; teks placeholder itu Low. Menyamakan semuanya hanya membuat kolom itu jadi hiasan.',
      },
    },
  ],
  samples: [
    {
      id: 'TC - LOGIN001',
      title: {
        en: 'Accessing the dashboard URL without logging in',
        id: 'Akses halaman url dashboard tanpa login',
      },
      status: { label: 'PASSED', tone: 'pass' },
      fields: [
        { label: { en: 'Scenario', id: 'Skenario' }, value: 'TS-LOGIN001' },
        { label: { en: 'Type', id: 'Type Testing' }, value: 'Negative' },
        { label: { en: 'Pre-condition', id: 'Pre-Condition' }, value: { en: 'Not logged in', id: 'Belum login' } },
        { label: { en: 'Steps', id: 'Test Steps' }, value: { en: 'Open the dashboard URL', id: 'Akses URL dashboard' } },
        {
          label: { en: 'Expected result', id: 'Expected Result' },
          value: { en: 'Redirected to the login page', id: 'Redirect ke halaman login' },
        },
        {
          label: { en: 'Actual result', id: 'Actual Result' },
          value: { en: 'System redirected to the login page', id: 'Sistem redirect ke halaman login' },
        },
        { label: 'Priority', value: 'High' },
      ],
    },
    {
      id: 'TC - LOGIN008',
      title: { en: 'Login with valid credentials', id: 'Login dengan input data valid' },
      status: { label: 'PASSED', tone: 'pass' },
      fields: [
        { label: { en: 'Scenario', id: 'Skenario' }, value: 'TS-LOGIN003' },
        { label: { en: 'Type', id: 'Type Testing' }, value: 'Positive' },
        {
          label: { en: 'Pre-condition', id: 'Pre-Condition' },
          value: { en: 'User is on the login page', id: 'User di halaman login' },
        },
        {
          label: { en: 'Steps', id: 'Test Steps' },
          value: {
            en: '1. Open the login page  2. Enter a valid username and password  3. Click the login button',
            id: '1. Akses halaman login  2. Input data username & password valid  3. Klik button login',
          },
        },
        {
          label: { en: 'Expected result', id: 'Expected Result' },
          value: {
            en: 'Login succeeds and the system redirects to the dashboard',
            id: 'Berhasil login, sistem redirect ke halaman dashboard',
          },
        },
        {
          label: { en: 'Actual result', id: 'Actual Result' },
          value: { en: 'Logged in to the dashboard without errors', id: 'Berhasil login dashboard tanpa error' },
        },
        { label: 'Priority', value: 'Critical' },
      ],
    },
    {
      id: 'TC - LOGIN007',
      title: {
        en: 'Password hide/unhide toggle is available',
        id: 'Terdapat fitur hide/unhide password',
      },
      status: { label: 'FAIL', tone: 'fail' },
      fields: [
        { label: { en: 'Scenario', id: 'Skenario' }, value: 'TS-LOGIN002' },
        { label: { en: 'Type', id: 'Type Testing' }, value: 'Positive' },
        {
          label: { en: 'Steps', id: 'Test Steps' },
          value: {
            en: '1. Open the login page  2. Type a password  3. Click the hide/unhide icon',
            id: '1. Akses halaman login  2. Input data password  3. Klik icon hide/unhide',
          },
        },
        {
          label: { en: 'Expected result', id: 'Expected Result' },
          value: {
            en: 'The password can be revealed and hidden again',
            id: 'Password bisa ditampilkan & disembunyikan',
          },
        },
        {
          label: { en: 'Comment', id: 'Komentar' },
          value: {
            en: 'There is no hide/unhide control on this page',
            id: 'Tidak terdapat fitur hide/unhide password',
          },
        },
        { label: 'Priority', value: 'Low' },
      ],
    },
  ],
};

// -------------------------------------------------------------- bug report

const bugReport: Artifact = {
  slug: 'bug-report',
  kind: { en: 'Bug report', id: 'Bug report' },
  title: {
    en: 'Design-compliance review of a chat interface',
    id: 'Review kesesuaian desain pada antarmuka chat',
  },
  subtitle: {
    en: 'Twenty-two findings from comparing an implementation against its design file',
    id: 'Dua puluh dua temuan dari membandingkan implementasi dengan berkas desainnya',
  },
  provenance: {
    en: 'An exercise comparing a Figma design against the delivered interface, not defects found in a live product. The value here is the reporting format and the severity judgement, not the bug count.',
    id: 'Latihan membandingkan desain Figma dengan antarmuka yang dikirim, bukan defect yang ditemukan di produk yang berjalan. Nilainya ada pada format pelaporan dan penilaian severity-nya, bukan pada jumlah bug.',
  },
  context: [
    {
      en: 'Design-compliance work is where bug reports usually get sloppy: findings collapse into "does not match the design" with a screenshot attached, and a developer cannot act on that. Every entry here names the element, the expected state, and the actual state separately.',
      id: 'Pekerjaan kesesuaian desain adalah tempat laporan bug biasanya jadi asal-asalan: temuannya menciut jadi "tidak sesuai desain" plus lampiran screenshot, dan developer tidak bisa berbuat apa-apa dengan itu. Setiap entri di sini menyebutkan elemennya, keadaan yang diharapkan, dan keadaan sebenarnya, secara terpisah.',
    },
  ],
  facts: [
    { label: { en: 'Findings', id: 'Temuan' }, value: '22' },
    { label: { en: 'Columns', id: 'Kolom' }, value: '16' },
    {
      label: { en: 'Severity', id: 'Severity' },
      value: { en: '12 Minor · 9 Medium · 1 Major', id: '12 Minor · 9 Medium · 1 Major' },
    },
    {
      label: { en: 'Priority', id: 'Priority' },
      value: { en: '9 High · 11 Medium · 2 Low', id: '9 High · 11 Medium · 2 Low' },
    },
  ],
  columns: [
    { en: 'Date', id: 'Date' },
    { en: 'Bug ID', id: 'ID Bug' },
    { en: 'Reported by', id: 'Reported By' },
    { en: 'Environment', id: 'Environment' },
    { en: 'Title', id: 'Title' },
    { en: 'Issue / description', id: 'Issue/Description' },
    { en: 'Expected result', id: 'Expected Result' },
    { en: 'Actual result', id: 'Actual Result' },
    { en: 'Steps to reproduce', id: 'Steps to reproduce' },
    { en: 'Test type', id: 'Test Type' },
    { en: 'Link evidence', id: 'Link Evidence' },
    { en: 'Assigned to', id: 'Assigned to' },
    { en: 'Severity', id: 'Severity' },
    { en: 'Priority', id: 'Priority' },
    { en: 'Status', id: 'Status' },
    { en: 'Notes', id: 'Notes' },
  ],
  highlights: [
    {
      title: {
        en: 'Severity and priority are separate columns, and they disagree',
        id: 'Severity dan priority adalah kolom terpisah, dan keduanya memang berbeda',
      },
      body: {
        en: 'Severity describes how broken the thing is; priority describes how soon it should be dealt with. They are not the same question, and the split shows in the data: findings rated only Medium severity carry High priority because they are visible on the first screen a user sees. Collapsing the two into one column is the most common flaw in a junior bug report.',
        id: 'Severity menjelaskan seberapa rusak sesuatunya; priority menjelaskan seberapa cepat ia harus ditangani. Itu dua pertanyaan berbeda, dan pemisahannya terlihat di datanya: temuan yang severity-nya cuma Medium diberi priority High karena terlihat di layar pertama yang dibuka pengguna. Menggabungkan keduanya jadi satu kolom adalah cacat paling umum di laporan bug junior.',
      },
    },
    {
      title: {
        en: 'A severity scale that is numbered, so it can be sorted',
        id: 'Skala severity yang bernomor, supaya bisa diurutkan',
      },
      body: {
        en: 'The scale is written "1 Minor", "2 Medium", "3 Major" rather than as bare words. A small thing, but it means a spreadsheet sorts by seriousness instead of alphabetically, which is what you want when the list is long and someone needs to triage it quickly.',
        id: 'Skalanya ditulis "1 Minor", "2 Medium", "3 Major", bukan kata telanjang. Hal kecil, tapi artinya spreadsheet mengurutkan berdasarkan keseriusan, bukan berdasarkan abjad - dan itulah yang dibutuhkan saat daftarnya panjang dan seseorang harus men-triase cepat.',
      },
    },
    {
      title: {
        en: 'Not every finding is cosmetic',
        id: 'Tidak semua temuan bersifat kosmetik',
      },
      body: {
        en: 'Most entries are spacing, colour, and border radius. One is not: a clock reading past the 24-hour range is invalid data displayed as if it were fine, which is a different class of problem from an avatar being slightly oval. Separating those two is the judgement the report is actually demonstrating.',
        id: 'Sebagian besar entri soal spacing, warna, dan border radius. Satu tidak: jam yang menunjukkan angka melewati batas 24 jam adalah data tidak valid yang ditampilkan seolah baik-baik saja - kelas masalah yang berbeda dari avatar yang sedikit lonjong. Memisahkan keduanya itulah penilaian yang sebenarnya sedang ditunjukkan laporan ini.',
      },
    },
  ],
  samples: [
    {
      id: 'BUG-G1-004',
      title: {
        en: 'Time format is invalid and does not match the design',
        id: 'Format waktu tidak valid dan tidak sesuai design',
      },
      status: { label: { en: 'Valid', id: 'Valid' }, tone: 'info' },
      fields: [
        { label: 'Environment', value: 'Chrome, Windows 10' },
        {
          label: { en: 'Description', id: 'Issue/Description' },
          value: {
            en: 'The time shown in the status bar is invalid because it exceeds the 24-hour format, and does not match the design, which uses a real-time 00.00-23.59 format',
            id: 'Waktu yang ditampilkan pada status bar tidak valid karena melebihi format 24 jam, tidak sesuai dengan design yang memakai format waktu realtime (00.00-23.59)',
          },
        },
        {
          label: { en: 'Expected result', id: 'Expected Result' },
          value: {
            en: 'Time is shown in a valid 24-hour format (00.00-23.59)',
            id: 'Waktu ditampilkan dalam format 24 jam yang valid (00.00-23.59)',
          },
        },
        {
          label: { en: 'Actual result', id: 'Actual Result' },
          value: {
            en: 'Time exceeds the 24-hour limit and does not match the design',
            id: 'Waktu melebihi batas 24 jam dan tidak sesuai dengan design',
          },
        },
        { label: 'Severity', value: '2 Medium' },
        { label: 'Priority', value: 'High' },
      ],
    },
    {
      id: 'BUG-G1-010',
      title: {
        en: 'Sender and receiver chat colours do not match the design',
        id: 'Warna chat pengirim dan penerima tidak sesuai design',
      },
      status: { label: { en: 'Valid', id: 'Valid' }, tone: 'info' },
      fields: [
        { label: 'Environment', value: 'Chrome, Windows 10' },
        {
          label: { en: 'Expected result', id: 'Expected Result' },
          value: {
            en: '1. Sender bubble is white  2. Receiver bubble is black',
            id: '1. Chat pengirim berwarna putih  2. Chat penerima berwarna hitam',
          },
        },
        {
          label: { en: 'Actual result', id: 'Actual Result' },
          value: {
            en: '1. Sender bubble is yellow  2. Receiver bubble is green',
            id: '1. Chat pengirim berwarna kuning  2. Chat penerima berwarna hijau',
          },
        },
        { label: 'Severity', value: '2 Medium' },
        { label: 'Priority', value: 'High' },
      ],
    },
  ],
};

export const artifacts: Artifact[] = [testPlan, testCase, bugReport];

export function getArtifact(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.slug === slug);
}
