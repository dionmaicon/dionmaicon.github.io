const SITE_URL = "https://dionmaicon.github.io";

const QUERY = `query {
  dmposts {
    nodes {
      slug
      date
    }
  }
}`;

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/xml; charset=UTF-8");

  const config = useRuntimeConfig();
  const gqlEndpoint = config.public.apiBase as string;

  let posts: { slug: string; date: string }[] = [];

  try {
    const data = await $fetch<{
      data: { dmposts: { nodes: { slug: string; date: string }[] } };
    }>(gqlEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
    });
    posts = data?.data?.dmposts?.nodes ?? [];
  } catch {
    // Return minimal sitemap on fetch failure
  }

  const postUrls = posts
    .map((p) => {
      const lastmod = p.date
        ? new Date(p.date).toISOString().split("T")[0]
        : "";
      return [
        `  <url>`,
        `    <loc>${SITE_URL}/posts/${p.slug}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : "",
        `    <changefreq>monthly</changefreq>`,
        `    <priority>0.8</priority>`,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    `  <url>`,
    `    <loc>${SITE_URL}/</loc>`,
    `    <changefreq>daily</changefreq>`,
    `    <priority>1.0</priority>`,
    `  </url>`,
    postUrls,
    `</urlset>`,
  ].join("\n");
});
