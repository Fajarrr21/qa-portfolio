import type { Bug } from '@/lib/types';

// Sumber: README repo project-parabank, BUG-02 + BUG-05.
// Dua temuan ini digabung karena yang satu adalah akibat yang terlihat dan yang
// satu lagi penyebabnya di markup - memisahkannya justru mengaburkan kaitannya.

export const bug0005: Bug = {
  id: 'BUG-0005',
  title: {
    en: 'The transfer form has no client-side validation, and its error elements share a duplicate id',
    id: 'Form transfer tidak punya validasi client-side, dan elemen error-nya memakai id kembar',
  },
  severity: 'Medium',
  type: { en: 'Validation / HTML', id: 'Validasi / HTML' },
  context: {
    en: 'ParaBank, Transfer Funds form (transfer.htm).',
    id: 'ParaBank, form Transfer Funds (transfer.htm).',
  },
  steps: [
    { en: 'Open Transfer Funds while logged in.', id: 'Buka Transfer Funds saat sudah login.' },
    { en: 'Submit with an amount of 0, and separately with the amount left empty.', id: 'Kirim dengan nominal 0, lalu secara terpisah dengan nominal dikosongkan.' },
    { en: 'Inspect the form markup for its error elements.', id: 'Periksa markup form-nya untuk melihat elemen error-nya.' },
  ],
  expected: {
    en: 'An empty or invalid amount is rejected in the browser, with the message shown next to the field.',
    id: 'Nominal kosong atau tidak valid ditolak di browser, dengan pesannya tampil di samping field.',
  },
  actual: {
    en: 'An amount of 0 is accepted and recorded as a $0.00 transaction on both accounts. An empty amount is sent to the server and ends on a generic "Error!" page. The markup does contain two error elements, but both carry id="amount.errors" - a duplicate id, which HTML does not allow - and no code ever displays either of them.',
    id: 'Nominal 0 diterima dan tercatat sebagai transaksi $0.00 di kedua akun. Nominal kosong tetap dikirim ke server dan berakhir di halaman "Error!" generik. Markup-nya memang memuat dua elemen error, tapi keduanya memakai id="amount.errors" - id kembar, yang tidak diizinkan HTML - dan tidak ada satu pun kode yang menampilkannya.',
  },
  investigation: {
    en: 'This is the shared root cause behind the transfer defects: the validation slots were built and then never wired up, so every malformed amount reaches the server, where nothing checks it either. The duplicate id matters beyond spec compliance - document.getElementById returns only the first match, so even if display code were added later it could only ever reach one of the two elements. Recorded as Medium on its own: by itself it is a markup and UX defect, while its consequences are logged separately as BUG-0002 and BUG-0004.',
    id: 'Inilah akar bersama di balik cacat-cacat transfer: slot validasinya dibuat lalu tidak pernah disambungkan, sehingga setiap nominal yang salah bentuk sampai ke server, yang juga tidak memeriksanya. Id kembarnya berdampak lebih dari sekadar kepatuhan spec - document.getElementById hanya mengembalikan kecocokan pertama, jadi seandainya nanti ditambahkan kode penampil pun, ia cuma bisa menjangkau satu dari dua elemen itu. Dicatat Medium untuk dirinya sendiri: berdiri sendiri ini cacat markup dan UX, sementara akibat-akibatnya dicatat terpisah sebagai BUG-0002 dan BUG-0004.',
  },
  evidence: [],
  status: { en: 'Open - third-party application', id: 'Terbuka - aplikasi pihak ketiga' },
};
