import { Section, SectionHead } from "@/components/section";
import { faq } from "@/content/site-content";

export function FaqSection() {
  return (
    <Section id="duvidas">
      <SectionHead
        index="05"
        label="Dúvidas"
        title="As perguntas que sempre aparecem na primeira reunião."
        lead="Se a sua não estiver aqui, mande no formulário abaixo — a resposta vem por e-mail, sem agendamento obrigatório."
      />

      <div className="mt-16 border-t border-paper/10 lg:mt-24">
        {faq.map((item) => (
          <details
            key={item.q}
            name="faq-kovex"
            className="group border-b border-paper/10"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 text-lg leading-snug marker:content-none lg:text-xl [&::-webkit-details-marker]:hidden">
              <h3 className="font-display font-medium">{item.q}</h3>
              <span
                aria-hidden
                className="relative mt-2 block h-3 w-3 shrink-0"
              >
                <span className="absolute top-1/2 left-0 block h-px w-3 bg-cobalt-400" />
                <span className="absolute top-1/2 left-0 block h-px w-3 bg-cobalt-400 rotate-90 transition-transform duration-200 group-open:rotate-0" />
              </span>
            </summary>
            <p className="max-w-3xl pb-8 leading-relaxed text-mute">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
