import type { MetadataRoute } from "next";
import { applicationCategories } from "@/lib/data/applications";
import { productFamilies } from "@/lib/data/products";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/products", priority: 0.9 },
    ...productFamilies.map((p) => ({ path: `/products/${p.slug}`, priority: 0.9 })),
    { path: "/applications", priority: 0.7 },
    ...applicationCategories.map((a) => ({ path: `/applications/${a.slug}`, priority: 0.7 })),
    { path: "/factory", priority: 0.8 },
    { path: "/how-to-buy", priority: 0.8 },
    { path: "/request-samples", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/fusing-guide", priority: 0.5 },
    { path: "/contact", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
