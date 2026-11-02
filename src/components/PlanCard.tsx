import { Check, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  keyword: string;
  featured?: boolean;
  badge?: string;
}

export const PLAN_FEATURES = [
  "+35.000 Canais ao vivo em 4K e Full HD",
  "Grade completa de Filmes e Séries atualizada",
  "Futebol e Esportes ao vivo com baixa latência",
  "Servidores Dedicados com tecnologia Anti-Freeze",
  "Canais Infantis, Desenhos e Variedades",
  "Canais de Documentários e Notícias 24h",
  "Opção de Conteúdo Adulto (+18) com bloqueio parental",
  "Compatível com Zuxo Player, Smart TV, TV Box e Celular",
  "Ativação rápida via lista M3U ou Xtream Codes",
  "Suporte técnico individual no WhatsApp",
];

export const PLANS: Plan[] = [
  { id: "mensal", name: "Mensal", price: "R$35", period: "1 mês de acesso completo", keyword: "Plano Mensal Zuxo Player" },
  { id: "trimestral", name: "Trimestral", price: "R$90", period: "3 meses de acesso (R$30/mês)", keyword: "Plano Trimestral Zuxo Player" },
  { id: "semestral", name: "Semestral", price: "R$170", period: "6 meses de acesso (R$28/mês)", keyword: "Plano Semestral Zuxo Player" },
  { id: "anual", name: "Anual", price: "R$280", period: "12 meses de acesso (R$23/mês)", keyword: "Plano Anual Zuxo Player", featured: true, badge: "Melhor Custo-Benefício" },
];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1",
        plan.featured
          ? "bg-gradient-to-b from-cyan-950/40 via-card to-card border-cyan-500/40 shadow-glow"
          : "glass-card border-white/10 hover:border-cyan-500/30",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950 shadow-md">
          <Star className="size-3 fill-current" aria-hidden="true" /> {plan.badge}
        </span>
      )}
      <header className="text-center">
        <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold tracking-tight text-white">{plan.price}</span>
        </div>
        <p className="mt-1 text-sm text-slate-400">{plan.period}</p>
      </header>

      <ul className="mt-6 space-y-2.5 text-sm">
        {PLAN_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden="true" />
            <span className="text-slate-300">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-2.5">
        <WhatsAppButton
          keyword={plan.keyword}
          label="Assinar Plano Agora"
          variant={plan.featured ? "primary" : "whatsapp"}
        />
        <WhatsAppButton
          keyword={`Teste ${plan.name} Zuxo Player`}
          label="Fazer Teste Grátis 4K"
          variant="ghost"
          size="sm"
        />
      </div>
    </article>
  );
}
