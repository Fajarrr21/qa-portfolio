import type { Bug } from '@/lib/types';

// Sumber: sheet bug report Fajar, BUG-G1-004.

export const bug0008: Bug = {
  id: 'BUG-0008',
  title: {
    en: 'The status bar clock shows a time outside the 24-hour range',
    id: 'Jam di status bar menampilkan waktu di luar rentang 24 jam',
  },
  severity: 'High',
  type: { en: 'Data validity', id: 'Validitas data' },
  context: {
    en: 'Design-compliance review of a chat interface. The design specifies a real-time clock in 00.00-23.59 format.',
    id: 'Review kesesuaian desain pada antarmuka chat. Desainnya menetapkan jam realtime dengan format 00.00-23.59.',
  },
  steps: [
    { en: 'Open the delivered interface next to the design file.', id: 'Buka antarmuka yang dikirim berdampingan dengan berkas desainnya.' },
    { en: 'Look at the clock in the status bar.', id: 'Perhatikan jam pada status bar.' },
    { en: 'Compare the value against the 24-hour range the design specifies.', id: 'Bandingkan nilainya dengan rentang 24 jam yang ditetapkan desain.' },
  ],
  expected: {
    en: 'A valid 24-hour time, between 00.00 and 23.59.',
    id: 'Waktu 24 jam yang valid, antara 00.00 dan 23.59.',
  },
  actual: {
    en: 'A time past the 24-hour limit - a value no clock can legitimately show.',
    id: 'Waktu yang melewati batas 24 jam - nilai yang tidak mungkin ditampilkan jam mana pun secara sah.',
  },
  investigation: {
    en: 'Logged as a data problem rather than a styling one. The design mismatch is the smaller half: the value itself is impossible, which means whatever produces it is not validating its range. A reviewer working only from the design checklist would have written "font does not match" and moved on.',
    id: 'Dicatat sebagai masalah data, bukan masalah tampilan. Ketidaksesuaian dengan desain justru bagian yang lebih kecil: nilainya sendiri mustahil, artinya apa pun yang menghasilkannya tidak memvalidasi rentangnya. Pemeriksa yang bekerja hanya dari daftar periksa desain akan menulis "font tidak sesuai" lalu melanjutkan.',
  },
  evidence: [],
  status: { en: 'Valid - reported to the developer', id: 'Valid - dilaporkan ke developer' },
};
