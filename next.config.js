/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  experimental: {},
  eslint: {
    dirs: ['app'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
