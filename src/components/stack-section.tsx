import { Section, SectionHead } from "@/components/section";
import { stack } from "@/content/site-content";

export function StackSection() {
  return (
    <Section id="stack" className="bg-ink-900/40">
      <SectionHead
        index="04"
        label="Stack"
        title="Tecnologia escolhida para durar, não para impressionar."
        lead="Ferramenta madura, com comunidade grande e mão de obra disponível no mercado. Quando o projeto pede algo fora dessa lista, a justificativa vem por escrito."
      />

      <dl className="mt-16 border-t border-paper/10 lg:mt-24">
        {stack.map((group) => (
          <div
            key={group.group}
            className="grid gap-4 border-b border-paper/10 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10 lg:py-10"
          >
            <dt className="font-mono text-xs tracking-[0.16em] text-mute-dim uppercase sm:pt-1.5">
              {group.group}
            </dt>
            <dd className="flex flex-wrap gap-x-8 gap-y-3">
              {group.items.map((item) => (
                <span key={item} className="text-lg text-paper/85 lg:text-xl">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
