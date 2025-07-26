import { Button } from "@relume_io/relume-ui";
import { Star, Heart, Home } from "lucide-react";
import { LogoCarousel } from "./LogoCarousel";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  features?: {
    title: string;
    description: string;
  }[];
}

const HeroSection = ({
  tagline = "LEAFCEL",
  heading = "Estratégia. Tecnologia. <br />Resultados.",
  description = "Consultoria empresarial e tecnológica para empresas com ambição global. Da estrutura à execução, transformamos desafios em crescimento sustentável.",
  primaryButtonText = "Agende um Diagnóstico",
  secondaryButtonText = "Ver Soluções",
  features = [
    {
      title: "Diagnóstico estratégico completo",
      description: "Análise profunda e personalizada do seu negócio com foco em resultados mensuráveis."
    },
    {
      title: "Equipa multidisciplinar", 
      description: "Profissionais com experiência nas áreas críticas da sua empresa para garantir execução de excelência."
    },
    {
      title: "Atuação global",
      description: "Capacidade de operação em diversos mercados e setores com tecnologia de última geração."
    }
  ]
}: HeroSectionProps) => {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  
  const lines = heading.split('<br />').map(line => line.trim());
  const line1 = lines[0] || "";
  const line2 = lines[1] || "";
  
  useEffect(() => {
    let index = 0;
    const maxLength = Math.max(line1.length, line2.length);
    
    const timer = setInterval(() => {
      if (index <= maxLength) {
        setDisplayText1(line1.slice(0, index));
        setDisplayText2(line2.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80); // 80ms per character
    
    return () => clearInterval(timer);
  }, [line1, line2]);

  return (
    <div className="min-h-screen text-foreground relative mx-auto" style={{ backgroundColor: '#000000', maxWidth: '1440px' }}>
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto translate-x-0 translate-y-[-5%] md:translate-x-[13%] md:translate-y-[-22%]">
        <Spline 
          scene="https://prod.spline.design/wh9VKVcSUKEe0xRM/scene.splinecode"
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
          onLoad={() => console.log('Spline loaded successfully')}
          onError={(error) => console.error('Spline error:', error)}
        />
      </div>

      {/* Color Overlay with Hue Blend Mode */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{
        backgroundColor: '#5A9279',
        mixBlendMode: 'hue'
      }}></div>

      {/* Gradient Overlay */}
      <div className="absolute z-5 pointer-events-none" style={{
        top: '-30%',
        left: '-30%',
        width: '160%',
        height: '160%',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)',
        pointerEvents: 'none'
      }}></div>

      {/* Hero Section */}
      <section className="px-4 md:px-16 py-28 overflow-hidden relative z-10 transform -translate-y-[5%] md:translate-y-0">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="space-y-6">
                  <motion.h1 
                    className="text-[32px] md:text-[56px] font-medium leading-tight text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                  >
                    {displayText1}
                    <br />
                    {displayText2}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block ml-1"
                    >
                      |
                    </motion.span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg md:text-xl leading-relaxed text-muted-foreground opacity-70 max-w-xs md:max-w-sm"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    {description}
                  </motion.p>
                </div>
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <Button 
                  variant="primary" 
                  size="primary"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3"
                >
                  {primaryButtonText}
                </Button>
                <Button 
                  variant="secondary" 
                  size="primary"
                  className="bg-secondary/20 hover:bg-secondary/30 text-foreground border border-border rounded-full px-8 py-3"
                >
                  {secondaryButtonText}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="px-4 md:px-16 py-28 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="space-y-8"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {index === 0 && <Star size={19} color="white" />}
                    {index === 1 && <Heart size={19} color="white" />}
                    {index === 2 && <Home size={19} color="white" />}
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </motion.div>
                  <div className="space-y-6">
                    <motion.p 
                      className="text-base leading-relaxed" 
                      style={{ color: '#B2B2B2' }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Logo Carousel Section */}
      <LogoCarousel />
    </div>
  );
};

export default HeroSection;