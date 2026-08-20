import { faq, services } from "@/content/site-content";
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

const organization = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organizacao`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/brand/kovex-lockup-horizontal.svg`,
    caption: siteConfig.name,
  },
  image: `${siteConfig.url}/og-kovex.png`,
  description: siteConfig.description,
  foundingDate: siteConfig.foundingYear,
  taxID: siteConfig.cnpj,
  email: siteConfig.email,
  telephone: siteConfig.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  sameAs: Object.values(siteConfig.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
};

export function OrganizationJsonLd() {
  return (
    <JsonLd
      id="ld-organizacao"
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "ProfessionalService",
            "@id": `${siteConfig.url}/#negocio`,
            name: siteConfig.name,
            parentOrganization: { "@id": `${siteConfig.url}/#organizacao` },
            url: siteConfig.url,
            image: `${siteConfig.url}/og-kovex.png`,
            priceRange: "$$$",
            telephone: siteConfig.phoneE164,
            email: siteConfig.email,
            address: organization.address,
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteConfig.geo.latitude,
              longitude: siteConfig.geo.longitude,
            },
            openingHours: siteConfig.openingHours,
            areaServed: siteConfig.areaServed.map((name) => ({
              "@type": "AdministrativeArea",
              name,
            })),
            knowsAbout: [
              "Desenvolvimento de software sob medida",
              "Integração de sistemas",
              "Automação de processos",
              "Modernização de sistemas legados",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Serviços de tecnologia",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.body,
                  serviceType: service.title,
                  provider: { "@id": `${siteConfig.url}/#organizacao` },
                  areaServed: "BR",
                },
              })),
            },
          },
        ],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      id="ld-website"
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#site`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.shortDescription,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteConfig.url}/#organizacao` },
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLd
      id="ld-faq"
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#duvidas`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
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
