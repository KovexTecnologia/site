import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  // Deploys de preview da Vercel não entram no índice do Google.
  if (process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development') {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
