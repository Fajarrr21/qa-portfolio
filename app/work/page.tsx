import type { Metadata } from 'next';
import { getProjects } from '@/lib/projects';
import { Container, SectionHeading } from '@/components/primitives';
import { WorkFilter } from '@/components/WorkFilter';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected QA projects: automation, testing, bug investigation, and performance work.',
};

export default function WorkPage() {
  const projects = getProjects();

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Selected QA projects"
          title="Work"
          description="Automation, testing, bug investigation, and performance work."
        />
        <div className="mt-10">
          <WorkFilter projects={projects} />
        </div>
      </Container>
    </section>
  );
}
