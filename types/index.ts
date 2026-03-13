/**
 * Shared TypeScript types for Wagner Bau & Immobilien
 */

/** Service definition used across the site */
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  advantages: string[];
  icon: string;
  slug: string;
}

/** Value proposition item */
export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Contact information */
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street?: string;
    city: string;
    region: string;
    country: string;
  };
}

/** Server action response */
export interface ActionResponse {
  success: boolean;
  message: string;
  data?: unknown;
  errors?: Record<string, string[]>;
}
