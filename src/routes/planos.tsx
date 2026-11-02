import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Planos Zuxo Player — Preços a partir de R$35/mês";
const DESCRIPTION =
  "Conheça os planos do Zuxo Player: Mensal R$35, Trimestral R$90, Semestral R$170 e Anual R$280. Mais de 35.000 canais, filmes, séries e futebol em 4K.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/planos" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Planos Zuxo Player",
          url: `${SITE_URL}/planos`,
          itemListElement: PLANS.map((p, i) => ({
            "@type": "Offer",
            position: i + 1,
            name: `Zuxo Player ${p.name}`,
            price: p.price.replace("R$", ""),
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/planos`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Planos", item: `${SITE_URL}/planos` },
          ],
        }),
      },
    ],
  }),
  component: PlanosPage,
});

function PlanosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Planos" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Planos Zuxo Player"
          title={<>Escolha o plano ideal <span className="gradient-text">e comece a assistir hoje</span></>}
          description="A grade completa de canais e filmes em 4K está inclusa em todos os planos — você escolhe o período com o maior desconto."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-10 text-center border border-cyan-500/25">
          <h2 className="font-display text-2xl font-bold sm:text-3xl text-white">Ficou com dúvida sobre qual plano escolher?</h2>
          <p className="mt-3 text-slate-300">Converse conosco no WhatsApp e receba a indicação do melhor plano para suas TVs e aparelhos.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton keyword="Dúvidas sobre Planos Zuxo Player" label="Falar no WhatsApp" variant="whatsapp" />
            <WhatsAppButton keyword="Teste Zuxo Player" label="Solicitar Teste Grátis" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}
