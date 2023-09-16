/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["assets.example.com"], // for calling image from another host
  },
};

module.exports = nextConfig;
