/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["images.immediate.co.uk"], // for calling image from another host
  },
};

module.exports = nextConfig;
