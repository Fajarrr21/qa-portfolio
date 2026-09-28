import type { Bug } from '@/lib/types';
import { bug0001 } from './bug-0001';
import { bug0002 } from './bug-0002';
import { bug0003 } from './bug-0003';
import { bug0004 } from './bug-0004';
import { bug0005 } from './bug-0005';
import { bug0006 } from './bug-0006';

// Registry bug.
//
// Isi saat ini seluruhnya berasal dari ParaBank (aplikasi demo publik milik
// Parasoft) - ditemukan saat membangun suite automation di repo project-parabank.
// TIDAK ada temuan dari produk kantor di sini, dan jangan ditambahkan: aturan
// kerahasiaan di README berlaku untuk bug sama seperti untuk kode.
//
// Urutannya sengaja menurun dari severity tertinggi, bukan menurut nomor ID.
//
// Cara menambah bug:
//   1. Salin content/bugs/_example.ts jadi content/bugs/<id>.ts.
//   2. Isi seluruh field-nya.
//   3. Import di sini dan masukkan ke array `bugs`.

export const bugs: Bug[] = [bug0002, bug0003, bug0001, bug0004, bug0005, bug0006];

export function getBug(id: string): Bug | undefined {
  return bugs.find((b) => b.id === id);
}
