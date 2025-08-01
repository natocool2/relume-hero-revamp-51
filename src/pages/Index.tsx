import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AutomationSection from "@/components/AutomationSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <AutomationSection />
      <FinalSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
