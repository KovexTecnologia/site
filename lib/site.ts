export const SITE_URL = 'https://kovex.com.br'
export const SITE_NAME = 'Kovex Tecnologia'
/**
 * Title e description com as palavras que as pessoas buscam (decisão de 2026-10-22).
 * Até ~60 e ~155 caracteres, para o Google não cortar.
 */
export const SITE_TITLE = 'Desenvolvimento de sistemas, apps e sites sob medida · Kovex'
export const SITE_DESCRIPTION =
  'Sistemas web, aplicativos e sites sob medida para quem tem uma ideia. Primeira versão no ar em 4 a 6 semanas, valor fechado e código no seu nome.'

/**
 * Dados formais: aparecem no rodapé, na privacidade e no JSON-LD. Endereço e data
 * de abertura vieram da versão anterior do site, conferidos com o comprovante de
 * inscrição do CNPJ emitido em 23/09/2026.
 */
export const COMPANY_NAME = 'Kovex Tecnologia LTDA'
export const COMPANY_CNPJ = '68.036.280/0001-21'
export const COMPANY_CITY = 'Porto Alegre/RS'
export const COMPANY_FOUNDING_DATE = '2026-07-15'
export const COMPANY_ADDRESS = {
  street: 'Av. Cristóvão Colombo, 2144',
  complement: 'sala 408, 3º andar',
  district: 'Floresta',
  city: 'Porto Alegre',
  state: 'RS',
  postalCode: '90560-001',
  country: 'BR',
} as const

export const CONTACT_EMAIL = 'contato@kovex.com.br'

/**
 * WhatsApp: o mesmo número do suporte do MakerDesk. A mensagem pronta diz que a
 * pessoa veio pelo site da Kovex, para não se misturar com o suporte.
 *
 * `WHATSAPP_NUMBER` é só dígitos com DDI, o formato que o `wa.me` exige; os outros
 * formatos derivam dele para não ficarem defasados.
 */
export const WHATSAPP_NUMBER = '5579981348819'
export const WHATSAPP_DISPLAY = `(${WHATSAPP_NUMBER.slice(2, 4)}) ${WHATSAPP_NUMBER.slice(4, 9)}-${WHATSAPP_NUMBER.slice(9)}`
export const WHATSAPP_MESSAGE =
  'Olá, Kovex! Vim pelo site. Tenho uma ideia e quero entender por onde começar.'
/** Cada página de serviço tem a própria mensagem, que diz de onde a pessoa veio (decisão de 2026-10-22). */
export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
export const WHATSAPP_URL = whatsappUrl(WHATSAPP_MESSAGE)

/** Formato E.164 para o JSON-LD. Assume celular brasileiro (13 dígitos). */
export const PHONE_E164 = `+${WHATSAPP_NUMBER.slice(0, 2)}-${WHATSAPP_NUMBER.slice(2, 4)}-${WHATSAPP_NUMBER.slice(4, 9)}-${WHATSAPP_NUMBER.slice(9)}`

export const MAKERDESK_URL = 'https://www.makerdesk.com.br'
export const MAKERDESK_TAGLINE = 'Gestão para negócios de impressão 3D'

/**
 * O WhatsApp é o mesmo do suporte do MakerDesk: quem já é cliente do produto é
 * levado ao canal de suporte dele (aviso que veio da versão anterior do site).
 */
export const MAKERDESK_SUPPORT_EMAIL = 'suporte@makerdesk.com.br'

/**
 * Links do app do MakerDesk nas lojas. Ficam nulos até o app ser publicado:
 * sem link, a seção MakerDesk não mostra nada no lugar.
 */
export const MAKERDESK_APP_STORE_URL: string | null = null
export const MAKERDESK_PLAY_STORE_URL: string | null = null

/** Prazo confirmado pelo Paulo: a resposta sai em menos de 24 horas. */
export const RESPONSE_TIME = 'Resposta em até 24 horas.'

/**
 * O botão principal tem o mesmo texto em todo lugar, cabeçalho incluído. "Conversar"
 * no lugar de "Contar", que soava como entregar a ideia (decisão de 2026-10-21).
 * O ícone já diz que é WhatsApp.
 */
export const CTA_LABEL = 'Conversar sobre minha ideia'

export const MENU = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#makerdesk', label: 'MakerDesk' },
  { href: '#perguntas', label: 'Perguntas' },
] as const
