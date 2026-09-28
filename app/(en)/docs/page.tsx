import type { Metadata } from 'next';
import { ArtifactsPage } from '@/components/pages/ArtifactsPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta(
  '/docs',
  'en',
  t(ui.artifacts.metaTitle, 'en'),
  t(ui.artifacts.metaDescription, 'en'),
);

export default function Page() {
  return <ArtifactsPage lang="en" />;
}
