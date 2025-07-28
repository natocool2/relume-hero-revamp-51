import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AutomationSection from "@/components/AutomationSection";
import EmailMarketingSection from "@/components/EmailMarketingSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";

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
      
      <EmailMarketingSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
