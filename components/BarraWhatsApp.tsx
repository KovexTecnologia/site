'use client'

import { useEffect, useRef } from 'react'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'

/**
 * No celular, a ação principal fica ao alcance do polegar: uma barra fixa embaixo
 * que aparece quando o botão da abertura sai da tela. Ela some sempre que outro
 * botão da página, a chamada final ou o rodapé está à vista, para nunca haver dois
 * botões iguais na tela. Sem JavaScript ela não aparece, e os botões da própria
 * página continuam lá.
 */
export function BarraWhatsApp({ whatsapp }: { whatsapp?: string }) {
  const barra = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barra.current
    const botaoAbertura = document.querySelector('#topo .botao')
    const escondem = [
      ...document.querySelectorAll('main .botao'),
      document.getElementById('contato'),
      document.querySelector('footer'),
    ].filter((f): f is Element => f !== null)
    if (!el || !botaoAbertura) return

    let passouAbertura = false
    const naTela = new Set<Element>()
    const atualizar = () => {
      el.dataset.visivel = String(passouAbertura && naTela.size === 0)
    }

    const observarAbertura = new IntersectionObserver(([entrada]) => {
      // só conta como "passou" quando o botão saiu por cima, não antes de aparecer
      passouAbertura = !entrada.isIntersecting && entrada.boundingClientRect.top < 0
      atualizar()
    })
    const observarEscondem = new IntersectionObserver((entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) naTela.add(entrada.target)
        else naTela.delete(entrada.target)
      }
      atualizar()
    })

    observarAbertura.observe(botaoAbertura)
    escondem.forEach((f) => observarEscondem.observe(f))
    return () => {
      observarAbertura.disconnect()
      observarEscondem.disconnect()
    }
  }, [])

  return (
    <div
      ref={barra}
      data-visivel="false"
      className="barra-whatsapp fixed inset-x-0 bottom-0 z-(--z-cabecalho) border-t border-fio lg:hidden"
    >
      <div className="moldura pt-3">
        <BotaoWhatsApp href={whatsapp} className="w-full" />
      </div>
    </div>
  )
}
