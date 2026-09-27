import { ui } from '@/content/ui';
import { type Locale, localePath, t } from '@/lib/i18n';
import { Container, ButtonLink } from '@/components/primitives';

export function NotFoundPage({ lang }: { lang: Locale }) {
  return (
    <section className="section">
      <Container>
        <p className="text-sm font-medium uppercase tracking-wider text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t(ui.notFound.title, lang)}
        </h1>
        <p className="mt-3 max-w-md text-muted">{t(ui.notFound.description, lang)}</p>
        <div className="mt-8">
          <ButtonLink href={localePath('/', lang)}>{t(ui.notFound.back, lang)}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
