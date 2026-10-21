# Kovex Tecnologia: site institucional

Site da Kovex Tecnologia LTDA (CNPJ 68.036.280/0001-21). Uma página só, feita para levar quem tem
uma ideia até uma conversa no WhatsApp, com o MakerDesk como prova do que a Kovex constrói.

Next.js 16 (App Router, React 19, TypeScript), Tailwind CSS 4 e GSAP (ScrollTrigger e SplitText).
Tudo estático, sem banco, sem formulário e sem CMS. Deploy na Vercel.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
pnpm lint
pnpm typecheck
```

## Onde mexer

| O que | Arquivo |
|---|---|
| Textos da página (serviços, etapas, compromissos, perguntas, exemplos) | `lib/conteudo.ts` |
| Dados da empresa, WhatsApp, e-mail, prazo de resposta, links das lojas | `lib/site.ts` |
| Cores, tipografia, escala de espaço e o vidro em 3D | `app/globals.css` |
| Uma seção por arquivo | `components/` |
| Política de privacidade | `app/privacidade/page.tsx` |
| Imagem de compartilhamento | `docs/og/og.html` (gera `app/opengraph-image.png` e `app/twitter-image.png`) |

Regra da copy, herdada da versão anterior: **nada de número, cliente ou prazo inventado.** Os únicos
números do site (primeira versão em 4 a 6 semanas, 30 dias de correções, resposta em até 24 horas) são
compromissos confirmados pela Kovex.

### Quando o app do MakerDesk sair nas lojas

Preencha `MAKERDESK_APP_STORE_URL` e `MAKERDESK_PLAY_STORE_URL` em `lib/site.ts`. Enquanto estiverem
nulos, nada aparece na seção MakerDesk.

### Sistema visual

As decisões da direção criativa viram tokens no `@theme` do `globals.css`, e os padrões do Tailwind
para cor, fonte, tamanho de texto, peso, raio e curva estão zerados. Só existem os valores decididos:
seis tamanhos de texto (`text-gigante`, `titulo`, `subtitulo`, `abertura`, `corpo`, `rotulo`), três
pesos e espaços da escala de 4px (1, 2, 3, 4, 6, 8, 12, 16 e 24, mais `secao` e `margem`).

Toda animação respeita quem pediu menos movimento no sistema, e o conteúdo aparece completo sem
JavaScript.

## Domínios

- **`kovex.com.br`** é o domínio principal (canonical, sitemap, JSON-LD).
- **`kovextecnologia.com.br`** redireciona para ele com 308. O redirect está no `next.config.ts`,
  então basta o domínio estar ligado ao projeto na Vercel.
- `/politica-de-privacidade` (endereço do primeiro site) redireciona para `/privacidade`.

## Deploy na Vercel

1. Importe o repositório `KovexTecnologia/site`. O Next.js e o pnpm são detectados sozinhos.
2. Em **Settings → Domains**, adicione `kovex.com.br`, `www.kovex.com.br` e `kovextecnologia.com.br`.
3. Em **Analytics**, ative o Web Analytics (o site já carrega o script; sem cookies).
4. Se o projeto ainda tiver as variáveis da versão anterior (`RESEND_API_KEY`, `CONTACT_*`,
   `NEXT_PUBLIC_SITE_URL`), elas podem ser apagadas: o site novo não usa formulário e o endereço
   canônico está fixo em `lib/site.ts`.

| Variável | Obrigatória | Para quê |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | não | Meta tag do Google Search Console |

## E-mail `contato@kovex.com.br`

Desde outubro de 2026 o `kovex.com.br` recebe e-mail pela Hostinger (MX `mx1`/`mx2.hostinger.com` e
SPF `include:_spf.mail.hostinger.com`). O endereço aparece no site como contato secundário e na
política de privacidade.

## SEO

- Metadados, canonical, Open Graph e Twitter Card em `app/layout.tsx`.
- JSON-LD em `components/JsonLd.tsx`: `Organization` com razão social, CNPJ, endereço, data de
  abertura, o MakerDesk como `brand` e os serviços como `makesOffer`; `WebSite`; e `BreadcrumbList`
  na política de privacidade. Não tem `sameAs` porque ainda não existem perfis em redes sociais.
- `robots.txt` bloqueia os deploys de preview da Vercel.
- Depois do primeiro deploy: cadastre o domínio no Google Search Console, envie
  `https://kovex.com.br/sitemap.xml` e rode o
  [Rich Results Test](https://search.google.com/test/rich-results).

## Histórico

- **Agosto de 2026:** primeiro site, com métricas e cases de exemplo.
- **Setembro de 2026:** refeito sem nada inventado, com formulário (Resend) e seção de produtos.
- **Outubro de 2026:** site atual, refeito pelo Método ID (direção criativa, layout e refinamento). Da
  versão anterior vieram o endereço e a data de abertura conferidos no CNPJ, o JSON-LD completo, a
  estrutura da política de privacidade, os redirects de domínio, o bloqueio de preview no robots, a
  marca do MakerDesk e o favicon. A pasta `brand/` é o kit de marca, e `backup/` guarda as
  explorações de logo.
