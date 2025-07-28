import { Globe, Database } from "lucide-react";

const AutomationSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-11 lg:gap-20">
        {/* Image Section */}
        <div className="w-full lg:w-[573px] h-64 md:h-80 lg:h-[581px] relative overflow-hidden rounded-lg">
          {/* Placeholder Background */}
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              backgroundImage: 'url(/lovable-uploads/7403a0d2-ac52-4d0e-abd4-032c68e68284.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Gradient Overlays */}
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              background: 'linear-gradient(360deg, black 0%, rgba(0, 0, 0, 0) 100%)'
            }}
          ></div>
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              background: 'linear-gradient(270deg, black 0%, rgba(0, 0, 0, 0) 100%)'
            }}
          ></div>
        </div>
        
        {/* Content Section */}
        <div className="w-full lg:w-[559px] flex flex-col justify-start items-start gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-5">
               {/* Tag */}
               <div className="flex justify-center items-center">
                 <span 
                   className="text-xs font-mono font-normal leading-3 tracking-wider"
                   style={{ color: 'rgba(255, 255, 255, 0.70)' }}
                 >
                   [CONSULTORIA EMPRESARIAL]
                 </span>
               </div>
               
               {/* Title */}
                <h2 className="w-full text-white text-3xl md:text-4xl lg:text-[47px] font-medium leading-tight lg:leading-[51.7px]">
                  Da Ideia ao Sucesso no Mercado
                </h2>
            </div>
            
            {/* Description */}
            <div className="w-full">
               <p className="text-base md:text-[17px] font-medium leading-6 mb-6">
                 <span className="text-white">Transformamos visões empreendedoras em empresas sustentáveis</span>
                 <span className="text-[#B2B2B2]"> através de um acompanhamento integral em cada fase da jornada empresarial. Desde a validação inicial da ideia, utilizando metodologias Lean e Design Thinking, até à consolidação no mercado com estratégias de crescimento comprovadas.</span>
               </p>
               
               <div className="mb-6">
                 <h3 className="text-white text-lg font-medium mb-4">Nossa Abordagem em 8 Fases:</h3>
                 <div className="space-y-3">
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Inteligência de Negócio</span> - Planeamento estratégico com análise de mercado e modelação financeira multi-cenário
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Criação de Projetos</span> - Estruturação de iniciativas investíveis com frameworks LogFrame e Theory of Change
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Captação de Investimento</span> - Preparação para funding público e privado, com business plans que aumentam em 65% as chances de financiamento
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Estruturação Legal</span> - Registo de empresas, licenciamento e proteção de propriedade intelectual
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Marketing Estratégico</span> - Desenvolvimento de marca e go-to-market strategies baseadas em validação de mercado
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Gestão e Administração</span> - Implementação de sistemas OKR, governança corporativa e processos otimizados
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Networking e Parcerias</span> - Conexão com ecossistemas de inovação e parceiros estratégicos
                     </p>
                   </div>
                   <div className="flex items-start gap-3">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                     <p className="text-[#B2B2B2] text-sm leading-relaxed">
                       <span className="text-white font-medium">Formação Executiva</span> - Capacitação contínua da equipa de liderança
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Methodology */}
          <div className="w-full">
            <h3 className="text-white text-lg font-medium mb-4">Metodologia Baseada em:</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">Y Combinator</span>
              <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">500 Startups</span>
              <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">Techstars</span>
              <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">IKEA Democratic Design</span>
              <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">Google OKR System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;