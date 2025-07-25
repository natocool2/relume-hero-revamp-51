import { Play } from "lucide-react";

const EmailMarketingSection = () => {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="max-w-7xl mx-auto relative">
        {/* Content Container */}
        <div className="flex flex-col gap-14 lg:gap-16">
          {/* Text Content */}
          <div className="max-w-lg lg:max-w-xl">
            <div className="flex flex-col gap-8 lg:gap-10">
              {/* Tag */}
              <div className="inline-block">
                <span 
                  className="text-xs font-mono font-normal leading-3 tracking-wider"
                  style={{ color: 'rgba(255, 255, 255, 0.70)' }}
                >
                  [AUTOMATION]
                </span>
              </div>
              
              {/* Title and Description */}
              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[47px] font-medium leading-tight lg:leading-[1.1]">
                  Sophisticated Email Marketing Tools
                </h2>
                
                <div className="max-w-md lg:max-w-lg">
                  <p className="text-white text-base lg:text-[17px] font-medium leading-relaxed">
                    Streamline your email campaigns
                    <span className="text-neutral-400"> by sending periodic emails to prospects and customers with our email automation feature.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/dba2ea7e-cb01-4704-be01-a2d6c44aea59.png" 
                alt="Email Marketing Dashboard"
                className="w-full h-auto object-cover"
              />
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(360deg, black 0%, rgba(11, 12, 20, 0) 100%)'
                }}
              />
            </div>
            
            {/* Floating Learn More Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-6 lg:bottom-8">
              <div 
                className="flex items-center gap-4 px-2 py-2 pr-4 rounded-full backdrop-blur-lg"
                style={{
                  background: 'rgba(147, 157, 184, 0.18)',
                  border: '1px solid rgba(201, 211, 238, 0.15)'
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(147, 157, 184, 0.18)',
                    border: '1px solid rgba(201, 211, 238, 0.15)'
                  }}
                >
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-white text-sm font-medium hidden sm:block">
                  Learn more how to use
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketingSection;