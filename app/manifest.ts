import type { MetadataRoute } from 'next'
import { SITE_NAME } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Kovex',
    start_url: '/',
    display: 'browser',
    background_color: '#0A121D',
    theme_color: '#0A121D',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
