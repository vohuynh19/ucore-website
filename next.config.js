const { i18n } = require("./next-i18next.config");

// Set caching headers for all pages and API routes
const headers = async () => [
  {
    source: "/:path*",
    headers: [
      {
        key: "Cache-Control",
        value:
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600",
      },
    ],
  },
];

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  headers,
};

module.exports = nextConfig;
