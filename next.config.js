const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["info", "error"],
    },
  },
  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
      preventFullImport: true,
    },
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
};

module.exports = nextConfig;
