import type { Bug } from '@/lib/types';

// Sumber: sheet bug report Fajar, BUG-G3-001.

export const bug0011: Bug = {
  id: 'BUG-0011',
  title: {
    en: 'The chat room renders smaller than the area the design gives it',
    id: 'Room chat dirender lebih kecil daripada area yang diberikan desain',
  },
  severity: 'Medium',
  type: { en: 'Layout', id: 'Layout' },
  context: {
    en: 'Design-compliance review of a chat interface. The design has the chat area filling its screen proportionally.',
    id: 'Review kesesuaian desain pada antarmuka chat. Pada desainnya, area chat mengisi layar secara proporsional.',
  },
  steps: [
    { en: 'Open the delivered interface next to the design file.', id: 'Buka antarmuka yang dikirim berdampingan dengan berkas desainnya.' },
    { en: 'Compare how much of the screen the chat area occupies.', id: 'Bandingkan seberapa besar bagian layar yang ditempati area chat.' },
  ],
  expected: {
    en: 'The chat area fills its screen proportionally, as designed.',
    id: 'Area chat mengisi layarnya secara proporsional, sesuai desain.',
  },
  actual: {
    en: 'The chat area is noticeably smaller, leaving space the design does not have.',
    id: 'Area chat terlihat jelas lebih kecil, menyisakan ruang yang tidak ada di desain.',
  },
  investigation: {
    en: 'Kept separate from the frame inconsistency even though both concern the same region of the screen, because the fixes are different: one is a size that does not match, the other is a position that varies. A single entry combining them would leave a developer guessing which of the two to change.',
    id: 'Dipisahkan dari temuan bingkai yang tidak konsisten walaupun keduanya menyangkut area layar yang sama, karena perbaikannya berbeda: yang satu ukuran yang tidak cocok, yang lain posisi yang berubah-ubah. Satu entri yang menggabungkan keduanya akan membuat developer menebak mana dari dua hal itu yang harus diubah.',
  },
  evidence: [],
  status: { en: 'Valid - reported to the developer', id: 'Valid - dilaporkan ke developer' },
};
