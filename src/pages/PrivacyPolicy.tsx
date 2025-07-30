import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full py-8 px-4 md:px-8 lg:px-16 border-b border-white/10" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft size={18} />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold text-white">LEAFCEL</h1>
        </div>
      </div>

      {/* Content */}
      <div className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">📜 Política de Privacidade</h1>
            <p className="text-[#B2B2B2] text-lg">Última atualização: 30 de julho de 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <p className="text-[#B2B2B2] text-lg leading-relaxed">
                Na <strong className="text-white">LEAFCEL</strong>, levamos a sua privacidade a sério. Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos os seus dados pessoais quando utiliza os nossos websites, plataformas digitais, serviços e sistemas, incluindo o <strong className="text-white">Sistema de Diagnóstico Inteligente (Quiz AI)</strong>.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🔐 1. Quem Somos
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Somos a <strong className="text-white">LEAFCEL</strong>, uma empresa de consultoria empresarial e tecnológica com atuação global. A nossa sede é em Portugal, e operamos em diversos mercados, setores e plataformas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🧾 2. Dados que Recolhemos
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-6">
                Recolhemos diferentes tipos de dados pessoais para fornecer e melhorar os nossos serviços. Isto inclui:
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-3">Dados fornecidos diretamente por si:</h3>
                <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4">
                  <li>Nome</li>
                  <li>Email</li>
                  <li>Nome da empresa</li>
                  <li>Área(s) de interesse</li>
                  <li>Respostas ao quiz/diagnóstico</li>
                  <li>Mensagens enviadas via formulários de contacto</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-3">Dados gerados automaticamente:</h3>
                <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4">
                  <li>Dados de navegação (cookies, IP, localização geográfica aproximada)</li>
                  <li>Dados de sessão e uso da plataforma</li>
                  <li>Preferências e histórico de interações com o sistema</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🧠 3. Como Utilizamos os Seus Dados
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">Utilizamos os seus dados para:</p>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4">
                <li>Realizar diagnósticos personalizados</li>
                <li>Gerar automaticamente planos, relatórios e documentos (como planos de negócio, pitch decks, orçamentos, etc.)</li>
                <li>Apresentar recomendações com base em boas práticas e dados históricos</li>
                <li>Enviar comunicações relevantes (respostas, propostas, newsletters, etc.)</li>
                <li>Melhorar continuamente os nossos serviços, com base em dados agregados e feedback</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🤖 4. AI e Processamento Automatizado
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Os seus dados poderão ser utilizados por sistemas de inteligência artificial (como Gemini 2.5 Pro) para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4 mb-4">
                <li>Criar respostas adaptativas</li>
                <li>Avaliar o grau de preparação do seu projeto</li>
                <li>Sugerir melhorias ou formações</li>
                <li>Identificar soluções ideais da LEAFCEL</li>
                <li>Gerar automaticamente documentos e relatórios personalizados</li>
              </ul>
              <p className="text-[#B2B2B2] leading-relaxed">
                Todos os dados são tratados de forma segura, com base em decisões humanas sempre que necessário.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🗂️ 5. Partilha de Dados
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                A LEAFCEL <strong className="text-white">não vende nem cede os seus dados a terceiros</strong>, exceto:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4 mb-4">
                <li><strong className="text-white">Prestadores de serviços técnicos</strong> (ex: alojamento, bases de dados, APIs externas, CRM)</li>
                <li><strong className="text-white">Obrigação legal ou judicial</strong></li>
                <li><strong className="text-white">Parceiros LEAFCEL</strong>, apenas com o seu consentimento expresso</li>
              </ul>
              <p className="text-[#B2B2B2] leading-relaxed">
                Todos os parceiros estão obrigados a cumprir esta Política de Privacidade e a legislação aplicável (incluindo RGPD).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🌍 6. Transferência Internacional de Dados
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Caso os seus dados sejam transferidos para fora da União Europeia, garantimos que tal ocorre com base em cláusulas contratuais padrão ou outras medidas aprovadas pela Comissão Europeia, garantindo proteção adequada dos seus dados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🔒 7. Segurança dos Dados
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Aplicamos medidas técnicas e organizativas robustas para proteger os seus dados, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4">
                <li>Encriptação de dados sensíveis</li>
                <li>Acesso restrito com autenticação</li>
                <li>Monitorização contínua</li>
                <li>Backups regulares</li>
                <li>Certificações de segurança (OWASP, OAuth 2.0, ISO 42001)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                📆 8. Retenção de Dados
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Os seus dados serão guardados apenas durante o tempo necessário para os fins definidos nesta Política ou até que solicite a sua eliminação. Alguns dados poderão ser retidos por obrigação legal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🧑‍⚖️ 9. Os Seus Direitos
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Nos termos do <strong className="text-white">Regulamento Geral sobre a Proteção de Dados (RGPD)</strong>, tem o direito de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4 mb-4">
                <li>Aceder aos seus dados</li>
                <li>Corrigir ou atualizar os dados</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Opor-se ao tratamento ou limitar o uso</li>
                <li>Retirar o consentimento a qualquer momento</li>
                <li>Portar os dados para outro fornecedor</li>
              </ul>
              <p className="text-[#B2B2B2] leading-relaxed">
                Para exercer os seus direitos, contacte-nos através do email: <a href="mailto:geral@leafcel.com" className="text-white underline hover:text-[#B2B2B2] transition-colors">geral@leafcel.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                🍪 10. Cookies
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Utilizamos cookies para melhorar a sua experiência, analisar métricas de uso e oferecer conteúdos personalizados.
              </p>
              <p className="text-[#B2B2B2] leading-relaxed">
                Pode gerir ou desativar os cookies diretamente nas configurações do seu navegador.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                📧 11. Comunicações
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Ao utilizar os nossos serviços ou fornecer os seus dados, poderá receber comunicações relacionadas com o seu projeto, diagnósticos, orçamentos ou atualizações de serviços. Poderá optar por não receber comunicações promocionais a qualquer momento.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                ✍️ 12. Alterações a esta Política
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Poderemos atualizar esta Política de Privacidade para refletir alterações legais ou melhorias nos nossos serviços. Notificá-lo-emos através do website ou por email, caso aplicável.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                📞 13. Contactos
              </h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Se tiver dúvidas, reclamações ou pedidos relacionados com a privacidade, contacte-nos:
              </p>
              <div className="space-y-2 text-[#B2B2B2]">
                <p><strong className="text-white">Email:</strong> <a href="mailto:geral@leafcel.com" className="text-white underline hover:text-[#B2B2B2] transition-colors">geral@leafcel.com</a></p>
                <p><strong className="text-white">WhatsApp Business:</strong> Disponível para consultas rápidas</p>
                <p><strong className="text-white">Morada:</strong> (inserir morada oficial)</p>
                <p><strong className="text-white">Responsável pela Proteção de Dados (DPO):</strong> [a definir, se aplicável]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;