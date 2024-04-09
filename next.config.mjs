/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/:view*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

export default nextConfig;
