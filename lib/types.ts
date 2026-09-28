// Model tipe untuk seluruh konten project & bug.
// Setiap section case study bersifat opsional: kalau datanya undefined,
// section-nya tidak dirender (lihat components/pages/CaseStudyPage.tsx).
//
// Field prosa bertipe Text (lihat lib/i18n.ts): boleh string biasa kalau sama
// di kedua bahasa, atau { en, id } kalau perlu terjemahan. Field yang memang
// tidak diterjemahkan (slug, tag, nama tool, kode, URL) tetap string.

import type { Text } from './i18n';

export type ProjectTag = 'Automation' | 'API' | 'Manual' | 'Performance';
export type ProjectLabel = 'Personal project' | 'Professional work';

export interface MetricChip {
  /** Angka atau simbol - tidak diterjemahkan. */
  value: string;
  label: Text;
}

export interface LinkItem {
  /** Nama tujuan (GitHub, Live demo) - dipakai juga untuk memilih ikon. */
  label: string;
  href: string;
}

/** Simpul pohon testing scope: satu modul berisi sejumlah skenario. */
export interface ScopeNode {
  module: Text;
  scenarios: Text[];
}

export interface CodeSnippet {
  /** Keterangan satu kalimat untuk snippet. */
  caption: Text;
  lang: string;
  code: string;
  /** true => tampilkan label "Illustrative example - not production code". */
  illustrative?: boolean;
}

/** Satu langkah pada diagram alur arsitektur. */
export interface FlowStep {
  label: Text;
  note?: Text;
}

export interface ResultTile {
  value: string;
  label: Text;
  note?: Text;
}

/**
 * Temuan yang menahan rilis - apa yang ditemukan dan apa akibatnya kalau lolos.
 *
 * Dipisahkan dari `results` karena bentuknya cerita, bukan angka. Untuk
 * pekerjaan profesional, isinya WAJIB digeneralisasi: ceritakan cacatnya dan
 * dampaknya, jangan menyebut modul atau versi produk kantor.
 */
export interface Finding {
  title: Text;
  body: Text;
  /** Yang akan terjadi kalau temuan ini lolos ke production. */
  impact: Text;
}

/** Data chart benchmark (grouped bars: dua stack per endpoint, per load level). */
export interface BenchmarkPoint {
  endpoint: string;
  go: number;
  node: number;
}
export interface BenchmarkLevel {
  label: Text;
  data: BenchmarkPoint[];
}
export interface BenchmarkChart {
  title: Text;
  unit: Text;
  levels: BenchmarkLevel[];
  caption?: Text;
}

export interface EvidenceItem {
  /** Path relatif di /public (tanpa basePath). Kosong => placeholder TODO. */
  src?: string;
  alt: Text;
  caption: Text;
  kind?: 'image' | 'video';
  /**
   * Ukuran asli berkas, dipakai untuk aspect-ratio supaya halaman tidak
   * bergeser saat gambar selesai dimuat. Wajib diisi kalau `src` ada.
   */
  width?: number;
  height?: number;
  /** Pesan TODO ketika file belum ada (hanya tampil di dev). */
  todo?: Text;
}

export interface Project {
  slug: string;
  title: Text;
  subtitle: Text;
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
  overview?: Text[];
  objective?: Text;
  scope?: ScopeNode[];
  strategy?: Text[];
  /** Blok khusus benchmark (go-vs-node). */
  benchmarkDesign?: Text[];
  measurementIntegrity?: Text;
  architecture?: FlowStep[];
  snippets?: CodeSnippet[];
  results?: ResultTile[];
  /** Temuan yang menahan rilis - lihat interface Finding. */
  findings?: Finding[];
  benchmarkChart?: BenchmarkChart;
  evidence?: EvidenceItem[];
}

// ---- Bug hunting (draft) ----

export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';

export interface Bug {
  id: string;
  title: Text;
  severity: Severity;
  type: Text;
  context: Text;
  steps: Text[];
  expected: Text;
  actual: Text;
  investigation: Text;
  evidence: EvidenceItem[];
  status: Text;
}
