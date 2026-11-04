/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true }
  // Kein trailingSlash: bestehende Links haben keinen abschließenden Schrägstrich.
};

export default nextConfig;
