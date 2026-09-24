import type { Project } from '@/lib/types';

// Sumber: repo publik github.com/Fajarrr21/go-vs-node-benchmark.
// Semua angka diambil dari reports/BENCHMARK_REPORT.md dan k6/results/*.json.
// Chart RPS dibolehkan karena raw data tersedia di repo (brief §6).

export const goVsNode: Project = {
  slug: 'go-vs-node',
  title: 'Go vs Node.js Load-Testing Benchmark',
  subtitle: 'A controlled k6 throughput & latency study',
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
    { value: '712,788', label: 'Requests' },
    { value: '16', label: 'Runs' },
    { value: '0.00%', label: 'HTTP failures' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/Fajarrr21/go-vs-node-benchmark' },
    { label: 'Live Dashboard', href: 'https://fajarrr21.github.io/go-vs-node-benchmark/dashboard/' },
  ],
  // REVIEW(fajar): overview disusun dari benchmark report.
  overview: [
    'A controlled benchmark comparing a Go and a Node.js backend behind identical endpoints, database, and cache. The goal is not to crown a winner but to see how the performance gap shifts as load increases fivefold.',
    'Both stacks are driven at two concurrency levels - 20 and 100 virtual users - against four endpoints chosen to isolate CPU, database, and cache behaviour. Across every endpoint and both load levels, Go leads on throughput by 1.19× to 1.65×, and the ordering never reverses.',
  ],
  objective:
    'Measure throughput and latency of equivalent Go and Node.js services under identical conditions, and observe how the gap changes when load rises from 20 to 100 virtual users.',
  benchmarkDesign: [
    '4 endpoints × 2 stacks × 2 load levels = 16 runs.',
    'A single, shared PostgreSQL 16 (10,000 rows) and Redis 7 - one instance used by both stacks, so neither gets a more favourable environment.',
    'Identical SQL (character for character), LIMIT 100, DB pool 25, Redis pool 25, and the same cache key & TTL on both sides.',
    'The same k6 script runs every combination; the load level is set through an environment variable, never by editing the file.',
    'constant-vus executor, 30 seconds per run, with thresholds p95 < 500 ms, http_req_failed < 1%, and checks > 99%.',
  ],
  measurementIntegrity:
    'At 100 VU, Node unexpectedly recorded a lower p95 latency than Go on both database endpoints. Before treating that as a result, I checked where the time was spent: on /products the off-server portion of the request (p95 total minus server-side waiting) was ~34 ms for Go against ~1.27 ms for Node - nearly 27×. A 27% difference in transferred data (258 MB vs 203 MB) cannot explain a 27× difference in time, which points to the load generator rather than the application. Because k6 and both apps shared a single 8 GB laptop, that finding was withheld until it can be re-run with the load generator on a separate machine.',
  scope: [
    {
      module: 'Endpoints under test',
      scenarios: [
        '/hello - pure CPU, no I/O (HTTP-handling baseline)',
        '/products - light database query (LIMIT 100)',
        '/products-where-like - LIKE with a sequential scan (non-indexable)',
        '/products-with-cache - Redis cache-aside',
      ],
    },
    {
      module: 'Load levels',
      scenarios: [
        '20 VU - workload character still dominates the gap',
        '100 VU - endpoints converge to 1.19×–1.29× as shared resources saturate',
      ],
    },
  ],
  strategy: [
    'constant-vus executor, 30-second runs at 20 and 100 VU.',
    'Thresholds enforced by k6: p95 < 500 ms, http_req_failed < 1%, checks > 99%.',
    'Payload equivalence verified in absolute bytes so a smaller response cannot fake a speed win.',
    'k6 checks validate the body (count === 100) and the cache X-Cache: HIT header, not just status 200.',
    'The Redis key is flushed before each cache run so a stale TTL cannot contaminate results.',
  ],
  architecture: [
    { label: 'k6 (container)', note: 'constant-vus load' },
    { label: 'go-api / node-api', note: 'identical endpoints' },
    { label: 'PostgreSQL 16', note: 'shared, 10,000 rows' },
    { label: 'Redis 7', note: 'shared cache-aside' },
  ],
  snippets: [
    {
      caption: 'k6 checks assert the response body and cache state, not just the HTTP status.',
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
      caption: 'One script covers every combination; the stack and load level come from env vars.',
      lang: 'bash',
      code: `docker run --rm -i --network bench \\
  -v "$PWD/k6:/scripts" grafana/k6 run \\
  -e BASE_URL=http://go-api:8080 -e STACK=go -e VUS=100 \\
  /scripts/scenarios/products.js`,
    },
    {
      caption: 'Compose healthchecks keep apps from starting before the database is ready.',
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
      caption: 'The cache key is deleted before each cache run so a leftover TTL cannot skew it.',
      lang: 'bash',
      code: `docker exec bench-redis redis-cli DEL products:top100`,
    },
  ],
  benchmarkChart: {
    title: 'Throughput (requests / second)',
    unit: 'RPS',
    caption:
      'Requests per second per endpoint, Go vs Node.js. Go leads on throughput at every endpoint and both load levels. Source: k6/results/*.json.',
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
    { value: '712,788', label: 'Requests', note: 'across 16 runs' },
    { value: '0.00%', label: 'HTTP failures' },
    { value: '100%', label: 'Functional checks passed' },
    { value: '1.19–1.65×', label: 'Go throughput lead' },
    { value: '413.36 ms', label: 'Highest p95', note: 'below the 500 ms threshold' },
  ],
  evidence: [
    {
      alt: 'Interactive benchmark dashboard for the Go vs Node.js study',
      caption: 'Interactive dashboard - see the live version linked below.',
      todo: 'TODO(fajar): add a screenshot of the dashboard at public/evidence/go-vs-node-dashboard.png',
    },
  ],
};
