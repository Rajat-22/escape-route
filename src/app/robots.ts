import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://escape-route-beryl.vercel.app";

/**
 * Allow crawling of the public app and point crawlers at the sitemap.
 * The API route is disallowed: it does nothing for search, costs a Gemini call
 * and would let bots drain the model quota.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
