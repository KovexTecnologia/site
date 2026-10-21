import { SERVICOS } from '@/lib/conteudo'
import {
  COMPANY_ADDRESS,
  COMPANY_CNPJ,
  COMPANY_FOUNDING_DATE,
  COMPANY_NAME,
  CONTACT_EMAIL,
  MAKERDESK_TAGLINE,
  MAKERDESK_URL,
  PHONE_E164,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Objeto estático montado no servidor, sem entrada de usuário.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const orgId = `${SITE_URL}/#organizacao`

/**
 * Herdado da versão anterior do site, com os dados de agora.
 *
 * Sem `sameAs`: a Kovex ainda não tem perfil em rede social, e perfil vazio
 * listado ali é sinal ruim para o Google. O MakerDesk entra como `brand`, e não
 * como `SoftwareApplication`, porque esse tipo exige preço e avaliação.
 */
const organizacao = {
  '@type': 'Organization',
  '@id': orgId,
  name: SITE_NAME,
  alternateName: 'Kovex',
  legalName: COMPANY_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
  image: `${SITE_URL}/opengraph-image.png`,
  description: SITE_DESCRIPTION,
  foundingDate: COMPANY_FOUNDING_DATE,
  taxID: COMPANY_CNPJ,
  email: CONTACT_EMAIL,
  telephone: PHONE_E164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${COMPANY_ADDRESS.street}, ${COMPANY_ADDRESS.complement}`,
    addressLocality: COMPANY_ADDRESS.city,
    addressRegion: COMPANY_ADDRESS.state,
    postalCode: COMPANY_ADDRESS.postalCode,
    addressCountry: COMPANY_ADDRESS.country,
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  brand: [{ '@type': 'Brand', name: 'MakerDesk', url: MAKERDESK_URL, description: MAKERDESK_TAGLINE }],
  makesOffer: SERVICOS.map((servico) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: servico.nome,
      description: servico.texto,
      provider: { '@id': orgId },
      areaServed: 'BR',
    },
  })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: CONTACT_EMAIL,
      telephone: PHONE_E164,
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
    },
  ],
}

export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          organizacao,
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#site`,
            url: SITE_URL,
            name: SITE_NAME,
            inLanguage: 'pt-BR',
            publisher: { '@id': orgId },
          },
        ],
      }}
    />
  )
}

export function BreadcrumbJsonLd({ trilha }: { trilha: { nome: string; caminho: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trilha.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.nome,
          item: `${SITE_URL}${item.caminho}`,
        })),
      }}
    />
  )
}
