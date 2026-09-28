import { FileText, ClipboardList, Bug } from 'lucide-react';
import { artifacts, type Artifact, type ArtifactSample } from '@/content/artifacts';
import { ui } from '@/content/ui';
import { type Locale, t, tList } from '@/lib/i18n';
import { Container, SectionHeading, Chip } from '@/components/primitives';

const kindIcons = [FileText, ClipboardList, Bug];

const toneClass: Record<NonNullable<ArtifactSample['status']>['tone'], string> = {
  pass: 'border-sev-low text-sev-low',
  fail: 'border-sev-critical text-sev-critical',
  info: 'border-border text-muted',
};

function Sample({ sample, lang }: { sample: ArtifactSample; lang: Locale }) {
  return (
    <div className="rounded border border-border bg-bg p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs font-semibold text-accent">{sample.id}</span>
        {sample.status && (
          <span
            className={`rounded border px-2 py-0.5 text-xs font-semibold ${toneClass[sample.status.tone]}`}
          >
            {t(sample.status.label, lang)}
          </span>
        )}
      </div>
      <p className="mt-2 font-medium">{t(sample.title, lang)}</p>
      <dl className="mt-4 space-y-2.5">
        {sample.fields.map((f, i) => {
          const label = t(f.label, lang);
          return (
            <div key={i} className="sm:flex sm:gap-4">
              <dt className="shrink-0 text-xs font-medium uppercase tracking-wider text-muted sm:w-36 sm:pt-0.5">
                {label}
              </dt>
              <dd className="mt-0.5 text-sm text-text sm:mt-0">{t(f.value, lang)}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

function ArtifactBlock({
  artifact,
  index,
  lang,
}: {
  artifact: Artifact;
  index: number;
  lang: Locale;
}) {
  const Icon = kindIcons[index] ?? FileText;

  return (
    <section id={artifact.slug} className="scroll-mt-24 border-t border-border py-14">
      <div className="flex items-center gap-2 text-sm font-medium text-accent">
        <Icon size={16} aria-hidden />
        {t(artifact.kind, lang)}
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">{t(artifact.title, lang)}</h2>
      <p className="mt-1.5 text-muted">{t(artifact.subtitle, lang)}</p>

      {/* Asal dokumen - ditulis apa adanya supaya tidak terbaca lebih dari yang sebenarnya. */}
      <p className="mt-4 max-w-3xl border-l-2 border-border pl-4 text-sm italic text-muted">
        {t(artifact.provenance, lang)}
      </p>

      <div className="mt-6 max-w-3xl space-y-4 text-muted">
        {tList(artifact.context, lang).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {artifact.facts.length > 0 && (
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {artifact.facts.map((f, i) => (
            <div key={i} className="flex flex-col-reverse">
              <dt className="text-xs uppercase tracking-wider text-muted">{t(f.label, lang)}</dt>
              <dd className="text-lg font-semibold tracking-tight text-text">
                {t(f.value, lang)}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {artifact.outline && artifact.outline.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t(ui.artifacts.structure, lang)}
          </h3>
          <ol className="mt-4 max-w-3xl space-y-3 border-l border-border pl-5">
            {artifact.outline.map((o, i) => (
              <li key={i}>
                <p className="font-medium">{t(o.heading, lang)}</p>
                {o.note && <p className="mt-0.5 text-sm text-muted">{t(o.note, lang)}</p>}
              </li>
            ))}
          </ol>
        </div>
      )}

      {artifact.columns && artifact.columns.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t(ui.artifacts.columns, lang)}{' '}
            <span className="font-normal normal-case tracking-normal">
              ({artifact.columns.length})
            </span>
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {artifact.columns.map((c, i) => (
              <Chip key={i}>{t(c, lang)}</Chip>
            ))}
          </div>
        </div>
      )}

      {artifact.highlights && artifact.highlights.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t(ui.artifacts.decisions, lang)}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {artifact.highlights.map((h, i) => (
              <div key={i} className="rounded border border-border bg-surface p-5">
                <h4 className="font-semibold">{t(h.title, lang)}</h4>
                <p className="mt-2 text-sm text-muted">{t(h.body, lang)}</p>
                {h.points && h.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {tList(h.points, lang).map((p, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-muted">
                        <span
                          aria-hidden
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {artifact.samples && artifact.samples.length > 0 && (
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t(ui.artifacts.samples, lang)}
          </h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {artifact.samples.map((s) => (
              <Sample key={s.id} sample={s} lang={lang} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function ArtifactsPage({ lang }: { lang: Locale }) {
  return (
    <div className="section">
      <Container>
        <SectionHeading
          eyebrow={t(ui.artifacts.eyebrow, lang)}
          title={t(ui.artifacts.title, lang)}
          description={t(ui.artifacts.description, lang)}
        />

        {/* Loncatan ke tiap artefak - halamannya panjang. */}
        <nav aria-label={t(ui.artifacts.onThisPage, lang)} className="mt-8 flex flex-wrap gap-2">
          {artifacts.map((a) => (
            <a
              key={a.slug}
              href={`#${a.slug}`}
              className="rounded border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {t(a.kind, lang)}
            </a>
          ))}
        </nav>

        <div className="mt-6">
          {artifacts.map((a, i) => (
            <ArtifactBlock key={a.slug} artifact={a} index={i} lang={lang} />
          ))}
        </div>
      </Container>
    </div>
  );
}
