'use client';

import { Moon, Sun } from 'lucide-react';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';

// Pemilih tema terang/gelap.
//
// Default terang, tidak mengikuti preferensi sistem - pengunjung yang mau gelap
// memilihnya sendiri. Pilihannya disimpan di localStorage dan dipasang sebagai
// data-theme pada <html> oleh skrip di RootShell sebelum halaman digambar.
//
// Komponen ini sengaja TIDAK menyimpan tema di state React. Sumber kebenarannya
// atribut pada <html>, dan ikon/label ditukar lewat CSS (.theme-when-light /
// .theme-when-dark). Akibatnya tidak ada ketidakcocokan hidrasi, dan pengunjung
// dengan tema gelap tersimpan tidak melihat ikon yang salah sekejap.

const STORAGE_KEY = 'theme';

export function ThemeToggle({ lang, className = '' }: { lang: Locale; className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    if (next === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');

    // Mode penyamaran / penyimpanan diblokir: temanya tetap berganti untuk
    // kunjungan ini, cuma tidak diingat. Jangan sampai ini melempar error.
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* diabaikan dengan sengaja */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {/* Hanya satu yang tampil; yang tersembunyi juga hilang dari pohon
          aksesibilitas, jadi nama tombolnya selalu menyebut tujuan berikutnya. */}
      <span className="theme-when-light inline-flex items-center">
        <Moon size={16} aria-hidden />
        <span className="sr-only">{t(ui.a11y.themeToDark, lang)}</span>
      </span>
      <span className="theme-when-dark items-center">
        <Sun size={16} aria-hidden />
        <span className="sr-only">{t(ui.a11y.themeToLight, lang)}</span>
      </span>
    </button>
  );
}
