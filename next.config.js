/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    domains: ["s.pngkit.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
