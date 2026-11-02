import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Teste Zuxo Player Grátis — Solicite Acesso Imediato pelo WhatsApp";
const DESCRIPTION =
  "Solicite seu teste grátis do Zuxo Player e experimente mais de 35.000 canais, cinema em 4K e futebol sem travar. Liberação em minutos, sem cartão de crédito.";

const INCLUDES = [
  "Liberação de login e senha em poucos minutos",
  "Grade completa com +35.000 canais ao vivo em 4K e Full HD",
  "Milhares de filmes e séries com áudio dublado e legendado",
  "Canais de esportes ao vivo com baixa latência e 60 FPS",
  "Compatibilidade nativa com Smart TV, Android, iOS e TV Box",
  "Suporte técnico individual no WhatsApp durante o teste",
];

export const Route = createFileRoute("/teste")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/teste" }),
  component: TestePage,
});

function TestePage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Teste Grátis" }]} />
      </div>
      <section className="container-page pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Teste Sem Compromisso"
              title={<>Experimente o Zuxo Player <span className="gradient-text">sem pagar nada</span></>}
              description="Comprove a estabilidade de conexão e a definição das imagens direto no seu aparelho antes de assinar. Sem cartão, sem fidelidade."
              center={false}
            />
            <ul className="mt-8 space-y-3">
              {INCLUDES.map((i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton keyword="Teste Grátis Zuxo Player" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
              <WhatsAppButton keyword="Assinatura Zuxo Player" label="Ver Planos e Assinar" variant="primary" size="lg" />
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-cyan-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-transparent to-amber-950/20" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Como funciona o teste</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-white">3 passos para começar a assistir</h2>
              <ol className="mt-6 space-y-4 text-sm text-slate-300">
                <li><strong className="text-white">1.</strong> Toque em "Solicitar Teste Grátis" para abrir o WhatsApp com a mensagem automática.</li>
                <li><strong className="text-white">2.</strong> Nosso suporte envia suas credenciais e o link para download do Zuxo Player.</li>
                <li><strong className="text-white">3.</strong> Acesse o aplicativo, entre com usuário e senha e aproveite a grade 4K imediatamente.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
