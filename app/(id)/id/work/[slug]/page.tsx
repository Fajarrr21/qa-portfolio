import type { Metadata } from 'next';
import { CaseStudyPage } from '@/components/pages/CaseStudyPage';
import { getProject, getProjectSlugs } from '@/lib/projects';
import { t } from '@/lib/i18n';
import { alternatesFor } from '@/lib/metadata';

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Not found' };
  return {
    title: t(project.title, 'id'),
    description: t(project.subtitle, 'id'),
    alternates: alternatesFor(`/work/${slug}`, 'id'),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyPage slug={slug} lang="id" />;
}
