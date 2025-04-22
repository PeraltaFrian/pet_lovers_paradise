/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ui-avatars.com',
            hostname: 'cdn2.thecatapi.com',
          },
        ],
      },
    };
    

export default nextConfig;