/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    modern: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
