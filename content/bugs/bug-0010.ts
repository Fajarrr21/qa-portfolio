import type { Bug } from '@/lib/types';

// Sumber: sheet bug report Fajar, BUG-G1-011 - dan temuan yang sama muncul lagi
// sebagai BUG-G2-008 dan BUG-G3-002 di dua kelompok berikutnya. Ketiganya
// digabung di sini karena yang menarik justru pengulangannya.

export const bug0010: Bug = {
  id: 'BUG-0010',
  title: {
    en: 'The chat room frame sits inconsistently, and does so in all three screens reviewed',
    id: 'Bingkai room chat posisinya tidak konsisten, dan berulang di ketiga layar yang direview',
  },
  severity: 'Medium',
  type: { en: 'UI consistency', id: 'Konsistensi UI' },
  context: {
    en: 'Design-compliance review of a chat interface, across three separate screens.',
    id: 'Review kesesuaian desain pada antarmuka chat, di tiga layar terpisah.',
  },
  steps: [
    { en: 'Open the delivered interface next to the design file.', id: 'Buka antarmuka yang dikirim berdampingan dengan berkas desainnya.' },
    { en: 'Compare the position of the frame around the chat area.', id: 'Bandingkan posisi bingkai di sekeliling area chat.' },
    { en: 'Repeat on the other two screens.', id: 'Ulangi pada dua layar lainnya.' },
  ],
  expected: {
    en: 'The frame sits in the position the design specifies, identically on every screen.',
    id: 'Bingkai berada pada posisi yang ditetapkan desain, sama persis di setiap layar.',
  },
  actual: {
    en: 'The frame position differs from the design, and differs between screens.',
    id: 'Posisi bingkai berbeda dari desain, dan berbeda pula antar layar.',
  },
  investigation: {
    en: 'This was logged three times during the review, once per screen, before the pattern was obvious. Keeping the three separate would have padded the count; merging them says something the individual entries do not, which is that the frame is positioned by hand on each screen rather than coming from one shared rule. That reading changes what a developer should fix - not three positions, but the absence of a shared component.',
    id: 'Temuan ini tercatat tiga kali selama review, satu per layar, sebelum polanya terlihat jelas. Membiarkannya terpisah hanya akan menggelembungkan jumlah; menggabungkannya menyampaikan sesuatu yang tidak disampaikan entri satuannya, yaitu bahwa bingkai itu diposisikan manual di tiap layar alih-alih berasal dari satu aturan bersama. Pembacaan itu mengubah apa yang harus diperbaiki developer - bukan tiga posisi, melainkan ketiadaan komponen bersama.',
  },
  evidence: [],
  status: { en: 'Valid - reported to the developer', id: 'Valid - dilaporkan ke developer' },
};
