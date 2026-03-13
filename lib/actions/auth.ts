"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import bcrypt from "bcryptjs";
import { sessionOptions, type SessionData, defaultSession } from "@/lib/session";
import type { ActionResponse } from "@/types";

/**
 * Get the current session from cookies
 */
export async function getSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
}

/**
 * Server Action: Login to admin panel
 * Validates credentials against environment variables
 */
export async function login(email: string, password: string): Promise<ActionResponse> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminEmail || !adminPasswordHash) {
      console.error("Admin credentials not configured in environment variables");
      return { success: false, message: "Login fehlgeschlagen." };
    }

    // Verify email
    if (email.toLowerCase() !== adminEmail.toLowerCase()) {
      return { success: false, message: "Ungültige Anmeldedaten." };
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, adminPasswordHash);
    if (!passwordMatch) {
      return { success: false, message: "Ungültige Anmeldedaten." };
    }

    // Create session
    const session = await getSession();
    session.isLoggedIn = true;
    session.email = email;
    await session.save();

    return { success: true, message: "Erfolgreich angemeldet." };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Ein Fehler ist aufgetreten." };
  }
}

/**
 * Server Action: Logout from admin panel
 */
export async function logout(): Promise<ActionResponse> {
  try {
    const session = await getSession();
    session.destroy();
    return { success: true, message: "Erfolgreich abgemeldet." };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, message: "Ein Fehler ist aufgetreten." };
  }
}
