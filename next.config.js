/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

// next.config.js
module.exports = {
  experimental: {
    serverComponents: true,
  },
};

module.exports = nextConfig;
