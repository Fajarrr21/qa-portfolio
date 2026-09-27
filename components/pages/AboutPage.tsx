import { Lock } from 'lucide-react';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { type Locale, t, tList } from '@/lib/i18n';
import { Container, SectionHeading, Chip } from '@/components/primitives';
import { FlowDiagram } from '@/components/case-study/FlowDiagram';
import { Journey } from '@/components/Journey';

export function AboutPage({ lang }: { lang: Locale }) {
  const { experience } = site;

  return (
    <div className="section">
      <Container>
        {/* About me */}
        <section>
          <SectionHeading
            eyebrow={t(ui.about.eyebrow, lang)}
            title={t(ui.about.title, lang)}
          />
          <div className="mt-6 max-w-3xl space-y-4 text-muted">
            {tList(site.about, lang).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-20 scroll-mt-24">
          <SectionHeading
            eyebrow={t(ui.about.experienceEyebrow, lang)}
            title={t(ui.about.experienceTitle, lang)}
          />
          <div className="mt-8 rounded border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">{t(experience.role, lang)}</h3>
              <p className="text-sm font-medium text-accent">{t(experience.period, lang)}</p>
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <Lock size={13} aria-hidden />
              {experience.org} · {t(experience.location, lang)}
            </p>
            <p className="mt-4 max-w-3xl text-muted">{t(experience.context, lang)}</p>
            <ul className="mt-5 space-y-3">
              {tList(experience.bullets, lang).map((b, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* QA journey */}
        <section className="mt-20">
          <SectionHeading
            eyebrow={t(ui.about.journeyEyebrow, lang)}
            title={t(ui.about.journeyTitle, lang)}
          />
          <div className="mt-8 max-w-2xl">
            <Journey items={site.journey} railLabel={site.manualTestingRail} lang={lang} />
          </div>
        </section>

        {/* How I test */}
        <section className="mt-20">
          <SectionHeading
            eyebrow={t(ui.about.howEyebrow, lang)}
            title={t(ui.about.howTitle, lang)}
            description={t(ui.about.howDescription, lang)}
          />
          <div className="mt-8">
            <FlowDiagram steps={site.howITest.map((label) => ({ label }))} lang={lang} />
          </div>
        </section>

        {/* Tools */}
        <section className="mt-20">
          <SectionHeading
            eyebrow={t(ui.about.toolsEyebrow, lang)}
            title={t(ui.about.toolsTitle, lang)}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {site.tools.map((tool) => (
              <Chip key={tool}>{tool}</Chip>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
