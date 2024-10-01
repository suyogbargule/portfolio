/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
};

module.exports = nextConfig;

