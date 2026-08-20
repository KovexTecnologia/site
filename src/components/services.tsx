import { Section, SectionHead } from "@/components/section";
import { services } from "@/content/site-content";

export function Services() {
  return (
    <Section id="servicos">
      <SectionHead
        index="01"
        label="Serviços"
        title="Quatro frentes. Sempre em cima de um processo que já existe."
        lead="A Kovex não vende licença nem módulo pronto. Cada projeto começa pelo fluxo que a sua equipe executa hoje e termina em software que ela usa amanhã."
      />

      <div className="mt-16 grid border-t border-paper/10 lg:mt-24 lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.id}
            className="group relative border-b border-paper/10 py-10 lg:border-r lg:py-14 lg:pr-12 lg:even:border-r-0 lg:even:pr-0 lg:even:pl-12"
          >
            <div className="flex items-baseline gap-5">
              <span className="font-mono text-xs text-cobalt-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl leading-tight lg:text-[1.7rem]">
                {service.title}
              </h3>
            </div>

            <p className="mt-5 max-w-xl leading-relaxed text-mute lg:pl-10">
              {service.body}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 lg:pl-10">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm text-paper/70"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1 w-1 bg-cobalt-500"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
