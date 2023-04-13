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
};

module.exports = nextConfig;
