import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { RootShell } from '@/components/RootShell';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { alternatesFor, socialFor } from '@/lib/metadata';

// Root layout versi Indonesia (<html lang="id">), dipakai seluruh rute /id/*.
export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.role}`,
    template: `%s - ${site.name}`,
  },
  description: t(ui.meta.siteDescription, 'id'),
  metadataBase: new URL('https://fajarardians.my.id'),
  alternates: alternatesFor('/', 'id'),
  ...socialFor('/', 'id', t(ui.meta.siteDescription, 'id')),
};

export default function IndonesianLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="id">{children}</RootShell>;
}
