// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // // Allow LAN devices to access your dev server safely
    allowedDevOrigins: [
      'http://192.168.0.198:3000', // your local network IP and port
    ],
  },
};

module.exports = nextConfig;
