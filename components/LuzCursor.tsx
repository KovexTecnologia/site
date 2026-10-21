'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Luz azul que acompanha o mouse nas linhas marcadas com `data-luz`
 * (receita "luz que segue o cursor" da skill). Só existe onde há mouse; no toque
 * e sem JavaScript a lista fica como está.
 */
export function LuzCursor({ children, className = '' }: { children: ReactNode; className?: string }) {
  const lista = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lista.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const mover = (e: PointerEvent) => {
      const linha = (e.target as HTMLElement).closest<HTMLElement>('[data-luz]')
      if (!linha) return
      const r = linha.getBoundingClientRect()
      linha.style.setProperty('--mx', `${e.clientX - r.left}px`)
      linha.style.setProperty('--my', `${e.clientY - r.top}px`)
    }

    el.addEventListener('pointermove', mover)
    return () => el.removeEventListener('pointermove', mover)
  }, [])

  return (
    <div ref={lista} className={className}>
      {children}
    </div>
  )
}
