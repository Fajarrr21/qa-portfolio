// Model tipe untuk seluruh konten project & bug.
// Setiap section case study bersifat opsional: kalau datanya undefined,
// section-nya tidak dirender (lihat app/work/[slug]/page.tsx).

export type ProjectTag = 'Automation' | 'API' | 'Manual' | 'Performance';
export type ProjectLabel = 'Personal project' | 'Professional work';

export interface MetricChip {
  value: string;
  label: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

/** Simpul pohon testing scope: satu modul berisi sejumlah skenario. */
export interface ScopeNode {
  module: string;
  scenarios: string[];
}

export interface CodeSnippet {
  /** Keterangan satu kalimat untuk snippet. */
  caption: string;
  lang: string;
  code: string;
  /** true => tampilkan label "Illustrative example — not production code". */
  illustrative?: boolean;
}

/** Satu langkah pada diagram alur arsitektur. */
export interface FlowStep {
  label: string;
  note?: string;
}

export interface ResultTile {
  value: string;
  label: string;
  note?: string;
}

/** Data chart benchmark (grouped bars: dua stack per endpoint, per load level). */
export interface BenchmarkPoint {
  endpoint: string;
  go: number;
  node: number;
}
export interface BenchmarkLevel {
  label: string;
  data: BenchmarkPoint[];
}
export interface BenchmarkChart {
  title: string;
  unit: string;
  levels: BenchmarkLevel[];
  caption?: string;
}

export interface EvidenceItem {
  /** Path relatif di /public (tanpa basePath). Kosong => placeholder TODO. */
  src?: string;
  alt: string;
  caption: string;
  kind?: 'image' | 'video';
  /** Pesan TODO ketika file belum ada (hanya tampil di dev). */
  todo?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  label: ProjectLabel;
  /** Organisasi untuk professional work, mis. "PT. Cazh Teknologi Inovasi". */
  professionalOrg?: string;
  tags: ProjectTag[];
  /** Disembunyikan & tidak di-build di production; tetap tampil di next dev. */
  draft?: boolean;
  /** Muncul di section Featured work di Home. */
  featured?: boolean;
  /** Urutan tampilan (Home & Work). */
  order: number;
  techStack: string[];
  metrics: MetricChip[];
  links: LinkItem[];
  overview?: string[];
  objective?: string;
  scope?: ScopeNode[];
  strategy?: string[];
  /** Blok khusus benchmark (go-vs-node). */
  benchmarkDesign?: string[];
  measurementIntegrity?: string;
  architecture?: FlowStep[];
  snippets?: CodeSnippet[];
  results?: ResultTile[];
  benchmarkChart?: BenchmarkChart;
  evidence?: EvidenceItem[];
}

// ---- Bug hunting (draft) ----

export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';

export interface Bug {
  id: string;
  title: string;
  severity: Severity;
  type: string;
  context: string;
  steps: string[];
  expected: string;
  actual: string;
  investigation: string;
  evidence: EvidenceItem[];
  status: string;
}
