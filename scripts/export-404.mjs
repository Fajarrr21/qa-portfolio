// Menyalin out/404/index.html menjadi out/404.html.
//
// GitHub Pages menyajikan /404.html untuk setiap URL yang tidak ada. Next
// membuat berkas itu dari not-found.tsx global, tetapi pada situs dengan dua
// root layout halaman tersebut dirender tanpa layout sehingga tampil polos
// tanpa CSS. Karena itu 404 kita dibuat sebagai rute biasa di /404/ lalu
// hasilnya disalin ke sini.
import { copyFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const out = 'out';
const source = join(out, '404', 'index.html');
const target = join(out, '404.html');

try {
  await access(source);
} catch {
  console.error(`[export-404] ${source} tidak ditemukan - build gagal?`);
  process.exit(1);
}

await copyFile(source, target);
console.log(`[export-404] ${source} -> ${target}`);
