import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rudood.app";

// Public routes shared across both locales. Key = Arabic (root) path,
// value = English path. Used to emit hreflang alternates per page.
const routes: { ar: string; en: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { ar: "/", en: "/en", priority: 1.0, changeFrequency: "weekly" },
  { ar: "/privacy", en: "/en/privacy", priority: 0.3, changeFrequency: "yearly" },
  { ar: "/terms", en: "/en/terms", priority: 0.3, changeFrequency: "yearly" },
  { ar: "/data-deletion", en: "/en/data-deletion", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) => {
    const alternates = {
      languages: {
        ar: `${siteUrl}${route.ar}`,
        en: `${siteUrl}${route.en}`,
      },
    };

    return [
      {
        url: `${siteUrl}${route.ar}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
      {
        url: `${siteUrl}${route.en}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates,
      },
    ];
  });
}
