import { NotFoundPage } from '@/components/pages/NotFoundPage';

// 404 global (diekspor jadi out/404.html dan dipakai GitHub Pages untuk semua
// path yang tidak dikenal, termasuk di bawah /id). Ditulis dalam bahasa
// Inggris karena satu berkas 404 melayani kedua bahasa.
export default function NotFound() {
  return <NotFoundPage lang="en" />;
}
