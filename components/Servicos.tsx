import { LuzCursor } from '@/components/LuzCursor'
import { SERVICOS } from '@/lib/conteudo'

/** Os quatro serviços numa lista com fios, sem cartões nem ícones, numa faixa de superfície. */
export function Servicos() {
  return (
    <section id="servicos" className="bg-superficie py-secao">
      <div className="moldura">
        <h2 className="max-w-[16ch] font-display text-titulo font-bold">Do sistema ao app, num lugar só.</h2>

        <LuzCursor className="mt-16">
          <ul className="border-b border-fio">
            {SERVICOS.map((servico) => (
              <li
                key={servico.nome}
                data-luz
                className="servico grid gap-3 border-t border-fio py-8 lg:grid-cols-12 lg:items-baseline lg:gap-6 lg:py-12"
              >
                <h3 className="flex items-baseline gap-4 font-display text-subtitulo font-bold lg:col-span-5">
                  <span className="chevron text-azul-claro" aria-hidden="true" />
                  {servico.nome}
                </h3>
                <p className="max-w-texto text-apoio lg:col-span-6 lg:col-start-7">{servico.texto}</p>
              </li>
            ))}
          </ul>
        </LuzCursor>
      </div>
    </section>
  )
}
