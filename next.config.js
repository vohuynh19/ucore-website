const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
      },
      {
        protocol: "https",
        hostname: "vicodemy.com",
      },
    ],
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
