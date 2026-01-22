import { HeroSection } from "@/components/hero-section";
import { LabSection } from "@/components/lab-section";
import { WorkSection } from "@/components/work-section";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LabSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
