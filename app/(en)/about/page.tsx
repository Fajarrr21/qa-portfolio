import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta(
  '/about',
  'en',
  t(ui.about.metaTitle, 'en'),
  t(ui.about.metaDescription, 'en'),
);

export default function Page() {
  return <AboutPage lang="en" />;
}
