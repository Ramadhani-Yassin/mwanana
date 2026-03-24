import { Clients } from "@/components/landing/clients";
import { CtaBand } from "@/components/landing/cta-band";
import { Hero } from "@/components/landing/hero";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { Services } from "@/components/landing/services";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Testimonials } from "@/components/landing/testimonials";
import { WhyChooseUs } from "@/components/landing/why-choose-us";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Testimonials />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
