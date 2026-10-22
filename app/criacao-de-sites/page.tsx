import type { Metadata } from 'next'
import { PaginaServico } from '@/components/PaginaServico'
import { metadataDoServico, SITES } from '@/lib/servicos'

export const metadata: Metadata = metadataDoServico(SITES)

export default function Sites() {
  return <PaginaServico pagina={SITES} />
}
