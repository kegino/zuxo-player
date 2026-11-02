import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/planos", label: "Planos" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/como-funciona", label: "Como Funciona" },
  { to: "/teste", label: "Teste Grátis" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold" aria-label="Zuxo Player — Início">
          <img
            src="/logo-zuxo.webp"
            alt="Logo Zuxo Player"
            width={36}
            height={36}
            className="size-9 rounded-xl drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]"
          />
          <span className="tracking-tight text-white">
            Zuxo <span className="text-cyan-400">Player</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/5"
              activeProps={{ className: "text-cyan-400 font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton keyword="Zuxo Player" label="Assinar Agora" size="sm" />
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="lg:hidden inline-flex size-11 items-center justify-center rounded-md text-foreground hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <nav aria-label="Menu móvel" className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                activeProps={{ className: "text-cyan-400 font-semibold bg-white/5" }}
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton keyword="Zuxo Player" label="Assinar Agora" className="mt-3 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
