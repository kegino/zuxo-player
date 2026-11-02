import { createFileRoute } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Wifi, MonitorPlay, Globe, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Benefícios do Zuxo Player — Alta Performance e Qualidade 4K sem travar";
const DESCRIPTION =
  "Descubra as vantagens do Zuxo Player: streaming em 4K sem travamentos, +35.000 canais, cinema em casa, esportes ao vivo, tecnologia anti-freeze e suporte humano 24/7.";

const BENEFITS = [
  { icon: Zap, t: "Zero Travamento", d: "Arquitetura H.265 e rotas CDN de alto desempenho no Brasil — imagem límpida em 4K e Full HD." },
  { icon: Tv, t: "+35.000 Canais Ao Vivo", d: "Grade nacional e internacional completa e categorizada, com notícias, esportes, variedades e filmes." },
  { icon: Film, t: "Catálogo de Cinema (VOD)", d: "Milhares de filmes e séries em lançamentos contínuos, com áudio original dublado e legendado." },
  { icon: Trophy, t: "Esportes e Pay-Per-View", d: "Brasileirão, Champions, Libertadores, UFC, NBA e F1 em canais dedicados de 60 quadros por segundo." },
  { icon: MonitorPlay, t: "Compatibilidade Total", d: "Funciona perfeitamente em Smart TVs (Samsung, LG, Android, Roku), Fire Stick, TV Box, celulares e PC." },
  { icon: Globe, t: "Protocolos M3U & Xtream", d: "Conexão flexível e veloz através de API Xtream Codes ou link direto M3U." },
  { icon: Wifi, t: "Estabilidade em Picos", d: "Infraestrutura escalável imune a gargalos mesmo nas maiores decisões esportivas do ano." },
  { icon: ShieldCheck, t: "Pagamento 100% Protegido", d: "Pix com ativação instantânea ou cartão de crédito em gateway com criptografia bancária." },
  { icon: Headphones, t: "Suporte Humano e Dedicado", d: "Atendimento atencioso pelo WhatsApp para sanar dúvidas e orientar na instalação passo a passo." },
];

export const Route = createFileRoute("/beneficios")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/beneficios" }),
  component: BeneficiosPage,
});

function BeneficiosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Benefícios" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Benefícios do Zuxo Player"
          title={<>Tudo o que torna o Zuxo Player a <span className="gradient-text">escolha número 1</span></>}
          description="Muito mais do que uma simples lista: engenharia de streaming pensada para entregar a melhor imagem sem congelamentos."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
            <article key={t} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-cyan-500/30">
              <div className="grid size-11 place-items-center rounded-xl bg-cyan-500/20 text-cyan-400">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">{t}</h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-3xl p-10 text-center border border-cyan-500/30">
          <Sparkles className="mx-auto size-7 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-white">Comprove todos os benefícios na sua tela</h2>
          <p className="mx-auto mt-2 max-w-lg text-slate-300">Solicite um teste sem compromisso no WhatsApp e avalie nossa estabilidade em primeira mão.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton keyword="Teste Grátis Benefícios Zuxo Player" label="Fazer Teste Grátis" variant="whatsapp" />
            <WhatsAppButton keyword="Assinatura Benefícios Zuxo Player" label="Assinar Agora" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}
