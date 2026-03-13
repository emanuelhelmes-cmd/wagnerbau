import type { Service, ValueItem, NavLink, ContactInfo } from "@/types";

/**
 * Site-wide constants and data
 * Single source of truth for all static content
 */

// ============================================
// Navigation
// ============================================

export const NAV_LINKS: NavLink[] = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

// ============================================
// Contact Information
// ============================================

export const CONTACT: ContactInfo = {
  phone: "+49 175 8920350",
  whatsapp: "+491758920350",
  email: "info@wagner-bau-immobilien.de",
  address: {
    city: "Weilheim i.OB",
    region: "Oberbayern",
    country: "Deutschland",
  },
};

export const SITE_URL = "https://wagner-bau-immobilien.de";
export const COMPANY_NAME = "Wagner Bau & Immobilien";
export const COMPANY_TAGLINE = "Ihr Betrieb für kleine Bau- und Montagearbeiten";

// ============================================
// Services
// ============================================

export const SERVICES: Service[] = [
  {
    id: "abbruch-entruempelung",
    title: "Abbruch und Entrümpelung",
    slug: "abbruch-entruempelung",
    icon: "Hammer",
    shortDescription:
      "Professioneller Rückbau und Entrümpelung von Räumen, Wohnungen und Gebäudeteilen.",
    description:
      "Ob alte Einbauten, nicht mehr benötigte Wände oder eine komplette Wohnungsauflösung – wir kümmern uns um den fachgerechten Abbruch und die saubere Entrümpelung. Dabei achten wir auf eine ordnungsgemäße Entsorgung und hinterlassen Ihre Räume besenrein.",
    advantages: [
      "Fachgerechter Rückbau von Wänden und Einbauten",
      "Komplette Wohnungsentrümpelung",
      "Ordnungsgemäße Entsorgung",
      "Besenreine Übergabe",
    ],
  },
  {
    id: "trockenbau",
    title: "Trockenbau",
    slug: "trockenbau",
    icon: "LayoutGrid",
    shortDescription:
      "Flexible Raumgestaltung mit Trockenbauwänden, Deckenabhängungen und Dachausbau.",
    description:
      "Trockenbau bietet vielfältige Möglichkeiten der Raumgestaltung – von einfachen Trennwänden über Deckenabhängungen bis hin zum kompletten Dachausbau. Wir setzen Ihre Vorstellungen präzise um und schaffen neue Wohnräume nach Maß.",
    advantages: [
      "Ständerwände und Trennwände",
      "Deckenabhängungen",
      "Dachschrägenverkleidung",
      "Saubere und schnelle Umsetzung",
    ],
  },
  {
    id: "kuechenmontage",
    title: "Küchenmontage",
    slug: "kuechenmontage",
    icon: "ChefHat",
    shortDescription:
      "Professionelle Montage Ihrer neuen Küche inklusive Anschluss aller Geräte.",
    description:
      "Die Montage einer neuen Küche erfordert Präzision und Erfahrung. Wir bauen Ihre Küche fachgerecht auf, passen alle Elemente millimetergenau ein und schließen Spüle, Herd und Geschirrspüler korrekt an.",
    advantages: [
      "Aufbau aller gängigen Küchenhersteller",
      "Millimetergenaue Anpassung",
      "Anschluss von Elektrogeräten und Spüle",
      "Arbeitsplattenzuschnitt vor Ort",
    ],
  },
  {
    id: "moebelmontage",
    title: "Möbelmontage & Einbauschränke",
    slug: "moebelmontage",
    icon: "DoorOpen",
    shortDescription:
      "Fachgerechte Montage von Möbeln, Einbauschränken und Regalsystemen.",
    description:
      "Vom IKEA-Regal bis zum maßgefertigten Einbauschrank – wir montieren Ihre Möbel zuverlässig und sorgfältig. Auch Wandmontagen von Regalen, TV-Halterungen und schweren Schränken gehören zu unserem Repertoire.",
    advantages: [
      "Aufbau aller gängigen Möbelmarken",
      "Einbauschränke nach Maß",
      "Wandmontage und Befestigungen",
      "Sicherheitsgerechte Verankerung",
    ],
  },
  {
    id: "innentürmontage",
    title: "Innentürmontage",
    slug: "innentürmontage",
    icon: "DoorClosed",
    shortDescription:
      "Einbau und Austausch von Innentüren inklusive Zargen und Beschlägen.",
    description:
      "Neue Innentüren werten jeden Raum auf. Wir kümmern uns um den fachgerechten Einbau oder Austausch Ihrer Innentüren – inklusive Zargenmontage, Beschläge und sauberer Anpassung an den Bodenbelag.",
    advantages: [
      "Einbau neuer Türen und Zargen",
      "Austausch bestehender Türen",
      "Anpassung an Bodenbeläge",
      "Montage von Beschlägen und Griffen",
    ],
  },
  {
    id: "bodenverlegung",
    title: "Bodenverlegung",
    slug: "bodenverlegung",
    icon: "Layers",
    shortDescription:
      "Verlegung von Laminat, Vinyl, Parkett und anderen Bodenbelägen.",
    description:
      "Ein neuer Boden verändert das gesamte Raumgefühl. Wir verlegen Laminat, Vinyl, Klick-Parkett und andere Bodenbeläge fachmännisch – inklusive Untergrundvorbereitung, Trittschalldämmung und sauberer Sockelleistenmontage.",
    advantages: [
      "Laminat, Vinyl und Klick-Parkett",
      "Untergrundvorbereitung",
      "Trittschalldämmung",
      "Sockelleistenmontage",
    ],
  },
  {
    id: "silikon-verfugung",
    title: "Silikon- und Verfugungsarbeiten",
    slug: "silikon-verfugung",
    icon: "Droplets",
    shortDescription:
      "Professionelle Silikon- und Fugenarbeiten in Bad, Küche und Sanitärbereichen.",
    description:
      "Saubere Fugen sind nicht nur optisch wichtig, sondern schützen auch vor Feuchtigkeit und Schimmel. Wir erneuern Silikonfugen in Bad und Küche, verfugen Fließen fachgerecht und sorgen für einen sauberen Abschluss.",
    advantages: [
      "Silikon erneuern in Bad und Küche",
      "Fachgerechte Fliesenverfugung",
      "Schimmelschutz durch professionelle Abdichtung",
      "Saubere und langlebige Ergebnisse",
    ],
  },
  {
    id: "terrassenbau",
    title: "Terrassenbau",
    slug: "terrassenbau",
    icon: "Fence",
    shortDescription:
      "Planung und Bau von Holz- und WPC-Terrassen für Ihren Außenbereich.",
    description:
      "Eine schöne Terrasse erweitert Ihren Wohnraum ins Freie. Wir planen und bauen Ihre Terrasse aus Holz oder WPC – vom Unterbau über die Verlegung bis zum fertigen Genussplatz im Garten.",
    advantages: [
      "Holz- und WPC-Terrassen",
      "Stabiler Unterbau",
      "Individuelle Planung",
      "Wetterfeste Materialien",
    ],
  },
  {
    id: "wand-deckenaufbereitung",
    title: "Wand- und Deckenaufbereitung",
    slug: "wand-deckenaufbereitung",
    icon: "PaintBucket",
    shortDescription:
      "Aufbereitung und Vorbereitung von Wänden und Decken für neue Oberflächen.",
    description:
      "Bevor neue Farbe, Putz oder Tapete aufgetragen werden kann, müssen Wände und Decken fachgerecht vorbereitet werden. Wir spachteln, schleifen und grundieren – für ein perfektes Endergebnis.",
    advantages: [
      "Spachtel- und Schleifarbeiten",
      "Grundierung und Vorbehandlung",
      "Rissreparaturen",
      "Vorbereitung für Tapete oder Farbe",
    ],
  },
  {
    id: "putz-ausbesserung",
    title: "Putz- und Ausbesserungsarbeiten",
    slug: "putz-ausbesserung",
    icon: "Wrench",
    shortDescription:
      "Kleine und mittlere Putzarbeiten sowie Ausbesserungen im Innen- und Außenbereich.",
    description:
      "Risse im Putz, beschädigte Stellen oder kleine Ausbesserungen – wir kümmern uns um alle Putzarbeiten im Innen- und Außenbereich. Für ein sauberes Erscheinungsbild und den langfristigen Werterhalt Ihrer Immobilie.",
    advantages: [
      "Innen- und Außenputzarbeiten",
      "Rissreparaturen",
      "Teilflächen-Erneuerung",
      "Saubere Übergänge zu bestehenden Flächen",
    ],
  },
];

