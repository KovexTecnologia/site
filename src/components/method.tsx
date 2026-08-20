import { differentiators, method } from "@/content/site-content";
import { Section } from "@/components/section";

export function Method() {
  return (
    <Section id="metodo" className="bg-ink-900/40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow flex items-center gap-4">
              <span>02</span>
              <span className="h-px w-8 bg-paper/25" aria-hidden />
              <span>Método</span>
            </p>
            <h2 className="mt-8 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">
              Do primeiro café ao sistema em produção.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-mute">
              O mesmo roteiro em todo projeto, do sistema interno de quinze
              usuários ao produto que atende toda a base de clientes.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {method.map((phase) => (
            <li
              key={phase.step}
              className="grid gap-4 border-t border-paper/10 py-10 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-8 lg:py-12"
            >
              <span
                className="font-display text-3xl font-semibold text-paper/20 tabular-nums"
                aria-hidden
              >
                {phase.step}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl lg:text-2xl">{phase.title}</h3>
                  <span className="font-mono text-xs tracking-wider text-cobalt-400">
                    {phase.duration}
                  </span>
                </div>
                <p className="mt-4 max-w-xl leading-relaxed text-mute">
                  {phase.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-24 grid gap-px border border-paper/10 bg-paper/10 sm:grid-cols-3">
        {differentiators.map((item) => (
          <div key={item.title} className="bg-ink-950 p-8 lg:p-10">
            <h3 className="text-lg leading-snug">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-mute">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
