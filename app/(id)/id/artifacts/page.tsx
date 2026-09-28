import type { Metadata } from 'next';
import { ArtifactsPage } from '@/components/pages/ArtifactsPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta(
  '/artifacts',
  'id',
  t(ui.artifacts.metaTitle, 'id'),
  t(ui.artifacts.metaDescription, 'id'),
);

export default function Page() {
  return <ArtifactsPage lang="id" />;
}
