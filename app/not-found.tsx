import { Container, ButtonLink } from '@/components/primitives';

export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <p className="text-sm font-medium uppercase tracking-wider text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
