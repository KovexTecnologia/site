import type { Metadata } from 'next'
import { PaginaServico } from '@/components/PaginaServico'
import { metadataDoServico, SISTEMAS } from '@/lib/servicos'

export const metadata: Metadata = metadataDoServico(SISTEMAS)

export default function Sistemas() {
  return <PaginaServico pagina={SISTEMAS} />
}
