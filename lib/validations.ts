import { z } from "zod";

/**
 * Contact form validation schema
 * Used on both client and server for consistent validation
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z
    .string()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s+\-()]{6,20}$/.test(val),
      "Bitte geben Sie eine gültige Telefonnummer ein"
    ),
  message: z
    .string()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(2000, "Nachricht darf maximal 2000 Zeichen lang sein"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Admin login validation schema
 */
export const loginSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  password: z.string().min(1, "Passwort ist erforderlich"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Gallery image validation schema
 */
export const galleryImageSchema = z.object({
  title: z.string().min(1, "Titel ist erforderlich").max(200),
  description: z.string().max(500).optional(),
  category: z.string().min(1, "Kategorie ist erforderlich"),
  imageUrl: z.string().url("Ungültige Bild-URL"),
  order: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
});

export type GalleryImageData = z.infer<typeof galleryImageSchema>;
