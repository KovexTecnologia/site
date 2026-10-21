'use client'

import { useEffect, useRef } from 'react'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'

/**
 * No celular, a ação principal fica ao alcance do polegar: uma barra fixa embaixo
 * que aparece quando o botão da abertura sai da tela e some quando a chamada final
 * ou o rodapé entram (ali o botão já está à vista). Sem JavaScript ela não
 * aparece, e os botões da própria página continuam lá.
 */
export function BarraWhatsApp() {
  const barra = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barra.current
    const botaoAbertura = document.querySelector('#topo .botao')
    const finais = [document.getElementById('contato'), document.querySelector('footer')].filter(
      (f): f is HTMLElement => f !== null,
    )
    if (!el || !botaoAbertura) return

    let passouAbertura = false
    const finaisNaTela = new Set<Element>()
    const atualizar = () => {
      el.dataset.visivel = String(passouAbertura && finaisNaTela.size === 0)
    }

    const observarAbertura = new IntersectionObserver(([entrada]) => {
      // só conta como "passou" quando o botão saiu por cima, não antes de aparecer
      passouAbertura = !entrada.isIntersecting && entrada.boundingClientRect.top < 0
      atualizar()
    })
    const observarFinais = new IntersectionObserver((entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) finaisNaTela.add(entrada.target)
        else finaisNaTela.delete(entrada.target)
      }
      atualizar()
    })

    observarAbertura.observe(botaoAbertura)
    finais.forEach((f) => observarFinais.observe(f))
    return () => {
      observarAbertura.disconnect()
      observarFinais.disconnect()
    }
  }, [])

  return (
    <div
      ref={barra}
      data-visivel="false"
      className="barra-whatsapp fixed inset-x-0 bottom-0 z-(--z-cabecalho) border-t border-fio lg:hidden"
    >
      <div className="moldura pt-3">
        <BotaoWhatsApp className="w-full" />
      </div>
    </div>
  )
}
