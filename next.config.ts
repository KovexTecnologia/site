import path from "node:path";

import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // evita que a Vercel infira a raiz do workspace pelo lockfile do usuario
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // kovex.com.br e o dominio principal; o antigo so redireciona.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?kovextecnologia\\.com\\.br" }],
        destination: "https://kovex.com.br/:path*",
        permanent: true,
      },
      // endereco da politica no site anterior
      { source: "/politica-de-privacidade", destination: "/privacidade", permanent: true },
    ];
  },
};

export default nextConfig;
