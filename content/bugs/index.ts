import type { Bug } from '@/lib/types';
import { bug0001 } from './bug-0001';
import { bug0002 } from './bug-0002';
import { bug0003 } from './bug-0003';
import { bug0004 } from './bug-0004';
import { bug0005 } from './bug-0005';
import { bug0006 } from './bug-0006';
import { bug0007 } from './bug-0007';
import { bug0008 } from './bug-0008';
import { bug0009 } from './bug-0009';
import { bug0010 } from './bug-0010';
import { bug0011 } from './bug-0011';

// Registry bug. Dua sumber, keduanya BUKAN produk kantor:
//   BUG-0001..0006 - ParaBank, aplikasi demo perbankan publik milik Parasoft,
//                    ditemukan saat membangun suite automation untuknya.
//   BUG-0007..0011 - latihan membandingkan desain dengan implementasinya.
//
// JANGAN menambahkan temuan dari produk CARDS/Cazh. Yang 119 temuan production
// itu hanya boleh tampil sebagai angka agregat di case study cards-school-v3,
// tanpa rincian apa pun - aturan kerahasiaan berlaku untuk temuan sama seperti
// untuk kode.
//
// Urutannya menurun dari severity tertinggi, bukan menurut nomor ID. Temuan
// yang murni soal jarak/spacing sengaja tidak dimasukkan: daftar ini dinilai
// dari kedalaman satu temuan, bukan dari panjangnya.

export const bugs: Bug[] = [
  bug0002, // Critical - transfer negatif membalik arah dana
  bug0003, // Critical - kredensial di source halaman & query string
  bug0007, // Critical - angka di dalam pesan salah nilai
  bug0001, // High     - halaman internal tanpa cek sesi
  bug0004, // High     - saldo tidak dicek, akun bisa minus
  bug0008, // High     - jam di luar rentang 24 jam
  bug0009, // High     - warna pengirim/penerima tertukar
  bug0005, // Medium   - tanpa validasi client-side + id kembar
  bug0010, // Medium   - bingkai tidak konsisten di tiga layar
  bug0011, // Medium   - ukuran room chat tidak sesuai
  bug0006, // Low      - penangan error melempar ReferenceError
];

export function getBug(id: string): Bug | undefined {
  return bugs.find((b) => b.id === id);
}
