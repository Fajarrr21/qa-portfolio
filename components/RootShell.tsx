import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/metadata';

// JSON-LD Person: membantu mesin pencari mengenali Fajar sebagai satu entitas
// saat namanya dicari, bukan sekadar halaman yang kebetulan memuat namanya.
// Hanya berisi fakta yang sudah tampil di situs.
function personJsonLd(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: absoluteUrl('/', lang),
    email: `mailto:${site.links.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Purwokerto',
      addressRegion: lang === 'id' ? 'Jawa Tengah' : 'Central Java',
      addressCountry: 'ID',
    },
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: [
      'Software Quality Assurance',
      'Test Automation',
      'Cypress',
      'API Testing',
      'Performance Testing',
      'k6',
    ],
  };
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Kerangka dokumen yang dipakai kedua root layout (app/(en) dan app/(id)).
// Dipisah supaya <html lang> bisa berbeda per bahasa tanpa menduplikasi markup.
export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          // Sumbernya objek buatan sendiri di atas, bukan input dari luar.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
        />
        <a href="#main" className="skip-link">
          {t(ui.a11y.skipToContent, lang)}
        </a>
        <Navbar lang={lang} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
