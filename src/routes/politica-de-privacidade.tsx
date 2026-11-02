import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Política de Privacidade — Zuxo Player";
const DESCRIPTION = "Política de Privacidade do Zuxo Player: compromisso com a proteção e tratamento adequado dos seus dados pessoais conforme a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/politica-de-privacidade" }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]} />
      </div>
      <article className="container-page pb-20 prose-content mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl text-white">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-slate-400">Última atualização: Fevereiro de 2026</p>

        <div className="mt-8 space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-white">1. Informações que coletamos</h2>
            <p className="mt-2">Coletamos exclusivamente as informações estritamente indispensáveis para a liberação do serviço: nome, número de contato no WhatsApp para envio das credenciais e comprovante do gateway de pagamento. Dados de cartão de crédito são processados diretamente pelas operadoras parceiras com criptografia ponta a ponta e jamais transitam ou ficam armazenados em nossos servidores.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">2. Uso e finalidade das informações</h2>
            <p className="mt-2">Seus dados são utilizados única e exclusivamente para ativação do Zuxo Player, renovação de períodos contratados, suporte técnico individual e comunicados essenciais sobre a plataforma. Jamais compartilhamos, vendemos ou cedemos seus dados a terceiros.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">3. Cookies e navegação</h2>
            <p className="mt-2">Utilizamos apenas cookies essenciais para o funcionamento estável do site e métricas de desempenho agregadas sem rastreamento invasivo.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">4. Seus direitos (LGPD)</h2>
            <p className="mt-2">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você possui o direito de consultar, atualizar ou solicitar a exclusão de seus dados de cadastro a qualquer momento através de contato com nosso suporte no WhatsApp.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">5. Contato sobre privacidade</h2>
            <p className="mt-2">Para qualquer esclarecimento sobre este documento, entre em contato diretamente pelo WhatsApp oficial do Zuxo Player (+55 62 98265-8713).</p>
          </section>
        </div>
      </article>
    </div>
  );
}
