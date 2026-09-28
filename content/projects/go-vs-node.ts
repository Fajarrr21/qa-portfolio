import type { Project } from '@/lib/types';

// Sumber: repo publik github.com/Fajarrr21/go-vs-node-benchmark.
// Semua angka diambil dari reports/BENCHMARK_REPORT.md dan k6/results/*.json.
// Chart RPS dibolehkan karena raw data tersedia di repo (brief §6).
//
// REVIEW(fajar): string `id:` adalah terjemahan dari versi Inggris. Tidak ada
// angka yang diubah; nama endpoint dan nama tool dibiarkan apa adanya.

export const goVsNode: Project = {
  slug: 'go-vs-node',
  title: 'Go vs Node.js Load-Testing Benchmark',
  subtitle: {
    en: 'A controlled k6 throughput & latency study',
    id: 'Studi throughput & latency terkontrol dengan k6',
  },
  label: 'Personal project',
  tags: ['Performance'],
  featured: true,
  order: 3,
  techStack: [
    'k6',
    'Docker Compose',
    'Go 1.24 (net/http)',
    'Node 20 (Express 4)',
    'PostgreSQL 16',
    'Redis 7',
  ],
  metrics: [
    { value: '712,788', label: { en: 'Requests', id: 'Request' } },
    { value: '16', label: { en: 'Runs', id: 'Eksekusi' } },
    { value: '0.00%', label: { en: 'HTTP failures', id: 'Kegagalan HTTP' } },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/go-vs-node-benchmark' },
    { label: 'Live Dashboard', href: 'https://fajarrr21.github.io/go-vs-node-benchmark/dashboard/' },
  ],
  // REVIEW(fajar): overview disusun dari benchmark report.
  overview: [
    {
      en: 'A controlled benchmark comparing a Go and a Node.js backend behind identical endpoints, database, and cache. The goal is not to crown a winner but to see how the performance gap shifts as load increases fivefold.',
      id: 'Benchmark terkontrol yang membandingkan backend Go dan Node.js di balik endpoint, database, dan cache yang identik. Tujuannya bukan mencari pemenang, melainkan melihat bagaimana selisih performanya bergeser saat beban naik lima kali lipat.',
    },
    {
      en: 'Both stacks are driven at two concurrency levels - 20 and 100 virtual users - against four endpoints chosen to isolate CPU, database, and cache behaviour. Across every endpoint and both load levels, Go leads on throughput by 1.19× to 1.65×, and the ordering never reverses.',
      id: 'Kedua stack dibebani pada dua tingkat konkurensi - 20 dan 100 virtual user - terhadap empat endpoint yang dipilih untuk mengisolasi perilaku CPU, database, dan cache. Di seluruh endpoint dan kedua tingkat beban, Go unggul pada throughput sebesar 1,19× sampai 1,65×, dan urutannya tidak pernah berbalik.',
    },
    {
      en: 'I ran this in July 2026, the same month I took the k6 load-testing class at BuildWithAngga - the benchmark is where that material got applied to a real question rather than a course exercise.',
      id: 'Benchmark ini saya jalankan pada Juli 2026, bulan yang sama dengan kelas load testing k6 di BuildWithAngga - di sinilah materinya saya pakai untuk menjawab pertanyaan nyata, bukan sekadar latihan kelas.',
    },
  ],
  objective: {
    en: 'Measure throughput and latency of equivalent Go and Node.js services under identical conditions, and observe how the gap changes when load rises from 20 to 100 virtual users.',
    id: 'Mengukur throughput dan latency layanan Go dan Node.js yang setara dalam kondisi identik, lalu mengamati bagaimana selisihnya berubah saat beban naik dari 20 ke 100 virtual user.',
  },
  benchmarkDesign: [
    {
      en: '4 endpoints × 2 stacks × 2 load levels = 16 runs.',
      id: '4 endpoint × 2 stack × 2 tingkat beban = 16 eksekusi.',
    },
    {
      en: 'A single, shared PostgreSQL 16 (10,000 rows) and Redis 7 - one instance used by both stacks, so neither gets a more favourable environment.',
      id: 'Satu PostgreSQL 16 (10.000 baris) dan Redis 7 yang dipakai bersama - satu instance untuk kedua stack, supaya tidak ada yang dapat lingkungan lebih menguntungkan.',
    },
    {
      en: 'Identical SQL (character for character), LIMIT 100, DB pool 25, Redis pool 25, and the same cache key & TTL on both sides.',
      id: 'SQL yang identik (sama persis karakter demi karakter), LIMIT 100, DB pool 25, Redis pool 25, serta cache key & TTL yang sama di kedua sisi.',
    },
    {
      en: 'The same k6 script runs every combination; the load level is set through an environment variable, never by editing the file.',
      id: 'Script k6 yang sama menjalankan semua kombinasi; tingkat beban diatur lewat environment variable, bukan dengan mengubah isi file.',
    },
    {
      en: 'constant-vus executor, 30 seconds per run, with thresholds p95 < 500 ms, http_req_failed < 1%, and checks > 99%.',
      id: 'Executor constant-vus, 30 detik per eksekusi, dengan threshold p95 < 500 ms, http_req_failed < 1%, dan checks > 99%.',
    },
  ],
  measurementIntegrity: {
    en: 'At 100 VU, Node unexpectedly recorded a lower p95 latency than Go on both database endpoints. Before treating that as a result, I checked where the time was spent: on /products the off-server portion of the request (p95 total minus server-side waiting) was ~34 ms for Go against ~1.27 ms for Node - nearly 27×. A 27% difference in transferred data (258 MB vs 203 MB) cannot explain a 27× difference in time, which points to the load generator rather than the application. Because k6 and both apps shared a single 8 GB laptop, that finding was withheld until it can be re-run with the load generator on a separate machine.',
    id: 'Pada 100 VU, Node secara tidak terduga mencatat p95 latency lebih rendah daripada Go di kedua endpoint database. Sebelum menganggapnya sebagai hasil, saya memeriksa ke mana waktunya habis: pada /products, bagian request di luar server (p95 total dikurangi waktu tunggu di sisi server) sekitar 34 ms untuk Go berbanding sekitar 1,27 ms untuk Node - hampir 27×. Selisih data terkirim sebesar 27% (258 MB vs 203 MB) tidak bisa menjelaskan selisih waktu 27×, sehingga penyebabnya lebih mengarah ke load generator, bukan ke aplikasinya. Karena k6 dan kedua aplikasi berbagi satu laptop 8 GB, temuan itu saya tahan dulu sampai bisa diulang dengan load generator di mesin terpisah.',
  },
  scope: [
    {
      module: { en: 'Endpoints under test', id: 'Endpoint yang diuji' },
      scenarios: [
        {
          en: '/hello - pure CPU, no I/O (HTTP-handling baseline)',
          id: '/hello - murni CPU, tanpa I/O (baseline penanganan HTTP)',
        },
        {
          en: '/products - light database query (LIMIT 100)',
          id: '/products - query database ringan (LIMIT 100)',
        },
        {
          en: '/products-where-like - LIKE with a sequential scan (non-indexable)',
          id: '/products-where-like - LIKE dengan sequential scan (tidak bisa diindeks)',
        },
        {
          en: '/products-with-cache - Redis cache-aside',
          id: '/products-with-cache - cache-aside Redis',
        },
      ],
    },
    {
      module: { en: 'Load levels', id: 'Tingkat beban' },
      scenarios: [
        {
          en: '20 VU - workload character still dominates the gap',
          id: '20 VU - karakter beban kerja masih mendominasi selisihnya',
        },
        {
          en: '100 VU - endpoints converge to 1.19×–1.29× as shared resources saturate',
          id: '100 VU - selisih antar endpoint menyempit ke 1,19×–1,29× saat resource bersama jenuh',
        },
      ],
    },
  ],
  strategy: [
    {
      en: 'constant-vus executor, 30-second runs at 20 and 100 VU.',
      id: 'Executor constant-vus, eksekusi 30 detik pada 20 dan 100 VU.',
    },
    {
      en: 'Thresholds enforced by k6: p95 < 500 ms, http_req_failed < 1%, checks > 99%.',
      id: 'Threshold ditegakkan oleh k6: p95 < 500 ms, http_req_failed < 1%, checks > 99%.',
    },
    {
      en: 'Payload equivalence verified in absolute bytes so a smaller response cannot fake a speed win.',
      id: 'Kesetaraan payload diverifikasi dalam byte absolut supaya response yang lebih kecil tidak memalsukan kemenangan kecepatan.',
    },
    {
      en: 'k6 checks validate the body (count === 100) and the cache X-Cache: HIT header, not just status 200.',
      id: 'Check k6 memvalidasi isi body (count === 100) dan header cache X-Cache: HIT, bukan cuma status 200.',
    },
    {
      en: 'The Redis key is flushed before each cache run so a stale TTL cannot contaminate results.',
      id: 'Key Redis dihapus sebelum tiap eksekusi cache supaya TTL sisa tidak mencemari hasil.',
    },
  ],
  architecture: [
    {
      label: { en: 'k6 (container)', id: 'k6 (container)' },
      note: { en: 'constant-vus load', id: 'beban constant-vus' },
    },
    {
      label: 'go-api / node-api',
      note: { en: 'identical endpoints', id: 'endpoint identik' },
    },
    {
      label: 'PostgreSQL 16',
      note: { en: 'shared, 10,000 rows', id: 'dipakai bersama, 10.000 baris' },
    },
    {
      label: 'Redis 7',
      note: { en: 'shared cache-aside', id: 'cache-aside bersama' },
    },
  ],
  snippets: [
    {
      caption: {
        en: 'k6 checks assert the response body and cache state, not just the HTTP status.',
        id: 'Check k6 memeriksa isi response dan kondisi cache, bukan cuma status HTTP.',
      },
      lang: 'javascript',
      code: `export const options = {
  scenarios: { load: { executor: 'constant-vus', vus: 100, duration: '30s' } },
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
    checks: ['rate>0.99'],
  },
};

export default function () {
  const res = http.get(\`\${BASE_URL}/products\`);
  check(res, {
    'status 200': (r) => r.status === 200,
    'got 100 products': (r) => r.json().count === 100,
  });
}`,
    },
    {
      caption: {
        en: 'One script covers every combination; the stack and load level come from env vars.',
        id: 'Satu script menangani semua kombinasi; stack dan tingkat beban diambil dari env var.',
      },
      lang: 'bash',
      code: `docker run --rm -i --network bench \\
  -v "$PWD/k6:/scripts" grafana/k6 run \\
  -e BASE_URL=http://go-api:8080 -e STACK=go -e VUS=100 \\
  /scripts/scenarios/products.js`,
    },
    {
      caption: {
        en: 'Compose healthchecks keep apps from starting before the database is ready.',
        id: 'Healthcheck Compose mencegah aplikasi start sebelum database siap.',
      },
      lang: 'bash',
      code: `postgres:
  image: postgres:16-alpine
  healthcheck:
    test: ["CMD-SHELL", "pg_isready -U benchuser -d benchdb"]
    interval: 5s
    timeout: 3s
    retries: 10

go-api:
  build: ./go-api
  depends_on:
    postgres: { condition: service_healthy }`,
    },
    {
      caption: {
        en: 'The cache key is deleted before each cache run so a leftover TTL cannot skew it.',
        id: 'Cache key dihapus sebelum tiap eksekusi cache supaya sisa TTL tidak membiaskan hasil.',
      },
      lang: 'bash',
      code: `docker exec bench-redis redis-cli DEL products:top100`,
    },
  ],
  benchmarkChart: {
    title: {
      en: 'Throughput (requests / second)',
      id: 'Throughput (request / detik)',
    },
    unit: 'RPS',
    caption: {
      en: 'Requests per second per endpoint, Go vs Node.js. Go leads on throughput at every endpoint and both load levels. Source: k6/results/*.json.',
      id: 'Request per detik per endpoint, Go vs Node.js. Go unggul pada throughput di semua endpoint dan kedua tingkat beban. Sumber: k6/results/*.json.',
    },
    levels: [
      {
        label: '20 VU',
        data: [
          { endpoint: '/hello', go: 3984.1, node: 2407.6 },
          { endpoint: '/products', go: 978.8, node: 725.6 },
          { endpoint: '/products-where-like', go: 554.0, node: 392.6 },
          { endpoint: '/products-with-cache', go: 1156.9, node: 905.6 },
        ],
      },
      {
        label: '100 VU',
        data: [
          { endpoint: '/hello', go: 3638.1, node: 2843.6 },
          { endpoint: '/products', go: 1113.1, node: 861.4 },
          { endpoint: '/products-where-like', go: 577.3, node: 447.2 },
          { endpoint: '/products-with-cache', go: 1707.1, node: 1439.9 },
        ],
      },
    ],
  },
  results: [
    {
      value: '712,788',
      label: { en: 'Requests', id: 'Request' },
      note: { en: 'across 16 runs', id: 'dari 16 eksekusi' },
    },
    { value: '0.00%', label: { en: 'HTTP failures', id: 'Kegagalan HTTP' } },
    {
      value: '100%',
      label: { en: 'Functional checks passed', id: 'Check fungsional lolos' },
    },
    {
      value: '1.19–1.65×',
      label: { en: 'Go throughput lead', id: 'Keunggulan throughput Go' },
    },
    {
      value: '413.36 ms',
      label: { en: 'Highest p95', id: 'p95 tertinggi' },
      note: { en: 'below the 500 ms threshold', id: 'di bawah threshold 500 ms' },
    },
  ],
  evidence: [
    {
      src: '/evidence/go-vs-node-dashboard.png',
      width: 2880,
      height: 1800,
      alt: {
        en: "Benchmark dashboard chart: Go's throughput lead over Node.js per endpoint, at 20 VU and at 100 VU",
        id: 'Chart dashboard benchmark: keunggulan throughput Go atas Node.js per endpoint, pada 20 VU dan 100 VU',
      },
      caption: {
        en: "Throughput ratio, Go over Node.js. At 20 VU the gap swings by workload (1.65x down to 1.28x); at 100 VU every endpoint lands in a 1.19x-1.29x band. The lead narrows as load rises - the finding the raw throughput numbers alone do not show.",
        id: 'Rasio throughput Go terhadap Node.js. Pada 20 VU selisihnya berayun tergantung workload (1,65x sampai 1,28x); pada 100 VU seluruh endpoint masuk rentang 1,19x-1,29x. Keunggulannya menyempit saat beban naik - temuan yang tidak terlihat dari angka throughput mentah saja.',
      },
    },
  ],
};
