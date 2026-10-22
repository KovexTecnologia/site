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
| Páginas de serviço: texto, title, description e mensagem do WhatsApp | `lib/servicos.ts` |
| Layout das páginas de serviço (um modelo só para todas) | `components/PaginaServico.tsx` |
| Dados da empresa, WhatsApp, e-mail, prazo de resposta, links das lojas | `lib/site.ts` |
| Cores, tipografia, escala de espaço e o vidro em 3D | `app/globals.css` |
| Uma seção por arquivo | `components/` |
| Política de privacidade | `app/privacidade/page.tsx` |
| Imagem de compartilhamento | `docs/og/og.html` (gera `app/opengraph-image.png` e `app/twitter-image.png`) |
| Capturas do MakerDesk (painel e app) | `public/products/makerdesk-relatorios.png` e `makerdesk-app.png` |

Regra da copy, herdada da versão anterior: **nada de número, cliente ou prazo inventado.** Os únicos
números do site (primeira versão em 4 a 6 semanas, 30 dias de correções, resposta em até 24 horas) são
compromissos confirmados pela Kovex. Os números que aparecem dentro das capturas do MakerDesk são de uma
oficina de demonstração, não afirmação da Kovex.

### Capturas do MakerDesk

Saem da conta demo do MakerDesk no Supabase de desenvolvimento (ver "Conta demo" no `PROJECT.md` do
MakerDesk), com dados fictícios. Para trocar, mantenha o nome e o tamanho de cada arquivo:

- **Painel:** a tela de Relatórios do web em 1376×860 a 2x (2752×1720, 16:10). Nessa largura os cards
  não quebram linha, e o canto que o celular cobre no computador é só a barra lateral. Mais estreito,
  os textos dos cards quebram e o menu é cortado.
- **App:** a tela Início do app em 390×845 a 3x (1170×2535, 9:19,5). Tirada pelo Expo Web, sem o aviso
  de desenvolvimento e com o mouse fora dos gráficos (senão o tooltip sai no print).

Com o `pnpm dev` rodando, apague `.next/dev/cache/images` depois de trocar uma captura: o servidor
guarda a versão otimizada pela URL e continua mostrando a antiga.

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
- **`www.kovex.com.br`** redireciona para ele com 308, configurado no próprio domínio na Vercel.
- **`kovextecnologia.com.br`** e **`www.kovextecnologia.com.br`** redirecionam para ele com 308. O
  redirect está no `next.config.ts`, então basta o domínio estar ligado ao projeto na Vercel.
- `/politica-de-privacidade` (endereço do primeiro site) redireciona para `/privacidade`.

Os dois domínios usam os nameservers da Vercel (`ns1`/`ns2.vercel-dns.com`): o DNS se edita no time
Kovex da Vercel, em **Domains**.

## Deploy na Vercel

Publicado desde 21/10/2026 no projeto **`kovex-site`** do time **Kovex** (`kovextec`), ligado ao
repositório `KovexTecnologia/site`:

- **Push na `main` publica em produção.** Outras branches viram deploy de preview, que o `robots.txt`
  bloqueia.
- **Domínios do projeto:** os quatro acima, todos verificados e com HTTPS.
- **Web Analytics** ligado (o site já carrega o script; sem cookies). Speed Insights desligado: o site
  não carrega o script dele.
- Para usar o CLI na pasta, `vercel link --project kovex-site --scope kovextec`. Ele cria a pasta
  `.vercel/`, que o git ignora.

| Variável | Obrigatória | Para quê |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | não | Meta tag do Google Search Console |

## E-mail `contato@kovex.com.br`

Desde outubro de 2026 o `kovex.com.br` recebe e-mail pela Hostinger (MX `mx1`/`mx2.hostinger.com` e
SPF `include:_spf.mail.hostinger.com`). O endereço aparece no site como contato secundário e na
política de privacidade.

Esses registros ficam no DNS da Vercel, junto com o DKIM (`hostingermail-a`/`b`/`c._domainkey`) e o
DMARC (`_dmarc`). Ao mexer no DNS do domínio, não apague nenhum deles: sem eles o e-mail para de chegar
ou passa a cair no spam.

## SEO

- Metadados, canonical, Open Graph e Twitter Card em `app/layout.tsx`.
- JSON-LD em `components/JsonLd.tsx`: `Organization` com razão social, CNPJ, endereço, data de
  abertura, o MakerDesk como `brand` e os serviços como `makesOffer` (com `url` quando têm página);
  `WebSite`; `BreadcrumbList` na política de privacidade e nas páginas de serviço; e `Service` em cada
  página de serviço. Não tem `sameAs` porque ainda não existem perfis em redes sociais.
- `robots.txt` bloqueia os deploys de preview da Vercel.
- Google Search Console desde 22/10/2026, como propriedade de Domínio verificada por registro TXT no
  DNS da Vercel (não apague esse registro), com o sitemap enviado. O Bing Webmaster Tools importou o
  site de lá. A variável `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` não é usada.

### Página de serviço nova

1. O texto, com a aprovação do Paulo, vira um objeto `ConteudoServico` em `lib/servicos.ts`.
2. A rota é um `app/<endereço>/page.tsx` de três linhas, como `app/desenvolvimento-de-aplicativos`.
3. Em `SERVICOS` (`lib/conteudo.ts`), o serviço ganha `pagina` com o endereço. Com isso, o nome
   vira link na home, a página entra no sitemap e no rodapé, e o `Organization` ganha a `url`.

Cada página tem a própria mensagem do WhatsApp, que diz de onde a pessoa veio. Uma página que define
o próprio `openGraph` perde a imagem do `app/opengraph-image.png`, por isso `metadataDoServico` a
declara de novo.

## Histórico

- **Agosto de 2026:** primeiro site, com métricas e cases de exemplo.
- **Setembro de 2026:** refeito sem nada inventado, com formulário (Resend) e seção de produtos.
- **Outubro de 2026:** site atual, refeito pelo Método ID (direção criativa, layout e refinamento). Da
  versão anterior vieram o endereço e a data de abertura conferidos no CNPJ, o JSON-LD completo, a
  estrutura da política de privacidade, os redirects de domínio, o bloqueio de preview no robots, a
  marca do MakerDesk e o favicon. A pasta `brand/` é o kit de marca, e `backup/` guarda as
  explorações de logo. Em 21/10/2026 as capturas reais do MakerDesk entraram no lugar dos espaços
  reservados, e o site foi publicado no projeto `kovex-site` da Vercel.
