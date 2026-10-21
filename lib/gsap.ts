'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

/**
 * A mesma família de curva do CSS (`--ease-saida`, cubic-bezier(0.22, 1, 0.36, 1)):
 * desaceleração forte em tudo o que entra.
 */
export const EASE = 'power4.out'

/** Só anima com espaço para o efeito e sem pedido de menos movimento. */
export const COM_MOVIMENTO = '(prefers-reduced-motion: no-preference)'
export const DESKTOP_COM_MOVIMENTO = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'

export { gsap, ScrollTrigger, SplitText, useGSAP }
