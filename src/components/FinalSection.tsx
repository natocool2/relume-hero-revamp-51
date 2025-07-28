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
                   [CONSULTORIA TECNOLÓGICA]
                 </span>
              </div>
              
              {/* Title */}
               <h2 className="w-full text-white text-3xl md:text-4xl lg:text-[47px] font-medium leading-tight lg:leading-[51.7px]">
                 Seu Departamento Tecnológico Externo
               </h2>
            </div>
            
            {/* Description */}
            <div className="w-full">
               <p className="text-base md:text-[17px] font-medium leading-6 mb-6">
                 <span className="text-white">Atuamos como o departamento tecnológico completo para empresas que não desejam ou não têm recursos para manter uma equipe interna de TI robusta.</span>
                 <span className="text-[#B2B2B2]"> Desenvolvemos soluções tecnológicas à medida do seu modelo de negócios, com desenvolvimento e suporte contínuo adaptados às necessidades específicas de cada setor.</span>
               </p>
               
               
               <div className="mb-6">
                 <h3 className="text-white text-lg font-medium mb-4">Setores de Especialização:</h3>
                 <p className="text-[#B2B2B2] text-sm leading-relaxed">
                   Imobiliária • Hotelaria • Viagens e Turismo • Gestão e Administração • Financeira • Formação • Eventos • Saúde • Estética • Transportes • Energia e Ambiente
                 </p>
               </div>
               
               <div>
                 <h3 className="text-white text-lg font-medium mb-4">Standards e Certificações:</h3>
                 <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">ISO 42001 AI Management</span>
                   <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">WCAG 2.1</span>
                   <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">OAuth 2.0</span>
                   <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">OWASP Security</span>
                   <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">GraphQL</span>
                   <span className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-[#B2B2B2]">MLOps Best Practices</span>
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