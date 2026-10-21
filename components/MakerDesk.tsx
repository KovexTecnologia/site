import Image from 'next/image'
import { Reserva } from '@/components/Reserva'
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
          <Reserva
            tipo="Captura de tela · 16:10"
            assunto="Painel do MakerDesk"
            detalhe="Visão geral de uma oficina de demonstração, com dados fictícios. O canto coberto pelo celular não leva informação importante. Entra na etapa 5B."
            className="aspect-16/10 w-full rounded-k pr-[34%] shadow-[0_32px_64px_-32px_rgb(10_18_29/0.35)] lg:items-end lg:pr-4 lg:pl-[32%] lg:text-right"
          />
          {/* no celular o aparelho fica à direita; no computador, à esquerda, sobre o painel */}
          <div className="celular absolute right-4 bottom-0 w-[clamp(5.5rem,26%,10.5rem)] lg:right-auto lg:-left-6">
            <Reserva
              tipo="App · 9:19,5"
              assunto="Tela do app"
              detalhe="Mesma oficina demo."
              className="aspect-9/19.5 p-3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
