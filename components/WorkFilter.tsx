'use client';

import { useState } from 'react';
import type { Project, ProjectTag } from '@/lib/types';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';
import { ProjectCard } from './ProjectCard';

// Nama tag dipakai apa adanya di kedua bahasa (istilah QA yang lazim), hanya
// "All" yang diterjemahkan.
const TAGS: ProjectTag[] = ['Automation', 'API', 'Manual', 'Performance'];
const ALL = 'All' as const;

type Filter = typeof ALL | ProjectTag;

export function WorkFilter({ projects, lang }: { projects: Project[]; lang: Locale }) {
  const [active, setActive] = useState<Filter>(ALL);

  const visible = active === ALL ? projects : projects.filter((p) => p.tags.includes(active));
  const filters: Filter[] = [ALL, ...TAGS];

  return (
    <div>
      <div
        role="group"
        aria-label={t(ui.a11y.filterProjects, lang)}
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const isActive = active === f;
          const label = f === ALL ? t(ui.work.filterAll, lang) : f;
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
              {label}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} lang={lang} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-muted">{t(ui.work.emptyFilter, lang)}</p>
      )}
    </div>
  );
}
