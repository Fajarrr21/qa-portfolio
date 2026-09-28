// Menyiapkan halaman 404 untuk GitHub Pages.
//
// GitHub Pages menyajikan /404.html untuk setiap URL yang tidak ada. Pada situs
// dengan dua root layout, not-found.tsx global dirender di luar keduanya
// sehingga tampil polos tanpa CSS dan tanpa navbar. Karena itu 404 dibuat
// sebagai rute biasa di /404/ (app/(en)/404/page.tsx) lalu hasilnya disalin
// ke sini. Sudah diuji: menghapus rute itu membuat out/404/index.html turun
// dari ~27 KB (bernavbar) jadi ~5,5 KB halaman telanjang bawaan Next.
//
// SOAL JUDUL HALAMAN
// Next merender komponen dari rute /404 tapi MEMBUANG `metadata` yang
// diekspor page-nya - diverifikasi dengan judul penanda unik dan build cache
// bersih, penandanya tidak muncul di mana pun. Mengekspor metadata dari
// not-found.tsx juga tidak bisa (bukan layout/page, dan Next malah jatuh ke
// halaman 404 bawaannya). Jadi judulnya disetel di sini, setelah build.
//
// Kalau suatu saat Next mendukungnya lewat metadata, hapus bagian ini dan
// kembalikan ke page.tsx - di sana tempatnya yang benar.

import { readFile, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const out = 'out';
const source = join(out, '404', 'index.html');
const target = join(out, '404.html');

// Satu berkas 404 melayani kedua bahasa, jadi judulnya berbahasa Inggris.
const TITLE = 'Page not found - Fajar Ardiansyah';
const TITLE_RE = /<title>[^<]*<\/title>/;

try {
  await access(source);
} catch {
  console.error(`[export-404] ${source} tidak ditemukan - build gagal?`);
  process.exit(1);
}

const html = await readFile(source, 'utf8');

// Gagalkan build kalau polanya tidak ketemu, jangan diam-diam melewatkannya:
// kalau markup Next berubah, kita mau tahu sekarang, bukan dari judul yang
// diam-diam salah selama berbulan-bulan.
if (!TITLE_RE.test(html)) {
  console.error('[export-404] tag <title> tidak ditemukan di halaman 404.');
  process.exit(1);
}

const patched = html.replace(TITLE_RE, `<title>${TITLE}</title>`);

// Ditulis ke dua-duanya supaya /404/ dan /404.html tidak berbeda judul.
await writeFile(source, patched);
await writeFile(target, patched);

console.log(`[export-404] ${source} -> ${target}`);
console.log(`[export-404] judul disetel: "${TITLE}"`);
