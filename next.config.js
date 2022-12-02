/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pixels.com"], //here you will add the paths for images
  },
};

module.exports = nextConfig;
