import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { ui } from '@/content/ui';
import { t } from '@/lib/i18n';
import { alternatesFor } from '@/lib/metadata';

export const metadata: Metadata = {
  title: t(ui.contact.metaTitle, 'en'),
  description: t(ui.contact.description, 'en'),
  alternates: alternatesFor('/contact', 'en'),
};

export default function Page() {
  return <ContactPage lang="en" />;
}
