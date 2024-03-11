/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'secure.gravatar.com',
            },
            {
              protocol: 'https',
              hostname: 'bdevs.net',
            },
          ],
    }
};

export default nextConfig;
