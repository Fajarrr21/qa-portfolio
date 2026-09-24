import type { EvidenceItem } from '@/lib/types';
import { isDev } from '@/lib/projects';
import { asset } from '@/lib/basePath';

/** Item yang layak tampil: punya file (src), atau placeholder TODO tapi hanya di dev. */
export function visibleEvidence(items: EvidenceItem[] | undefined): EvidenceItem[] {
  if (!items) return [];
  return items.filter((e) => e.src || (e.todo && isDev));
}

export function Evidence({ items }: { items: EvidenceItem[] }) {
  const shown = visibleEvidence(items);
  if (shown.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {shown.map((item, i) => (
        <figure key={i} className="overflow-hidden rounded border border-border bg-surface">
          {item.src ? (
            item.kind === 'video' ? (
              <video src={asset(item.src)} controls className="w-full" aria-label={item.alt} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={asset(item.src)} alt={item.alt} className="w-full" />
            )
          ) : (
            // Placeholder TODO — hanya dirender di dev (lihat visibleEvidence).
            <div className="flex min-h-[10rem] items-center justify-center border-b border-dashed border-border bg-bg p-4">
              <p className="text-center text-xs font-medium text-muted">{item.todo}</p>
            </div>
          )}
          <figcaption className="px-4 py-3 text-sm text-muted">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
