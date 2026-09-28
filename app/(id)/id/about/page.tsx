import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta(
  '/about',
  'id',
  t(ui.about.metaTitle, 'id'),
  t(ui.about.metaDescription, 'id'),
);

export default function Page() {
  return <AboutPage lang="id" />;
}
