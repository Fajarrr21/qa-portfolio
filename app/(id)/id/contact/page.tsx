import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { pageMeta } from '@/lib/metadata';

export const metadata: Metadata = pageMeta(
  '/contact',
  'id',
  t(ui.contact.metaTitle, 'id'),
  t(ui.contact.description, 'id'),
);

export default function Page() {
  return <ContactPage lang="id" />;
}
