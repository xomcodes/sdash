/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // The locales you want to support in your app
    locales: ["ar", "en", "fr", "nl-NL"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
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
