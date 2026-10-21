/**
 * Espaço reservado para uma captura que ainda vai ser feita (etapa 5B).
 * Existe só no layout preliminar: na entrega final todas saem.
 */
export function Reserva({
  tipo,
  assunto,
  detalhe,
  className = '',
}: {
  tipo: string
  assunto: string
  detalhe: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${assunto}`}
      className={`reserva flex flex-col justify-between gap-3 p-4 text-apoio-claro ${className}`}
    >
      <span className="rotulo">{tipo}</span>
      <span>
        <span className="block font-semibold text-navy">{assunto}</span>
        <span className="mt-1 block text-rotulo">{detalhe}</span>
      </span>
    </div>
  )
}
