"use server";

import prisma from "@/lib/db";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import type { ActionResponse } from "@/types";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

/**
 * Server Action: Submit contact form
 * Validates input, checks honeypot & rate limit, stores in database
 */
export async function submitContactForm(
  data: ContactFormData & { website?: string }
): Promise<ActionResponse> {
  try {
    // Honeypot check — bots fill hidden fields
    if (data.website) {
      // Silently succeed to not reveal the trap
      return {
        success: true,
        message: "Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.",
      };
    }

    // Rate limiting
    if (isRateLimited("contact-form")) {
      return {
        success: false,
        message: "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.",
      };
    }

    // Validate on server side
    const validated = contactFormSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        message: "Bitte überprüfen Sie Ihre Eingaben.",
        errors: validated.error.flatten().fieldErrors as Record<string, string[]>,
      };
    }

    // Store in database
    await prisma.contactMessage.create({
      data: {
        name: validated.data.name,
        email: validated.data.email,
        phone: validated.data.phone || null,
        message: validated.data.message,
      },
    });

    // TODO: Send email notification (configure Resend later)

    return {
      success: true,
      message:
        "Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message:
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
    };
  }
}
