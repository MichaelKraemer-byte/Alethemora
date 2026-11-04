import type { MetadataRoute } from "next";
import { domain } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `https://${domain}/sitemap.xml`
  };
}
