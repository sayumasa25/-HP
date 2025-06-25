/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.example.com"],
  },
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
};

export default nextConfig;
