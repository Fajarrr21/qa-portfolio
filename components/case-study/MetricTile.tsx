import type { ResultTile } from '@/lib/types';
import { type Locale, t } from '@/lib/i18n';

export function MetricTileGrid({ tiles, lang }: { tiles: ResultTile[]; lang: Locale }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {tiles.map((tile, i) => (
        <div key={i} className="rounded border border-border bg-surface p-4">
          <p className="text-2xl font-semibold tracking-tight text-text">{tile.value}</p>
          <p className="mt-1 text-sm text-muted">{t(tile.label, lang)}</p>
          {tile.note && <p className="mt-0.5 text-xs text-muted/80">{t(tile.note, lang)}</p>}
        </div>
      ))}
    </div>
  );
}
