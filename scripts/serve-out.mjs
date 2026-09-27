// Server statis kecil untuk menguji hasil export secara lokal.
// Meniru perilaku GitHub Pages: direktori disajikan dari index.html,
// path tak dikenal dilayani 404.html dengan status 404.
//
// Pakai: npm run build && node scripts/serve-out.mjs  (default port 4321)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, posix } from 'node:path';

const ROOT = 'out';
const PORT = Number(process.env.PORT ?? 4321);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

async function resolveFile(urlPath) {
  const raw = decodeURIComponent(urlPath.split('?')[0]);
  // posix.normalize + buang '..' supaya tidak bisa keluar dari folder out/.
  const clean = posix.normalize(raw).split('/').filter((s) => s !== '..').join('/');
  const candidates = raw.endsWith('/')
    ? [join(ROOT, clean, 'index.html')]
    : [join(ROOT, clean), join(ROOT, clean, 'index.html')];

  for (const candidate of candidates) {
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      // lanjut ke kandidat berikutnya
    }
  }
  return null;
}

createServer(async (req, res) => {
  const file = await resolveFile(req.url);

  if (!file) {
    const body = await readFile(join(ROOT, '404.html')).catch(() => 'Not found');
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    res.end(body);
    return;
  }

  const body = await readFile(file);
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
  res.end(body);
}).listen(PORT, () => {
  console.log(`serving ${ROOT} on http://localhost:${PORT}`);
});
