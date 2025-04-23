// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {unoptimized: true},
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static image export
  },
  basePath: process.env.BASE_PATH || '', // Useful if deploying under a subpath
  assetPrefix: process.env.BASE_PATH || '', // Same as basePath
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
