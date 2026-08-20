# Kovex Tecnologia — site institucional

Landing page em Next.js 15 (App Router, React 19, TypeScript, Tailwind CSS v4),
pronta para deploy na Vercel. Renderização 100% estática, sem dependência de
banco ou CMS.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run typecheck
```

## Estrutura

```
src/
  app/
    layout.tsx                  metadata global, fontes, header/footer, JSON-LD
    page.tsx                    landing (hero → serviços → método → trabalhos → stack → FAQ → contato)
    actions.ts                  server action do formulário (validação + envio)
    politica-de-privacidade/    página LGPD
    sitemap.ts robots.ts manifest.ts
    icon.svg favicon.ico apple-icon.png
  components/                   seções e UI
  content/site-content.ts       TODA a copy da página
  lib/site-config.ts            dados institucionais (nome, CNPJ, endereço, redes)
public/
    og-kovex.png                imagem de compartilhamento 1200×630
    brand/                      marca em SVG/PNG (fonte editável em ../brand)
```

## Antes de publicar — preencher dados reais

1. **`src/lib/site-config.ts`** — CNPJ, endereço, CEP, telefone, WhatsApp,
   coordenadas e URLs de LinkedIn/Instagram/GitHub. Tudo isso alimenta rodapé,
   página de privacidade e o JSON-LD lido pelo Google.
2. **`src/content/site-content.ts`** — os números de `stats` e os casos de
   `works` são exemplos para dar forma à página. Troque por dados auditáveis ou
   remova a seção; métrica inventada em site institucional cobra o preço na
   primeira reunião.
3. **`src/app/politica-de-privacidade/page.tsx`** — revisar prazos de retenção e
   bases legais com o jurídico; ajustar a data de última atualização.

## Variáveis de ambiente (Vercel → Settings → Environment Variables)

| Variável | Obrigatória | Para quê |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | sim | URL canônica de produção, sem barra final. Usada em canonical, sitemap, Open Graph e JSON-LD. |
| `RESEND_API_KEY` | não | Envio do formulário por e-mail via [Resend](https://resend.com). Sem ela, o lead é gravado no log da função (Vercel → Logs). |
| `CONTACT_TO_EMAIL` | não | Caixa que recebe os contatos. Padrão: `contato@kovextech.com.br`. |
| `CONTACT_FROM_EMAIL` | não | Remetente. Precisa ser de domínio verificado no Resend. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | não | Conteúdo da meta tag do Google Search Console. |

Modelo em `.env.example`. Para rodar local: `cp .env.example .env.local`.

## Deploy na Vercel

1. `git init && git add . && git commit -m "site institucional"` e suba para o
   GitHub.
2. Na Vercel: **Add New → Project → importar o repositório**. O framework é
   detectado sozinho (Next.js), root directory na raiz, sem build command
   customizado.
3. Cadastre `NEXT_PUBLIC_SITE_URL=https://kovextech.com.br` em Production.
4. **Settings → Domains** → adicionar `kovextech.com.br` e `www.kovextech.com.br`
   (a Vercel já redireciona o `www` para o apex).
5. Redeploy após configurar as variáveis — `metadataBase`, sitemap e JSON-LD são
   resolvidos em tempo de build.

## SEO já configurado

- `metadataBase`, title template, description, keywords e `canonical` por página.
- Open Graph e Twitter Card com imagem 1200×630 do kit de marca (`public/og-kovex.png`)
  e texto alternativo.
- `robots.txt` dinâmico: bloqueia deploys de *preview* da Vercel e aponta o sitemap.
- `sitemap.xml` gerado pelo App Router.
- Dados estruturados (schema.org): `Organization`, `ProfessionalService` com
  `OfferCatalog` dos serviços, `WebSite`, `FAQPage` na home e `BreadcrumbList` na
  política de privacidade.
- `manifest.webmanifest` + favicons, ícone maskable e apple-touch-icon.
- HTML semântico, um único `<h1>`, hierarquia de headings, `lang="pt-BR"`,
  skip link, foco visível e `prefers-reduced-motion`.
- Cabeçalhos de segurança (HSTS, nosniff, frame-options, referrer-policy) em
  `next.config.ts`.

### Depois do primeiro deploy

1. Google Search Console → adicionar a propriedade do domínio, validar e enviar
   `https://kovextech.com.br/sitemap.xml`.
2. Rodar o [Rich Results Test](https://search.google.com/test/rich-results) na home
   para conferir `Organization` e `FAQPage`.
3. Criar o perfil no Google Business (se houver endereço de atendimento) — é o que
   liga o `ProfessionalService` ao mapa.

## Formulário de contato

Server action em `src/app/actions.ts`: validação com Zod, campo *honeypot*
anti-robô, consentimento LGPD obrigatório e mensagens de erro por campo. Com
`RESEND_API_KEY` configurada, envia o lead por e-mail com `reply-to` do
remetente; sem ela, registra no log do servidor para nada se perder enquanto o
e-mail não está configurado.
