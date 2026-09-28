import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Github, ExternalLink as ExternalLinkIcon, ArrowLeft, Lock } from 'lucide-react';
import { getProject } from '@/lib/projects';
import { bugs } from '@/content/bugs';
import { ui } from '@/content/ui';
import { type Locale, localePath, t, tList } from '@/lib/i18n';
import { Container, ButtonExternal, Chip } from '@/components/primitives';
import { ScopeTree } from '@/components/case-study/ScopeTree';
import { FlowDiagram } from '@/components/case-study/FlowDiagram';
import { CodeBlock } from '@/components/case-study/CodeBlock';
import { MetricTileGrid } from '@/components/case-study/MetricTile';
import { Evidence, visibleEvidence } from '@/components/case-study/Evidence';
import { BenchmarkChart } from '@/components/case-study/BenchmarkChart';
import { BugLog } from '@/components/case-study/BugList';

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function linkIcon(label: string) {
  if (label === 'GitHub') return <Github size={16} />;
  return <ExternalLinkIcon size={16} />;
}

export function CaseStudyPage({ slug, lang }: { slug: string; lang: Locale }) {
  const project = getProject(slug);
  if (!project) notFound();

  const isProfessional = project.label === 'Professional work';
  const evidenceToShow = visibleEvidence(project.evidence);

  return (
    <article className="section pt-10">
      <Container className="max-w-content">
        <Link
          href={localePath('/work', lang)}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} />
          {t(ui.project.allWork, lang)}
        </Link>

        {/* Header */}
        <header className="mt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            {isProfessional && <Lock size={13} aria-hidden />}
            {isProfessional && project.professionalOrg
              ? `${t(ui.project.professional, lang)} · ${project.professionalOrg}`
              : t(isProfessional ? ui.project.professional : ui.project.personal, lang)}
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t(project.title, lang)}
          </h1>
          <p className="mt-2 text-lg text-muted">{t(project.subtitle, lang)}</p>

          {project.techStack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          )}

          {project.metrics.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {project.metrics.map((m) => {
                const label = t(m.label, lang);
                return (
                  // flex-col-reverse: urutan DOM <dt> lalu <dd> (wajib di <dl>),
                  // tampilannya tetap angka di atas label.
                  <div key={`${label}-${m.value}`} className="flex flex-col-reverse">
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight text-accent">
                      {m.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <ButtonExternal key={l.href} href={l.href}>
                  {linkIcon(l.label)}
                  {l.label}
                </ButtonExternal>
              ))}
            </div>
          )}
        </header>

        {/* Overview */}
        {project.overview && project.overview.length > 0 && (
          <CaseSection title={t(ui.caseStudy.overview, lang)}>
            <div className="max-w-3xl space-y-4 text-muted">
              {tList(project.overview, lang).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </CaseSection>
        )}

        {/* Objective */}
        {project.objective && (
          <CaseSection title={t(ui.caseStudy.objective, lang)}>
            <p className="max-w-3xl text-muted">{t(project.objective, lang)}</p>
          </CaseSection>
        )}

        {/* Benchmark design (go-vs-node) */}
        {project.benchmarkDesign && project.benchmarkDesign.length > 0 && (
          <CaseSection title={t(ui.caseStudy.benchmarkDesign, lang)}>
            <ul className="max-w-3xl space-y-2.5">
              {tList(project.benchmarkDesign, lang).map((b, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {/* Testing scope */}
        {project.scope && project.scope.length > 0 && (
          <CaseSection title={t(ui.caseStudy.scope, lang)}>
            <ScopeTree nodes={project.scope} lang={lang} />
          </CaseSection>
        )}

        {/* Test strategy */}
        {project.strategy && project.strategy.length > 0 && (
          <CaseSection title={t(ui.caseStudy.strategy, lang)}>
            <ul className="max-w-3xl space-y-2.5">
              {tList(project.strategy, lang).map((s, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {/* Measurement integrity (go-vs-node) */}
        {project.measurementIntegrity && (
          <CaseSection title={t(ui.caseStudy.measurementIntegrity, lang)}>
            <p className="max-w-3xl text-muted">{t(project.measurementIntegrity, lang)}</p>
          </CaseSection>
        )}

        {/* Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <CaseSection title={t(ui.caseStudy.architecture, lang)}>
            <FlowDiagram steps={project.architecture} lang={lang} />
          </CaseSection>
        )}

        {/* Implementation */}
        {project.snippets && project.snippets.length > 0 && (
          <CaseSection title={t(ui.caseStudy.implementation, lang)}>
            <div className="space-y-8">
              {project.snippets.map((snippet, i) => (
                <CodeBlock key={i} snippet={snippet} lang={lang} />
              ))}
            </div>
          </CaseSection>
        )}

        {/* Benchmark chart */}
        {project.benchmarkChart && (
          <CaseSection title={t(ui.caseStudy.resultsThroughput, lang)}>
            <BenchmarkChart chart={project.benchmarkChart} lang={lang} />
          </CaseSection>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <CaseSection title={t(ui.caseStudy.results, lang)}>
            <MetricTileGrid tiles={project.results} lang={lang} />
          </CaseSection>
        )}

        {/* Evidence */}
        {evidenceToShow.length > 0 && (
          <CaseSection title={t(ui.caseStudy.evidence, lang)}>
            <Evidence items={project.evidence ?? []} lang={lang} />
          </CaseSection>
        )}

        {/* Bug log (bug-hunting template) */}
        {slug === 'bug-hunting' && (
          <CaseSection title={t(ui.caseStudy.bugLog, lang)}>
            <BugLog bugs={bugs} lang={lang} />
          </CaseSection>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <CaseSection title={t(ui.caseStudy.links, lang)}>
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <ButtonExternal key={l.href} href={l.href}>
                  {linkIcon(l.label)}
                  {l.label}
                </ButtonExternal>
              ))}
            </div>
          </CaseSection>
        )}
      </Container>
    </article>
  );
}
