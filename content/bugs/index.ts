import type { Bug } from '@/lib/types';

// Registry bug. KOSONG secara sengaja (brief §6 - jangan mengisi contoh bug apa pun).
//
// Cara menambah bug:
//   1. Salin content/bugs/_example.ts jadi content/bugs/<id>.ts (mis. bug-0001.ts).
//   2. Isi seluruh field-nya.
//   3. Import di sini dan masukkan ke array `bugs`.
//
// Contoh:
//   import { bug0001 } from './bug-0001';
//   export const bugs: Bug[] = [bug0001];

export const bugs: Bug[] = [];

export function getBug(id: string): Bug | undefined {
  return bugs.find((b) => b.id === id);
}
