/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
