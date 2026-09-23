import { products, services } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";

function JsonLd({ id, data }: { id: string; data: Record<string, unknown> }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // O objeto e estatico e montado no servidor, sem entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const orgId = `${siteConfig.url}/#organizacao`;

/**
 * Sem `sameAs`: a Kovex ainda nao tem perfil em rede social. Perfil vazio listado
 * ali e sinal ruim para o Google — so entra quando houver conteudo publicado.
 *
 * Os produtos entram como `brand`, e nao como `SoftwareApplication`: o Google
 * exige preco e avaliacao nesse tipo e marcaria o item como invalido sem eles.
 */
const organization = {
  "@type": "Organization",
  "@id": orgId,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/brand/icon-512.png`,
    width: 512,
    height: 512,
    caption: siteConfig.name,
  },
  image: `${siteConfig.url}/og-kovex.png`,
  description: siteConfig.description,
  foundingDate: siteConfig.foundingDate,
  taxID: siteConfig.cnpj,
  email: siteConfig.email,
  telephone: siteConfig.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.street}, ${siteConfig.address.complement}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  brand: products.map((product) => ({
    "@type": "Brand",
    name: product.name,
    url: product.url,
    description: product.tagline,
  })),
  knowsAbout: [
    "Desenvolvimento de software sob medida",
    "Aplicativos web e mobile",
    "Integração de sistemas",
    "Consultoria em tecnologia da informação",
    "Sustentação de sistemas",
  ],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.body,
      provider: { "@id": orgId },
      areaServed: "BR",
    },
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
};

export function SiteJsonLd() {
  return (
    <JsonLd
      id="ld-site"
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#site`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.shortDescription,
            inLanguage: "pt-BR",
            publisher: { "@id": orgId },
          },
        ],
      }}
    />
  );
}

export function BreadcrumbJsonLd({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <JsonLd
      id="ld-breadcrumb"
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.path}`,
        })),
      }}
    />
  );
}
