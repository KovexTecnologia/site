import type { Metadata, Viewport } from "next";
import { Barlow, Inter } from "next/font/google";

import { SiteJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

/** Barlow e da mesma familia DIN do logotipo (Bahnschrift): titulos conversam com a marca. */
const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Kovex Tecnologia · Produtos e desenvolvimento de software";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: "technology",
  keywords: [
    "Kovex Tecnologia",
    "empresa de software",
    "desenvolvimento de software sob medida",
    "desenvolvimento de sistemas web",
    "desenvolvimento de aplicativos",
    "consultoria em tecnologia",
    "sustentação de sistemas",
    "MakerDesk",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.shortDescription,
    images: [
      {
        url: "/og-kovex.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Kovex Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.shortDescription,
    images: [{ url: "/og-kovex.png", alt: "Kovex Tecnologia" }],
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
  colorScheme: "light",
  themeColor: "#f5f6f8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <SiteJsonLd />
      </body>
    </html>
  );
}
