import { Globe, Database } from "lucide-react";

const FinalSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-11 lg:gap-20">
        {/* Image Section */}
        <div className="w-full lg:w-[573px] h-64 md:h-80 lg:h-[581px] relative overflow-hidden rounded-lg">
          {/* Placeholder Background */}
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
            style={{
              backgroundImage: 'url(/lovable-uploads/ebedb1fe-18ec-44d8-badd-a735cd2db065.png)',
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
                   [ANÁLISE]
                 </span>
              </div>
              
              {/* Title */}
               <h2 className="w-full text-white text-3xl md:text-4xl lg:text-[47px] font-medium leading-tight lg:leading-[51.7px]">
                 Análise Abrangente de Dados
               </h2>
            </div>
            
            {/* Description */}
            <div className="w-full max-w-[501px]">
               <p className="text-base md:text-[17px] font-medium leading-6">
                 <span className="text-white">Acompanhe o comportamento do utilizador e analise padrões de dados</span>
                 <span className="text-[#B2B2B2]"> com insights abrangentes e relatórios detalhados para tomar decisões empresariais informadas.</span>
               </p>
            </div>
          </div>
          
          {/* Integration Cards */}
          <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
            {/* Analytics Integration */}
            <div className="p-4 rounded-2xl border border-white/10 flex justify-start items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <Globe size={18} color="white" />
              </div>
               <div className="w-32 flex flex-col justify-start items-start">
                 <div className="w-full text-[#ACABB2] text-sm font-normal leading-[25.2px]">
                   Integrado com
                 </div>
                 <div className="w-full text-white text-base font-medium leading-[28.8px]">
                   Plataformas de dados
                 </div>
               </div>
            </div>
            
            {/* CRM Integration */}
            <div className="p-4 rounded-2xl border border-white/10 flex justify-start items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <Database size={18} color="white" />
              </div>
               <div className="w-32 flex flex-col justify-start items-start">
                 <div className="w-full text-[#ACABB2] text-sm font-normal leading-[25.2px]">
                   Integrado com
                 </div>
                 <div className="w-full text-white text-base font-medium leading-[28.8px]">
                   Ferramentas empresariais
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;