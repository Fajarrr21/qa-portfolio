import { Github, Linkedin, Mail, ClipboardList, Workflow, Webhook, Gauge } from 'lucide-react';
import { site } from '@/content/site';
import { getFeaturedProjects } from '@/lib/projects';
import {
  Container,
  SectionHeading,
  ButtonLink,
  ButtonExternal,
  ArrowLink,
} from '@/components/primitives';
import { ProjectCard } from '@/components/ProjectCard';

const skillIcons = [ClipboardList, Workflow, Webhook, Gauge];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* 1. Hero */}
      <section className="section">
        <Container>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {site.role}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-text sm:text-2xl">{site.tagline}</p>
          <p className="mt-2 text-muted">{site.subline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/work">Explore my work</ButtonLink>
            <ButtonExternal href={site.links.github}>
              <Github size={16} />
              GitHub
            </ButtonExternal>
          </div>
        </Container>
      </section>

      {/* 2. Stats */}
      <section className="border-y border-border bg-surface py-12">
        <Container>
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 3. What I do */}
      <section className="section">
        <Container>
          <SectionHeading eyebrow="What I do" title="Testing across the stack" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.skills.map((card, i) => {
              const Icon = skillIcons[i] ?? ClipboardList;
              return (
                <div key={card.title} className="rounded border border-border bg-surface p-6">
                  <Icon size={20} className="text-accent" aria-hidden />
                  <h3 className="mt-4 font-semibold">{card.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {card.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Featured work */}
      <section className="section pt-0">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured work" title="Selected case studies" />
            <div className="hidden sm:block">
              <ArrowLink href="/work">View all work</ArrowLink>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <ArrowLink href="/work">View all work</ArrowLink>
          </div>
        </Container>
      </section>

      {/* 5. Experience teaser */}
      <section className="border-t border-border bg-surface py-16">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">{site.experience.role}</h2>
              <p className="mt-1 text-sm font-medium text-accent">
                {site.experience.org} · {site.experience.period}
              </p>
              <p className="mt-3 text-muted">{site.experience.context}</p>
            </div>
            <div className="shrink-0">
              <ArrowLink href="/about#experience">View experience</ArrowLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA */}
      <section className="section">
        <Container>
          <div className="rounded border border-border bg-surface p-8 sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Have software that needs breaking?
            </h2>
            <p className="mt-2 text-lg text-muted">Let&apos;s talk.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonExternal href={site.links.linkedin} variant="primary">
                <Linkedin size={16} />
                LinkedIn
              </ButtonExternal>
              <ButtonExternal href={site.links.github}>
                <Github size={16} />
                GitHub
              </ButtonExternal>
              <ButtonExternal href={`mailto:${site.links.email}`}>
                <Mail size={16} />
                Email
              </ButtonExternal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
