import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Semi_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { ReactNode } from 'react'
import { SiteJsonLd } from '@/components/JsonLd'
import { VidroDefs } from '@/components/VidroK'
import { COMPANY_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'
import './globals.css'

const barlow = Barlow({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-barlow-sc',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: COMPANY_NAME,
  category: 'technology',
  keywords: [
    'Kovex Tecnologia',
    'desenvolvimento de software sob medida',
    'desenvolvimento de sistemas web',
    'desenvolvimento de aplicativos',
    'MVP',
    'tirar ideia do papel',
    'MakerDesk',
  ],
  alternates: { canonical: '/' },
  // conteúdo da meta tag do Google Search Console, cadastrado na Vercel
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A121D',
  colorScheme: 'dark',
}

/**
 * Marca `html.js` antes da primeira pintura: só então as entradas animadas
 * escondem o que vão animar. Sem script, nada fica invisível.
 */
const marcarJs = "document.documentElement.classList.add('js')"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowSemiCondensed.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: marcarJs }} />
        <SiteJsonLd />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only z-(--z-pular) rounded-k bg-branco px-4 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Pular para o conteúdo
        </a>
        <VidroDefs />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
