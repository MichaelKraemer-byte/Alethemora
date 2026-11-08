import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alethemora",
    short_name: "Alethemora",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/icons/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
