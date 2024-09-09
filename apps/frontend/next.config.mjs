/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https' || 'http',
                hostname: 'res.cloudinary.com',
            }
        ]
    }
};

export default nextConfig;
