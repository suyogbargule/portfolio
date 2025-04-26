/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
