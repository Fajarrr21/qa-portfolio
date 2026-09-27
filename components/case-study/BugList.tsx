import { ArrowRight } from 'lucide-react';
import type { Bug, Severity } from '@/lib/types';
import { ui } from '@/content/ui';
import { type Locale, t, tList } from '@/lib/i18n';
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

// Detail satu bug - dirender sebagai section beranchor (#id) di halaman bug-hunting.
function BugDetail({ bug, lang }: { bug: Bug; lang: Locale }) {
  const evidenceToShow = visibleEvidence(bug.evidence);
  return (
    <section
      id={bug.id}
      className="scroll-mt-24 rounded border border-border bg-surface p-6"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm text-muted">{bug.id}</span>
        <SeverityBadge severity={bug.severity} />
        <span className="text-sm text-muted">{t(bug.type, lang)}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{t(bug.title, lang)}</h3>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <BugField label={t(ui.bug.context, lang)}>{t(bug.context, lang)}</BugField>
        <BugField label={t(ui.bug.status, lang)}>{t(bug.status, lang)}</BugField>
        <BugField label={t(ui.bug.steps, lang)}>
          <ol className="list-decimal space-y-1 pl-5 text-muted">
            {tList(bug.steps, lang).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </BugField>
        <div className="space-y-4">
          <BugField label={t(ui.bug.expected, lang)}>
            <span className="text-muted">{t(bug.expected, lang)}</span>
          </BugField>
          <BugField label={t(ui.bug.actual, lang)}>
            <span className="text-muted">{t(bug.actual, lang)}</span>
          </BugField>
        </div>
        <div className="sm:col-span-2">
          <BugField label={t(ui.bug.investigation, lang)}>
            <span className="text-muted">{t(bug.investigation, lang)}</span>
          </BugField>
        </div>
      </div>

      {evidenceToShow.length > 0 && (
        <div className="mt-5">
          <Evidence items={bug.evidence} lang={lang} />
        </div>
      )}
    </section>
  );
}

export function BugLog({ bugs, lang }: { bugs: Bug[]; lang: Locale }) {
  if (bugs.length === 0) {
    return (
      <div className="rounded border border-dashed border-border bg-surface p-6">
        <p className="text-sm text-muted">{t(ui.bug.emptyLog, lang)}</p>
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
                {t(bug.title, lang)}
              </h3>
              <p className="mt-1 text-sm text-muted">{t(bug.type, lang)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                {t(ui.bug.viewDetail, lang)}
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
          <BugDetail key={bug.id} bug={bug} lang={lang} />
        ))}
      </div>
    </div>
  );
}
