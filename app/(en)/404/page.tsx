import type { Metadata } from 'next';
import { NotFoundPage } from '@/components/pages/NotFoundPage';

// Halaman 404 sebagai rute biasa, bukan not-found.tsx global.
//
// Alasannya: situs ini punya dua root layout (app/(en) dan app/(id)) supaya
// <html lang> benar per bahasa. Konsekuensinya, not-found.tsx global dirender
// di luar kedua layout itu - tanpa CSS dan tanpa navbar. Sebagai rute biasa,
// halaman ini dapat layout penuh, lalu scripts/export-404.mjs menyalinnya
// menjadi out/404.html yang dipakai GitHub Pages untuk semua URL tak dikenal.
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function Page() {
  return <NotFoundPage lang="en" />;
}
