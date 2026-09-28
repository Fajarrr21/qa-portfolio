import type { Bug } from '@/lib/types';

// Sumber: README repo project-parabank, BUG-04. Tercermin sebagai TC-TRF004.

export const bug0004: Bug = {
  id: 'BUG-0004',
  title: {
    en: 'Transfers are not checked against the source balance, leaving accounts negative',
    id: 'Transfer tidak diperiksa terhadap saldo akun sumber, sehingga saldo bisa minus',
  },
  severity: 'High',
  type: { en: 'Functional / Validation', id: 'Fungsional / Validasi' },
  context: {
    en: 'ParaBank, Transfer Funds, logged in as a customer with two accounts.',
    id: 'ParaBank, Transfer Funds, login sebagai customer dengan dua akun.',
  },
  steps: [
    { en: 'Log in and note the source account balance.', id: 'Login lalu catat saldo akun sumber.' },
    { en: 'Open Transfer Funds and enter an amount larger than that balance.', id: 'Buka Transfer Funds dan isi nominal yang lebih besar dari saldo tersebut.' },
    { en: 'Submit, then check the source balance again.', id: 'Kirim, lalu periksa kembali saldo akun sumber.' },
  ],
  expected: {
    en: 'The transfer is rejected because the source account has insufficient funds.',
    id: 'Transfer ditolak karena saldo akun sumber tidak mencukupi.',
  },
  actual: {
    en: 'HTTP 200. The transfer goes through and the source balance is left negative.',
    id: 'HTTP 200. Transfernya diproses dan saldo akun sumber dibiarkan menjadi minus.',
  },
  investigation: {
    en: 'ParaBank\'s own seed data already contains accounts with negative balances, for example -$2300.00, which suggests this is long-standing rather than a recent regression. Worth separating from BUG-0002: that one moves money in the wrong direction, this one creates money that was never there. They fail for the same underlying reason - no validation before the arithmetic - but a fix for one does not necessarily fix the other, so they are logged separately.',
    id: 'Data seed bawaan ParaBank sendiri sudah memuat akun bersaldo negatif, misalnya -$2300.00, yang menunjukkan ini sudah lama ada, bukan regresi baru. Perlu dipisahkan dari BUG-0002: yang itu memindahkan dana ke arah yang salah, yang ini menciptakan dana yang sebelumnya tidak ada. Keduanya gagal karena sebab dasar yang sama - tidak ada validasi sebelum aritmetikanya dijalankan - tapi perbaikan untuk satu belum tentu memperbaiki yang lain, jadi dicatat terpisah.',
  },
  evidence: [],
  status: { en: 'Open - third-party application', id: 'Terbuka - aplikasi pihak ketiga' },
};
