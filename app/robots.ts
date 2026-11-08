import type { MetadataRoute } from "next";
import { domain } from "@/lib/site-config";

const allow = ["/", "/favicon.ico", "/icons/", "/og/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow },
      { userAgent: "Googlebot", allow },
      { userAgent: "Googlebot-Image", allow }
    ],
    sitemap: `https://${domain}/sitemap.xml`
  };
}
