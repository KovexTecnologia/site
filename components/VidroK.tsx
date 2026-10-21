import type { CSSProperties } from 'react'

/** Geometria do K, igual à do kit de marca (svg/kovex-mark-on-dark.svg): não alterar. */
const CHEVRON = 'M62.75 0 H104.75 L56 65 L104.75 130 H62.75 L14 65 Z'
const BARRA = 'M0 0 H35 V27 L6.5 65 L35 103 V130 H0 Z'
const VIEWBOX = '0 0 104.75 130'

type Variante = 'solta' | 'processo' | 'fechada'

/**
 * O chevron do K em camadas de vidro, montado em CSS 3D (assinatura da direção).
 *
 * - `solta`: abertura, camadas afastadas, a ideia ainda se formando.
 * - `processo`: cada camada encaixa numa etapa; `guias` desenha o lugar delas.
 * - `fechada`: chamada final, camadas juntas e com a barra, formando o K.
 *
 * `data-camada` vai de 0 (a da frente) a 3 (a do fundo).
 */
export function VidroK({
  variante,
  guias = false,
  barra = false,
  className = '',
}: {
  variante: Variante
  guias?: boolean
  barra?: boolean
  className?: string
}) {
  const camadas = [3, 2, 1, 0]

  return (
    <div className={`vidro vidro--${variante} ${className}`} aria-hidden="true">
      <div className="vidro-pilha">
        {guias &&
          camadas.map((i) => (
            <div key={`guia-${i}`} className="vidro-placa vidro-guia" style={{ '--i': i } as CSSProperties}>
              <svg viewBox={VIEWBOX}>
                <path className="vidro-corpo" d={CHEVRON} />
              </svg>
            </div>
          ))}
        {barra && (
          <div className="vidro-placa vidro-placa--barra" style={{ '--i': 0 } as CSSProperties}>
            <svg viewBox={VIEWBOX}>
              <path className="vidro-corpo" d={BARRA} />
              <path className="vidro-reflexo" d={BARRA} />
            </svg>
          </div>
        )}
        {camadas.map((i) => (
          <div key={i} className="vidro-placa" data-camada={i} style={{ '--i': i } as CSSProperties}>
            <svg viewBox={VIEWBOX}>
              <path className="vidro-corpo" d={CHEVRON} />
              {i === 0 && <path className="vidro-reflexo" d={CHEVRON} />}
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Degradês do vidro, declarados uma vez no layout e usados por todas as placas. */
export function VidroDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="vidro-corpo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5C88EE" stopOpacity="0.78" />
          <stop offset="0.55" stopColor="#3E70E4" stopOpacity="0.42" />
          <stop offset="1" stopColor="#2247D2" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id="vidro-reflexo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.38" />
          <stop offset="0.35" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="vidro-barra" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F8FAFC" stopOpacity="0.9" />
          <stop offset="1" stopColor="#C9D6F2" stopOpacity="0.55" />
        </linearGradient>
      </defs>
    </svg>
  )
}
