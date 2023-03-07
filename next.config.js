/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: true,
  experimental: {
    appDir: true,
  },
  distDir: "build",
};

module.exports = nextConfig;
