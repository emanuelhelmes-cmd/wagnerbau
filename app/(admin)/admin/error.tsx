"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin error:", error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h2 className="text-xl font-semibold mb-2">Fehler im Admin-Bereich</h2>
        <p className="text-muted mb-6 text-sm">
          {error.message || "Ein unerwarteter Fehler ist aufgetreten."}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Erneut versuchen
          </button>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted/10 transition-colors"
          >
            Zum Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
