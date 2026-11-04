import type { MetadataRoute } from "next";
import { domain, phase } from "@/lib/site-config";

const paths = [
  "/",
  "/impressum",
  "/datenschutz",
  "/start",
  "/mentoring",
  "/erstgespraech",
  "/die-wandlung",
  "/klarheitsgespraech",
  "/vortrag"
];

if (phase === "live") paths.push("/agb");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${domain}`;
  return paths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`
  }));
}
