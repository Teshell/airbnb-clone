/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },

  env: {
    mapbox_key:
      "pk.eyJ1IjoidGVzaGVsbCIsImEiOiJjbDE3bXlteTcxaWc1M2ltdGZoa2d2dzdtIn0.qBbEqy3bbrWTclpHXhrE9A",
  },
};

module.exports = nextConfig;
