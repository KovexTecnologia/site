# Kovex Tecnologia — site institucional

Site da Kovex Tecnologia LTDA (CNPJ 68.036.280/0001-21), a empresa responsável
pelos produtos próprios (MakerDesk e os próximos) e pelos projetos sob medida.

Next.js 15 (App Router, React 19, TypeScript, Tailwind CSS v4). Tudo estático,
sem banco nem CMS. Deploy na Vercel.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Onde mexer

| O que | Arquivo |
|---|---|
| Textos da home | `src/content/site-content.ts` |
| Dados da empresa (CNPJ, endereço, e-mail, WhatsApp) | `src/lib/site-config.ts` |
| Cores e tipografia | `src/app/globals.css` |
| Política de privacidade | `src/app/privacidade/page.tsx` |

Regra da copy: **nada de número, cliente ou prazo inventado.** O site anterior
tinha métricas e cases de exemplo; o primeiro cliente que perguntasse por eles
derrubava a confiança inteira.

### Lançar um produto novo

Adicione um item em `products`, dentro de `src/content/site-content.ts`, e a
marca dele em `public/products/`. A seção de produtos, o rodapé, a política de
privacidade e o JSON-LD leem dessa lista, então não é preciso mexer em mais nada.

## Estrutura

```
src/
  app/
    layout.tsx           metadados, fontes (Barlow + Inter), header, footer, JSON-LD
    page.tsx             hero → produtos → serviços → como trabalhamos → contato
    actions.ts           server action do formulário (Zod + Resend)
    privacidade/         política de privacidade (LGPD)
    sitemap.ts robots.ts manifest.ts not-found.tsx
  components/            uma seção por arquivo
  content/site-content.ts
  lib/site-config.ts
public/
  brand/                 marca em SVG/PNG (fonte editável em ../brand)
  products/              marca de cada produto
  og-kovex.png           imagem de compartilhamento 1200×630
```

## Domínios

- **`kovex.com.br`** é o domínio principal (canonical, sitemap, JSON-LD).
- **`kovextecnologia.com.br`** redireciona para ele com 308. O redirect está no
  `next.config.ts`, então basta o domínio estar ligado ao projeto na Vercel.
- `/politica-de-privacidade` (endereço do site anterior) redireciona para `/privacidade`.

## Deploy na Vercel

1. Importe o repositório `KovexTecnologia/site`. O Next.js é detectado sozinho.
2. Em **Settings → Environment Variables**, cadastre as variáveis abaixo em Production.
3. Em **Settings → Domains**, adicione `kovex.com.br`, `www.kovex.com.br` e
   `kovextecnologia.com.br`. O mais simples é apontar os nameservers de
   `kovex.com.br` no Registro.br para `ns1.vercel-dns.com` / `ns2.vercel-dns.com`,
   como já está feito no `kovextecnologia.com.br`.
4. Refaça o deploy depois de mexer em variável: canonical, sitemap e JSON-LD são
   resolvidos no build.

| Variável | Obrigatória | Para quê |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | sim | `https://kovex.com.br`, sem barra no final |
| `RESEND_API_KEY` | não | Envio do formulário por e-mail. Sem ela, a mensagem vai para o log da função (Vercel → Logs) e nada se perde |
| `CONTACT_TO_EMAIL` | não | Quem recebe. Padrão: `contato@kovex.com.br` |
| `CONTACT_FROM_EMAIL` | não | Remetente. Precisa ser de domínio verificado no Resend |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | não | Meta tag do Google Search Console |

## E-mail `contato@kovex.com.br`

Hoje o `kovex.com.br` está configurado para **não receber e-mail** (MX nulo `.`
e SPF `v=spf1 -all`). Para o endereço do site funcionar:

1. **Receber:** crie uma conta grátis no [ImprovMX](https://improvmx.com)
   redirecionando `contato@kovex.com.br` para o Gmail da empresa. No DNS do
   domínio, troque o MX nulo por `mx1.improvmx.com` (prioridade 10) e
   `mx2.improvmx.com` (prioridade 20), e o SPF por
   `v=spf1 include:spf.improvmx.com ~all`. Para também *responder* como
   `contato@`, o Zoho Mail tem plano gratuito com caixa de verdade.
2. **Formulário:** no [Resend](https://resend.com), adicione o domínio
   `kovex.com.br` e crie no DNS os registros que ele mostrar (DKIM e o
   subdomínio `send`). Depois gere a `RESEND_API_KEY`.

## SEO

- Metadados, canonical, Open Graph e Twitter Card em `layout.tsx`.
- JSON-LD: `Organization`, com razão social, CNPJ, endereço, produtos (como
  `brand`) e serviços (como `makesOffer`), e `WebSite`. Não tem `sameAs` porque
  ainda não existem perfis em redes sociais. Adicione quando houver conteúdo publicado.
- `robots.txt` bloqueia os deploys de preview da Vercel.
- Depois do primeiro deploy: cadastre o domínio no Google Search Console, envie
  `https://kovex.com.br/sitemap.xml` e rode o
  [Rich Results Test](https://search.google.com/test/rich-results).
