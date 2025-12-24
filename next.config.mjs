/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  // Si tienes imágenes, puede que necesites:
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: "re_THmtBgRy_Ak26PKQ6aNiAGwKTQeeuekgS",
  },
  eslint: {
  ignoreDuringBuilds: true,
},
};

export default nextConfig;
