import type { ScopeNode } from '@/lib/types';
import { type Locale, t, tList } from '@/lib/i18n';

// Pohon testing scope: modul → skenario.
export function ScopeTree({ nodes, lang }: { nodes: ScopeNode[]; lang: Locale }) {
  return (
    <ul className="space-y-6">
      {nodes.map((node, i) => (
        <li key={i}>
          <p className="font-medium text-text">{t(node.module, lang)}</p>
          <ul className="mt-2 space-y-1.5 border-l border-border pl-4">
            {tList(node.scenarios, lang).map((s, j) => (
              <li key={j} className="relative text-sm text-muted">
                <span
                  aria-hidden
                  className="absolute -left-4 top-2.5 h-px w-2.5 bg-border"
                />
                {s}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
