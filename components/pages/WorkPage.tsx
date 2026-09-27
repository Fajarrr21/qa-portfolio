import { getProjects } from '@/lib/projects';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';
import { Container, SectionHeading } from '@/components/primitives';
import { WorkFilter } from '@/components/WorkFilter';

export function WorkPage({ lang }: { lang: Locale }) {
  const projects = getProjects();

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={t(ui.work.eyebrow, lang)}
          title={t(ui.work.title, lang)}
          description={t(ui.work.description, lang)}
        />
        <div className="mt-10">
          <WorkFilter projects={projects} lang={lang} />
        </div>
      </Container>
    </section>
  );
}
