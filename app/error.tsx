"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="type-h2-sm">Etwas ist schiefgelaufen</h2>
      <p className="type-muted max-w-md text-sm">
        Die Seite konnte nicht geladen werden. Bitte versuche es erneut.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-tinte bg-transparent px-5 py-2 text-sm font-medium text-tinte transition hover:bg-tinte hover:text-white"
      >
        Erneut laden
      </button>
    </div>
  );
}
