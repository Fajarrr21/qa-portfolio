import type { Bug } from '@/lib/types';

// Sumber: README repo project-parabank, BUG-06. Temuan keamanan, tidak ada
// test otomatis yang mencerminkannya - ditemukan saat membaca markup halaman
// untuk menyusun selector Page Object.

export const bug0003: Bug = {
  id: 'BUG-0003',
  title: {
    en: 'User credentials are written into the page source and sent as a query string',
    id: 'Kredensial user ditulis di source halaman dan dikirim sebagai query string',
  },
  severity: 'Critical',
  type: { en: 'Security', id: 'Keamanan' },
  context: {
    en: 'ParaBank, Update Profile page, any logged-in customer.',
    id: 'ParaBank, halaman Update Profile, customer mana pun yang sedang login.',
  },
  steps: [
    { en: 'Log in as any customer.', id: 'Login sebagai customer mana pun.' },
    { en: 'Open the Update Profile page.', id: 'Buka halaman Update Profile.' },
    { en: 'View the page source and look at the inline JavaScript.', id: 'Lihat source halaman dan perhatikan JavaScript inline-nya.' },
    { en: 'Submit the form and watch the request URL in the network tab.', id: 'Kirim form-nya dan perhatikan URL request di tab network.' },
  ],
  expected: {
    en: 'Credentials are never exposed on the client, and are not carried in a URL.',
    id: 'Kredensial tidak pernah terekspos di sisi klien, dan tidak dibawa di dalam URL.',
  },
  actual: {
    en: 'The page builds its update request by inlining the logged-in username and password verbatim into the page JavaScript, then sends both as query-string parameters.',
    id: 'Halaman menyusun request update-nya dengan menyisipkan username dan password user apa adanya ke dalam JavaScript halaman, lalu mengirim keduanya sebagai parameter query string.',
  },
  investigation: {
    en: 'Found while reading the markup to build page-object selectors, not by a test - which is the point of reading source rather than only automating against it. A password in a query string is written to browser history, to any proxy or server access log along the path, and to the Referer header of whatever the page loads next. It is readable by anything with a view of the URL, including a shoulder-surfer. No automated test covers this: the application behaves "correctly" from the outside, which is exactly why it needs a human reading the page.',
    id: 'Ditemukan saat membaca markup untuk menyusun selector page object, bukan oleh test - dan justru itu gunanya membaca source, bukan hanya mengotomasi dari luar. Password di query string tercatat di riwayat browser, di log akses proxy atau server mana pun yang dilewati, dan di header Referer untuk apa pun yang dimuat halaman berikutnya. Ia terbaca oleh apa saja yang bisa melihat URL, termasuk orang yang mengintip dari belakang. Tidak ada test otomatis yang mencakup ini: dari luar aplikasinya berperilaku "benar", dan persis karena itu ia butuh manusia yang membaca halamannya.',
  },
  evidence: [],
  status: { en: 'Open - third-party application', id: 'Terbuka - aplikasi pihak ketiga' },
};
