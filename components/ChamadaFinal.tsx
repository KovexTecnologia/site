'use client'

import { useRef } from 'react'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { VidroK } from '@/components/VidroK'
import { COM_MOVIMENTO, gsap, useGSAP } from '@/lib/gsap'
import { CONTACT_EMAIL, RESPONSE_TIME } from '@/lib/site'

/**
 * Chamada final: as camadas que estavam soltas na abertura se fecham e formam o K
 * enquanto a seção entra na tela. Sem movimento, o K já aparece fechado.
 */
export function ChamadaFinal() {
  const secao = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(COM_MOVIMENTO, () => {
        const vidro = secao.current?.querySelector<HTMLElement>('.vidro')
        if (!vidro) return
        gsap.fromTo(
          vidro,
          { '--g': () => (window.innerWidth < 1024 ? '2.5rem' : '4.5rem') },
          {
            '--g': '0.625rem',
            ease: 'none',
            scrollTrigger: {
              trigger: secao.current,
              start: 'top 80%',
              end: 'center 55%',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        )
      })
    },
    { scope: secao },
  )

  return (
    <section id="contato" ref={secao} className="overflow-hidden border-t border-fio py-secao">
      <div className="moldura grid items-center gap-16 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <h2 className="max-w-[20ch] font-display text-titulo font-bold">
            <span className="block">Conte sua ideia.</span>
            <span className="block">A primeira conversa é gratuita.</span>
          </h2>
          <p className="mt-8 max-w-texto text-abertura text-apoio">
            Sem compromisso e sem jargão. Você sai da conversa sabendo por onde começar.
          </p>
          <BotaoWhatsApp className="mt-12" />
          <p className="mt-6 text-apoio">
            {RESPONSE_TIME} Prefere e-mail?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="link">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div className="order-first lg:order-0 lg:col-span-5">
          <VidroK
            variante="fechada"
            barra
            className="mx-auto w-[min(44vw,12rem)] lg:mr-12 lg:ml-auto lg:w-[min(24vw,20rem)]"
          />
        </div>
      </div>
    </section>
  )
}
