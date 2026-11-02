import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Clock, Shield } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_PHONE } from "@/lib/whatsapp";

const TITLE = "Contato Zuxo Player — Fale com Nosso Suporte no WhatsApp";
const DESCRIPTION =
  "Entre em contato com o suporte do Zuxo Player. Atendimento humano no WhatsApp todos os dias para teste grátis, assinatura, renovação e configuração de aparelhos.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/contato" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/contato`,
        mainEntity: {
          "@type": "Organization",
          name: "Zuxo Player",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${WHATSAPP_PHONE}`,
            contactType: "customer support",
            availableLanguage: ["Portuguese"],
            areaServed: "BR",
          },
        },
      }),
    }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Contato" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Central de Atendimento"
          title={<>Fale diretamente com a <span className="gradient-text">equipe Zuxo Player</span></>}
          description="Canal de atendimento direto no WhatsApp com especialistas prontos para ajudar você todos os dias. Escolha a opção desejada para iniciar a conversa."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: MessageCircle, t: "Assinatura e Teste Grátis", d: "Quer experimentar ou assinar um plano? Receba seu acesso liberado no WhatsApp.", k: "Assinatura Zuxo Player" },
            { icon: Clock, t: "Renovação de Acesso", d: "Seu plano está próximo do vencimento? Renove instantaneamente sem perder seus canais favoritos.", k: "Renovação Zuxo Player" },
            { icon: Shield, t: "Suporte Técnico Especializado", d: "Dúvidas na instalação, mudança de aplicativo ou ajustes de qualidade? Nossa equipe resolve com você.", k: "Suporte Zuxo Player" },
          ].map(({ icon: Icon, t, d, k }) => (
            <article key={t} className="glass-card rounded-2xl p-7 flex flex-col border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="grid size-11 place-items-center rounded-xl bg-cyan-500/20 text-cyan-400">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">{t}</h2>
              <p className="mt-2 text-sm text-slate-300 flex-1 leading-relaxed">{d}</p>
              <div className="mt-5"><WhatsAppButton keyword={k} label="Falar no WhatsApp" variant="whatsapp" size="sm" /></div>
            </article>
          ))}
        </div>

        <div className="mt-14 glass-card rounded-2xl p-10 text-center border border-cyan-500/20">
          <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Atendimento Humano · Todos os Dias</p>
          <p className="mt-2 font-display text-2xl font-extrabold text-white">WhatsApp Oficial: +55 (62) 98265-8713</p>
        </div>
      </section>
    </div>
  );
}
