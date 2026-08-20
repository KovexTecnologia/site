import Link from "next/link";

import { KovexLockup } from "@/components/logo";
import { services } from "@/content/site-content";
import { nav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950">
      <div className="container-kx py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <KovexLockup className="h-6 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute">
              {siteConfig.shortDescription}
            </p>
            <p className="mt-6 font-mono text-xs tracking-wider text-mute-dim">
              CNPJ {siteConfig.cnpj}
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Serviços">
            <h2 className="eyebrow">Serviços</h2>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/#servicos"
                    className="text-sm text-mute transition-colors hover:text-paper"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Navegação do rodapé">
            <h2 className="eyebrow">Navegar</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mute transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-mute transition-colors hover:text-paper"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow">Contato</h2>
            <address className="mt-6 space-y-3 text-sm leading-relaxed text-mute not-italic">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-paper"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="transition-colors hover:text-paper"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district} · {siteConfig.address.city}/
                {siteConfig.address.state}
                <br />
                CEP {siteConfig.address.postalCode}
              </p>
            </address>

            <ul className="mt-6 flex gap-5">
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-sm text-mute transition-colors hover:text-paper"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-sm text-mute transition-colors hover:text-paper"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-sm text-mute transition-colors hover:text-paper"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-wider text-mute-dim">
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs tracking-wider text-mute-dim">
            Feito em {siteConfig.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
