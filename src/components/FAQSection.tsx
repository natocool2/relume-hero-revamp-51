import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Cosmofy use AI to optimize eCommerce revenue?",
    answer: "Cosmofy leverages AI to analyze customer data, predict buying patterns, and optimize pricing strategies to maximize revenue."
  },
  {
    question: "What features does Cosmofy offer for personalized shopping experiences?",
    answer: "Cosmofy provides AI-driven product recommendations, dynamic pricing, personalized marketing campaigns, and real-time customer behavior analysis to create unique shopping experiences for each customer."
  },
  {
    question: "How can businesses integrate Cosmofy into their existing systems?",
    answer: "Cosmofy offers seamless integration through APIs, plugins for popular eCommerce platforms, and custom integration solutions that work with your existing technology stack."
  },
  {
    question: "What are the security measures in place for data protection at Cosmofy?",
    answer: "We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and GDPR compliance to ensure your data is protected at all times."
  },
  {
    question: "How does Cosmofy support businesses in analyzing their sales performance?",
    answer: "Cosmofy provides comprehensive analytics dashboards, real-time reporting, predictive insights, and customizable metrics to help businesses understand and optimize their sales performance."
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
                    [FAQ]
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="w-full text-white text-3xl md:text-4xl lg:text-[47px] font-medium leading-tight lg:leading-[51.7px]">
                  Frequently Asked Questions
                </h2>
              </div>
              
              {/* Description */}
              <div className="w-full max-w-[501px]">
                <p className="text-base md:text-[17px] font-medium leading-6">
                  <span className="text-white">Find answers to common questions about our platform</span>
                  <span className="text-[#B2B2B2]"> with comprehensive explanations and detailed information to help you get started.</span>
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