import type { Metadata } from 'next'
import Link from 'next/link'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'
import { VidroK } from '@/components/VidroK'

export const metadata: Metadata = {
  title: 'Página não encontrada · Kovex Tecnologia',
  robots: { index: false, follow: true },
}

export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="flex min-h-dvh items-center py-24">
      <div className="moldura grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <p className="rotulo text-azul-claro">Erro 404</p>
          <h1 className="mt-6 max-w-[14ch] font-display text-titulo font-bold">
            Esta camada ainda não foi construída.
          </h1>
          <p className="mt-8 max-w-texto text-abertura text-apoio">
            O endereço não existe ou mudou. Volte ao início ou fale com a gente no WhatsApp.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
            <BotaoWhatsApp />
            <Link href="/" className="link">
              Voltar ao início
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <VidroK variante="processo" guias className="mx-auto w-[min(20vw,14rem)]" />
        </div>
      </div>
    </main>
  )
}
