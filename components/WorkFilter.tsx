'use client';

import { useState } from 'react';
import type { Project, ProjectTag } from '@/lib/types';
import { ProjectCard } from './ProjectCard';

const filters: Array<'All' | ProjectTag> = [
  'All',
  'Automation',
  'API',
  'Manual',
  'Performance',
];

export function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded border px-3 py-1.5 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-surface text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-muted">No projects match this filter.</p>
      )}
    </div>
  );
}
