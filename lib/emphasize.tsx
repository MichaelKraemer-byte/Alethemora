import type { ReactNode } from "react";

/** Wraps one exact phrase in Inter/Playfair 700, tinte. The surrounding words stay. */
export function emphasize(text: string, lead: string): ReactNode {
  if (!lead) return text;
  const index = text.indexOf(lead);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <strong className="font-bold text-tinte">{lead}</strong>
      {text.slice(index + lead.length)}
    </>
  );
}
