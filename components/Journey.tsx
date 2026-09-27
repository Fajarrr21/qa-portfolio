import type { JourneyItem } from '@/content/site';
import { ui } from '@/content/ui';
import { type Locale, type Text, t } from '@/lib/i18n';

// Timeline milestone (dot terpisah) + satu jalur berkelanjutan untuk manual
// testing (bukan dot). Manual testing berjalan terus sejak Jul 2025; automation
// adalah kemampuan yang ditambahkan di atasnya.
export function Journey({
  items,
  railLabel,
  lang,
}: {
  items: JourneyItem[];
  railLabel: Text;
  lang: Locale;
}) {
  return (
    <div>
      {/* Milestones */}
      <ol className="relative space-y-6 border-l border-border pl-6">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.6875rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
            />
            <p className="text-sm font-medium text-accent">{t(item.date, lang)}</p>
            <p className="mt-0.5 text-text">{t(item.title, lang)}</p>
          </li>
        ))}
      </ol>

      {/* Continuous rail - manual testing sebagai baseline, bukan titik. */}
      <div className="mt-8 flex items-center gap-3 rounded border border-border bg-surface px-4 py-3">
        <span
          aria-hidden
          className="h-2 flex-1 rounded-full"
          style={{ background: 'var(--accent)', opacity: 0.15 }}
        />
        <span className="shrink-0 text-sm font-medium text-text">{t(railLabel, lang)}</span>
        <span
          aria-hidden
          className="h-2 flex-1 rounded-full"
          style={{ background: 'var(--accent)', opacity: 0.15 }}
        />
      </div>
      <p className="mt-2 text-xs text-muted">{t(ui.about.journeyRailNote, lang)}</p>
    </div>
  );
}
