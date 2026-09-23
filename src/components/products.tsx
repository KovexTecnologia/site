import { Section } from "@/components/section";
import { products, productsNote, type Product } from "@/content/site-content";

export function Products() {
  return (
    <Section
      id="produtos"
      number="01"
      label="Produtos"
      title="Software próprio, criado a partir de um problema real."
      lead="Cada produto da Kovex tem site, suporte e evolução próprios, e é vendido por assinatura. A empresa por trás de todos é a mesma."
    >
      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <p className="flex items-center gap-4 rounded-lg border border-dashed border-rule-strong px-6 py-5 text-[0.95rem] text-muted">
          <span
            aria-hidden
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule-strong text-faint"
          >
            +
          </span>
          {productsNote}
        </p>
      </div>
    </Section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const live = product.status === "Em operação";

  return (
    <article
      aria-labelledby={`produto-${product.id}`}
      className="grid overflow-hidden rounded-lg border border-rule bg-surface lg:grid-cols-12"
    >
      {/* Painel na identidade do proprio produto (escuro), contrastando com a Kovex. */}
      <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-[#0b1019] p-8 text-paper sm:p-10 lg:col-span-5">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(62,112,228,0.35),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(248,250,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,250,252,0.05)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_top,black,transparent)]"
        />

        <p className="relative inline-flex w-fit items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3 py-1 text-xs font-medium text-paper/85">
          <span
            aria-hidden
            className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-amber-300"}`}
          />
          {product.status}
        </p>

        <div className="relative mt-12 flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG de marca, sem otimizacao. */}
          <img src={product.logo} alt="" width={56} height={56} className="h-14 w-14" />
          <div>
            <h3
              id={`produto-${product.id}`}
              className="text-3xl leading-none text-paper sm:text-4xl"
            >
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-paper-mute">{product.tagline}</p>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
        <p className="text-lg leading-relaxed text-ink-soft">{product.description}</p>

        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-baseline gap-3 text-[0.95rem] text-ink">
              <span aria-hidden className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-cobalt" />
              {feature}
            </li>
          ))}
        </ul>

        <dl className="mt-10 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
          <div>
            <dt className="label text-xs">Para quem</dt>
            <dd className="mt-2 text-[0.95rem] text-ink">{product.audience}</dd>
          </div>
          <div>
            <dt className="label text-xs">Modelo</dt>
            <dd className="mt-2 text-[0.95rem] text-ink">{product.model}</dd>
          </div>
        </dl>

        <a
          href={product.url}
          target="_blank"
          rel="noopener"
          className="group mt-10 inline-flex items-center gap-2 text-[0.95rem] font-medium text-cobalt underline decoration-cobalt/30 underline-offset-[6px] transition-colors hover:decoration-cobalt"
        >
          Visitar {product.urlLabel}
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      </div>
    </article>
  );
}
