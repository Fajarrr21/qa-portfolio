import type { Project } from './types';
import { orangehrm } from '@/content/projects/orangehrm';
import { cardsSchoolV3 } from '@/content/projects/cards-school-v3';
import { goVsNode } from '@/content/projects/go-vs-node';
import { ecommerce } from '@/content/projects/ecommerce';
import { bugHunting } from '@/content/projects/bug-hunting';
import { parabank } from '@/content/projects/parabank';

// Registrasi project. Menambah project baru = tambah satu file lalu daftarkan di sini.
const ALL: Project[] = [parabank, orangehrm, cardsSchoolV3, goVsNode, ecommerce, bugHunting];

/** Di dev semua project tampil; di production (build) draft disembunyikan. */
export const isDev = process.env.NODE_ENV !== 'production';

function visible(p: Project): boolean {
  return isDev || !p.draft;
}

/** Semua project yang boleh tampil, terurut. */
export function getProjects(): Project[] {
  return ALL.filter(visible).sort((a, b) => a.order - b.order);
}

/** Project untuk Featured work di Home. */
export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}

/** Ambil satu project by slug (menghormati aturan draft). */
export function getProject(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

/** Slug untuk generateStaticParams. */
export function getProjectSlugs(): string[] {
  return getProjects().map((p) => p.slug);
}
