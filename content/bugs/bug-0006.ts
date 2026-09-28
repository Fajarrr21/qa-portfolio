import type { Bug } from '@/lib/types';

// Sumber: README repo project-parabank, BUG-07. Ditemukan lewat handler
// uncaught:exception saat menyusun test pembukaan akun.

export const bug0006: Bug = {
  id: 'BUG-0006',
  title: {
    en: 'The error handler on the Open Account page throws its own error',
    id: 'Penangan error di halaman Open Account justru melempar error sendiri',
  },
  severity: 'Low',
  type: { en: 'Functional / JavaScript', id: 'Fungsional / JavaScript' },
  context: {
    en: 'ParaBank, Open New Account page (openaccount.htm), when account creation fails.',
    id: 'ParaBank, halaman Open New Account (openaccount.htm), saat pembukaan akun gagal.',
  },
  steps: [
    { en: 'Log in and open the Open New Account page.', id: 'Login lalu buka halaman Open New Account.' },
    { en: 'Trigger a failure in account creation.', id: 'Picu kegagalan pada pembuatan akun.' },
    { en: 'Watch the browser console while the page tries to show the error.', id: 'Perhatikan console browser saat halaman mencoba menampilkan pesan error.' },
  ],
  expected: {
    en: 'The failure is reported to the user with a readable message.',
    id: 'Kegagalannya dilaporkan ke pengguna dengan pesan yang terbaca.',
  },
  actual: {
    en: 'showError() references a variable named error that was never declared in its scope, so the handler throws a ReferenceError and the user is told nothing.',
    id: 'showError() mengacu ke variabel bernama error yang tidak pernah dideklarasikan di scope-nya, sehingga handler-nya melempar ReferenceError dan pengguna tidak diberi tahu apa pun.',
  },
  investigation: {
    en: 'Low severity by itself, but worth logging because of where it sits: the code that only runs when something has already gone wrong. Failure paths get less attention than happy paths, and this one was written in a way that guarantees the user learns nothing at the exact moment they need an explanation. Surfaced because the suite filters uncaught exceptions by keyword instead of disabling them - a blanket uncaught:exception, () => false would have hidden it completely.',
    id: 'Severity-nya rendah kalau berdiri sendiri, tapi layak dicatat karena letaknya: kode yang baru berjalan ketika sesuatu sudah terlanjur salah. Jalur kegagalan memang kurang diperhatikan dibanding jalur sukses, dan yang ini ditulis dengan cara yang menjamin pengguna tidak mendapat penjelasan apa pun justru saat ia paling membutuhkannya. Muncul karena suite-nya menyaring uncaught exception per keyword alih-alih mematikannya - satu baris uncaught:exception, () => false akan menyembunyikannya sepenuhnya.',
  },
  evidence: [],
  status: { en: 'Open - third-party application', id: 'Terbuka - aplikasi pihak ketiga' },
};
