"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-accent/20 mb-4">Fehler</h1>
        <h2 className="text-xl font-semibold mb-2">
          Etwas ist schiefgelaufen
        </h2>
        <p className="text-muted mb-6">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es
          erneut.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-white font-medium hover:bg-accent/90 transition-colors"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
