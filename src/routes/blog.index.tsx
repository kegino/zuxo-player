import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { POSTS } from "@/content/posts";

const TITLE = "Blog Zuxo Player — Tutoriais, Guias e Dicas de IPTV em 4K";
const DESCRIPTION =
  "Blog oficial do Zuxo Player: tutoriais de configuração na Smart TV e TV Box, comparativos de reprodutores, dicas para assistir futebol sem delay e guias técnicos.";

export const Route = createFileRoute("/blog/")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/blog" }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Blog" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Blog & Central de Conteúdo"
          title={<>Guias práticos e tutoriais do <span className="gradient-text">Zuxo Player</span></>}
          description="Conteúdo aprofundado e relevante para otimizar sua conexão, configurar aparelhos e extrair a máxima qualidade de streaming."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{post.category}</span>
                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-white group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-300 line-clamp-2 flex-1 leading-relaxed">{post.description}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                  <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center gap-1"><Clock className="size-3" aria-hidden="true" /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
