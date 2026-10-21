'use client'

import { useEffect } from 'react'
import { ScrollTrigger } from '@/lib/gsap'

/**
 * Chegando de outra página em "/#perguntas", o navegador pula para a seção antes
 * de a área presa do processo ganhar altura, e a posição se perde. Depois que o
 * ScrollTrigger mede a página, esta peça leva de novo até a seção do endereço.
 * Fica por último na página, para rodar depois das animações já montadas.
 */
export function AncoraInicial() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    const alvo = id ? document.getElementById(id) : null
    // sem área presa (celular, menos movimento) o próprio navegador já acerta
    if (!alvo || !ScrollTrigger.getAll().some((t) => t.vars.pin)) return

    let ativo = true
    const ir = () => {
      ScrollTrigger.removeEventListener('refresh', ir)
      if (ativo) alvo.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
    // espera as fontes: a troca de fonte muda a altura do que vem antes da seção
    document.fonts.ready.then(() => {
      if (!ativo) return
      ScrollTrigger.addEventListener('refresh', ir)
      ScrollTrigger.refresh()
    })
    return () => {
      ativo = false
      ScrollTrigger.removeEventListener('refresh', ir)
    }
  }, [])

  return null
}
