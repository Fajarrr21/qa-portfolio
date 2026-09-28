import { createHighlighter, type Highlighter } from 'shiki';

// Highlighter dijalankan saat build (server component async).
// Satu instance dipakai ulang antar snippet.
let highlighterPromise: Promise<Highlighter> | null = null;

const LANGS = ['ts', 'tsx', 'js', 'javascript', 'typescript', 'json', 'bash'];

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: LANGS,
    });
  }
  return highlighterPromise;
}

/**
 * Highlight code menjadi HTML string. Dipanggil saat build.
 *
 * Dua tema sekaligus dengan defaultColor: false - tiap token membawa variabel
 * --shiki-light dan --shiki-dark, lalu app/globals.css yang memilih mana yang
 * dipakai lewat prefers-color-scheme. Situsnya statis, jadi tema tidak bisa
 * ditentukan saat build; cara ini membuat satu HTML melayani keduanya.
 */
export async function highlight(code: string, lang: string): Promise<string> {
  const hl = await getHighlighter();
  const resolved = hl.getLoadedLanguages().includes(lang) ? lang : 'ts';
  return hl.codeToHtml(code.trim(), {
    lang: resolved,
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: false,
  });
}
