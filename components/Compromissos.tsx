import { COMPROMISSOS } from '@/lib/conteudo'

/** De volta ao escuro: os três diferenciais em colunas, sem ícones. */
export function Compromissos() {
  return (
    <section id="por-que" className="py-secao">
      <div className="moldura">
        <h2 className="max-w-[16ch] font-display text-titulo font-bold">Do primeiro papo ao código no seu nome.</h2>
        <ul className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-6">
          {COMPROMISSOS.map((item) => (
            <li key={item.nome} className="border-t border-fio pt-6">
              <h3 className="flex items-baseline gap-4 font-display text-subtitulo font-bold">
                <span className="chevron text-azul-claro" aria-hidden="true" />
                {item.nome}
              </h3>
              <p className="mt-3 max-w-texto text-apoio lg:pr-6">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
