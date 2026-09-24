import type { Metadata } from 'next';
import { Lock } from 'lucide-react';
import { site } from '@/content/site';
import { Container, SectionHeading, Chip } from '@/components/primitives';
import { FlowDiagram } from '@/components/case-study/FlowDiagram';
import { Journey } from '@/components/Journey';

export const metadata: Metadata = {
  title: 'About',
  description: 'Profile, experience, QA journey, testing approach, and tools.',
};

export default function AboutPage() {
  const { experience } = site;

  return (
    <div className="section">
      <Container>
        {/* About me */}
        <section>
          <SectionHeading eyebrow="About" title="About me" />
          <div className="mt-6 max-w-3xl space-y-4 text-muted">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-20 scroll-mt-24">
          <SectionHeading eyebrow="Experience" title="Where I work" />
          <div className="mt-8 rounded border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              <p className="text-sm font-medium text-accent">{experience.period}</p>
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <Lock size={13} aria-hidden />
              {experience.org} · {experience.location}
            </p>
            <p className="mt-4 max-w-3xl text-muted">{experience.context}</p>
            <ul className="mt-5 space-y-3">
              {experience.bullets.map((b, i) => (
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
          <SectionHeading eyebrow="QA journey" title="How I got here" />
          <div className="mt-8 max-w-2xl">
            <Journey items={site.journey} railLabel={site.manualTestingRail} />
          </div>
        </section>

        {/* How I test */}
        <section className="mt-20">
          <SectionHeading
            eyebrow="How I test"
            title="My approach"
            description="A repeatable path from understanding a feature to protecting it against regressions."
          />
          <div className="mt-8">
            <FlowDiagram steps={site.howITest.map((label) => ({ label }))} />
          </div>
        </section>

        {/* Tools */}
        <section className="mt-20">
          <SectionHeading eyebrow="Tools" title="What I work with" />
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
