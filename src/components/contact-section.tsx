import { ContactForm } from "@/components/contact-form";
import { contact } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 border-b border-paper/10 bg-ink-900/40 py-24 lg:py-32"
    >
      <div className="container-kx grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-4">
            <span>06</span>
            <span className="h-px w-8 bg-paper/25" aria-hidden />
            <span>{contact.eyebrow}</span>
          </p>

          <h2 className="mt-8 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">
            {contact.title}
          </h2>

          <p className="mt-6 max-w-md leading-relaxed text-mute">
            {contact.lead}
          </p>

          <ul className="mt-10 space-y-4">
            {contact.assurances.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-paper/80">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1 w-1 shrink-0 bg-cobalt-500"
                />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-12 space-y-6 border-t border-paper/10 pt-10">
            <div>
              <dt className="eyebrow">E-mail</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg underline underline-offset-4 decoration-paper/25 transition-colors hover:decoration-cobalt-400"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Telefone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="text-lg underline underline-offset-4 decoration-paper/25 transition-colors hover:decoration-cobalt-400"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Escritório</dt>
              <dd className="mt-2 leading-relaxed text-mute">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.district} · {siteConfig.address.city}/
                {siteConfig.address.state}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
