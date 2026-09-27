import { highlight } from '@/lib/shiki';
import type { CodeSnippet } from '@/lib/types';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';

// Server component async: highlight dijalankan saat build.
// Catatan: `snippet.lang` adalah bahasa pemrograman, `lang` adalah bahasa situs.
export async function CodeBlock({
  snippet,
  lang,
}: {
  snippet: CodeSnippet;
  lang: Locale;
}) {
  const html = await highlight(snippet.code, snippet.lang);

  return (
    <figure className="code-block">
      <figcaption className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span>{t(snippet.caption, lang)}</span>
        {snippet.illustrative && (
          <span className="inline-flex items-center rounded border border-border bg-bg px-2 py-0.5 text-xs font-medium text-accent">
            {t(ui.caseStudy.illustrative, lang)}
          </span>
        )}
      </figcaption>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </figure>
  );
}
