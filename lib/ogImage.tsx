import { ImageResponse } from 'next/og';
import { site } from '@/content/site';
import { type Locale, t } from '@/lib/i18n';

// GENERATOR gambar Open Graph (1200x630) - dipakai saat link situs dibagikan
// ke LinkedIn, WhatsApp, Slack, dsb.
//
// Hasilnya TIDAK dirender saat build biasa. File jadinya sudah disimpan di
// public/og/og-en.png dan public/og/og-id.png, lalu dirujuk dari socialFor()
// di lib/metadata.ts.
//
// Kenapa begitu, bukan pakai konvensi app/opengraph-image.tsx: begitu sebuah
// halaman mendefinisikan `openGraph` sendiri (yang kita perlukan supaya
// og:title tiap case study memakai judul project-nya), Next membuang gambar
// dari file convention milik parent - halaman About/Work/Contact/case study
// jadi kehilangan og:image sama sekali. Path statis membuat semuanya konsisten.
//
// CARA REGENERASI (kalau nama, role, atau tagline di content/site.ts berubah):
//   1. Buat sementara app/(en)/opengraph-image.tsx berisi:
//        import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, ogImage } from '@/lib/ogImage';
//        export const dynamic = 'force-static';
//        export const size = OG_SIZE;
//        export const contentType = OG_CONTENT_TYPE;
//        export const alt = ogAlt('en');
//        export default function Image() { return ogImage('en'); }
//      (dan versi 'id' di app/(id)/opengraph-image.tsx)
//   2. npm run build
//   3. Salin out/opengraph-image-* ke public/og/og-en.png & public/og/og-id.png
//      (cek out/index.html -> meta og:image untuk tahu file mana milik bahasa mana)
//   4. Hapus lagi kedua file sementara itu, lalu build ulang.
//
// Catatan: gaya ditulis inline karena ImageResponse merender lewat satori,
// bukan browser - Tailwind dan CSS variable tidak berlaku di sini.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const NAVY = '#1f3864';
const BG = '#fafaf9';
const TEXT = '#1c1917';
const MUTED = '#57534e';

export function ogAlt(lang: Locale): string {
  return `${site.name} - ${site.role}. ${t(site.tagline, lang)}`;
}

export function ogImage(lang: Locale) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BG,
          borderLeft: `24px solid ${NAVY}`,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: NAVY,
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -2,
              color: TEXT,
            }}
          >
            {site.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 42, color: TEXT }}>
            {t(site.tagline, lang)}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 26,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex' }}>{site.subline}</div>
          <div style={{ display: 'flex', fontWeight: 600, color: NAVY }}>
            fajarardians.my.id
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
