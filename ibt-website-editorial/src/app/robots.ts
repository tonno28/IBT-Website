import type { MetadataRoute } from "next";

/** Wird beim statischen Export als /robots.txt ausgeliefert. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ib-tonn.de/sitemap.xml",
  };
}
