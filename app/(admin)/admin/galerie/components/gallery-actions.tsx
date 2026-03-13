"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui";
import { toggleGalleryImageActive, deleteGalleryImage } from "@/lib/actions/admin";

interface GalleryActionsProps {
  id: string;
  isActive: boolean;
}

/**
 * Client component for gallery image action buttons
 */
export function GalleryActions({ id, isActive }: GalleryActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function handleToggle() {
    setLoading("toggle");
    await toggleGalleryImageActive(id, !isActive);
    router.refresh();
    setLoading(null);
  }

  async function handleDelete() {
    if (!confirm("Bild wirklich löschen?")) return;
    setLoading("delete");
    await deleteGalleryImage(id);
    router.refresh();
    setLoading(null);
  }

  return (
    <div className="flex gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        disabled={loading !== null}
        title={isActive ? "Deaktivieren" : "Aktivieren"}
        className="h-8 w-8"
      >
        {loading === "toggle" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : isActive ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        disabled={loading !== null}
        title="Löschen"
        className="h-8 w-8 text-error hover:text-error"
      >
        {loading === "delete" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Trash2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
