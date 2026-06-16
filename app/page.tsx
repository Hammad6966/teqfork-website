import HeroSection from "@/components/hero-section";
import LabSection from "@/components/lab-section";
import StatsBanner from "@/components/stats-banner";
import WorkSection from "@/components/work-section";
import TestimonialsSection from "@/components/testimonials-section";
import ProcessSection from "@/components/process-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LabSection />
      <StatsBanner />
      <WorkSection />
      <TestimonialsSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
