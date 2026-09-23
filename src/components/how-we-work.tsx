import { Section } from "@/components/section";
import { principles, steps } from "@/content/site-content";

export function HowWeWork() {
  return (
    <Section
      id="como-trabalhamos"
      number="03"
      label="Como trabalhamos"
      title="Do primeiro papo ao sistema no ar, sem surpresa no caminho."
    >
      <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number} className="border-t border-ink pt-6">
            <p className="label tabular text-cobalt">{step.number}</p>
            <h3 className="mt-4 text-xl leading-snug sm:text-2xl">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-lg border border-rule bg-surface p-8 sm:p-10 lg:mt-24 lg:p-12">
        <p className="label text-xs">O que não muda de um projeto para outro</p>
        <ul className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3 className="text-xl leading-snug sm:text-[1.4rem]">{principle.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{principle.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
