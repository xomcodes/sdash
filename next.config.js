/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "nl-NL", "chn"],

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
