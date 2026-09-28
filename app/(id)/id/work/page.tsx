import type { Metadata } from 'next';
import { WorkPage } from '@/components/pages/WorkPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta(
  '/work',
  'id',
  t(ui.work.metaTitle, 'id'),
  t(ui.work.metaDescription, 'id'),
);

export default function Page() {
  return <WorkPage lang="id" />;
}
