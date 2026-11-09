/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to /out,
  // which works on Vercel, Netlify or any cPanel host.
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
