const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
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
