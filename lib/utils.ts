import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+49)(\s?)(\d{3})(\s?)(\d{7})/, "$1 $3 $5");
}

/**
 * Generate a tel: link from a phone number
 */
export function phoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/**
 * Format date for German locale
 */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Format date with time for German locale
 */
export function formatDateTime(date: Date | string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

/**
 * Generate a WhatsApp link
 */
export function whatsappLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\s/g, "").replace("+", "");
  const url = `https://wa.me/${cleanPhone}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "…";
}
