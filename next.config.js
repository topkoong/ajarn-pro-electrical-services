/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: dev ? '' : '/ajarn-pro-electrical-services',
};

module.exports = nextConfig;
