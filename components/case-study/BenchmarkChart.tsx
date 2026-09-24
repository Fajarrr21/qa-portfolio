import type { BenchmarkChart as BenchmarkChartData } from '@/lib/types';

// Grouped horizontal bars (HTML/CSS, bukan gambar). Dua seri: Go & Node.
// Go = accent (navy), Node = abu-abu netral. Nilai ditulis sebagai teks
// sehingga tetap terbaca berapa pun panjang bar. Skala global agar 20 VU
// dan 100 VU bisa dibandingkan langsung.
const NODE_COLOR = '#a8a29e'; // stone-400, netral (bukan warna brand baru)

function fmt(n: number) {
  return n.toLocaleString('en-US', { maximumFractionDigits: 1 });
}

export function BenchmarkChart({ chart }: { chart: BenchmarkChartData }) {
  const allValues = chart.levels.flatMap((l) => l.data.flatMap((d) => [d.go, d.node]));
  const max = Math.max(...allValues);

  return (
    <figure className="rounded border border-border bg-surface p-5">
      <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-medium text-text">{chart.title}</span>
        <span className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-accent" aria-hidden />
            Go
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: NODE_COLOR }}
              aria-hidden
            />
            Node.js
          </span>
        </span>
      </figcaption>

      <div className="space-y-6">
        {chart.levels.map((level) => (
          <div key={level.label}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {level.label}
            </p>
            <div className="space-y-3">
              {level.data.map((d) => (
                <div key={d.endpoint}>
                  <p className="mb-1 font-mono text-xs text-text">{d.endpoint}</p>
                  <div className="space-y-1">
                    {[
                      { name: 'Go', value: d.go, color: 'var(--accent)' },
                      { name: 'Node.js', value: d.node, color: NODE_COLOR },
                    ].map((bar) => (
                      <div
                        key={bar.name}
                        className="flex items-center gap-2"
                        aria-label={`${d.endpoint} ${bar.name}: ${fmt(bar.value)} ${chart.unit}`}
                      >
                        <div className="h-4 flex-1 overflow-hidden rounded-sm bg-bg">
                          <div
                            className="h-full rounded-sm"
                            style={{
                              width: `${(bar.value / max) * 100}%`,
                              background: bar.color,
                            }}
                          />
                        </div>
                        <span className="w-20 shrink-0 text-right text-xs tabular-nums text-muted">
                          {fmt(bar.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {chart.caption && <p className="mt-4 text-xs text-muted">{chart.caption}</p>}
    </figure>
  );
}
