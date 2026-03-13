import { SessionOptions } from "iron-session";

/**
 * iron-session configuration for admin authentication
 * Sessions are encrypted and stored in HTTP-only cookies
 */

export interface SessionData {
  isLoggedIn: boolean;
  email?: string;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("SESSION_SECRET environment variable is required in production");
    }
    // Only allow fallback in development
    return "dev-only-secret-key-min-32-chars-long-do-not-use!!";
  }
  return secret;
}

export const sessionOptions: SessionOptions = {
  password: getSessionSecret(),
  cookieName: "wagner-admin-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  },
};
