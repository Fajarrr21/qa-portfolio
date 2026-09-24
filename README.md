# qa-portfolio

Portfolio website QA Engineer untuk **Fajar Ardiansyah**.

Next.js (App Router) + TypeScript + Tailwind CSS, di-*static export* dan di-deploy ke GitHub Pages lewat GitHub Actions.

**Live:** `https://fajarardians.my.id/` (custom domain, di-host GitHub Pages)

---

## Stack

- **Next.js 15** (App Router), `output: 'export'` (fully static).
- **TypeScript** + **Tailwind CSS** (token warna sebagai CSS variable).
- **Inter** via `next/font`.
- **lucide-react** (ikon), **shiki** (syntax highlight code snippet, dijalankan saat build).
- Tanpa UI kit berat, tanpa library animasi, tanpa chart library (chart benchmark dibuat manual dari HTML/CSS).

## Menjalankan lokal

```bash
npm install
npm run dev      # http://localhost:3000
```

> `basePath` default sekarang kosong (custom domain di root), jadi dev jalan di `http://localhost:3000`.

Build static:

```bash
npm run build    # output ke folder out/
```

Preview hasil build (opsional, contoh pakai `serve`):

```bash
npx serve out
```

### Pindah host / domain

`basePath` & `assetPrefix` diatur lewat env var `NEXT_PUBLIC_BASE_PATH` (lihat `next.config.mjs`).

- Custom domain di root (default sekarang): `NEXT_PUBLIC_BASE_PATH=` (kosong)
- GitHub Pages project path: `NEXT_PUBLIC_BASE_PATH=/qa-portfolio`

## Deploy (custom domain: fajarardians.my.id)

Workflow `.github/workflows/deploy.yml` build + deploy otomatis setiap push ke `main`.

Setup satu kali:

1. **GitHub** → repo Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → **Custom domain**: isi `fajarardians.my.id` (file `public/CNAME` sudah menyimpannya).
3. **DNS di Exabytes** (domain apex → GitHub Pages), tambahkan 4 record A ke root (`@`):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   (opsional IPv6/AAAA: `2606:50c0:8000::153` … `::8003::153`)
4. Setelah DNS propagate, centang **Enforce HTTPS** (sertifikat otomatis dari GitHub).

## Struktur

```
app/                 # halaman (App Router)
  page.tsx           # Home
  work/              # daftar project + filter
  work/[slug]/       # template case study (generateStaticParams)
  about/  contact/   # About, Contact
  not-found.tsx      # 404
components/           # komponen UI + komponen case study
content/
  site.ts            # profil, link, stats, skills, experience, journey, tools
  projects/*.ts      # 1 file = 1 Project (tambah project = tambah 1 file di sini)
  bugs/              # kosong; _example.ts = template bug
lib/                 # types, loader project, helper shiki & basePath
public/resume/       # PDF resume (EN & ID)
public/evidence/     # gambar/video evidence (lihat TODO di bawah)
```

### Menambah project baru

Buat satu file di `content/projects/<slug>.ts` yang meng-export objek bertipe `Project`, lalu daftarkan di `lib/projects.ts`. Set `draft: true` untuk menyembunyikannya di production (tetap tampil di `next dev`).

### Aturan konten

- Semua teks tinggal di `content/`, bukan di dalam komponen.
- Paragraf yang ditulis dari fakta ditandai komentar `// REVIEW(fajar)` - mohon dibaca ulang.
- Data yang belum tersedia ditandai `TODO(fajar): ...`.

---

## Konten yang perlu dilengkapi (TODO)

Semua fakta, angka, dan snippet di situs ini diambil dari resume (EN) dan dari repo publik
(`Automation-OrangeHRM`, `cypress-ui-api-automation`, `go-vs-node-benchmark`). Yang masih
perlu kamu lengkapi:

1. **Gambar/video evidence** (opsional). Placeholder hanya muncul di `next dev`, tidak di production.
   Taruh file di `public/evidence/` lalu isi `src` pada field `evidence` di file project terkait:
   - `content/projects/orangehrm.ts` → `public/evidence/orangehrm-report.png`
   - `content/projects/ecommerce.ts` → `public/evidence/ecommerce-report.png`
   - `content/projects/go-vs-node.ts` → `public/evidence/go-vs-node-dashboard.png`
2. **Paragraf ber-`REVIEW(fajar)`** di `content/site.ts` (About me) dan overview tiap project -
   silakan koreksi kalau ada yang kurang pas.
3. **`bug-hunting`** masih `draft: true` dan `content/bugs/` sengaja kosong. Untuk mengisi:
   salin `content/bugs/_example.ts`, isi field-nya, daftarkan di `content/bugs/index.ts`,
   lalu set `draft: false` di `content/projects/bug-hunting.ts`.
4. **Resume PDF** sudah tersalin ke `public/resume/`. Kalau ada versi terbaru, timpa file
   `Fajar-Ardiansyah-QA-Engineer-EN.pdf` dan `...-ID.pdf`.

## Catatan kerahasiaan (cards-school-v3)

Case study `cards-school-v3` adalah *professional work* (PT. Cazh Teknologi Inovasi). Sesuai izin & aturan:
tidak ada kode dari repo kantor, tidak ada URL/kredensial/endpoint internal, tidak ada data pengguna,
dan tidak ada screenshot aplikasi. Semua snippet di sana **ilustratif** (ditulis ulang generik) dan
diberi label `Illustrative example - not production code`. Automation suite dijalankan **lokal** (bukan CI).
