// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {

    allowedDevOrigins: [
      'http://192.168.0.198:3000',
    ],
  },
};

module.exports = nextConfig;
