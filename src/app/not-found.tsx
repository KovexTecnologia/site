import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-kx flex min-h-[70vh] flex-col justify-center py-32">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-6 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
        Esta página não existe — ou mudou de endereço.
      </h1>
      <p className="mt-6 max-w-lg leading-relaxed text-mute">
        Se você chegou aqui por um link nosso, avise no contato: corrigimos e
        respondemos o que você procurava.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xs bg-cobalt-600 px-7 py-4 text-sm font-medium transition-colors hover:bg-cobalt-500"
        >
          Voltar para o início
        </Link>
        <Link
          href="/#contato"
          className="rounded-xs border border-paper/20 px-7 py-4 text-sm font-medium transition-colors hover:border-paper/50"
        >
          Falar com a Kovex
        </Link>
      </div>
    </section>
  );
}
