import type { Metadata } from 'next'
import { PaginaServico } from '@/components/PaginaServico'
import { APLICATIVOS, metadataDoServico } from '@/lib/servicos'

export const metadata: Metadata = metadataDoServico(APLICATIVOS)

export default function Aplicativos() {
  return <PaginaServico pagina={APLICATIVOS} />
}
