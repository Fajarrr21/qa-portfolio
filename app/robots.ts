import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

// output: 'export' butuh ini supaya robots.txt dibuat sebagai file statis.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Halaman 404 terbit sebagai rute biasa di /404/; tidak perlu diindeks.
      disallow: '/404/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
