import type { Bug } from '@/lib/types';

// Sumber: sheet bug report Fajar, BUG-G1-010.

export const bug0009: Bug = {
  id: 'BUG-0009',
  title: {
    en: 'Sender and receiver chat bubbles use the wrong colours',
    id: 'Bubble chat pengirim dan penerima memakai warna yang salah',
  },
  severity: 'High',
  type: { en: 'UI / Information design', id: 'UI / Desain informasi' },
  context: {
    en: 'Design-compliance review of a chat interface. The design assigns white to the sender and black to the receiver.',
    id: 'Review kesesuaian desain pada antarmuka chat. Desainnya menetapkan putih untuk pengirim dan hitam untuk penerima.',
  },
  steps: [
    { en: 'Open the delivered interface next to the design file.', id: 'Buka antarmuka yang dikirim berdampingan dengan berkas desainnya.' },
    { en: 'Compare the sender and receiver bubbles against the design.', id: 'Bandingkan bubble pengirim dan penerima dengan desainnya.' },
  ],
  expected: {
    en: 'Sender bubble white, receiver bubble black.',
    id: 'Bubble pengirim putih, bubble penerima hitam.',
  },
  actual: {
    en: 'Sender bubble yellow, receiver bubble green.',
    id: 'Bubble pengirim kuning, bubble penerima hijau.',
  },
  investigation: {
    en: 'Rated above the other colour findings because of what this particular colour carries. In a chat, the bubble colour is how a reader tells their own messages from the other person\'s - it is not decoration, it is the only signal doing that job. Getting it wrong is closer to mislabelling than to mismatching a shade, and the fact that both sides changed suggests the two styles were swapped rather than one being off.',
    id: 'Dinilai lebih berat daripada temuan warna lainnya karena apa yang dibawa warna ini. Di aplikasi chat, warna bubble adalah cara pembaca membedakan pesannya sendiri dari pesan lawan bicara - itu bukan hiasan, itu satu-satunya penanda yang mengerjakan tugas tersebut. Salah di situ lebih dekat ke salah melabeli daripada ke salah rona, dan berubahnya kedua sisi sekaligus menunjukkan kedua style tertukar, bukan satu yang meleset.',
  },
  evidence: [],
  status: { en: 'Valid - reported to the developer', id: 'Valid - dilaporkan ke developer' },
};
