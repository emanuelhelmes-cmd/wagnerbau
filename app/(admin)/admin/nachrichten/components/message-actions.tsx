"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Archive, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";
import { toggleRead, archiveMessage } from "@/lib/actions/admin";

interface MessageActionsProps {
  id: string;
  isRead: boolean;
}

/**
 * Client component for message action buttons (mark read, archive)
 */
export function MessageActions({ id, isRead }: MessageActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function handleToggleRead() {
    setLoading("read");
    await toggleRead(id, !isRead);
    router.refresh();
    setLoading(null);
  }

  async function handleArchive() {
    setLoading("archive");
    await archiveMessage(id);
    router.refresh();
    setLoading(null);
  }

  return (
    <div className="flex gap-2 flex-shrink-0">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggleRead}
        disabled={loading !== null}
        className="gap-1.5"
        title={isRead ? "Als ungelesen markieren" : "Als gelesen markieren"}
      >
        {loading === "read" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <CheckCircle2 className="h-4 w-4" />
        )}
        {isRead ? "Ungelesen" : "Gelesen"}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleArchive}
        disabled={loading !== null}
        className="gap-1.5 text-error hover:text-error"
        title="Archivieren"
      >
        {loading === "archive" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Archive className="h-4 w-4" />
        )}
        Archiv
      </Button>
    </div>
  );
}
