import Image from 'next/image'
import { MAKERDESK_APP_STORE_URL, MAKERDESK_PLAY_STORE_URL, MAKERDESK_URL } from '@/lib/site'

const LOJAS = [
  { url: MAKERDESK_APP_STORE_URL, nome: 'App Store' },
  { url: MAKERDESK_PLAY_STORE_URL, nome: 'Google Play' },
].filter((loja): loja is { url: string; nome: string } => Boolean(loja.url))

/**
 * A quebra de ritmo: única seção clara, com a prova real do que a Kovex constrói.
 * Entra e sai por um degrau no ângulo do chevron (`.degraus`).
 */
export function MakerDesk() {
  return (
    <section id="makerdesk" className="clara degraus overflow-hidden bg-branco py-secao text-navy">
      <div className="moldura grid items-center gap-16 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <p className="rotulo flex items-center gap-3 text-azul-escuro">
            <span className="chevron" aria-hidden="true" />
            Feito pela Kovex
          </p>
          <h2 className="mt-6 font-display text-titulo font-bold">Também construímos e operamos o nosso.</h2>
          <p className="mt-8 max-w-texto text-abertura text-apoio-claro">
            O MakerDesk é o sistema de gestão da Kovex para negócios de impressão 3D: cálculo de custo, materiais,
            pedidos e orçamentos, no computador e no celular.
          </p>
          <p className="mt-6 max-w-texto">
            Quem constrói o seu projeto é quem mantém o MakerDesk funcionando todo dia.
          </p>
          <p className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href={MAKERDESK_URL} target="_blank" rel="noopener" className="link inline-flex items-center gap-3">
              {/* marca do produto, herdada da versão anterior do site */}
              <Image src="/products/makerdesk.svg" alt="" width={32} height={32} unoptimized className="size-8" />
              Conhecer o MakerDesk<span className="sr-only"> (abre em nova aba)</span>
            </a>
            {LOJAS.map((loja) => (
              <a key={loja.nome} href={loja.url} target="_blank" rel="noopener" className="link">
                App no {loja.nome}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            ))}
          </p>
        </div>

        <div className="relative pb-24 lg:col-span-7 lg:pb-16 lg:pl-12">
          {/* conta demo do MakerDesk, com dados fictícios, capturada em 1376×860 a 2x: nessa largura os
              cards não quebram linha, e o canto que o celular cobre no computador é só a barra lateral */}
          <Image
            src="/products/makerdesk-relatorios.png"
            alt="Tela de Relatórios do MakerDesk com faturamento, receita por mês e status das encomendas de uma oficina de demonstração"
            width={2752}
            height={1720}
            sizes="(min-width: 1024px) 40rem, calc(100vw - 2rem)"
            className="aspect-16/10 w-full rounded-k shadow-[0_32px_64px_-32px_rgb(10_18_29/0.35)]"
          />
          {/* no celular o aparelho fica à direita; no computador, à esquerda, sobre o painel */}
          <div className="celular absolute right-4 bottom-0 w-[clamp(5.5rem,26%,10.5rem)] lg:right-auto lg:-left-6">
            {/* mesma conta demo, no app (Expo Web) em 390×845 a 3x */}
            <Image
              src="/products/makerdesk-app.png"
              alt="Tela inicial do app do MakerDesk com o faturamento do mês e o gráfico financeiro dos últimos 6 meses"
              width={1170}
              height={2535}
              sizes="(min-width: 1024px) 9.25rem, 26vw"
              className="aspect-9/19.5 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
