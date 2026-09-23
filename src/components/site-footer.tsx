import Link from "next/link";

import { KovexLockup } from "@/components/logo";
import { products } from "@/content/site-content";
import { nav, siteConfig } from "@/lib/site-config";

const linkClass = "text-[0.95rem] text-paper-mute transition-colors hover:text-paper";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { address } = siteConfig;

  return (
    <footer className="bg-navy text-paper-mute">
      <div className="container-kx pt-20 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <KovexLockup tone="dark" className="h-7 w-auto" />
            <p className="mt-6 max-w-xs leading-relaxed">{siteConfig.shortDescription}</p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className="label text-xs text-paper">Kovex</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="label text-xs text-paper">Produtos</h2>
            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a href={product.url} target="_blank" rel="noopener" className={linkClass}>
                    {product.name} <span aria-hidden>↗</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h2 className="label text-xs text-paper">Contato</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener" className={linkClass}>
                  WhatsApp {siteConfig.phoneDisplay}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <p>
              © {year} {siteConfig.legalName} ·{" "}
              <span className="whitespace-nowrap">CNPJ {siteConfig.cnpj}</span>
            </p>
            <address className="not-italic">
              {address.street}, {address.complement} · {address.district}, {address.city}/
              {address.state} · CEP {address.postalCode}
            </address>
          </div>
          <Link href="/privacidade" className="transition-colors hover:text-paper">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
