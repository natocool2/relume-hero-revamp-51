import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como é que a LEAFCEL utiliza IA para otimizar a receita das empresas?",
    answer: "A LEAFCEL utiliza IA para analisar dados de clientes, prever padrões de compra e otimizar estratégias de preços para maximizar a receita."
  },
  {
    question: "Que funcionalidades oferece a LEAFCEL para experiências personalizadas?",
    answer: "A LEAFCEL fornece recomendações impulsionadas por IA, preços dinâmicos, campanhas de marketing personalizadas e análise de comportamento do cliente em tempo real para criar experiências únicas."
  },
  {
    question: "Como podem as empresas integrar a LEAFCEL nos seus sistemas existentes?",
    answer: "A LEAFCEL oferece integração perfeita através de APIs, plugins para plataformas populares e soluções de integração personalizadas que funcionam com a sua stack tecnológica existente."
  },
  {
    question: "Quais são as medidas de segurança em vigor para proteção de dados na LEAFCEL?",
    answer: "Implementamos segurança de nível empresarial incluindo encriptação end-to-end, conformidade SOC 2, auditorias de segurança regulares e conformidade GDPR para garantir que os seus dados estão protegidos."
  },
  {
    question: "Como é que a LEAFCEL apoia as empresas na análise do seu desempenho de vendas?",
    answer: "A LEAFCEL oferece dashboards analíticos abrangentes, relatórios em tempo real, insights preditivos e métricas personalizáveis para ajudar as empresas a compreender e otimizar o seu desempenho de vendas."
  }
];

const FAQSection = () => {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-11 lg:items-start">
          {/* Left Column - Header */}
          <div className="w-full lg:w-[559px] flex flex-col justify-start items-start gap-10">
            <div className="w-full flex flex-col justify-start items-start gap-8">
              <div className="w-full flex flex-col justify-start items-start gap-5">
                {/* Tag */}
                <div className="flex justify-center items-center">
                 <span 
                   className="text-xs font-mono font-normal leading-3 tracking-wider"
                   style={{ color: 'rgba(255, 255, 255, 0.70)' }}
                 >
                   [PERGUNTAS FREQUENTES]
                 </span>
                </div>
                
                {/* Title */}
                 <h2 className="w-full text-white text-3xl md:text-4xl lg:text-[47px] font-medium leading-tight lg:leading-[51.7px]">
                   Perguntas Frequentes
                 </h2>
              </div>
              
              {/* Description */}
              <div className="w-full max-w-[501px]">
                 <p className="text-base md:text-[17px] font-medium leading-6">
                   <span className="text-white">Encontre respostas a perguntas comuns sobre a nossa plataforma</span>
                   <span className="text-[#B2B2B2]"> com explicações abrangentes e informação detalhada para o ajudar a começar.</span>
                 </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - FAQ Items */}
          <div className="w-full lg:w-[692px] flex-1">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-none"
                >
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[rgba(15,27,38,0.23)] to-transparent backdrop-blur-sm border border-white/10">
                    <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]]:text-white [&[data-state=closed]]:text-white">
                      <span className="text-white text-base md:text-lg font-medium leading-7 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <p className="text-[#D0D5DD] text-sm md:text-base font-normal leading-6">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;