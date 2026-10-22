'use client'

import { useRef } from 'react'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { VidroK } from '@/components/VidroK'
import { DESTAQUES } from '@/lib/conteudo'
import { COM_MOVIMENTO, EASE, gsap, SplitText, useGSAP } from '@/lib/gsap'
import { RESPONSE_TIME } from '@/lib/site'

/**
 * Abertura: o título entra linha por linha e as camadas de vidro chegam soltas,
 * de trás para a frente. Sem script ou com menos movimento, tudo já aparece no lugar.
 */
export function Abertura() {
  const secao = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(COM_MOVIMENTO, () => {
        const titulo = secao.current?.querySelector<HTMLElement>('[data-entrada-linhas]')
        const vidro = secao.current?.querySelector<HTMLElement>('[data-entrada-vidro]')
        if (!titulo || !vidro) return

        const linhas = SplitText.create(titulo, {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          // o alvo é um span dentro do H1, onde aria-label não vale; as linhas são lidas em ordem
          aria: 'none',
          onSplit(self) {
            gsap.set(titulo, { visibility: 'visible' })
            return gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: EASE, stagger: 0.08 })
          },
        })

        gsap.set(vidro, { visibility: 'visible' })
        gsap.from(vidro.querySelectorAll('.vidro-placa'), {
          opacity: 0,
          x: (i: number) => 56 + i * 16,
          duration: 1.1,
          ease: EASE,
          stagger: 0.1,
          delay: 0.25,
        })

        // com mouse, as camadas giram poucos graus acompanhando o cursor
        const pilha = vidro.querySelector<HTMLElement>('.vidro-pilha')
        const secaoAtual = secao.current
        let mover: ((e: PointerEvent) => void) | undefined
        if (pilha && secaoAtual && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          gsap.set(pilha, { rotationY: -36, rotationX: 9 })
          const girarY = gsap.quickTo(pilha, 'rotationY', { duration: 0.9, ease: EASE })
          const girarX = gsap.quickTo(pilha, 'rotationX', { duration: 0.9, ease: EASE })
          mover = (e) => {
            girarY(-36 + (e.clientX / window.innerWidth - 0.5) * 12)
            girarX(9 - (e.clientY / window.innerHeight - 0.5) * 8)
          }
          secaoAtual.addEventListener('pointermove', mover)
        }

        return () => {
          linhas.revert()
          if (mover) secaoAtual?.removeEventListener('pointermove', mover)
        }
      })
    },
    { scope: secao },
  )

  return (
    <section
      id="topo"
      ref={secao}
      className="relative flex min-h-dvh items-center overflow-hidden pt-cabecalho pb-16 lg:pb-12"
    >
      <div className="moldura grid items-center gap-12 pt-8 lg:grid-cols-12 lg:gap-6 lg:pt-6">
        <div className="relative z-(--z-conteudo) lg:col-span-8">
          {/* o rótulo leva as palavras de busca para dentro do H1; só a frase entra por linhas */}
          <h1>
            <span className="rotulo flex items-baseline gap-3 text-azul-claro">
              <span className="chevron" aria-hidden="true" />
              Desenvolvimento de sistemas, apps e sites sob medida
            </span>
            <span className="sr-only">. </span>
            <span data-entrada-linhas className="mt-6 block max-w-[15ch] font-display text-gigante font-bold">
              Sua ideia vira produto, camada por camada.
            </span>
          </h1>
          <p className="mt-8 max-w-texto text-abertura text-apoio">
            A Kovex desenvolve sistemas, apps e sites para empreendedores que têm uma ideia e querem vê-la
            funcionando. Começamos pelo essencial e evoluímos com você.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
            <BotaoWhatsApp />
            <a href="#como-funciona" className="link">
              Ver como funciona
            </a>
          </div>
          <p className="mt-6 text-apoio">Primeira conversa gratuita, sem compromisso. {RESPONSE_TIME}</p>
        </div>

        {/* no celular o vidro vai para depois da faixa, para os fatos ficarem perto do botão */}
        <div data-entrada-vidro className="relative z-(--z-vidro) order-last lg:order-0 lg:col-span-4">
          <VidroK
            variante="solta"
            className="mx-auto w-[min(44vw,12rem)] sm:w-[min(40vw,18rem)] lg:mr-8 lg:ml-auto lg:w-[min(24vw,20rem)]"
          />
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
  )
}
