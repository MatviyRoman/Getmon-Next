/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: [
            '3201956.rg384161.web.hosting-test.net',
            'admin.getmon.pl',
            'admin.getmon.local',
            'example.com',
            'anotherdomain.com'
        ], // Add the domains you want to allow here
    },
};

export default nextConfig;