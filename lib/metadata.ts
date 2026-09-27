import type { Metadata } from 'next';
import { DEFAULT_LOCALE, LOCALES, type Locale, localePath } from './i18n';

// next.config.mjs memakai trailingSlash: true, jadi URL kanonik & hreflang
// harus diakhiri garis miring agar cocok dengan file yang benar-benar terbit.
function withSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

/**
 * canonical + hreflang untuk satu halaman.
 * `neutralPath` adalah path tanpa prefiks bahasa, mis. '/about' atau '/work/orangehrm'.
 */
export function alternatesFor(neutralPath: string, lang: Locale): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = withSlash(localePath(neutralPath, locale));
  }
  // x-default menunjuk versi bahasa default untuk pengunjung di luar kedua bahasa.
  languages['x-default'] = withSlash(localePath(neutralPath, DEFAULT_LOCALE));

  return {
    canonical: withSlash(localePath(neutralPath, lang)),
    languages,
  };
}
