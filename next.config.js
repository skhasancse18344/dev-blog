const withImages = require("next-images");

module.exports = withImages({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Other Next.js configuration options...
});
