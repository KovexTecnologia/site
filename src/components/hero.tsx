import Link from "next/link";

import { KovexMark } from "@/components/logo";
import { hero, stats } from "@/content/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper/10 pt-32 pb-0 lg:pt-44">
      {/* malha tecnica + halo cobalto, ambos discretos */}
      <div
        aria-hidden
        className="grid-plot pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_80%_at_20%_0%,#000_10%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-cobalt-700/20 blur-[140px]"
      />

      <div className="container-kx relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-cobalt-500" aria-hidden />
              {hero.eyebrow}
            </p>

            <h1 className="mt-8 text-[clamp(2.5rem,6.2vw,4.5rem)] leading-[0.98] font-semibold">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
              {hero.lead}
            </p>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center justify-center gap-3 rounded-xs bg-cobalt-600 px-7 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-cobalt-500"
              >
                {hero.primaryCta.label}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xs border border-paper/20 px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors hover:border-paper/50"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Ficha tecnica: o "documento" da proposta, nao um card decorativo */}
          <aside className="lg:col-span-5 lg:pl-8">
            <div className="relative overflow-hidden border border-paper/12 bg-ink-900/60 p-8 backdrop-blur-sm">
              <KovexMark
                className="pointer-events-none absolute right-6 bottom-6 h-24 w-auto opacity-[0.07]"
                gradientId="kx-hero-watermark"
              />
              <p className="eyebrow">Como o trabalho é montado</p>
              <dl className="mt-7 space-y-6">
                {hero.spec.map((row) => (
                  <div
                    key={row.k}
                    className="border-t border-paper/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-mute-dim uppercase">
                      {row.k}
                    </dt>
                    <dd className="mt-2 text-[0.95rem] leading-snug text-paper/90">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        {/* Faixa de numeros */}
        <dl className="mt-20 grid grid-cols-2 border-t border-paper/10 lg:mt-28 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-paper/10 py-8 pr-6 lg:border-r lg:border-b-0 lg:last:border-r-0 lg:py-10"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-semibold tracking-tight lg:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-3 block max-w-[15rem] text-sm leading-snug text-mute">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
