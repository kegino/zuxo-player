import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Como Funciona o Zuxo Player — Ativação Descomplicada em Minutos";
const DESCRIPTION =
  "Entenda como funciona o Zuxo Player: escolha do plano, liberação via WhatsApp, configuração rápida na Smart TV ou TV Box e acesso instantâneo a +35.000 canais.";

const STEPS = [
  { n: "01", t: "Escolha seu plano Zuxo Player", d: "Selecione entre os planos Mensal, Trimestral, Semestral ou Anual com a mesma grade completa em 4K." },
  { n: "02", t: "Atendimento no WhatsApp", d: "Conclua o pagamento por Pix ou cartão em ambiente protegido e notifique nosso atendente." },
  { n: "03", t: "Receba seus dados de acesso", d: "Você recebe seu usuário, senha, DNS do servidor ou link M3U com tutorial ilustrado." },
  { n: "04", t: "Abra o aplicativo", d: "Baixe o Zuxo Player na loja de aplicativos da sua Smart TV, TV Box, Fire Stick ou celular." },
  { n: "05", t: "Conecte sua playlist", d: "Insira as credenciais no menu Xtream Codes do player e a grade carrega em poucos segundos." },
  { n: "06", t: "Assista com suporte total", d: "Nossa equipe acompanha você em qualquer ajuste e tira dúvidas todos os dias pelo WhatsApp." },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/como-funciona" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Como ativar o Zuxo Player",
        step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
      }),
    }],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Como Funciona" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Como Funciona"
          title={<>Ativação <span className="gradient-text">simples e imediata</span></>}
          description="Do primeiro contato à sua tela cheia: seis etapas rápidas, sem formulários demorados e com suporte humano dedicado."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="glass-card rounded-2xl p-7 border border-white/10 hover:border-cyan-500/30 transition-colors">
              <span className="font-display text-4xl font-extrabold gradient-text">{s.n}</span>
              <h2 className="mt-3 font-display text-xl font-bold text-white">{s.t}</h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Ativação Zuxo Player" label="Começar Agora no WhatsApp" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
