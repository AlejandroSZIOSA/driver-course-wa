/** @type {import('next').NextConfig} */
const nextConfig = {
  /* add new rule acept images from sanity */
  images: {
    domains: ["cdn.sanity.io"], // ✅ Allow Sanity images
  },
};

export default nextConfig;
