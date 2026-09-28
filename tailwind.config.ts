import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semua warna mengacu ke CSS variable di globals.css (single source of truth).
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        // Teks di atas bidang --accent. Putih di light mode, gelap di dark mode
        // (karena accent-nya dibalik jadi biru terang) - jangan pakai text-white.
        'accent-fg': 'var(--accent-fg)',
        // Status severity (khusus halaman bug).
        'sev-critical': 'var(--sev-critical)',
        'sev-high': 'var(--sev-high)',
        'sev-medium': 'var(--sev-medium)',
        'sev-low': 'var(--sev-low)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '10px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
};

export default config;
