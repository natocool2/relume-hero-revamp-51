import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">📄 Termos de Uso</h1>
            <p className="text-[#B2B2B2] text-lg">Última atualização: 30 de julho de 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <p className="text-[#B2B2B2] text-lg leading-relaxed">
                Bem-vindo ao website e plataformas digitais da <strong className="text-white">LEAFCEL</strong>. Ao aceder ou utilizar os nossos serviços, concorda com os seguintes Termos de Uso. Por favor, leia atentamente.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Definições</h2>
              <div className="space-y-4 text-[#B2B2B2]">
                <p><strong className="text-white">LEAFCEL</strong> refere-se à entidade legal que opera este website e os serviços associados.</p>
                <p><strong className="text-white">Utilizador</strong> refere-se a qualquer pessoa singular ou coletiva que aceda, utilize ou interaja com os serviços da LEAFCEL.</p>
                <p><strong className="text-white">Plataformas</strong> incluem todos os websites, sistemas, aplicações, portais e interfaces geridos pela LEAFCEL.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Aceitação dos Termos</h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Ao utilizar qualquer funcionalidade ou conteúdo disponibilizado pela LEAFCEL (incluindo, mas não limitado a: diagnósticos, sistemas de quiz, formulários, simuladores, pedidos de orçamento, contacto, plataformas de formação), o utilizador declara que leu, compreendeu e aceitou os presentes Termos de Uso.
              </p>
              <p className="text-[#B2B2B2] leading-relaxed">
                Se não concorda com os termos, <strong className="text-white">não deverá utilizar os nossos serviços</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Utilização dos Serviços</h2>
              <h3 className="text-xl font-medium text-white mb-3">O utilizador compromete-se a:</h3>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4 mb-4">
                <li>Fornecer informações verdadeiras, completas e atualizadas.</li>
                <li>Não usar os serviços para fins ilegais, abusivos ou fraudulentos.</li>
                <li>Não copiar, distribuir ou modificar qualquer conteúdo sem autorização expressa.</li>
                <li>Respeitar os direitos de propriedade intelectual da LEAFCEL e de terceiros.</li>
              </ul>
              <p className="text-[#B2B2B2] leading-relaxed">
                A LEAFCEL reserva-se o direito de suspender ou eliminar contas ou acessos em caso de violação destes termos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Conteúdo e Direitos Autorais</h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Todo o conteúdo da LEAFCEL — incluindo textos, imagens, vídeos, software, gráficos, bases de dados, metodologias, relatórios, documentos gerados automaticamente (ex: planos de negócio, pitch decks), diagnósticos e interfaces — é propriedade exclusiva da LEAFCEL ou dos seus licenciadores.
              </p>
              <p className="text-[#B2B2B2] leading-relaxed">
                Não é permitida a reprodução, cópia ou distribuição de qualquer conteúdo sem autorização prévia por escrito.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Inteligência Artificial e Automatização</h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Ao utilizar o <strong className="text-white">Sistema de Diagnóstico Inteligente</strong>, o utilizador reconhece que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#B2B2B2] ml-4">
                <li>As perguntas e recomendações são geradas de forma automatizada por AI (Gemini 2.5 Pro).</li>
                <li>Os resultados fornecidos são <strong className="text-white">simulações e sugestões baseadas nas informações fornecidas pelo próprio utilizador</strong>.</li>
                <li>A LEAFCEL não se responsabiliza por decisões tomadas exclusivamente com base nas sugestões automatizadas, sem validação humana ou profissional.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Proteção de Dados</h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Os dados pessoais fornecidos estão sujeitos à nossa <a href="/politica-privacidade" className="text-white underline hover:text-[#B2B2B2] transition-colors">Política de Privacidade</a>, que define como recolhemos, utilizamos e protegemos as suas informações.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Responsabilidades e Limitações</h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                A LEAFCEL envida todos os esforços para garantir a fiabilidade, segurança e qualidade dos seus serviços. No entanto, <strong className="text-white">não garante que os serviços sejam isentos de erros ou interrupções</strong>.
              </p>
              <p className="text-[#B2B2B2] leading-relaxed">
                A LEAFCEL <strong className="text-white">não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais</strong> decorrentes da utilização (ou impossibilidade de utilização) dos seus serviços, incluindo decisões empresariais ou financeiras baseadas em diagnósticos ou relatórios gerados automaticamente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Ligações Externas e Integrações</h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                As nossas plataformas podem conter ligações para websites, APIs ou ferramentas externas. A LEAFCEL <strong className="text-white">não se responsabiliza pelos conteúdos, políticas ou práticas desses serviços de terceiros</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Propriedade Intelectual de Terceiros</h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                A LEAFCEL poderá utilizar metodologias e frameworks de referência (ex: OKR da Google, Lean Startup, Design Thinking), respeitando os direitos de propriedade intelectual, com o objetivo de melhorar a entrega dos serviços.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Alterações aos Termos</h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                A LEAFCEL poderá atualizar estes Termos de Uso a qualquer momento. A versão mais atual estará sempre disponível no website. A continuação da utilização dos serviços após uma atualização implica a aceitação integral dos novos termos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Jurisdição e Legislação Aplicável</h2>
              <p className="text-[#B2B2B2] leading-relaxed">
                Estes Termos de Uso são regidos pela legislação portuguesa e europeia. Qualquer litígio será resolvido nos tribunais da comarca da sede da LEAFCEL, salvo disposição legal em contrário.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contactos</h2>
              <p className="text-[#B2B2B2] leading-relaxed mb-4">
                Para dúvidas, sugestões ou reclamações relacionadas com estes Termos, contacte:
              </p>
              <div className="space-y-2 text-[#B2B2B2]">
                <p>📧 <strong className="text-white">Email:</strong> <a href="mailto:geral@leafcel.com" className="text-white underline hover:text-[#B2B2B2] transition-colors">geral@leafcel.com</a></p>
                <p>📱 <strong className="text-white">WhatsApp Business:</strong> disponível para contacto direto</p>
                <p>📍 <strong className="text-white">Morada:</strong> [inserir morada oficial]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;