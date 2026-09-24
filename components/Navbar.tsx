'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Menu, X } from 'lucide-react';
import { site } from '@/content/site';
import { asset } from '@/lib/basePath';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const resumeLinks = [
  { label: 'English (PDF)', href: asset(site.resume.en) },
  { label: 'Bahasa Indonesia (PDF)', href: asset(site.resume.id) },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown resume saat klik di luar / tekan Escape.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setResumeOpen(false);
        setMobileOpen(false);
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
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-widest text-text transition-colors hover:text-accent"
        >
          FAJAR
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Resume dropdown */}
          <div ref={resumeRef} className="relative">
            <button
              type="button"
              onClick={() => setResumeOpen((v) => !v)}
              aria-expanded={resumeOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              Resume
              <ChevronDown
                size={15}
                className={`transition-transform duration-150 ${resumeOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {resumeOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-1 w-56 overflow-hidden rounded border border-border bg-surface py-1"
              >
                {resumeLinks.map((r) => (
                  <a
                    key={r.href}
                    role="menuitem"
                    href={r.href}
                    download
                    className="block px-4 py-2 text-sm text-text transition-colors hover:bg-bg hover:text-accent"
                  >
                    {r.label}
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
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="rounded p-2 text-text md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-surface md:hidden">
          <div className="container-page flex flex-col py-3">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded px-2 py-3 text-sm font-medium ${
                    active ? 'text-accent' : 'text-text'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-1 border-t border-border pt-2">
              <p className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted">
                Resume
              </p>
              {resumeLinks.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  download
                  className="block rounded px-2 py-3 text-sm text-text"
                >
                  {r.label}
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
