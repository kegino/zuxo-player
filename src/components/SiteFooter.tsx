import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/10 bg-background">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-display text-xl font-bold">
            <img src="/logo-zuxo.webp" alt="Logo Zuxo Player" width={36} height={36} loading="lazy" className="size-9 rounded-xl" />
            <span className="text-white">
              Zuxo <span className="text-cyan-400">Player</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-300 leading-relaxed">
            Zuxo Player é o reprodutor IPTV líder em velocidade e estabilidade. Mais de 35.000 canais, filmes e séries em 4K e Full HD, esportes ao vivo com baixa latência e suporte dedicado todos os dias pelo WhatsApp.
          </p>
          <div className="mt-6">
            <WhatsAppButton keyword="Zuxo Player" label="Falar no WhatsApp" size="sm" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wider text-white uppercase">Navegação</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            <li><Link to="/planos" className="hover:text-cyan-400 transition-colors">Planos Zuxo Player</Link></li>
            <li><Link to="/beneficios" className="hover:text-cyan-400 transition-colors">Benefícios e Recursos</Link></li>
            <li><Link to="/como-funciona" className="hover:text-cyan-400 transition-colors">Como Funciona</Link></li>
            <li><Link to="/teste" className="hover:text-cyan-400 transition-colors">Teste Grátis 4K</Link></li>
            <li><Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog & Dicas IPTV</Link></li>
            <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">Perguntas Frequentes</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wider text-white uppercase">Institucional</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            <li><Link to="/contato" className="hover:text-cyan-400 transition-colors">Central de Contato</Link></li>
            <li><Link to="/politica-de-privacidade" className="hover:text-cyan-400 transition-colors">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/20">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>© {year} Zuxo Player (zuxoplayer.website). Todos os direitos reservados.</span>
          <span>Tecnologia Anti-Buffering H.265 / 4K Ultra HD</span>
        </div>
      </div>
    </footer>
  );
}
