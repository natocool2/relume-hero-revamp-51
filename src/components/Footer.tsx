import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-16 px-4 md:px-8 lg:px-16 border-t border-white/10" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div className="w-full flex flex-col gap-12">
        {/* Main Footer Content */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 lg:max-w-[400px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">LEAFCEL</h3>
              <p className="text-[#B2B2B2] text-base leading-6">
                Consultoria empresarial e tecnológica especializada em estruturar negócios, acelerar a inovação e escalar resultados com soluções integradas.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} color="white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin size={18} color="white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={18} color="white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail size={18} color="white" />
              </a>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
            {/* Services Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-lg font-medium">Serviços</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Consultoria</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Formação</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Criação de Empresas</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Desenvolvimento IA</a>
              </div>
            </div>
            
            {/* Company Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-lg font-medium">Empresa</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Sobre Nós</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Missão</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Valores</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Contacto</a>
              </div>
            </div>
            
            {/* Support Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-lg font-medium">Suporte</h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:geral@leafcel.com" className="text-[#B2B2B2] text-base hover:text-white transition-colors">geral@leafcel.com</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">WhatsApp Business</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Diagnóstico</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Newsletter</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#B2B2B2] text-sm">
            © 2025 LEAFCEL. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/politica-privacidade" className="text-[#B2B2B2] text-sm hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-[#B2B2B2] text-sm hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;