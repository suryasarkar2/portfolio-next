/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to generate static HTML/CSS/JS
  images: {
    unoptimized: true, // Required for static export unless using a loader
  },
};

export default nextConfig;