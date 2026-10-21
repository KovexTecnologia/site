import { Abertura } from '@/components/Abertura'
import { AncoraInicial } from '@/components/AncoraInicial'
import { BarraWhatsApp } from '@/components/BarraWhatsApp'
import { Cabecalho } from '@/components/Cabecalho'
import { ChamadaFinal } from '@/components/ChamadaFinal'
import { Compromissos } from '@/components/Compromissos'
import { MakerDesk } from '@/components/MakerDesk'
import { ParaQuem } from '@/components/ParaQuem'
import { Perguntas } from '@/components/Perguntas'
import { Processo } from '@/components/Processo'
import { Rodape } from '@/components/Rodape'
import { Servicos } from '@/components/Servicos'

/** A ordem das seções é a da arquitetura aprovada (docs/decisoes.md). */
export default function Home() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <Abertura />
        <ParaQuem />
        <Servicos />
        <Processo />
        <MakerDesk />
        <Compromissos />
        <Perguntas />
        <ChamadaFinal />
      </main>
      <Rodape />
      <BarraWhatsApp />
      <AncoraInicial />
    </>
  )
}
