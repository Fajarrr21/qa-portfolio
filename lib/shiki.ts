import { createHighlighter, type Highlighter } from 'shiki';

// Highlighter dijalankan saat build (server component async).
// Satu instance dipakai ulang antar snippet.
let highlighterPromise: Promise<Highlighter> | null = null;

const LANGS = ['ts', 'tsx', 'js', 'javascript', 'typescript', 'json', 'bash'];

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light'],
      langs: LANGS,
    });
  }
  return highlighterPromise;
}

/** Highlight code menjadi HTML string. Dipanggil saat build. */
export async function highlight(code: string, lang: string): Promise<string> {
  const hl = await getHighlighter();
  const resolved = hl.getLoadedLanguages().includes(lang) ? lang : 'ts';
  return hl.codeToHtml(code.trim(), {
    lang: resolved,
    theme: 'github-light',
  });
}
