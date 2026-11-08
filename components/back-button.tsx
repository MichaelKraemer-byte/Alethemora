"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguagePreference } from "@/lib/use-language-preference";

export function BackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguagePreference();

  if (!pathname || pathname === "/") return null;

  const label = language === "de" ? "Zurück" : "Back";

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={goBack}
      aria-label={label}
      className="fixed left-4 top-2/3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-white text-tinte shadow-[0_8px_20px_rgba(42,37,34,0.08)] transition hover:bg-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinte"
    >
      <ArrowLeft className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
