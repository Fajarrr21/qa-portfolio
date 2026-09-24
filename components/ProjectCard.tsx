import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Chip } from './primitives';

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  const href = `/work/${project.slug}`;
  const github = project.links.find((l) => l.label === 'GitHub');
  const isProfessional = project.label === 'Professional work';

  return (
    <article className="group flex h-full flex-col rounded border border-border bg-surface p-6 transition-colors duration-150 hover:border-accent">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
          {isProfessional && <Lock size={12} aria-hidden />}
          {isProfessional && project.professionalOrg
            ? `Professional work · ${project.professionalOrg}`
            : project.label}
        </span>
        {typeof index === 'number' && (
          <span className="text-sm font-semibold tabular-nums text-border">
            {String(index).padStart(2, '0')}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold tracking-tight">
        <Link href={href} className="transition-colors group-hover:text-accent">
          <span className="absolute inset-0" aria-hidden />
          {project.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

      {project.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.slice(0, 3).map((m) => (
            <Chip key={m.label}>
              <span className="font-semibold text-text">{m.value}</span>
              <span className="ml-1 text-muted">{m.label}</span>
            </Chip>
          ))}
        </div>
      )}

      <div className="relative mt-6 flex items-center gap-4 pt-2">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          View case study
          <ArrowRight
            size={16}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </span>
        {github && (
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-text"
          >
            GitHub
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
