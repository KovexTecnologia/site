import { IDEIAS } from '@/lib/conteudo'

/**
 * Tela de respiro: uma pergunta grande, e embaixo dela três exemplos curtos para a
 * pessoa se reconhecer. O vazio continua do lado direito, em volta do texto.
 */
export function ParaQuem() {
  return (
    <section id="para-quem" className="py-secao">
      <div className="moldura grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-6">
          <h2 className="max-w-[14ch] font-display text-titulo font-bold">
            Tem uma ideia e não sabe por onde começar?
          </h2>
          <div className="mt-12 lg:mt-16">
            <p className="rotulo text-azul-claro">Por exemplo</p>
            <ul className="mt-6 grid max-w-texto gap-4">
              {IDEIAS.map((ideia) => (
                <li key={ideia} className="flex items-baseline gap-4 text-abertura">
                  <span className="chevron text-azul-claro" aria-hidden="true" />
                  {ideia}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-texto lg:col-span-5 lg:col-start-8 lg:pt-24">
          <p className="text-abertura">
            É o ponto de partida mais comum. Você sabe o problema que quer resolver, mas não sabe o que construir
            primeiro, quanto custa nem quem chamar.
          </p>
          <p className="mt-6 text-apoio">
            A gente começa por aí: entende o seu negócio, separa o essencial do que pode esperar e transforma isso
            num plano que cabe no seu momento.
          </p>
        </div>
      </div>
    </section>
  )
}
