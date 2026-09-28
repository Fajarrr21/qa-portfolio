import type { Metadata } from 'next';
import { NotFoundPage } from '@/components/pages/NotFoundPage';

// Halaman 404 sebagai rute biasa, bukan not-found.tsx global.
//
// Alasannya: situs ini punya dua root layout (app/(en) dan app/(id)) supaya
// <html lang> benar per bahasa. Konsekuensinya, not-found.tsx global dirender
// di luar kedua layout itu - tanpa CSS dan tanpa navbar. Sebagai rute biasa,
// halaman ini dapat layout penuh, lalu scripts/export-404.mjs menyalinnya
// menjadi out/404.html yang dipakai GitHub Pages untuk semua URL tak dikenal.
// CATATAN: Next MEMBUANG metadata yang diekspor dari rute ini - komponennya
// tetap dirender, head-nya tidak. Sudah diverifikasi dengan judul penanda unik
// dan build cache bersih. Karena itu judul halaman 404 disetel di
// scripts/export-404.mjs, dan `robots` di bawah pun tidak berpengaruh:
// noindex-nya datang dari perilaku otomatis Next untuk halaman 404.
//
// Blok ini dipertahankan supaya niatnya terbaca, bukan karena berfungsi.
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function Page() {
  return <NotFoundPage lang="en" />;
}
