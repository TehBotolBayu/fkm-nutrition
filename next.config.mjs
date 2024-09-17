/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.ctfassets.net',
      port: '',
      pathname: '/**'
    }]
  },
};

export default nextConfig;
