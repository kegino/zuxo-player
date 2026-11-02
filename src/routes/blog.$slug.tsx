import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, ArrowLeft } from "lucide-react";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getPost, POSTS } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artigo não encontrado — Zuxo Player" }, { name: "robots", content: "noindex" }],
      };
    }
    const path = `/blog/${params.slug}`;
    return {
      ...pageMeta({
        title: `${loaderData.title} — Zuxo Player`,
        description: loaderData.description,
        path,
        image: loaderData.image,
        ogType: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: loaderData.title,
            description: loaderData.description,
            image: loaderData.image.startsWith("http") ? loaderData.image : `${SITE_URL}${loaderData.image}`,
            datePublished: loaderData.date,
            dateModified: loaderData.date,
            author: { "@type": "Organization", name: loaderData.author, url: SITE_URL },
            publisher: {
              "@type": "Organization",
              name: "Zuxo Player",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png` },
            },
            mainEntityOfPage: `${SITE_URL}${path}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: loaderData.title, item: `${SITE_URL}${path}` },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loaderData.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="pt-24 container-page py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-white">Artigo não encontrado</h1>
      <p className="mt-3 text-slate-300">Continue explorando os artigos e tutoriais do Zuxo Player.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:underline">
        <ArrowLeft className="size-4" /> Voltar ao blog
      </Link>
    </div>
  );
}

function PostPage() {
  const post = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pt-24">
      <div className="container-page py-8">
        <Breadcrumb
          items={[
            { label: "Início", to: "/" },
            { label: "Blog", to: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      <header className="container-page">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">{post.category}</span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-5xl text-white">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">{post.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="text-white font-medium">{post.author}</span><span aria-hidden="true">•</span>
            <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span><span aria-hidden="true">•</span>
            <span className="flex items-center gap-1"><Clock className="size-3.5" aria-hidden="true" /> {post.readTime}</span>
          </div>
        </div>
      </header>

      <figure className="container-page mt-10">
        <div className="mx-auto max-w-4xl aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1600}
            height={900}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </figure>

      <div className="container-page mt-10 pb-16">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-slate-300 leading-relaxed">
          {post.body.map((paragraph: string, i: number) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl glass-card rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden border border-cyan-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-transparent to-amber-950/20" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold sm:text-3xl text-white">Pronto para testar o Zuxo Player?</h2>
            <p className="mt-2 text-slate-300">Teste grátis, sem necessidade de cartão de crédito e ativação em minutos.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton keyword={`Teste Zuxo Player via ${post.slug}`} label="Fazer Teste Grátis" variant="whatsapp" />
              <WhatsAppButton keyword={`Assinatura Zuxo Player via ${post.slug}`} label="Assinar Agora" variant="primary" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl text-white">Perguntas Frequentes</h2>
          <div className="mt-6"><FaqAccordion items={post.faq} /></div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl text-white">Continue Lendo no Blog</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group glass-card rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:border-cyan-500/30"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" width={800} height={500} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
