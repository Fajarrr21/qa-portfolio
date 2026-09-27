import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { alternatesFor } from '@/lib/metadata';

export const metadata: Metadata = {
  title: t(ui.about.metaTitle, 'id'),
  description: t(ui.about.metaDescription, 'id'),
  alternates: alternatesFor('/about', 'id'),
};

export default function Page() {
  return <AboutPage lang="id" />;
}
