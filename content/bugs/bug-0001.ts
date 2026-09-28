import type { Bug } from '@/lib/types';

// Sumber: README repo project-parabank, BUG-01. Tercermin sebagai TC-LOGIN007
// yang sengaja dibiarkan gagal.
//
// REVIEW(fajar): severity aku tetapkan High - halamannya tidak membocorkan data,
// tapi tidak adanya guard sesi itu cacat kontrol akses, bukan sekadar error.
// Kalau menurutmu Critical, ganti.

export const bug0001: Bug = {
  id: 'BUG-0001',
  title: {
    en: 'Internal pages are served without a session check',
    id: 'Halaman internal dilayani tanpa pemeriksaan sesi',
  },
  severity: 'High',
  type: { en: 'Security / Access control', id: 'Keamanan / Kontrol akses' },
  context: {
    en: 'ParaBank (Parasoft demo banking), Accounts Overview page, browser with no active session.',
    id: 'ParaBank (demo banking Parasoft), halaman Accounts Overview, browser tanpa sesi aktif.',
  },
  steps: [
    { en: 'Make sure no user is logged in (clear cookies).', id: 'Pastikan tidak ada user yang login (bersihkan cookie).' },
    { en: 'Open /parabank/overview.htm directly in the address bar.', id: 'Buka /parabank/overview.htm langsung dari address bar.' },
    { en: 'Observe the URL and the response.', id: 'Perhatikan URL dan respons yang diterima.' },
  ],
  expected: {
    en: 'The request is redirected to the login page, and the URL changes accordingly.',
    id: 'Request dialihkan ke halaman login, dan URL-nya ikut berubah.',
  },
  actual: {
    en: 'The page stays on the same URL and the server answers HTTP 500 with a generic message: "An internal error has occurred and has been logged."',
    id: 'Halaman tetap di URL yang sama dan server membalas HTTP 500 dengan pesan generik: "An internal error has occurred and has been logged."',
  },
  investigation: {
    en: 'Two separate problems sit on top of each other. There is no session guard, and the failure that follows is not handled either - the application answers 500 rather than a redirect or a 401/403. A generic 500 also tells an attacker that the endpoint exists and reached application code. Covered by TC-LOGIN007, which is left failing rather than adjusted to accept the 500.',
    id: 'Ada dua masalah yang menumpuk. Tidak ada guard sesi, dan kegagalan sesudahnya pun tidak ditangani - aplikasi membalas 500, bukan redirect atau 401/403. Pesan 500 generik juga memberi tahu penyerang bahwa endpoint-nya ada dan sudah mencapai kode aplikasi. Tercakup oleh TC-LOGIN007, yang dibiarkan gagal alih-alih disesuaikan supaya menerima 500.',
  },
  evidence: [],
  status: { en: 'Open - third-party application', id: 'Terbuka - aplikasi pihak ketiga' },
};
