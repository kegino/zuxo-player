import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { canonicalUrl, pageMeta, SITE_URL } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { POSTS } from "@/content/posts";
import heroBg from "@/assets/hero-bg.webp";

const TITLE = "Zuxo Player — O Melhor Reprodutor IPTV sem travar com +35.000 canais em 4K";
const DESCRIPTION =
  "Zuxo Player: streaming e reprodutor IPTV premium com +35.000 canais, filmes de cinema, séries completas, futebol e pay-per-view em 4K. Tecnologia anti-freeze, ativação imediata e suporte no WhatsApp.";

const BENEFITS = [
  { icon: Zap, title: "Zero Travamentos", desc: "Rede CDN brasileira de alta velocidade e compressão H.265 garantem sinal liso até nos clássicos de futebol mais assistidos." },
  { icon: Tv, title: "+35.000 Canais", desc: "Grade nacional e internacional em 4K, Full HD e HD com atualização contínua e guia EPG integrado." },
  { icon: Film, title: "Filmes e Séries em 4K", desc: "Milhares de lançamentos de cinema, filmes premiados e temporadas completas dubladas e legendadas." },
  { icon: Trophy, title: "Futebol e Esportes Sem Delay", desc: "Brasileirão, Champions League, Libertadores, UFC e campeonatos do mundo todo com menor atraso de transmissão." },
  { icon: ShieldCheck, title: "Ativação Rápida e Segura", desc: "Pagamento seguro via Pix com liberação automática de credenciais ou cartão de crédito em ambiente protegido." },
  { icon: Headphones, title: "Suporte Especializado 24/7", desc: "Atendimento humano e atencioso no WhatsApp para auxiliar na instalação em Smart TVs, TV Box e smartphones." },
];

const STEPS = [
  { n: "01", title: "Escolha seu plano", desc: "Selecione o plano ideal para suas necessidades (Mensal, Trimestral, Semestral ou Anual) com o melhor custo-benefício." },
  { n: "02", title: "Ative pelo WhatsApp", desc: "Receba seus dados de acesso (Xtream Codes / M3U) e o link do aplicativo em poucos minutos com nosso suporte." },
  { n: "03", title: "Conecte e assista", desc: "Faça login no Zuxo Player na sua Smart TV, TV Box ou celular e desfrute de entretenimento 4K sem interrupções." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      image: "/og-image.webp",
    }),
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: heroBg, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Zuxo Player — IPTV Premium 4K",
          category: "Streaming IPTV",
          brand: { "@type": "Brand", name: "Zuxo Player" },
          description: DESCRIPTION,
          image: `${SITE_URL}/og-image.webp`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            reviewCount: "8420",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "35",
            highPrice: "280",
            offerCount: PLANS.length,
            url: `${SITE_URL}/planos`,
            availability: "https://schema.org/InStock",
            offers: PLANS.map((p) => ({
              "@type": "Offer",
              name: `Zuxo Player ${p.name}`,
              price: p.price.replace(/[^\d]/g, ""),
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Últimos guias e artigos do Zuxo Player",
          itemListElement: POSTS.slice(0, 6).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Por que escolher o Zuxo Player"
            title={<>A melhor experiência de entretenimento que <span className="gradient-text">você merece</span></>}
            description="Infraestrutura otimizada no Brasil, catálogo completo de cinema e suporte humanizado de verdade. Faça seu teste grátis e comprove."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-500/40">
                <div className="grid size-11 place-items-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planos Zuxo Player"
            title="Planos transparentes e acessíveis"
            description="O mesmo catálogo premium completo em todos os planos — a economia fica maior quanto mais longo o período."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/planos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:underline">
              Ver tabela comparativa e detalhes dos planos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Ativação rápida em 3 passos simples"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative glass-card rounded-2xl p-7 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <span className="font-display text-4xl font-extrabold gradient-text">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <div className="glass-card rounded-3xl overflow-hidden relative p-10 sm:p-16 text-center border border-cyan-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-transparent to-amber-950/20" aria-hidden="true" />
            <div className="relative">
              <Sparkles className="mx-auto size-8 text-cyan-400" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl text-white">
                Experimente o Zuxo Player com <span className="gradient-text">teste grátis</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300 leading-relaxed">
                Solicite seu teste sem compromisso no WhatsApp e confira a velocidade de carregamento e a qualidade 4K sem nenhum congelamento.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton keyword="Teste Grátis Zuxo Player" label="Quero Testar Grátis" variant="whatsapp" size="lg" />
                <WhatsAppButton keyword="Assinatura Zuxo Player" label="Assinar Agora" variant="primary" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Dúvidas comuns"
            title="Tudo o que você precisa saber sobre o Zuxo Player"
          />
          <div className="mt-14">
            <FaqAccordion items={HOME_FAQ} />
            <p className="mt-8 text-center text-sm text-slate-400">
              Ainda com alguma dúvida?{" "}
              <Link to="/faq" className="text-cyan-400 hover:underline">Veja todas as perguntas</Link> ou{" "}
              <Link to="/contato" className="text-cyan-400 hover:underline">fale com nossa equipe</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
