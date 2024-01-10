/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/dt8jlauor/image/upload/*",
      },
    ],
  },
};

module.exports = nextConfig;
