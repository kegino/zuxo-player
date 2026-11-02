export const SITE_URL = "https://zuxoplayer.website";
export const SITE_NAME = "Zuxo Player";
export const SITE_TAGLINE = "Reprodutor IPTV Premium sem travamentos — +35.000 canais em 4K";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonicalUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  ogType?: "website" | "article";
}

export function pageMeta({ title, description, path, image, ogType = "website" }: PageSeo) {
  const url = absoluteUrl(path);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    const abs = absoluteUrl(image);
    meta.push({ property: "og:image", content: abs });
    meta.push({ name: "twitter:image", content: abs });
  } else {
    const defaultOg = absoluteUrl("/og-image.webp");
    meta.push({ property: "og:image", content: defaultOg });
    meta.push({ name: "twitter:image", content: defaultOg });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: canonicalUrl(path) }],
  };
}
