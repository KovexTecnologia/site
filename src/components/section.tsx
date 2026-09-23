import type { ReactNode } from "react";

/**
 * Secao editorial: filete no topo, rotulo numerado na coluna da esquerda e o
 * conteudo nas nove colunas da direita. O `children` volta para a largura toda,
 * para grades de cards que precisam de espaco.
 */
export function Section({
  id,
  number,
  label,
  title,
  lead,
  children,
  className = "",
}: {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-titulo`;

  return (
    <section id={id} aria-labelledby={headingId} className={`py-14 lg:py-20 ${className}`}>
      <div className="container-kx">
        <div className="grid gap-y-6 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-x-10">
          <p className="label tabular lg:col-span-3">
            <span className="text-cobalt">{number}</span>
            <span className="mx-2 text-faint" aria-hidden>
              /
            </span>
            {label}
          </p>

          <div className="lg:col-span-9">
            <h2
              id={headingId}
              className="max-w-3xl text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.02]"
            >
              {title}
            </h2>
            {lead ? (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
            ) : null}
          </div>
        </div>

        {children ? <div className="mt-14 lg:mt-20">{children}</div> : null}
      </div>
    </section>
  );
}
