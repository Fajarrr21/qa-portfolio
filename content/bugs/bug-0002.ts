import type { Bug } from '@/lib/types';

// Sumber: README repo project-parabank, BUG-03. Tercermin sebagai TC-TRF003.
//
// REVIEW(fajar): ini yang aku beri Critical. Bukan karena nominalnya besar,
// tapi karena dana berpindah dari akun yang tidak memberi otorisasi - itu
// kelas masalah yang berbeda dari sekadar validasi input yang kurang.

export const bug0002: Bug = {
  id: 'BUG-0002',
  title: {
    en: 'A negative transfer amount is accepted and reverses the direction of the transfer',
    id: 'Nominal transfer negatif diterima dan membalik arah transfer',
  },
  severity: 'Critical',
  type: { en: 'Functional / Validation', id: 'Fungsional / Validasi' },
  context: {
    en: 'ParaBank, Transfer Funds, logged in as a customer who owns both the source and destination accounts.',
    id: 'ParaBank, Transfer Funds, login sebagai customer yang memiliki akun sumber maupun akun tujuan.',
  },
  steps: [
    { en: 'Log in and open Transfer Funds.', id: 'Login lalu buka Transfer Funds.' },
    { en: 'Note the balance of both accounts first.', id: 'Catat dulu saldo kedua akun.' },
    { en: 'Enter a negative amount, for example -50.', id: 'Isi nominal negatif, misalnya -50.' },
    { en: 'Pick a source and a destination account, then submit.', id: 'Pilih akun sumber dan akun tujuan, lalu kirim.' },
    { en: 'Check both balances again.', id: 'Periksa kembali kedua saldo.' },
  ],
  expected: {
    en: 'The request is rejected with a validation message, and no balance changes.',
    id: 'Request ditolak dengan pesan validasi, dan tidak ada saldo yang berubah.',
  },
  actual: {
    en: 'The server answers HTTP 200 with "Successfully transferred $-50". Money moves from the destination account back to the source account - the opposite of what was asked, out of an account that authorised nothing.',
    id: 'Server membalas HTTP 200 dengan pesan "Successfully transferred $-50". Dana berpindah dari akun tujuan kembali ke akun sumber - kebalikan dari yang diminta, dari akun yang tidak mengotorisasi apa pun.',
  },
  investigation: {
    en: 'The sign is never validated, so the amount is applied arithmetically: subtracting a negative adds. The reversal is what makes this more than an input-validation gap - in a real bank it is an unauthorised withdrawal from whichever account is named as the destination. The test asserts this two ways: the response status, and a balance comparison through the API before and after, which does not depend on what the page happens to render.',
    id: 'Tandanya tidak pernah divalidasi, jadi nominalnya diterapkan secara aritmetika: mengurangi bilangan negatif berarti menambah. Pembalikan arah inilah yang membuatnya lebih dari sekadar celah validasi input - di bank sungguhan ini adalah penarikan tanpa otorisasi dari akun mana pun yang disebut sebagai tujuan. Test-nya meng-assert dua arah: status respons, dan perbandingan saldo lewat API sebelum dan sesudah, yang tidak bergantung pada apa yang kebetulan dirender halaman.',
  },
  evidence: [],
  status: { en: 'Open - third-party application', id: 'Terbuka - aplikasi pihak ketiga' },
};
