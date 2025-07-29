import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Star } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Compromisso com resultados",
    description: "Focamos na entrega de valor real e mensurável para os nossos clientes"
  },
  {
    icon: Star,
    title: "Inovação contínua",
    description: "Mantemo-nos sempre na vanguarda das tecnologias e metodologias"
  },
  {
    icon: Shield,
    title: "Rigor e transparência",
    description: "Operamos com os mais altos padrões de qualidade e honestidade"
  },
  {
    icon: Heart,
    title: "Excelência na entrega",
    description: "Cada projeto é tratado com o máximo cuidado e atenção aos detalhes"
  }
];

const AboutSection = () => {
  return (
    <section id="sobre" className="w-full mx-auto py-28 px-4 md:px-16" style={{ backgroundColor: '#000000', maxWidth: '1440px' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="space-y-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.h2 
              className="text-3xl md:text-5xl font-medium leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Soluções para acelerar empresas e ideias
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-muted-foreground opacity-70 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A LEAFCEL é uma empresa global de consultoria empresarial e tecnológica especializada em estruturar negócios, acelerar a inovação e escalar resultados. Unimos pensamento estratégico, domínio tecnológico e execução prática para entregar valor real aos nossos clientes.
            </motion.p>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <Target size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Missão</h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ajudar empresas e empreendedores a crescer com base em soluções integradas, inteligência de mercado e tecnologias emergentes.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <Eye size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Visão</h3>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ajudar empresas a tornarem-se mais competitivas, inovadoras e sustentáveis, através de soluções integradas que impulsionam o seu crescimento, modernizam os seus processos e aumentam o seu impacto no mercado global.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="space-y-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-medium text-center text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Valores essenciais
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;