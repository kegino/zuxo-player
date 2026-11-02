import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Termos de Uso — Zuxo Player";
const DESCRIPTION = "Termos de Uso do serviço Zuxo Player: condições de adesão, diretrizes de utilização da plataforma e suporte técnico.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/termos-de-uso" }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} />
      </div>
      <article className="container-page pb-20 mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl text-white">Termos de Uso</h1>
        <p className="mt-4 text-sm text-slate-400">Última atualização: Fevereiro de 2026</p>

        <div className="mt-8 space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-white">1. Aceitação dos termos</h2>
            <p className="mt-2">Ao solicitar um teste gratuito ou contratar uma assinatura do Zuxo Player, você concorda integralmente com estes Termos de Uso e com a nossa Política de Privacidade.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">2. Objeto e funcionamento</h2>
            <p className="mt-2">O Zuxo Player fornece infraestrutura tecnológica de reprodução e acesso a transmissões via internet durante o período de vigência do plano contratado.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">3. Responsabilidade do usuário</h2>
            <p className="mt-2">As credenciais de acesso disponibilizadas são de caráter individual. O assinante é responsável por manter a confidencialidade de sua senha e por utilizar o serviço em conformidade com as leis vigentes.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">4. Pagamentos e renovação</h2>
            <p className="mt-2">O plano tem duração prefixada de acordo com o período escolhido (Mensal, Trimestral, Semestral ou Anual). A renovação não é debitada automaticamente sem sua autorização, garantindo total controle ao assinante.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">5. Suporte técnico</h2>
            <p className="mt-2">O atendimento ao cliente é realizado todos os dias via WhatsApp, auxiliando na ativação e dúvidas operacionais.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">6. Modificações</h2>
            <p className="mt-2">Reservamo-nos o direito de atualizar estes termos para refletir melhorias técnicas e novos recursos na plataforma Zuxo Player.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
