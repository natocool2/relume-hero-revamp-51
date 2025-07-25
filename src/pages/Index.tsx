import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <ContactSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
