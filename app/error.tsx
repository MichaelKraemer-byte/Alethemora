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
      <h2 className="font-serif text-2xl text-stone-900">Etwas ist schiefgelaufen</h2>
      <p className="max-w-md text-sm text-stone-600">
        Die Seite konnte nicht geladen werden. Bitte versuche es erneut.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm text-stone-800 transition hover:border-stone-400"
      >
        Erneut laden
      </button>
    </div>
  );
}
