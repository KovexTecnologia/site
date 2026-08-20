import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { FaqJsonLd } from "@/components/json-ld";
import { Method } from "@/components/method";
import { Services } from "@/components/services";
import { StackSection } from "@/components/stack-section";
import { Works } from "@/components/works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Method />
      <Works />

      {/* Respiro tipografico entre dois blocos densos */}
      <section className="border-b border-paper/10 py-24 lg:py-32">
        <div className="container-kx">
          <blockquote className="max-w-4xl">
            <p className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2] font-medium tracking-tight">
              Software de empresa não morre por falta de tecnologia. Morre
              quando ninguém mais entende por que ele foi feito daquele jeito.
            </p>
            <footer className="mt-8 font-mono text-xs tracking-[0.16em] text-mute-dim uppercase">
              Princípio de trabalho da Kovex — documentar a decisão, não só o código
            </footer>
          </blockquote>
        </div>
      </section>

      <StackSection />
      <FaqSection />
      <ContactSection />
      <FaqJsonLd />
    </>
  );
}
