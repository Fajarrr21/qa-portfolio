import { ArrowRight, ArrowDown } from 'lucide-react';
import type { FlowStep } from '@/lib/types';
import { type Locale, t } from '@/lib/i18n';

// Diagram alur sederhana dari HTML/CSS (bukan gambar).
// Horizontal di desktop, vertical di mobile. Panah non-teks (aria-hidden).
export function FlowDiagram({ steps, lang }: { steps: FlowStep[]; lang: Locale }) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
      {steps.map((step, i) => (
        <li key={i} className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="flex min-w-[9rem] flex-1 flex-col rounded border border-border bg-surface px-4 py-3">
            <span className="text-sm font-medium text-text">{t(step.label, lang)}</span>
            {step.note && (
              <span className="mt-0.5 text-xs text-muted">{t(step.note, lang)}</span>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center text-border" aria-hidden>
              <ArrowRight size={18} className="hidden sm:block" />
              <ArrowDown size={18} className="sm:hidden" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
