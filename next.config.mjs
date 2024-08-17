/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.serebii.net',
        port: '',
        pathname: '/pokemongo/pokemon/**',
      },
    ],
  },

};

export default nextConfig;
