/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable experimental features
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  webpack: (config, { isServer }) => {
    // Force clear module cache
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig; 