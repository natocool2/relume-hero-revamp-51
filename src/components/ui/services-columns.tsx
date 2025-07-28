import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export const services = [
  {
    category: "Inteligência de Negócio",
    items: [
      "Registo de empresas",
      "Modelos/planos de negócio", 
      "Gestão e administração",
      "CRMs/ERPs",
      "Apresentações de projecto"
    ]
  },
  {
    category: "Projectos e Investimento",
    items: [
      "Criação e apoio a projectos para financiamento",
      "Criação e apoio à criação de modelos e planos de negócio",
      "Apoio a candidaturas para financiamento público, bancário e privado"
    ]
  },
  {
    category: "Encaminhamento Legal",
    items: [
      "Apoio ao registo de empresas",
      "Apoio a licenciamento",
      "Apoio a registo de marcas e patentes",
      "Apoio ao tratamento de documentos",
      "Encaminhamento para apoio legal"
    ]
  },
  {
    category: "Marketing e Comunicação",
    items: [
      "Marketing digital",
      "Campanhas publicitárias",
      "Criação de conteúdo",
      "Vídeos de apresentação",
      "Vídeos promocionais",
      "Desenvolvimento de marca"
    ]
  },
  {
    category: "Desenvolvimento Tecnológico",
    items: [
      "Plataformas Web",
      "Aplicações (Web, Android, iOS)",
      "Sistemas (Faturação, E-mail, CRMs/ERPs, POSs, APIs)",
      "Blockchain, AI, VR"
    ]
  },
  {
    category: "Eventos e Networking",
    items: [
      "Summits",
      "Festivais", 
      "Networking e negócios",
      "Eventos em barco",
      "Eventos em hotel/resort"
    ]
  },
  {
    category: "Marketplaces e Mercados",
    items: [
      "Desenvolvimento de estratégias de venda",
      "Estudos de mercado",
      "Gestão de marketplaces e lojas digitais",
      "Programas de afiliados",
      "Apoio à gestão e administração"
    ]
  },
  {
    category: "Educação e Formação",
    items: [
      "Formação em contexto de trabalho",
      "Formação profissional",
      "Formação tecnológica",
      "Eventos de transferência de conhecimento"
    ]
  }
];

export const ServicesColumn = ({
  services: servicesProp,
  className,
  duration = 20,
}: {
  services: typeof services;
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <div key={index} className="flex flex-col gap-6">
            {servicesProp.map((service, serviceIndex) => (
              <Card key={serviceIndex} className="w-80 bg-neutral-900 border-neutral-800">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {service.category}
                    </h3>
                    <div className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-neutral-300 text-sm leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

