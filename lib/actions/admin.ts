"use server";

import prisma from "@/lib/db";
import { getSession } from "@/lib/actions/auth";
import type { ActionResponse } from "@/types";

/**
 * Server Actions for admin panel operations
 * All actions require authentication
 */

async function requireAuth() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    throw new Error("Unauthorized");
  }
}

function validateId(id: unknown): string {
  if (typeof id !== "string" || id.trim().length === 0) {
    throw new Error("Invalid ID");
  }
  return id.trim();
}

/**
 * Toggle message read status
 */
export async function toggleRead(id: string, isRead: boolean): Promise<ActionResponse> {
  try {
    await requireAuth();
    const validId = validateId(id);
    await prisma.contactMessage.update({
      where: { id: validId },
      data: { isRead },
    });
    return { success: true, message: isRead ? "Als gelesen markiert" : "Als ungelesen markiert" };
  } catch (error) {
    console.error("toggleRead error:", error);
    return { success: false, message: "Fehler beim Aktualisieren der Nachricht" };
  }
}

/**
 * Archive a message (soft delete)
 */
export async function archiveMessage(id: string): Promise<ActionResponse> {
  try {
    await requireAuth();
    const validId = validateId(id);
    await prisma.contactMessage.update({
      where: { id: validId },
      data: { isArchived: true },
    });
    return { success: true, message: "Nachricht archiviert" };
  } catch (error) {
    console.error("archiveMessage error:", error);
    return { success: false, message: "Fehler beim Archivieren der Nachricht" };
  }
}

/**
 * Delete a gallery image
 */
export async function deleteGalleryImage(id: string): Promise<ActionResponse> {
  try {
    await requireAuth();
    const validId = validateId(id);
    await prisma.galleryImage.delete({
      where: { id: validId },
    });
    return { success: true, message: "Bild gelöscht" };
  } catch (error) {
    console.error("deleteGalleryImage error:", error);
    return { success: false, message: "Fehler beim Löschen des Bildes" };
  }
}

/**
 * Toggle gallery image active status
 */
export async function toggleGalleryImageActive(id: string, isActive: boolean): Promise<ActionResponse> {
  try {
    await requireAuth();
    const validId = validateId(id);
    await prisma.galleryImage.update({
      where: { id: validId },
      data: { isActive },
    });
    return { success: true, message: isActive ? "Bild aktiviert" : "Bild deaktiviert" };
  } catch (error) {
    console.error("toggleGalleryImageActive error:", error);
    return { success: false, message: "Fehler beim Aktualisieren des Bildes" };
  }
}
