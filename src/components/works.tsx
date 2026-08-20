import { Section, SectionHead } from "@/components/section";
import { works } from "@/content/site-content";

export function Works() {
  return (
    <Section id="trabalhos">
      <SectionHead
        index="03"
        label="Trabalhos"
        title="O que muda na operação depois que o sistema entra."
        lead="Três recortes de projetos recentes. O detalhe técnico completo a gente abre em conversa, com a autorização do cliente."
      />

      <div className="mt-16 grid gap-px border border-paper/10 bg-paper/10 lg:mt-24 lg:grid-cols-3">
        {works.map((work) => (
          <article
            key={work.title}
            className="flex flex-col bg-ink-950 p-8 lg:p-10"
          >
            <p className="eyebrow">{work.sector}</p>
            <h3 className="mt-6 text-xl leading-snug lg:text-2xl">
              {work.title}
            </h3>
            <p className="mt-4 leading-relaxed text-mute">{work.body}</p>

            <p className="mt-8 border-l-2 border-cobalt-500 pl-5 text-[0.95rem] leading-snug font-medium text-paper">
              {work.result}
            </p>

            <p className="mt-auto pt-8 font-mono text-xs tracking-wider text-mute-dim">
              {work.stack}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
