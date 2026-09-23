import { Section } from "@/components/section";
import { services, stack } from "@/content/site-content";

export function Services() {
  return (
    <Section
      id="servicos"
      number="02"
      label="Serviços"
      title="Desenvolvimento para outras empresas."
      lead="Levamos para projetos de clientes o mesmo método com que construímos e mantemos nossos produtos."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.number} className="flex flex-col bg-surface p-8 sm:p-10">
            <p className="label tabular text-cobalt">{service.number}</p>
            <h3 className="mt-5 text-2xl leading-tight sm:text-[1.75rem]">{service.title}</h3>
            <p className="mt-4 leading-relaxed text-muted lg:flex-1">{service.body}</p>

            <ul className="mt-8 space-y-3 border-t border-rule pt-6">
              {service.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-[0.95rem] text-ink">
                  <span aria-hidden className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-cobalt" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-x-10">
        <p className="label text-xs lg:col-span-3 lg:pt-2.5">Tecnologias do dia a dia</p>
        <ul className="flex flex-wrap gap-2 lg:col-span-9">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-rule-strong bg-surface px-3.5 py-1.5 text-sm text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
