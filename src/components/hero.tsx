import { CHEVRON_PATH } from "@/components/logo";
import { hero, index } from "@/content/site-content";

/**
 * O H1 e o paragrafo nao animam a entrada: sao o maior conteudo da primeira
 * tela (LCP), e comecar em opacity 0 atrasaria a metrica.
 */
export function Hero() {
  return (
    <section className="pb-4">
      {/* overflow-hidden aqui corta o chevron rente ao filete do indice */}
      <div className="relative overflow-hidden">
        <HeroChevron />

        <div className="container-kx relative pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
          <p className="label flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-cobalt" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1 className="mt-7 text-[clamp(2.6rem,5.8vw,4.9rem)] leading-[0.98] tracking-[-0.02em]">
            <span className="block">{hero.titleStart}</span>
            <span className="block text-cobalt">{hero.titleEnd}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed">
            {hero.lead}
          </p>

          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:120ms] sm:flex-row sm:items-center sm:gap-6">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-ink px-7 py-4 text-[0.95rem] font-medium text-paper transition-colors hover:bg-cobalt"
            >
              {hero.primaryCta.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 px-1 py-4 text-[0.95rem] font-medium text-ink underline decoration-rule-strong decoration-1 underline-offset-[6px] transition-colors hover:text-cobalt hover:decoration-cobalt"
            >
              {hero.secondaryCta.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="Nesta página" className="container-kx">
        <ol className="grid border-t border-ink sm:grid-cols-3">
          {index.map((item, i) => (
            <li
              key={item.href}
              className={`border-b border-rule sm:border-b-0 ${i > 0 ? "sm:border-l sm:pl-6 lg:pl-8" : ""} ${i < index.length - 1 ? "sm:pr-6 lg:pr-8" : ""}`}
            >
              <a href={item.href} className="group block py-6">
                <span className="label tabular flex items-baseline gap-3">
                  <span className="text-cobalt">{item.number}</span>
                  <span className="text-ink transition-colors group-hover:text-cobalt">
                    {item.label}
                  </span>
                </span>
                <span className="mt-2 block text-[0.95rem] leading-relaxed text-muted">
                  {item.body}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

/**
 * O chevron da marca em escala de cartaz: ocupa a altura do bloco, sai pelo
 * topo e e cortado rente ao filete do indice. A ancora em 50% + 12rem deixa o
 * braco superior logo depois do fim da primeira linha do H1 em qualquer largura
 * a partir de `lg`; abaixo disso ele brigaria com o texto, entao some.
 */
function HeroChevron() {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 130 130"
      preserveAspectRatio="xMinYMid meet"
      className="pointer-events-none absolute top-0 left-[calc(50%+12rem)] hidden h-full w-auto lg:block"
    >
      <defs>
        <linearGradient id="kx-hero-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3E70E4" stopOpacity="0.16" />
          <stop offset="1" stopColor="#2247D2" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={CHEVRON_PATH} fill="url(#kx-hero-fill)" />
      <path
        d={CHEVRON_PATH}
        transform="translate(14 0)"
        fill="none"
        stroke="#2A55DC"
        strokeOpacity="0.22"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
