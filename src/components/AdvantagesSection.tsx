import { Clock, Cpu, Target, TrendingUp, DollarSign, Headphones, ArrowRight, Building2, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: Target,
    title: "Consultoria empresarial e tecnológica",
    description: "Diagnóstico estratégico, estruturação de negócios, processos e digitalização"
  },
  {
    icon: Users,
    title: "Formação profissional e empresarial", 
    description: "Programas práticos e personalizados em gestão, vendas, tecnologia e inovação"
  },
  {
    icon: Building2,
    title: "Criação de empresas",
    description: "Abertura legal, branding, plano de negócio e suporte total para operação"
  },
  {
    icon: Cpu,
    title: "Desenvolvimento de plataformas com IA",
    description: "Soluções digitais personalizadas, com foco em escalabilidade e performance"
  },
  {
    icon: DollarSign,
    title: "Captação de investimento",
    description: "Planeamento estratégico, elaboração de candidaturas e gestão de financiamento"
  },
  {
    icon: Globe,
    title: "Internacionalização e franchising",
    description: "Expansão estruturada com suporte jurídico, operacional e estratégico"
  }
];

const links = [
  "Ver soluções em ação",
  "Explorar capacidades", 
  "Descobrir serviços"
];

const AdvantagesSection = () => {
  return (
    <section className="w-full mx-auto pt-16 pb-[150px] px-4 md:px-16" style={{ backgroundColor: '#000000', maxWidth: '1440px' }}>
      <div className="w-full mx-auto">
        <motion.div 
          className="flex flex-col items-start gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="max-w-3xl text-left space-y-4">
            <motion.h2 
              className="text-3xl md:text-5xl font-medium leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Soluções integradas em todas as etapas do seu negócio
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-muted-foreground opacity-70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Uma abordagem completa para quem quer ir mais longe
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-6">
            {/* Side Content */}
            <motion.div 
              className="xl:col-span-1 flex flex-col gap-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Description */}
              <p className="text-base font-medium text-foreground leading-relaxed">
                Unimos pensamento estratégico, domínio tecnológico e execução prática para entregar valor real aos nossos clientes.
              </p>

              {/* Links */}
              <div className="space-y-0">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-border/30 last:border-b-0 cursor-pointer group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {link}
                    </span>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-primary/50 hover:bg-primary/70 text-foreground rounded-full py-3"
                size="lg"
              >
                Agende um Diagnóstico
              </Button>
            </motion.div>

            {/* Advantages Cards */}
            <div className="xl:col-span-3">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-md rounded-2xl border border-border/50"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="space-y-3">
                      <div className="flex flex-col items-start gap-3">
                        <advantage.icon size={20} className="text-primary" />
                        <h3 className="text-base font-medium text-foreground">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;