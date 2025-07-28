import { Globe, Database } from "lucide-react";

const AutomationSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-11 lg:gap-20">
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
        
        {/* Image Section */}
        <div className="w-full lg:w-[573px] h-64 md:h-72 lg:h-[400px] relative overflow-hidden rounded-lg">
          {/* Placeholder Background */}
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              backgroundImage: 'url(/lovable-uploads/a465654e-c84b-484a-8023-cf30b1b49e41.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Gradient Overlays */}
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              background: 'linear-gradient(360deg, black 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 100%)'
            }}
          ></div>
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              background: 'linear-gradient(270deg, black 0%, rgba(0, 0, 0, 0) 100%)'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;