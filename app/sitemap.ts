import type { MetadataRoute } from 'next';
import { LOCALES, type Locale, localePath } from '@/lib/i18n';
import { absoluteUrl, SITE_URL, STATIC_PATHS, withSlash } from '@/lib/metadata';
import { getProjectSlugs } from '@/lib/projects';

// output: 'export' butuh ini supaya sitemap.xml dibuat sebagai file statis.
export const dynamic = 'force-static';

/**
 * Sitemap untuk kedua bahasa. Daftar case study diambil dari getProjectSlugs()
 * sehingga project draft tidak ikut terbit - satu sumber yang sama dengan
 * generateStaticParams, jadi sitemap tidak bisa melenceng dari halaman aslinya.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const neutralPaths = [
    ...STATIC_PATHS,
    ...getProjectSlugs().map((slug) => `/work/${slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of neutralPaths) {
    // Setiap URL menyebut padanan bahasanya, sama seperti hreflang di <head>.
    const languages: Record<string, string> = {};
    for (const locale of LOCALES) {
      languages[locale] = `${SITE_URL}${withSlash(localePath(path, locale))}`;
    }

    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(path, locale as Locale),
        // Beranda sedikit lebih tinggi; sisanya rata supaya tidak mengarang bobot.
        priority: path === '/' ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
