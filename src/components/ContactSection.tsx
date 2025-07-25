import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full mx-auto py-28 px-4 md:px-16" style={{ backgroundColor: '#000000', maxWidth: '1440px' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="space-y-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.h2 
              className="text-3xl md:text-5xl font-medium leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Vamos trabalhar juntos?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-muted-foreground opacity-70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entre em contacto connosco para discutir como podemos acelerar o seu negócio
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-foreground">Envie-nos uma mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome</label>
                    <Input 
                      placeholder="O seu nome"
                      className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Empresa</label>
                    <Input 
                      placeholder="Nome da empresa"
                      className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="seu.email@empresa.com"
                    className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensagem</label>
                  <Textarea 
                    placeholder="Conte-nos sobre o seu projeto ou desafio..."
                    rows={6}
                    className="bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3"
                  size="lg"
                >
                  📨 Enviar mensagem
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-foreground">Informações de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium text-foreground">Email</h4>
                    <a 
                      href="mailto:geral@leafcel.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      geral@leafcel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">+351 xxx xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-medium text-foreground">WhatsApp Business</h4>
                    <p className="text-muted-foreground">Disponível para consultas rápidas</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/30">
                <h4 className="text-lg font-medium text-foreground mb-4">Redes sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium text-foreground">Li</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <span className="text-sm font-medium text-foreground">Ig</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <MessageCircle size={16} className="text-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;