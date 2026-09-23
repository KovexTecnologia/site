import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { contact } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <Section
      id="contato"
      number="04"
      label="Contato"
      title={contact.title}
      lead={contact.lead}
      className="pb-28 lg:pb-36"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="order-2 lg:order-1 lg:col-span-3">
          <dl className="space-y-8">
            <div>
              <dt className="label text-xs">E-mail</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-cobalt hover:decoration-cobalt"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-xs">WhatsApp</dt>
              <dd className="mt-2">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:text-cobalt hover:decoration-cobalt"
                >
                  {siteConfig.phoneDisplay}
                  <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-10 border-t border-rule pt-6 text-sm leading-relaxed text-muted">
            {contact.supportNote.text}{" "}
            <a
              href={`mailto:${contact.supportNote.email}`}
              className="text-ink underline underline-offset-4 hover:text-cobalt"
            >
              {contact.supportNote.email}
            </a>
            .
          </p>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-9">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
