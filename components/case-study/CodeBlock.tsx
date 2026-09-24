import { highlight } from '@/lib/shiki';
import type { CodeSnippet } from '@/lib/types';

// Server component async: highlight dijalankan saat build.
export async function CodeBlock({ snippet }: { snippet: CodeSnippet }) {
  const html = await highlight(snippet.code, snippet.lang);

  return (
    <figure className="code-block">
      <figcaption className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span>{snippet.caption}</span>
        {snippet.illustrative && (
          <span className="inline-flex items-center rounded border border-border bg-bg px-2 py-0.5 text-xs font-medium text-accent">
            Illustrative example - not production code
          </span>
        )}
      </figcaption>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </figure>
  );
}
