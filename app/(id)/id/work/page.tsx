import type { Metadata } from 'next';
import { WorkPage } from '@/components/pages/WorkPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { alternatesFor } from '@/lib/metadata';

export const metadata: Metadata = {
  title: t(ui.work.metaTitle, 'id'),
  description: t(ui.work.metaDescription, 'id'),
  alternates: alternatesFor('/work', 'id'),
};

export default function Page() {
  return <WorkPage lang="id" />;
}
