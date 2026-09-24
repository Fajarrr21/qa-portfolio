import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Github, ExternalLink as ExternalLinkIcon, ArrowLeft, Lock } from 'lucide-react';
import { getProject, getProjectSlugs } from '@/lib/projects';
import { bugs } from '@/content/bugs';
import { Container, ButtonExternal, Chip } from '@/components/primitives';
import { ScopeTree } from '@/components/case-study/ScopeTree';
import { FlowDiagram } from '@/components/case-study/FlowDiagram';
import { CodeBlock } from '@/components/case-study/CodeBlock';
import { MetricTileGrid } from '@/components/case-study/MetricTile';
import { Evidence, visibleEvidence } from '@/components/case-study/Evidence';
import { BenchmarkChart } from '@/components/case-study/BenchmarkChart';
import { BugLog } from '@/components/case-study/BugList';
import Link from 'next/link';

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
  return { title: project.title, description: project.subtitle };
}

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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isProfessional = project.label === 'Professional work';
  const evidenceToShow = visibleEvidence(project.evidence);

  return (
    <article className="section pt-10">
      <Container className="max-w-content">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} />
          All work
        </Link>

        {/* Header */}
        <header className="mt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
            {isProfessional && <Lock size={13} aria-hidden />}
            {isProfessional && project.professionalOrg
              ? `Professional work · ${project.professionalOrg}`
              : project.label}
          </span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-muted">{project.subtitle}</p>

          {project.techStack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          )}

          {project.metrics.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="text-2xl font-semibold tracking-tight text-accent">{m.value}</dd>
                  <dt className="text-sm text-muted">{m.label}</dt>
                </div>
              ))}
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
          <CaseSection title="Overview">
            <div className="max-w-3xl space-y-4 text-muted">
              {project.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </CaseSection>
        )}

        {/* Objective */}
        {project.objective && (
          <CaseSection title="Objective">
            <p className="max-w-3xl text-muted">{project.objective}</p>
          </CaseSection>
        )}

        {/* Benchmark design (go-vs-node) */}
        {project.benchmarkDesign && project.benchmarkDesign.length > 0 && (
          <CaseSection title="Benchmark design">
            <ul className="max-w-3xl space-y-2.5">
              {project.benchmarkDesign.map((b, i) => (
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
          <CaseSection title="Testing scope">
            <ScopeTree nodes={project.scope} />
          </CaseSection>
        )}

        {/* Test strategy */}
        {project.strategy && project.strategy.length > 0 && (
          <CaseSection title="Test strategy">
            <ul className="max-w-3xl space-y-2.5">
              {project.strategy.map((s, i) => (
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
          <CaseSection title="Measurement integrity">
            <p className="max-w-3xl text-muted">{project.measurementIntegrity}</p>
          </CaseSection>
        )}

        {/* Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <CaseSection title="Architecture">
            <FlowDiagram steps={project.architecture} />
          </CaseSection>
        )}

        {/* Implementation */}
        {project.snippets && project.snippets.length > 0 && (
          <CaseSection title="Implementation">
            <div className="space-y-8">
              {project.snippets.map((snippet, i) => (
                <CodeBlock key={i} snippet={snippet} />
              ))}
            </div>
          </CaseSection>
        )}

        {/* Benchmark chart */}
        {project.benchmarkChart && (
          <CaseSection title="Results — throughput">
            <BenchmarkChart chart={project.benchmarkChart} />
          </CaseSection>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <CaseSection title="Results">
            <MetricTileGrid tiles={project.results} />
          </CaseSection>
        )}

        {/* Evidence */}
        {evidenceToShow.length > 0 && (
          <CaseSection title="Evidence">
            <Evidence items={project.evidence ?? []} />
          </CaseSection>
        )}

        {/* Bug log (bug-hunting template) */}
        {slug === 'bug-hunting' && (
          <CaseSection title="Bug log">
            <BugLog bugs={bugs} />
          </CaseSection>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <CaseSection title="Links">
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
