import { motion } from "motion/react";
import { ServicesColumn, services } from "@/components/ui/services-columns";

const firstColumn = services.slice(0, 3);
const secondColumn = services.slice(3, 6);
const thirdColumn = services.slice(6, 8);

const ServicesSection = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="inline-block">
             <span 
               className="text-xs font-mono font-normal leading-3 tracking-wider pb-[10px]"
               style={{ color: 'rgba(255, 255, 255, 0.70)' }}
              >
                [SERVIÇOS]
              </span>
          </div>

          <div className="flex flex-col gap-6 lg:gap-7 text-center">
             <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[47px] font-medium leading-tight lg:leading-[1.1]">
                Os Nossos Serviços
              </h2>
            
            <div className="max-w-md lg:max-w-lg mx-auto">
               <p className="text-white text-base lg:text-[17px] font-medium leading-relaxed">
                  Descubra a gama completa de soluções que oferecemos
                  <span className="text-neutral-400"> para impulsionar o seu negócio em todas as áreas estratégicas.</span>
                </p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <ServicesColumn services={firstColumn} duration={15} />
          <ServicesColumn services={secondColumn} className="hidden md:block" duration={19} />
          <ServicesColumn services={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;