'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Menu, X } from 'lucide-react';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { asset } from '@/lib/basePath';
import { type Locale, localePath, stripLocale, t } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

// Path netral (tanpa prefiks bahasa); prefiks ditambahkan saat render.
const navItems = [
  { key: 'work', path: '/work', label: ui.nav.work },
  { key: 'about', path: '/about', label: ui.nav.about },
  { key: 'contact', path: '/contact', label: ui.nav.contact },
] as const;

const resumeLinks = [
  { label: ui.nav.resumeEn, href: asset(site.resume.en) },
  { label: ui.nav.resumeId, href: asset(site.resume.id) },
];

/** Bandingkan path tanpa prefiks bahasa, jadi /id/work ikut menandai "Work". */
function isActive(pathname: string, path: string) {
  const current = stripLocale(pathname);
  return current === path || current.startsWith(`${path}/`);
}

export function Navbar({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const resumeToggleRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  // Cermin state untuk dibaca di dalam listener. Listener-nya dipasang sekali
  // (deps kosong), jadi ia tidak bisa membaca state terbaru secara langsung.
  const openRef = useRef({ resume: false, mobile: false });
  openRef.current = { resume: resumeOpen, mobile: mobileOpen };

  // Tutup dropdown resume saat klik di luar / tekan Escape.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return;

      // Kembalikan fokus ke tombol pemicunya masing-masing - jangan biarkan
      // fokus menggantung di elemen yang baru dilepas dari DOM. Hanya yang
      // memang sedang terbuka; tombol mobile ter-hidden di lebar desktop dan
      // memfokuskannya dari sana justru membuat fokus hilang entah ke mana.
      const { resume, mobile } = openRef.current;
      if (resume) {
        setResumeOpen(false);
        resumeToggleRef.current?.focus();
      }
      if (mobile) {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Tutup menu mobile saat pindah halaman.
  useEffect(() => {
    setMobileOpen(false);
    setResumeOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav
        aria-label={t(ui.a11y.mainNav, lang)}
        className="container-page flex h-16 items-center justify-between"
      >
        <Link
          href={localePath('/', lang)}
          className="text-base font-semibold tracking-widest text-text transition-colors hover:text-accent"
        >
          FAJAR
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.path);
            return (
              <Link
                key={item.key}
                href={localePath(item.path, lang)}
                aria-current={active ? 'page' : undefined}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {t(item.label, lang)}
              </Link>
            );
          })}

          {/* Resume dropdown */}
          <div ref={resumeRef} className="relative">
            <button
              ref={resumeToggleRef}
              type="button"
              onClick={() => setResumeOpen((v) => !v)}
              aria-expanded={resumeOpen}
              // "true" (popup generik), bukan "menu" - isinya dua tautan unduh,
              // bukan widget menu dengan navigasi panah.
              aria-haspopup="true"
              className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {t(ui.nav.resume, lang)}
              <ChevronDown
                size={15}
                className={`transition-transform duration-150 ${resumeOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {resumeOpen && (
              // Tanpa role="menu"/"menuitem": role itu menjanjikan pola
              // keyboard tertentu (panah atas/bawah, Home/End) ke assistive
              // tech, dan kita tidak menyediakannya. Menjanjikan lalu tidak
              // memenuhi lebih membingungkan daripada tidak memakainya - ini
              // memang cuma dua tautan unduh biasa.
              <div className="absolute right-0 mt-1 w-56 overflow-hidden rounded border border-border bg-surface py-1">
                {resumeLinks.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    download
                    className="block px-4 py-2 text-sm text-text transition-colors hover:bg-bg hover:text-accent"
                  >
                    {t(r.label, lang)}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex items-center gap-1.5 rounded px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
          >
            <Github size={16} />
            GitHub
          </a>

          <LanguageSwitcher lang={lang} className="ml-2" />
        </div>

        {/* Mobile toggle - switcher tetap terlihat tanpa membuka menu */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} />
          <button
            type="button"
            ref={mobileToggleRef}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={t(mobileOpen ? ui.a11y.closeMenu : ui.a11y.openMenu, lang)}
            className="rounded p-2 text-text"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-surface md:hidden">
          <div className="container-page flex flex-col py-3">
            {navItems.map((item) => {
              const active = isActive(pathname, item.path);
              return (
                <Link
                  key={item.key}
                  href={localePath(item.path, lang)}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded px-2 py-3 text-sm font-medium ${
                    active ? 'text-accent' : 'text-text'
                  }`}
                >
                  {t(item.label, lang)}
                </Link>
              );
            })}
            <div className="mt-1 border-t border-border pt-2">
              <p className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted">
                {t(ui.nav.resume, lang)}
              </p>
              {resumeLinks.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  download
                  className="block rounded px-2 py-3 text-sm text-text"
                >
                  {t(r.label, lang)}
                </a>
              ))}
            </div>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-1.5 border-t border-border px-2 py-3 text-sm font-medium text-text"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
