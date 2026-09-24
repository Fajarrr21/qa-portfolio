/**
 * Static export config.
 * basePath & assetPrefix diambil dari env var NEXT_PUBLIC_BASE_PATH supaya
 * bisa pindah host (GitHub Pages -> Vercel/custom domain) tanpa ubah kode.
 * Default: /qa-portfolio (GitHub Pages: fajarrr21.github.io/qa-portfolio).
 * Set NEXT_PUBLIC_BASE_PATH="" untuk root domain.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/qa-portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
