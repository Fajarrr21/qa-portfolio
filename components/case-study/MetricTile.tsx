import type { ResultTile } from '@/lib/types';

export function MetricTileGrid({ tiles }: { tiles: ResultTile[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {tiles.map((t) => (
        <div key={t.label + t.value} className="rounded border border-border bg-surface p-4">
          <p className="text-2xl font-semibold tracking-tight text-text">{t.value}</p>
          <p className="mt-1 text-sm text-muted">{t.label}</p>
          {t.note && <p className="mt-0.5 text-xs text-muted/80">{t.note}</p>}
        </div>
      ))}
    </div>
  );
}
