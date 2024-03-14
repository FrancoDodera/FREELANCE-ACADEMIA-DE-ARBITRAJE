/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Link",
            value: "<link rel='shortcut icon' href='./favicon.ico' />",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
