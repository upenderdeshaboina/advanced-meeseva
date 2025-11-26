/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // enable App Router
  },
  srcDir: 'src', // tell Next.js your app is inside src/
};

module.exports = nextConfig;
