import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://escape-route-beryl.vercel.app";

/**
 * Tells search engines the canonical origin of the app so the deployed URL is
 * indexed with its own homepage and not merged with any preview/staging alias.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
