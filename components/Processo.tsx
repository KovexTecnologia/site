'use client'

import { useRef } from 'react'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { VidroK } from '@/components/VidroK'
import { ETAPAS } from '@/lib/conteudo'
import { DESKTOP_COM_MOVIMENTO, gsap, useGSAP } from '@/lib/gsap'

/**
 * Como funciona: o momento forte da página. No computador a área do vidro fica
 * presa enquanto a página rola, e cada etapa encaixa uma camada no lugar
 * tracejado, do fundo para a frente. No celular, sem script ou com menos
 * movimento, o vidro aparece montado e as etapas ficam em lista.
 */
export function Processo() {
  const secao = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(DESKTOP_COM_MOVIMENTO, () => {
        const area = secao.current?.querySelector<HTMLElement>('[data-presa]')
        const etapas = gsap.utils.toArray<HTMLElement>('[data-etapa]', secao.current)
        const placas = gsap.utils.toArray<HTMLElement>('[data-camada]', secao.current)
        const indicador = secao.current?.querySelector<HTMLElement>('[data-indicador]')
        const marcas = gsap.utils.toArray<HTMLElement>('[data-marca]', secao.current)
        const contagem = secao.current?.querySelector<HTMLElement>('[data-contagem]')
        if (!area || etapas.length === 0) return

        // "2 de 4": quantas camadas já encaixaram
        const marcar = (progresso: number) => {
          const feitas = Math.round(progresso * etapas.length)
          marcas.forEach((marca, i) => {
            marca.dataset.ativa = String(i < feitas)
          })
          if (contagem) {
            contagem.textContent = feitas === 0 ? `${etapas.length} etapas` : `${feitas} de ${etapas.length}`
          }
        }
        if (indicador) gsap.set(indicador, { display: 'flex' })
        marcar(0)

        // Cada camada ocupa um trecho curto da rolagem e o snap termina o movimento
        // na direção em que a pessoa rolou: um giro da roda encaixa uma camada,
        // e rolar para cima desfaz uma.
        const porCamada = 0.3 // fração da altura da tela

        gsap.set(etapas, { opacity: 0.35 })
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: area,
            start: 'top top',
            end: () => `+=${window.innerHeight * porCamada * etapas.length}`,
            pin: true,
            scrub: 0.4,
            snap: {
              snapTo: 'labelsDirectional',
              // sem inércia: um giro da roda é um salto rápido de ~100px, e com a
              // velocidade na conta o snap pulava direto para a última camada
              inertia: false,
              duration: { min: 0.3, max: 0.6 },
              delay: 0.05,
              ease: 'power2.inOut',
            },
            invalidateOnRefresh: true,
            onUpdate: (self) => marcar(self.progress),
          },
        })

        // a primeira etapa é a camada do fundo; a última, a da frente
        tl.addLabel('inicio', 0)
        etapas.forEach((etapa, k) => {
          const placa = placas.find((p) => Number(p.dataset.camada) === etapas.length - 1 - k)
          if (placa) {
            const opacidade = Number(getComputedStyle(placa).opacity)
            tl.fromTo(placa, { opacity: 0, x: 160 }, { opacity: opacidade, x: 0, duration: 1, ease: 'power2.out' }, k)
          }
          tl.to(etapa, { opacity: 1, duration: 0.4 }, k)
          tl.addLabel(`camada-${k + 1}`, k + 1)
        })
      })
    },
    { scope: secao },
  )

  return (
    <section id="como-funciona" ref={secao} className="pt-secao lg:pb-secao">
      <div className="moldura grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
        <h2 className="font-display text-titulo font-bold lg:col-span-8">
          <span className="block">Primeiro o essencial.</span>
          <span className="block">Depois, camada por camada.</span>
        </h2>
        <p className="max-w-texto text-abertura text-apoio lg:col-span-4">
          Ninguém precisa construir tudo de uma vez. A primeira versão resolve o problema principal, vai ao ar e
          aprende com quem usa.
        </p>
      </div>

      <div data-presa className="py-16 lg:flex lg:min-h-dvh lg:items-center lg:py-0">
        <div className="moldura grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <VidroK
              variante="processo"
              guias
              className="mx-auto w-[min(48vw,13rem)] lg:w-[min(24vw,19rem)]"
            />
            {/* só aparece com a animação ativa; as etapas da lista já dizem o mesmo */}
            <div data-indicador aria-hidden="true" className="mt-12 hidden items-center justify-center gap-4">
              <span className="flex gap-1">
                {ETAPAS.map((etapa) => (
                  <span key={etapa.nome} data-marca className="marca-etapa h-1 w-6 rounded-k" />
                ))}
              </span>
              <span data-contagem className="rotulo w-16 text-apoio" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-b border-fio">
              {ETAPAS.map((etapa, k) => (
                <li key={etapa.nome} data-etapa className="grid grid-cols-[3rem_1fr] border-t border-fio py-6">
                  <span className="rotulo pt-2 text-azul-claro">{String(k + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-subtitulo font-bold">{etapa.nome}</h3>
                    <p className="mt-2 max-w-texto text-apoio">{etapa.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <BotaoWhatsApp className="mt-12" />
          </div>
        </div>
      </div>
    </section>
  )
}
