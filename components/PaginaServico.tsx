import Image from 'next/image'
import Link from 'next/link'
import { BarraWhatsApp } from '@/components/BarraWhatsApp'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { Cabecalho } from '@/components/Cabecalho'
import { ChamadaFinal } from '@/components/ChamadaFinal'
import { BreadcrumbJsonLd, ServicoJsonLd } from '@/components/JsonLd'
import { Perguntas } from '@/components/Perguntas'
import { Rodape } from '@/components/Rodape'
import { VidroK } from '@/components/VidroK'
import { DESTAQUES, ETAPAS, SERVICOS } from '@/lib/conteudo'
import type { ConteudoServico } from '@/lib/servicos'
import { MAKERDESK_URL, RESPONSE_TIME, whatsappUrl } from '@/lib/site'

/**
 * Modelo das páginas de serviço (layout aprovado em 2026-10-22): a cara da home,
 * mais curta e sem as animações de rolagem. As faixas alternam como na home
 * (navy, superfície, navy, clara, navy, superfície, navy): os degraus da seção
 * clara deixam ver o navy do fundo, então ela fica entre duas seções navy.
 */
export function PaginaServico({ pagina }: { pagina: ConteudoServico }) {
  const whatsapp = whatsappUrl(pagina.whatsapp)
  const outros = SERVICOS.filter((servico) => servico.pagina !== pagina.caminho)

  return (
    <>
      <Cabecalho base="/" whatsapp={whatsapp} />

      <main id="conteudo">
        {/* `topo` com o botão dentro: é por ele que a barra do WhatsApp sabe quando aparecer */}
        <section id="topo" className="overflow-hidden pt-cabecalho">
          <div className="moldura grid items-center gap-12 pt-12 pb-16 lg:grid-cols-12 lg:gap-6 lg:pt-16">
            <div className="lg:col-span-8">
              <nav aria-label="Trilha">
                <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-rotulo text-discreto">
                  <li>
                    <Link href="/" className="underline underline-offset-4 hover:text-branco">
                      Início
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span aria-hidden="true">/</span>
                    <Link href="/#servicos" className="underline underline-offset-4 hover:text-branco">
                      Serviços
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <span aria-hidden="true">/</span>
                    <span aria-current="page" className="text-apoio">
                      {pagina.trilha}
                    </span>
                  </li>
                </ol>
              </nav>

              {/* como na home: o termo de busca é o rótulo, dentro do H1, acima da frase */}
              <h1 className="mt-12">
                <span className="rotulo flex items-baseline gap-3 text-azul-claro">
                  <span className="chevron" aria-hidden="true" />
                  {pagina.rotulo}
                </span>
                <span className="sr-only">. </span>
                <span className="mt-6 block max-w-[16ch] font-display text-titulo font-bold">{pagina.frase}</span>
              </h1>
              <p className="mt-8 max-w-texto text-abertura text-apoio">{pagina.abertura}</p>
              <BotaoWhatsApp href={whatsapp} className="mt-12" />
              <p className="mt-6 text-apoio">Primeira conversa gratuita, sem compromisso. {RESPONSE_TIME}</p>
            </div>

            <div className="hidden lg:col-span-4 lg:block">
              <VidroK variante="solta" className="mr-8 ml-auto w-[min(20vw,16rem)]" />
            </div>

            <ul className="grid gap-4 border-t border-fio pt-8 lg:col-span-12 lg:mt-8 lg:flex lg:flex-wrap lg:gap-x-16 lg:gap-y-4">
              {DESTAQUES.map((destaque) => (
                <li key={destaque} className="flex items-center gap-4 font-semibold">
                  <span className="h-1 w-6 shrink-0 rounded-k bg-azul" aria-hidden="true" />
                  {destaque}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-superficie py-secao">
          <div className="moldura grid gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <h2 className="max-w-[16ch] font-display text-titulo font-bold">{pagina.paraQuem.titulo}</h2>
              <div className="mt-12 lg:mt-16">
                <p className="rotulo text-azul-claro">Por exemplo</p>
                <ul className="mt-6 grid max-w-texto gap-4">
                  {pagina.paraQuem.exemplos.map((exemplo) => (
                    <li key={exemplo} className="flex items-baseline gap-4 text-abertura">
                      <span className="chevron text-azul-claro" aria-hidden="true" />
                      {exemplo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid max-w-texto content-start gap-6 lg:col-span-5 lg:col-start-8 lg:pt-24">
              {pagina.paraQuem.texto.map((paragrafo, i) => (
                <p key={paragrafo} className={i === 0 ? 'text-abertura' : 'text-apoio'}>
                  {paragrafo}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-secao">
          <div className="moldura grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <h2 className="max-w-[14ch] font-display text-titulo font-bold">{pagina.etapas.titulo}</h2>
              <p className="mt-8 max-w-texto text-abertura text-apoio">{pagina.etapas.texto}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {/* as etapas da home, em lista: aqui não há a área presa com o vidro */}
              <ol className="border-b border-fio">
                {ETAPAS.map((etapa, k) => (
                  <li key={etapa.nome} className="grid grid-cols-[3rem_1fr] border-t border-fio py-6">
                    <span className="rotulo pt-2 text-azul-claro">{String(k + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-display text-subtitulo font-bold">{etapa.nome}</h3>
                      <p className="mt-2 max-w-texto text-apoio">{etapa.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-texto text-apoio">{pagina.etapas.nota}</p>
            </div>
          </div>
        </section>

        <section className="clara degraus overflow-hidden bg-branco py-secao text-navy">
          <div className="moldura grid items-center gap-16 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <p className="rotulo flex items-center gap-3 text-azul-escuro">
                <span className="chevron" aria-hidden="true" />
                Feito pela Kovex
              </p>
              <h2 className="mt-6 max-w-[16ch] font-display text-titulo font-bold">{pagina.prova.titulo}</h2>
              {pagina.prova.texto.map((paragrafo, i) => (
                <p
                  key={paragrafo}
                  className={i === 0 ? 'mt-8 max-w-texto text-abertura text-apoio-claro' : 'mt-6 max-w-texto'}
                >
                  {paragrafo}
                </p>
              ))}
              <p className="mt-6 max-w-texto text-rotulo text-apoio-claro">{pagina.prova.nota}</p>
              <p className="mt-8">
                <a href={MAKERDESK_URL} target="_blank" rel="noopener" className="link inline-flex items-center gap-3">
                  <Image src="/products/makerdesk.svg" alt="" width={32} height={32} unoptimized className="size-8" />
                  Conhecer o MakerDesk<span className="sr-only"> (abre em nova aba)</span>
                </a>
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              {/* a mesma captura da home: conta demo, no app (Expo Web) em 390×845 a 3x */}
              <div className="celular mx-auto w-[min(56vw,14rem)]">
                <Image
                  src="/products/makerdesk-app.png"
                  alt="Tela inicial do app do MakerDesk com o faturamento do mês e o gráfico financeiro dos últimos 6 meses"
                  width={1170}
                  height={2535}
                  sizes="(min-width: 1024px) 14rem, 56vw"
                  className="aspect-9/19.5 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-secao">
          <div className="moldura grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <h2 className="max-w-[14ch] font-display text-titulo font-bold">{pagina.preco.titulo}</h2>
              <p className="mt-8 max-w-texto text-abertura text-apoio">{pagina.preco.texto}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="rotulo text-azul-claro">O que mais pesa no preço</p>
              <ul className="mt-6 border-b border-fio">
                {pagina.preco.fatores.map((fator) => (
                  <li key={fator} className="flex items-baseline gap-4 border-t border-fio py-4">
                    <span className="chevron text-azul-claro" aria-hidden="true" />
                    {fator}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-texto text-apoio">{pagina.preco.fecho}</p>
            </div>
          </div>

          <ul className="moldura mt-16 grid gap-12 lg:mt-24 lg:grid-cols-3 lg:gap-6">
            {pagina.condicoes.map((condicao) => (
              <li key={condicao.nome} className="border-t border-fio pt-6">
                <h3 className="flex items-baseline gap-4 font-display text-subtitulo font-bold">
                  <span className="chevron text-azul-claro" aria-hidden="true" />
                  {condicao.nome}
                </h3>
                <p className="mt-3 max-w-texto text-apoio lg:pr-6">{condicao.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <Perguntas titulo={pagina.perguntas.titulo} perguntas={pagina.perguntas.itens} whatsapp={whatsapp} />
        <ChamadaFinal whatsapp={whatsapp} />

        {/* enquanto um serviço não tem página, o link leva à lista da home */}
        <nav aria-label="Outros serviços" className="moldura border-t border-fio py-12">
          <p className="rotulo text-discreto">Outros serviços da Kovex</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {outros.map((servico) => (
              <li key={servico.nome}>
                <Link href={servico.pagina ?? '/#servicos'} className="link inline-flex min-h-11 items-center">
                  {servico.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <Rodape base="/" whatsapp={whatsapp} />
      <BarraWhatsApp whatsapp={whatsapp} />
      <ServicoJsonLd nome={pagina.rotulo} descricao={pagina.description} caminho={pagina.caminho} />
      <BreadcrumbJsonLd
        trilha={[
          { nome: 'Início', caminho: '/' },
          { nome: pagina.trilha, caminho: pagina.caminho },
        ]}
      />
    </>
  )
}
