import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: 'GitHub', href: site.links.github, icon: Github, external: true },
    { label: 'LinkedIn', href: site.links.linkedin, icon: Linkedin, external: true },
    { label: 'Email', href: `mailto:${site.links.email}`, icon: Mail, external: false },
  ];

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          <span className="font-semibold text-text">{site.name}</span> · © {year}
        </p>
        <ul className="flex items-center gap-5">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <Icon size={16} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
