import type { NextConfig } from 'next'

const desenvolvimento = process.env.NODE_ENV !== 'production'

/**
 * Content-Security-Policy, no mesmo espírito da do portfólio.
 *
 * O 'unsafe-inline' em `script-src` fica porque o bootstrap do Next, o JSON-LD e
 * o script que marca `html.js` são inline. O site não renderiza nada vindo de
 * usuário, então o que a CSP entrega de fato é: nada de terceiro carrega,
 * ninguém embute o site num iframe e não há <base> ou <object> injetáveis.
 *
 * Em produção o @vercel/analytics é same-origin (/_vercel/insights/*); o host
 * va.vercel-scripts.com só serve o script de debug, usado em desenvolvimento.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${desenvolvimento ? " 'unsafe-eval' https://va.vercel-scripts.com" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  // next/font hospeda as fontes no próprio build: nada vem do Google.
  "font-src 'self'",
  `connect-src 'self'${desenvolvimento ? ' https://va.vercel-scripts.com' : ''}`,
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
].join('; ')

const headersSeguranca = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async headers() {
    return [{ source: '/:path*', headers: headersSeguranca }]
  },

  // Herdados da versão anterior do site.
  async redirects() {
    return [
      // kovex.com.br é o domínio principal; o antigo só redireciona
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?kovextecnologia\\.com\\.br' }],
        destination: 'https://kovex.com.br/:path*',
        permanent: true,
      },
      // endereço da política no primeiro site
      { source: '/politica-de-privacidade', destination: '/privacidade', permanent: true },
    ]
  },
}

export default nextConfig
