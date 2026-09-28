import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { type Locale, t } from '@/lib/i18n';
import { Container, SectionHeading } from '@/components/primitives';

export function ContactPage({ lang }: { lang: Locale }) {
  const channels = [
    {
      label: 'Email',
      value: site.links.email,
      href: `mailto:${site.links.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'in/fajarardiansy',
      href: site.links.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'Fajarrr21',
      href: site.links.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={t(ui.contact.eyebrow, lang)}
          title={t(ui.contact.title, lang)}
          description={t(ui.contact.description, lang)}
        />
        {/* Status ketersediaan - hal pertama yang dicari recruiter. */}
        <div className="mt-8 max-w-2xl rounded border border-border bg-surface p-5">
          <p className="flex items-center gap-2 font-medium">
            <span
              aria-hidden
              className="inline-block h-2 w-2 shrink-0 rounded-full bg-sev-low"
            />
            {t(ui.contact.statusTitle, lang)}
          </p>
          <p className="mt-1.5 text-sm text-muted">{t(ui.contact.statusDetail, lang)}</p>
          <p className="mt-1 text-sm text-muted">
            {t(ui.contact.basedIn, lang)} {t(site.location, lang)}.
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-muted">
          {t(ui.contact.respondNote, lang)}
        </p>

        <ul className="mt-4 grid max-w-2xl gap-3 sm:grid-cols-3">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full flex-col rounded border border-border bg-surface p-5 transition-colors duration-150 hover:border-accent"
              >
                <Icon size={20} className="text-accent" aria-hidden />
                <span className="mt-3 font-medium transition-colors group-hover:text-accent">
                  {label}
                </span>
                <span className="mt-0.5 break-all text-sm text-muted">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
