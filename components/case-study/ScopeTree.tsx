import type { ScopeNode } from '@/lib/types';

// Pohon testing scope: modul → skenario.
export function ScopeTree({ nodes }: { nodes: ScopeNode[] }) {
  return (
    <ul className="space-y-6">
      {nodes.map((node) => (
        <li key={node.module}>
          <p className="font-medium text-text">{node.module}</p>
          <ul className="mt-2 space-y-1.5 border-l border-border pl-4">
            {node.scenarios.map((s) => (
              <li key={s} className="relative text-sm text-muted">
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
