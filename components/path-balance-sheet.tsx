import { MinusCircle, PlusCircle } from "lucide-react";

export function PathBalanceSheet({
  language,
  resonance,
  dissonance,
  causalityText
}: {
  language: "en" | "de";
  resonance: string[];
  dissonance: string[];
  causalityText: string;
}) {
  const title = language === "en" ? "Resonance & Dissonance" : "Resonanz & Dissonanz";
  const resonanceLabel = language === "en" ? "RESONANCE" : "RESONANZ";
  const dissonanceLabel = language === "en" ? "DISSONANCE" : "DISSONANZ";
  return (
    <article className="mt-8 rounded-2xl border border-sand bg-white p-6">
      <h3 className="font-serif text-2xl text-tinte">{title}</h3>
      <p className="mt-2 text-tinte">{causalityText}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-sand bg-white p-4">
          <p className="flex items-center gap-2 text-sm tracking-[0.14em] text-gold">
            <PlusCircle className="h-4 w-4" />
            {resonanceLabel}
          </p>
          <ul className="mt-3 space-y-2 text-tinte">
            {resonance.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-sand bg-beige p-4">
          <p className="flex items-center gap-2 text-sm tracking-[0.14em] text-tinte">
            <MinusCircle className="h-4 w-4" />
            {dissonanceLabel}
          </p>
          <ul className="mt-3 space-y-2 text-tinte">
            {dissonance.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tinte" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
