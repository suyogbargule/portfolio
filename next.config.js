/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",  // Default to "" if not set
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
};

module.exports = nextConfig;

