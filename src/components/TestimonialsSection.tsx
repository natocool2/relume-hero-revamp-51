import { motion } from "motion/react";
import { TestimonialsColumn, testimonials } from "@/components/ui/testimonials-columns-1";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
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
               [TESTEMUNHOS]
             </span>
          </div>

          <div className="flex flex-col gap-6 lg:gap-7 text-center">
             <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[47px] font-medium leading-tight lg:leading-[1.1]">
               O que os Nossos Clientes Dizem
             </h2>
            
            <div className="max-w-md lg:max-w-lg mx-auto">
               <p className="text-white text-base lg:text-[17px] font-medium leading-relaxed">
                 Veja como a nossa plataforma transforma negócios
                 <span className="text-neutral-400"> através de histórias reais de clientes satisfeitos e as suas jornadas de sucesso.</span>
               </p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;