/**
 * Fonte unica de verdade dos dados institucionais.
 * Tudo que aparece em SEO, JSON-LD, rodape e formulario sai daqui.
 *
 * >>> PREENCHER com os dados reais antes de publicar: cnpj, endereco, telefone e perfis sociais.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kovextech.com.br";

export const siteConfig = {
  name: "Kovex Tecnologia",
  shortName: "Kovex",
  legalName: "Kovex Tecnologia LTDA",
  url: rawUrl.replace(/\/$/, ""),
  locale: "pt-BR",
  tagline: "Software sob medida para operações que o produto de prateleira não resolve.",
  description:
    "A Kovex Tecnologia projeta, constrói e sustenta sistemas web, integrações e aplicações internas sob medida para empresas. Time sênior, entrega em ciclos de duas semanas e código no nome do cliente.",
  shortDescription:
    "Fábrica de software sob medida: sistemas internos, integrações e modernização de legados.",
  foundingYear: "2019", // PREENCHER: ano real de fundacao
  cnpj: "00.000.000/0001-00", // PREENCHER
  email: "contato@kovextech.com.br",
  phone: "+55 11 90000-0000", // PREENCHER
  phoneE164: "+5511900000000", // PREENCHER (usado em tel: e JSON-LD)
  whatsapp: "5511900000000", // PREENCHER (somente digitos, com DDI)
  address: {
    street: "Av. Exemplo, 1000 — conj. 91", // PREENCHER
    district: "Itaim Bibi",
    city: "São Paulo",
    state: "SP",
    postalCode: "04000-000", // PREENCHER
    country: "BR",
  },
  geo: { latitude: -23.5868, longitude: -46.6817 }, // PREENCHER
  social: {
    linkedin: "https://www.linkedin.com/company/kovextech", // PREENCHER
    instagram: "https://www.instagram.com/kovextech", // PREENCHER
    github: "https://github.com/kovextech", // PREENCHER
  },
  areaServed: ["São Paulo", "Brasil"],
  openingHours: "Mo-Fr 09:00-18:00",
} as const;

export const nav = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Método", href: "/#metodo" },
  { label: "Trabalhos", href: "/#trabalhos" },
  { label: "Stack", href: "/#stack" },
  { label: "Dúvidas", href: "/#duvidas" },
] as const;

export type SiteConfig = typeof siteConfig;
