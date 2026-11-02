import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/content/posts";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = POSTS.map((p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE_URL}/blog/${p.slug}</link>
      <guid>${BASE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.description}]]></description>
    </item>`).join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Zuxo Player — Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Guias, tutoriais de configuração, comparativos e dicas de IPTV em 4K no Zuxo Player.</description>
    <language>pt-BR</language>${items}
  </channel>
</rss>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
