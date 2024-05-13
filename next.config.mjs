/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
            remotePatterns: [
                {
                  protocol: 'https',
                  hostname: 'https://assets.aceternity.com/demos/',
                  port: 'localhost:3000',
                  pathname: '/',
                },
              ],
        },
};

  
export default nextConfig;
