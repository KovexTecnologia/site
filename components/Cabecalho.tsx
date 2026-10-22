'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { MENU } from '@/lib/site'

/**
 * Cabeçalho fixo que reage à rolagem (componente cabecalho-rolagem da skill):
 * ganha fundo depois de 40px, sai de cena rolando para baixo e volta rolando para
 * cima. No celular o menu é um <details>, que abre e fecha mesmo sem JavaScript.
 *
 * `base` é "/" fora da página inicial, como no rodapé: o menu leva às seções dela.
 * `whatsapp` troca a mensagem do botão nas páginas de serviço.
 */
export function Cabecalho({ base = '', whatsapp }: { base?: '' | '/'; whatsapp?: string }) {
  const cabecalho = useRef<HTMLElement>(null)
  const menu = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const el = cabecalho.current
    if (!el) return
    let antes = window.scrollY

    const atualizar = () => {
      const y = window.scrollY
      el.dataset.rolou = String(y > 40)
      if (Math.abs(y - antes) > 6) {
        el.dataset.some = String(y > antes && y > 320 && !menu.current?.open)
        antes = y
      }
    }
    const mostrar = () => {
      el.dataset.some = 'false'
    }

    // Esc fecha o menu do celular e devolve o foco ao botão
    const tecla = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || !menu.current?.open) return
      menu.current.open = false
      menu.current.querySelector('summary')?.focus()
    }

    // marca no menu a seção que está na tela e mantém o endereço igual a ela: sem
    // isso, o "#como-funciona" de um clique ficava no endereço depois de voltar ao
    // topo, e atualizar a página pulava de novo para lá. Na abertura o "#" sai.
    // Fora da inicial o menu aponta para ela, e o endereço fica como está.
    const links = [...el.querySelectorAll<HTMLAnchorElement>('nav[data-principal] a[href^="#"]')]
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue
          const id = `#${entrada.target.id}`
          for (const link of links) {
            if (link.getAttribute('href') === id) link.setAttribute('aria-current', 'true')
            else link.removeAttribute('aria-current')
          }
          const hash = id === '#topo' ? '' : id
          if (window.location.hash !== hash) {
            const endereco = hash || window.location.pathname + window.location.search
            window.history.replaceState(window.history.state, '', endereco)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    if (!base) document.querySelectorAll('main section[id]').forEach((secao) => observador.observe(secao))

    atualizar()
    window.addEventListener('scroll', atualizar, { passive: true })
    window.addEventListener('keydown', tecla)
    el.addEventListener('focusin', mostrar)
    return () => {
      window.removeEventListener('scroll', atualizar)
      window.removeEventListener('keydown', tecla)
      el.removeEventListener('focusin', mostrar)
      observador.disconnect()
    }
  }, [base])

  const fecharMenu = () => {
    if (menu.current) menu.current.open = false
  }

  return (
    <header
      ref={cabecalho}
      className="cabecalho fixed inset-x-0 top-0 z-(--z-cabecalho) border-b border-transparent"
    >
      <div className="moldura flex h-cabecalho items-center justify-between gap-6">
        <a href={base || '#topo'} className="flex min-h-11 items-center" aria-label="Kovex, voltar ao início">
          <Image
            src="/brand/kovex-lockup-horizontal-dark.svg"
            alt=""
            width={113}
            height={28}
            priority
            unoptimized
            className="h-7 w-auto"
          />
        </a>

        <nav data-principal aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href}`}
              className="menu-link text-apoio transition-colors hover:text-branco aria-[current]:text-branco"
            >
              {item.label}
            </a>
          ))}
          <BotaoWhatsApp compacto href={whatsapp} />
        </nav>

        <details ref={menu} className="menu-movel lg:hidden">
          <summary className="rotulo flex min-h-11 cursor-pointer items-center rounded-k border border-fio px-4">
            <span className="menu-abrir">Menu</span>
            <span className="menu-fechar">Fechar</span>
          </summary>
          {/* cobre a tela até embaixo; a página atrás não rola (`:has` no globals.css) */}
          <nav
            aria-label="Principal"
            className="absolute inset-x-0 top-full h-[calc(100dvh-var(--spacing-cabecalho))] overflow-y-auto overscroll-contain bg-navy pb-8"
          >
            <ul className="moldura flex flex-col">
              {MENU.map((item) => (
                <li key={item.href} className="border-b border-fio">
                  <a
                    href={`${base}${item.href}`}
                    onClick={fecharMenu}
                    className="flex min-h-12 items-center py-3 font-display text-subtitulo font-bold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-6">
                <BotaoWhatsApp className="w-full" href={whatsapp} onClick={fecharMenu} />
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  )
}
