import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  // Deploys de preview da Vercel nao entram no indice do Google.
  const isPreview =
    process.env.VERCEL_ENV === "preview" ||
    process.env.VERCEL_ENV === "development";

  if (isPreview) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
