import type { Bug } from '@/lib/types';

// Sumber: sheet bug report Fajar, BUG-G2-007. Satu-satunya yang ia beri
// severity Major di seluruh latihan itu - dan alasannya tepat.

export const bug0007: Bug = {
  id: 'BUG-0007',
  title: {
    en: 'A number inside a chat message renders as the wrong value',
    id: 'Angka di dalam pesan chat tampil dengan nilai yang salah',
  },
  severity: 'Critical',
  type: { en: 'Data accuracy', id: 'Akurasi data' },
  context: {
    en: 'Design-compliance review: comparing a delivered chat interface against its design file. Second message in the receiver thread.',
    id: 'Review kesesuaian desain: membandingkan antarmuka chat yang dikirim dengan berkas desainnya. Pesan kedua di percakapan penerima.',
  },
  steps: [
    { en: 'Open the delivered interface next to the design file.', id: 'Buka antarmuka yang dikirim berdampingan dengan berkas desainnya.' },
    { en: 'Go to the second message in the receiver thread.', id: 'Buka pesan kedua pada percakapan penerima.' },
    { en: 'Compare the numeric value in the message against the design.', id: 'Bandingkan nilai angka di dalam pesan itu dengan desainnya.' },
  ],
  expected: { en: 'The message shows 2, as specified.', id: 'Pesan menampilkan angka 2, sesuai ketentuan.' },
  actual: { en: 'The message shows 1.', id: 'Pesan menampilkan angka 1.' },
  investigation: {
    en: 'Every other finding in this review is about how something looks. This one is about what it says. A colour that is off is visibly wrong to anyone who checks; a number that is off looks perfectly fine and is believed. That is why it was rated more seriously than findings that are far more noticeable - in a real product, a message rendering the wrong figure is the class of defect that reaches a user as fact.',
    id: 'Seluruh temuan lain di review ini soal bagaimana sesuatu terlihat. Yang ini soal apa yang dikatakannya. Warna yang meleset langsung kelihatan salah oleh siapa pun yang memeriksa; angka yang meleset terlihat baik-baik saja dan dipercaya. Karena itulah ia dinilai lebih berat daripada temuan yang jauh lebih mencolok - di produk sungguhan, pesan yang menampilkan angka keliru adalah kelas cacat yang sampai ke pengguna sebagai fakta.',
  },
  evidence: [],
  status: { en: 'Valid - reported to the developer', id: 'Valid - dilaporkan ke developer' },
};
