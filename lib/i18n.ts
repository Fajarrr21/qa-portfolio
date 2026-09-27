// Dwibahasa Inggris - Indonesia untuk situs static export.
//
// Pola URL: Inggris di root (/about), Indonesia di prefiks /id (/id/about).
// Tidak memakai i18n routing bawaan Next.js karena output: 'export' tidak
// menjalankan server, jadi seluruh rute harus ada sebagai file statis.
//
// Semua teks prosa bertipe Text: boleh string biasa kalau memang sama di kedua
// bahasa (nama tool, nama produk), atau pasangan { en, id } kalau perlu beda.

export const LOCALES = ['en', 'id'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Pasangan terjemahan untuk satu string. */
export interface L10n {
  en: string;
  id: string;
}

/** String yang sama di kedua bahasa, atau pasangan terjemahan. */
export type Text = string | L10n;

/** Ambil satu bahasa dari sebuah Text. */
export function t(value: Text, lang: Locale): string {
  return typeof value === 'string' ? value : value[lang];
}

/** Versi array dari t(). Undefined diperlakukan sebagai array kosong. */
export function tList(values: readonly Text[] | undefined, lang: Locale): string[] {
  return (values ?? []).map((v) => t(v, lang));
}

/** Label bahasa untuk language switcher. */
export const LOCALE_LABELS: Record<Locale, { short: string; full: string }> = {
  en: { short: 'EN', full: 'English' },
  id: { short: 'ID', full: 'Bahasa Indonesia' },
};

// ---- Helper path ----
//
// Catatan: next.config.mjs memakai trailingSlash: true, jadi usePathname()
// mengembalikan '/about/' bukan '/about'. Semua helper di bawah menormalkan
// dulu supaya perbandingan path tidak meleset gara-gara garis miring.

function normalize(path: string): string {
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  const trimmed = withSlash.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Deteksi bahasa dari pathname. '/id/about' => 'id', '/about' => 'en'. */
export function localeFromPathname(pathname: string): Locale {
  const p = normalize(pathname);
  return p === '/id' || p.startsWith('/id/') ? 'id' : 'en';
}

/** Buang prefiks bahasa. '/id/about' => '/about', '/id' => '/'. */
export function stripLocale(pathname: string): string {
  const p = normalize(pathname);
  if (p === '/id') return '/';
  if (p.startsWith('/id/')) return p.slice(3);
  return p;
}

/**
 * Bangun path untuk satu bahasa dari path netral (tanpa prefiks).
 * localePath('/about', 'id') => '/id/about'
 * localePath('/', 'id')      => '/id'
 * localePath('/about', 'en') => '/about'
 */
export function localePath(path: string, lang: Locale): string {
  const p = normalize(stripLocale(path));
  if (lang === DEFAULT_LOCALE) return p;
  return p === '/' ? '/id' : `/id${p}`;
}

/** Path yang setara di bahasa lain, dipakai language switcher. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(stripLocale(pathname), target);
}
