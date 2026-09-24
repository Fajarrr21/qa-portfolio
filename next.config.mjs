/**
 * Static export config.
 * basePath & assetPrefix diambil dari env var NEXT_PUBLIC_BASE_PATH supaya
 * bisa pindah host tanpa ubah kode.
 * Default: '' (kosong) -> situs di root, untuk custom domain fajarardians.my.id.
 * Kalau balik ke GitHub Pages project path, set NEXT_PUBLIC_BASE_PATH="/qa-portfolio".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

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
