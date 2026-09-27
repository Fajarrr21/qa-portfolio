import type { EvidenceItem } from '@/lib/types';
import { isDev } from '@/lib/projects';
import { asset } from '@/lib/basePath';
import { type Locale, t } from '@/lib/i18n';

/** Item yang layak tampil: punya file (src), atau placeholder TODO tapi hanya di dev. */
export function visibleEvidence(items: EvidenceItem[] | undefined): EvidenceItem[] {
  if (!items) return [];
  return items.filter((e) => e.src || (e.todo && isDev));
}

export function Evidence({ items, lang }: { items: EvidenceItem[]; lang: Locale }) {
  const shown = visibleEvidence(items);
  if (shown.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {shown.map((item, i) => {
        const alt = t(item.alt, lang);
        return (
          <figure key={i} className="overflow-hidden rounded border border-border bg-surface">
            {item.src ? (
              item.kind === 'video' ? (
                <video src={asset(item.src)} controls className="w-full" aria-label={alt} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={asset(item.src)} alt={alt} className="w-full" />
              )
            ) : (
              // Placeholder TODO - hanya dirender di dev (lihat visibleEvidence).
              <div className="flex min-h-[10rem] items-center justify-center border-b border-dashed border-border bg-bg p-4">
                <p className="text-center text-xs font-medium text-muted">
                  {item.todo ? t(item.todo, lang) : null}
                </p>
              </div>
            )}
            <figcaption className="px-4 py-3 text-sm text-muted">
              {t(item.caption, lang)}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
