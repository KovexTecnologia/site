import { PERGUNTAS } from '@/lib/conteudo'
import { WHATSAPP_URL } from '@/lib/site'

/**
 * Perguntas frequentes com <details> nativo: abre e fecha por teclado e sem
 * JavaScript. O `name` em comum deixa uma aberta por vez nos navegadores que
 * suportam; a abertura animada vem do CSS (`::details-content`).
 *
 * A faixa de superfície fica aqui e não em "Por que a Kovex": o degrau de baixo do
 * MakerDesk deixa ver o navy do fundo, e uma seção de superfície logo depois dele
 * mostraria a emenda.
 */
export function Perguntas() {
  return (
    <section id="perguntas" className="bg-superficie py-secao">
      <div className="moldura grid gap-12 lg:grid-cols-12 lg:gap-6">
        <h2 className="max-w-[10ch] font-display text-titulo font-bold lg:col-span-4">
          Perguntas que todo mundo faz.
        </h2>
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="border-b border-fio">
            {PERGUNTAS.map((item) => (
              <details key={item.pergunta} name="perguntas" className="pergunta border-t border-fio">
                <summary className="flex min-h-11 items-center justify-between gap-6 py-6 text-abertura font-semibold">
                  {item.pergunta}
                  <span className="pergunta-sinal text-azul-claro" aria-hidden="true" />
                </summary>
                <p className="max-w-texto pb-8 text-apoio">{item.resposta}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-apoio">
            Não achou sua dúvida?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="link">
              Pergunte no WhatsApp<span className="sr-only"> (abre o WhatsApp)</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