// ============================================
// Value Propositions
// ============================================

export const VALUES: ValueItem[] = [
  {
    icon: "Heart",
    title: "Leidenschaft fürs Handwerk",
    description:
      "Jedes Projekt wird mit Herzblut und Engagement umgesetzt – egal ob groß oder klein.",
  },
  {
    icon: "Clock",
    title: "Zuverlässigkeit & gute Erreichbarkeit",
    description:
      "Wir halten unsere Termine und sind für Sie immer gut erreichbar.",
  },
  {
    icon: "Sparkles",
    title: "Saubere und sorgfältige Ausführung",
    description:
      "Qualität steht bei uns an erster Stelle – von der Planung bis zur Fertigstellung.",
  },
  {
    icon: "Wrench",
    title: "Flexible Unterstützung",
    description:
      "Auch bei kleinen Renovierungen und Einzelarbeiten sind wir der richtige Ansprechpartner.",
  },
  {
    icon: "MessageCircle",
    title: "Transparente Kommunikation",
    description:
      "Offene Absprachen, klare Preise und keine Überraschungen.",
  },
  {
    icon: "MapPin",
    title: "Regionale Hilfe aus Oberbayern",
    description:
      "Wir sind vor Ort in Weilheim und Umgebung – schnell, flexibel und persönlich.",
  },
];

// ============================================
// About / Workflow Steps
// ============================================

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Kontaktaufnahme",
    description:
      "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie unser Kontaktformular. Wir melden uns schnell zurück.",
  },
  {
    step: 2,
    title: "Besichtigung & Beratung",
    description:
      "Wir kommen vorbei, schauen uns die Situation an und besprechen gemeinsam die beste Lösung.",
  },
  {
    step: 3,
    title: "Angebot",
    description:
      "Sie erhalten ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    step: 4,
    title: "Umsetzung",
    description:
      "Wir setzen die Arbeiten termingerecht und sauber um – mit Liebe zum Detail.",
  },
  {
    step: 5,
    title: "Abnahme",
    description:
      "Gemeinsam prüfen wir das Ergebnis. Erst wenn Sie zufrieden sind, ist der Auftrag abgeschlossen.",
  },
];
