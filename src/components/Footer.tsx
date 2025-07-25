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
              <h3 className="text-white text-2xl font-semibold">Cosmofy</h3>
              <p className="text-[#B2B2B2] text-base leading-6">
                Revolutionizing eCommerce with AI-powered solutions for personalized shopping experiences and optimized revenue streams.
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
            {/* Product Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-lg font-medium">Product</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Features</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Analytics</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Automation</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Integrations</a>
              </div>
            </div>
            
            {/* Company Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-lg font-medium">Company</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">About</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Blog</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Careers</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Support Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-lg font-medium">Support</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Help Center</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Documentation</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">API Reference</a>
                <a href="#" className="text-[#B2B2B2] text-base hover:text-white transition-colors">Status</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#B2B2B2] text-sm">
            © 2024 Cosmofy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#B2B2B2] text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#B2B2B2] text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[#B2B2B2] text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;