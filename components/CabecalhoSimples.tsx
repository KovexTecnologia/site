import Image from 'next/image'
import Link from 'next/link'

/**
 * Cabeçalho das páginas fora da inicial (privacidade, 404): a marca, que leva ao
 * início, e o link "Voltar ao início". Onde a página já oferece esse link no
 * conteúdo, `voltar={false}` tira a repetição.
 */
export function CabecalhoSimples({ voltar = true }: { voltar?: boolean }) {
  return (
    <header className="border-b border-fio">
      <div className="moldura flex h-cabecalho items-center justify-between gap-6">
        <Link href="/" className="flex min-h-11 items-center" aria-label="Kovex, voltar ao início">
          <Image
            src="/brand/kovex-lockup-horizontal-dark.svg"
            alt=""
            width={113}
            height={28}
            priority
            unoptimized
            className="h-7 w-auto"
          />
        </Link>
        {voltar && (
          <Link href="/" className="link">
            Voltar ao início
          </Link>
        )}
      </div>
    </header>
  )
}
