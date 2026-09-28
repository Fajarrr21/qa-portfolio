import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { RootShell } from '@/components/RootShell';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { alternatesFor, socialFor } from '@/lib/metadata';

// Root layout versi Inggris (<html lang="en">). Versi Indonesia punya root
// layout sendiri di app/(id)/layout.tsx - itulah sebabnya tidak ada
// app/layout.tsx: dua route group ini masing-masing jadi root.
export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.role}`,
    template: `%s - ${site.name}`,
  },
  description: t(ui.meta.siteDescription, 'en'),
  metadataBase: new URL('https://fajarardians.my.id'),
  alternates: alternatesFor('/', 'en'),
  ...socialFor('/', 'en', t(ui.meta.siteDescription, 'en')),
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
