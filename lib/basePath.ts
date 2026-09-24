// Helper untuk aset statis (PDF resume, gambar evidence) yang direferensikan
// lewat <a href> / <img src> biasa — Next.js tidak otomatis menambahkan
// basePath ke URL semacam ini (beda dengan <Link> dan next/font).
// NEXT_PUBLIC_* di-inline saat build.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/qa-portfolio';

/** Prefiks path aset dengan basePath. asset('/resume/x.pdf') => '/qa-portfolio/resume/x.pdf'. */
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
