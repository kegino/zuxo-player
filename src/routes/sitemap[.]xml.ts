import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/content/posts";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/planos", changefreq: "weekly", priority: "0.9" },
          { path: "/beneficios", changefreq: "monthly", priority: "0.8" },
          { path: "/como-funciona", changefreq: "monthly", priority: "0.8" },
          { path: "/teste", changefreq: "weekly", priority: "0.9" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/contato", changefreq: "monthly", priority: "0.6" },
          { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
          { path: "/termos-de-uso", changefreq: "yearly", priority: "0.3" },
        ];

        const postEntries: SitemapEntry[] = POSTS.map((p) => ({
          path: `/blog/${p.slug}`,
          lastmod: p.date,
          changefreq: "monthly",
          priority: "0.7",
        }));

        const entries = [...staticEntries, ...postEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
