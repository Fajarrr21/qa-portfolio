'use client';

import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { ui } from '@/content/ui';
import { asset } from '@/lib/basePath';
import {
  LOCALES,
  LOCALE_LABELS,
  type Locale,
  switchLocalePath,
  t,
} from '@/lib/i18n';

// <a> biasa tidak mendapat basePath otomatis dari Next (beda dengan <Link>),
// jadi dilewatkan asset(). Dengan basePath kosong hasilnya sama persis; yang
// dijaga adalah kalau situs dipindah ke sub-path seperti /qa-portfolio.
function localeHref(pathname: string, target: Locale): string {
  const path = switchLocalePath(pathname, target);
  return asset(path === '/' ? '/' : `${path}/`);
}

// Pemindah bahasa. Memakai <a> biasa, bukan next/link, karena versi Inggris dan
// Indonesia memakai root layout yang berbeda (atribut <html lang>), jadi
// perpindahannya memang harus memuat ulang dokumen.
//
// Path tujuan dihitung dari halaman yang sedang dibuka, jadi pengunjung tetap
// di halaman yang sama - /work/orangehrm/ pindah ke /id/work/orangehrm/,
// bukan balik ke beranda.
export function LanguageSwitcher({
  lang,
  className = '',
}: {
  lang: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded border border-border p-0.5 ${className}`}
      role="group"
      aria-label={t(ui.a11y.language, lang)}
    >
      <Languages size={14} className="ml-1.5 mr-0.5 text-muted" aria-hidden />
      {LOCALES.map((locale) => {
        const isActive = locale === lang;
        const label = LOCALE_LABELS[locale];
        return isActive ? (
          <span
            key={locale}
            aria-current="true"
            className="rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-fg"
          >
            {label.short}
          </span>
        ) : (
          <a
            key={locale}
            href={localeHref(pathname, locale)}
            hrefLang={locale}
            aria-label={label.full}
            className="rounded px-2 py-1 text-xs font-semibold text-muted transition-colors hover:bg-surface hover:text-accent"
          >
            {label.short}
          </a>
        );
      })}
    </div>
  );
}
