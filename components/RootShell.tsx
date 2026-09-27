import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';

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
