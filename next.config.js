/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Redirect old image paths to new ones
      {
        source: '/images/blog/:path*.(jpg|jpeg|png|gif|webp)',
        has: [
          {
            type: 'header',
            key: 'accept',
            value: '.*image.*',
          },
        ],
        destination: '/images/blog/Furniture_Moving_Process.jpeg',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // Handle missing blog images
      {
        source: '/images/blog/furniture-insurance-moving.jpg',
        destination: '/images/blog/Furniture_Insurance_During_Moving.jpeg',
      },
      {
        source: '/images/blog/safely-disassemble-assemble-furniture.jpg',
        destination: '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
      },
      {
        source: '/images/blog/unwanted-items-solutions.jpg',
        destination: '/images/blog/What_to_Do_with_Your_Unwanted_Items_Before_Moving_Furniture.jpeg',
      },
      {
        source: '/images/blog/moving-day-checklist.jpg',
        destination: '/images/blog/Ultimate_Checklist_Before_Moving_Day.jpeg',
      },
      {
        source: '/images/blog/technology-furniture-moving.jpg',
        destination: '/images/blog/Does_Technology_Contribute_to_Improving_the_Furniture_Moving_Experience.jpeg',
      },
      // Add more rewrites for common missing images
      {
        source: '/images/blog/:slug*.jpg',
        destination: '/images/blog/Furniture_Moving_Process.jpeg',
      },
    ];
  },
  // Handle trailing slashes
  trailingSlash: false,
  // Enable static export if needed
  output: 'standalone',
}

module.exports = nextConfig