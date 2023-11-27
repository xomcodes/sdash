/** @type {import('next').NextConfig} */
const { i18 } = require("./next-i18next.config");
const nextConfig = {
  i18n: {
    // List of locales you want to support
    locales: ["de", "zh-Hans", "en", "fr"],
    //  Your Default locale. Mine is English
    defaultLocale: "en",
  },

  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "afex-frontend-technical-challenge-api.onrender.com",
        port: "",
        pathname: "/logos/**",
      },
    ],
  },
};

module.exports = nextConfig;
