import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kovex Tecnologia · Software sob medida para empresas",
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: "technology",
  keywords: [
    "software sob medida",
    "desenvolvimento de sistemas",
    "fábrica de software",
    "sistema web para empresas",
    "integração de sistemas",
    "automação de processos",
    "modernização de sistema legado",
    "consultoria de tecnologia",
    "desenvolvimento Next.js",
    "Kovex Tecnologia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Kovex Tecnologia · Software sob medida para empresas",
    description: siteConfig.shortDescription,
    images: [
      {
        url: "/og-kovex.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Kovex Tecnologia — software sob medida para empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kovex Tecnologia · Software sob medida para empresas",
    description: siteConfig.shortDescription,
    images: [
      {
        url: "/og-kovex.png",
        alt: "Kovex Tecnologia — software sob medida para empresas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0a121d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded-xs focus:bg-cobalt-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
