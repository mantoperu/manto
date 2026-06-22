import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/servicios", "/nosotros", "/contacto"];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${site.url}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
