import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AutomationSection from "@/components/AutomationSection";
import EmailMarketingSection from "@/components/EmailMarketingSection";
import FinalSection from "@/components/FinalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <AutomationSection />
      <EmailMarketingSection />
      <FinalSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
