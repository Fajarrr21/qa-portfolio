import type { Metadata } from 'next';
import { site } from '@/content/site';
import { asset } from './basePath';
import { DEFAULT_LOCALE, LOCALES, type Locale, localePath, t } from './i18n';

/** Asal situs di production. Satu-satunya tempat URL ini ditulis. */
export const SITE_URL = 'https://fajarardians.my.id';

/** Path netral yang punya halaman sendiri di kedua bahasa (tanpa case study). */
export const STATIC_PATHS = ['/', '/work', '/artifacts', '/about', '/contact'] as const;

// next.config.mjs memakai trailingSlash: true, jadi URL kanonik & hreflang
// harus diakhiri garis miring agar cocok dengan file yang benar-benar terbit.
export function withSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

/** URL absolut untuk satu path netral pada satu bahasa. Dipakai sitemap & JSON-LD. */
export function absoluteUrl(neutralPath: string, lang: Locale): string {
  return `${SITE_URL}${withSlash(localePath(neutralPath, lang))}`;
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

// Locale format Open Graph (bukan kode bahasa biasa).
const OG_LOCALE: Record<Locale, string> = { en: 'en_US', id: 'id_ID' };

// Gambar kartu sosial, 1200x630. File-nya statis di public/og/ - lihat
// lib/ogImage.tsx untuk kode pembuatnya dan cara regenerasinya.
const OG_IMAGE: Record<Locale, string> = {
  en: '/og/og-en.png',
  id: '/og/og-id.png',
};

function ogImageFor(lang: Locale) {
  return {
    url: asset(OG_IMAGE[lang]),
    width: 1200,
    height: 630,
    alt: `${site.name} - ${site.role}. ${t(site.tagline, lang)}`,
  };
}

/**
 * openGraph + twitter untuk satu halaman - dipakai supaya link yang dibagikan
 * ke LinkedIn/WhatsApp/Slack menampilkan kartu, bukan kotak kosong.
 *
 * `pageTitle` undefined => judul default situs (untuk Home). Kalau diisi,
 * formatnya mengikuti template title di root layout: "<halaman> - <nama>".
 */
export function socialFor(
  neutralPath: string,
  lang: Locale,
  description: string,
  pageTitle?: string,
): Pick<Metadata, 'openGraph' | 'twitter'> {
  const title = pageTitle
    ? `${pageTitle} - ${site.name}`
    : `${site.name} - ${site.role}`;

  return {
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      url: withSlash(localePath(neutralPath, lang)),
      title,
      description,
      images: [ogImageFor(lang)],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageFor(lang)],
    },
  };
}

/**
 * Metadata lengkap untuk satu halaman biasa: title, description, canonical +
 * hreflang, dan kartu sosial - semuanya dari satu path netral & satu bahasa.
 * Dipakai halaman About/Work/Contact/case study di kedua bahasa.
 *
 * Root layout tidak memakai ini karena punya title template + metadataBase
 * sendiri; lihat app/(en)/layout.tsx.
 */
export function pageMeta(
  neutralPath: string,
  lang: Locale,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: alternatesFor(neutralPath, lang),
    ...socialFor(neutralPath, lang, description, title),
  };
}
