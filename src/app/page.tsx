import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { Products } from "@/components/products";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <HowWeWork />
      <ContactSection />
    </>
  );
}
