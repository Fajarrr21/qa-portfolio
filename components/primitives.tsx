import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

/** Wadah konten dengan max-width 1100px + gutter 16px. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

/** Kepala section: eyebrow + judul + deskripsi opsional. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div id={id} className="max-w-2xl scroll-mt-24">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}

/** Chip kecil (tag / metrik ringkas). */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

/** Link internal dengan panah kanan. */
export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-150 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/** Link eksternal dengan panah keluar (aria + rel aman). */
export function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 text-sm font-medium transition-colors ${className}`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

type ButtonVariant = 'primary' | 'secondary';

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded border px-4 py-2.5 text-sm font-medium transition-colors duration-150';
const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'border-accent bg-accent text-white hover:bg-accent-hover',
  secondary: 'border-border bg-surface text-text hover:border-accent hover:text-accent',
};

/** Tombol berbasis Link internal. */
export function ButtonLink({
  href,
  variant = 'primary',
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]}`}>
      {children}
    </Link>
  );
}

/** Tombol berbasis anchor eksternal. */
export function ButtonExternal({
  href,
  variant = 'secondary',
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBase} ${buttonVariants[variant]}`}
    >
      {children}
    </a>
  );
}
