import type { Language } from "@/lib/i18n";

// TODO: EN prüfen
export const principlesPageMeta: Record<Language, { title: string; description: string }> = {
  de: {
    title: "Die Prinzipien — Der Weg zum höheren Wesen",
    description:
      "Diese Prinzipien sind als persönliches Credo zu lesen — als das, was ein Mensch sich vornimmt zu leben, nicht als wissenschaftlich bewiesene Aussage über die Welt."
  },
  en: {
    title: "The principles — the way to the higher being",
    description:
      "These principles are to be read as a personal credo — as what a person resolves to live, not as a scientifically proven statement about the world."
  }
};

// TODO: EN prüfen
export const praxisPageMeta: Record<Language, { title: string; description: string }> = {
  de: {
    title: "Praxis",
    description:
      "Körper, Geist und Seele sind eine untrennbare Einheit: Vernachlässigt man eine Ebene, leiden die anderen."
  },
  en: {
    title: "Practice",
    description:
      "Body, mind, and soul are an inseparable unity: neglect one level, and the others suffer."
  }
};
