import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-kx flex min-h-[80vh] flex-col justify-center pt-32 pb-24">
      <p className="label tabular">
        <span className="text-cobalt">404</span>
        <span className="mx-2 text-faint" aria-hidden>
          /
        </span>
        Página não encontrada
      </p>
      <h1 className="mt-6 max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.02em]">
        Esta página não existe, ou mudou de endereço.
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
        Se você chegou aqui por um link nosso, avise pelo contato que a gente corrige.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-sm bg-ink px-7 py-4 text-[0.95rem] font-medium text-paper transition-colors hover:bg-cobalt"
        >
          Voltar para o início
        </Link>
        <Link
          href="/#contato"
          className="rounded-sm border border-rule-strong bg-surface px-7 py-4 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink"
        >
          Falar com a Kovex
        </Link>
      </div>
    </section>
  );
}
