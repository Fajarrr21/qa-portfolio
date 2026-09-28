// Helper untuk aset statis (PDF resume, gambar evidence) yang direferensikan
// lewat <a href> / <img src> biasa - Next.js tidak otomatis menambahkan
// basePath ke URL semacam ini (beda dengan <Link> dan next/font).
// NEXT_PUBLIC_* di-inline saat build.
//
// Default '' (kosong) harus sama dengan default di next.config.mjs. Kalau beda,
// build lokal tanpa env var menghasilkan basePath kosong di HTML tapi prefiks
// ada di URL aset - resume & gambar evidence jadi 404.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Prefiks path aset dengan basePath.
 * Default (custom domain di root): asset('/resume/x.pdf') => '/resume/x.pdf'.
 * Dengan NEXT_PUBLIC_BASE_PATH='/qa-portfolio' => '/qa-portfolio/resume/x.pdf'.
 */
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
