import { ArrowRight } from 'lucide-react';
import type { Bug, Severity } from '@/lib/types';
import { Evidence, visibleEvidence } from './Evidence';

const severityClass: Record<Severity, string> = {
  Critical: 'border-sev-critical text-sev-critical',
  High: 'border-sev-high text-sev-high',
  Medium: 'border-sev-medium text-sev-medium',
  Low: 'border-sev-low text-sev-low',
};

export function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${severityClass[severity]}`}
    >
      {severity}
    </span>
  );
}

function BugField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</h4>
      <div className="mt-1.5 text-sm text-text">{children}</div>
    </div>
  );
}

// Detail satu bug — dirender sebagai section beranchor (#id) di halaman bug-hunting.
function BugDetail({ bug }: { bug: Bug }) {
  const evidenceToShow = visibleEvidence(bug.evidence);
  return (
    <section
      id={bug.id}
      className="scroll-mt-24 rounded border border-border bg-surface p-6"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm text-muted">{bug.id}</span>
        <SeverityBadge severity={bug.severity} />
        <span className="text-sm text-muted">{bug.type}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{bug.title}</h3>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <BugField label="Context">{bug.context}</BugField>
        <BugField label="Status">{bug.status}</BugField>
        <BugField label="Steps to reproduce">
          <ol className="list-decimal space-y-1 pl-5 text-muted">
            {bug.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </BugField>
        <div className="space-y-4">
          <BugField label="Expected">
            <span className="text-muted">{bug.expected}</span>
          </BugField>
          <BugField label="Actual">
            <span className="text-muted">{bug.actual}</span>
          </BugField>
        </div>
        <div className="sm:col-span-2">
          <BugField label="Investigation">
            <span className="text-muted">{bug.investigation}</span>
          </BugField>
        </div>
      </div>

      {evidenceToShow.length > 0 && (
        <div className="mt-5">
          <Evidence items={bug.evidence} />
        </div>
      )}
    </section>
  );
}

export function BugLog({ bugs }: { bugs: Bug[] }) {
  if (bugs.length === 0) {
    return (
      <div className="rounded border border-dashed border-border bg-surface p-6">
        <p className="text-sm text-muted">
          No bugs published yet. This is a template — each bug is one file under{' '}
          <code className="font-mono text-xs text-text">content/bugs/</code>, recording id, title,
          severity, type, context, steps, expected, actual, investigation, evidence, and status.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Daftar kartu bug */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {bugs.map((bug) => (
          <li key={bug.id}>
            <a
              href={`#${bug.id}`}
              className="group flex h-full flex-col rounded border border-border bg-surface p-5 transition-colors duration-150 hover:border-accent"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-muted">{bug.id}</span>
                <SeverityBadge severity={bug.severity} />
              </div>
              <h3 className="mt-2 font-medium transition-colors group-hover:text-accent">
                {bug.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{bug.type}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                View detail
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Detail per bug (beranchor) */}
      <div className="space-y-6">
        {bugs.map((bug) => (
          <BugDetail key={bug.id} bug={bug} />
        ))}
      </div>
    </div>
  );
}
