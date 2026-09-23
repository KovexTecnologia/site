/**
 * Fonte unica dos dados institucionais. Rodape, pagina de privacidade, JSON-LD e
 * formulario leem daqui — trocar um dado aqui troca em todo o site.
 *
 * Dados conferidos com o comprovante de inscricao do CNPJ (emitido em 23/09/2026).
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kovex.com.br";

/** So digitos, com DDI — o formato que o wa.me exige. */
const whatsapp = "5579981348819";

export const siteConfig = {
  name: "Kovex Tecnologia",
  shortName: "Kovex",
  legalName: "Kovex Tecnologia LTDA",
  url: rawUrl.replace(/\/$/, ""),
  locale: "pt-BR",
  description:
    "A Kovex Tecnologia desenvolve produtos próprios, como o MakerDesk, e software sob medida para empresas: sistemas web, aplicativos, integrações, consultoria e sustentação.",
  shortDescription:
    "Empresa de software: produtos próprios e desenvolvimento sob medida.",
  cnpj: "68.036.280/0001-21",
  /** Data de abertura no CNPJ. */
  foundingDate: "2026-07-15",
  email: "contato@kovex.com.br",
  whatsapp,
  whatsappUrl: `https://wa.me/${whatsapp}`,
  /** Celular brasileiro: 13 digitos (DDI + DDD + 9). Se virar fixo, ajustar os cortes. */
  phoneDisplay: `(${whatsapp.slice(2, 4)}) ${whatsapp.slice(4, 9)}-${whatsapp.slice(9)}`,
  phoneE164: `+${whatsapp}`,
  address: {
    street: "Av. Cristóvão Colombo, 2144",
    complement: "sala 408, 3º andar",
    district: "Floresta",
    city: "Porto Alegre",
    state: "RS",
    postalCode: "90560-001",
    country: "BR",
  },
} as const;

export const nav = [
  { label: "Produtos", href: "/#produtos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como trabalhamos", href: "/#como-trabalhamos" },
] as const;

export type SiteConfig = typeof siteConfig;
