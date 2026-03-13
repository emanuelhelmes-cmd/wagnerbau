import { PrismaClient } from "@prisma/client";

/**
 * Database seed script
 * Seeds initial site content and sample gallery images
 * Run with: npx tsx prisma/seed.ts
 */

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed default site content
  const siteContent = [
    {
      key: "hero.headline",
      value: "Ihr Betrieb für kleine Bau- und Montagearbeiten",
    },
    {
      key: "hero.subline",
      value:
        "Zuverlässige Unterstützung bei Renovierung, Montage und handwerklichen Arbeiten rund um Ihr Zuhause.",
    },
    {
      key: "about.intro",
      value:
        "Wagner Bau & Immobilien ist Ihr verlässlicher Partner für kleine Bau- und Montagearbeiten in Weilheim und Umgebung. Mit handwerklicher Leidenschaft und einem Blick fürs Detail kümmern wir uns um Renovierungen, Montagen und Ausbesserungsarbeiten rund um Ihr Zuhause.",
    },
    {
      key: "about.owner",
      value:
        "Als gelernter Fliesenleger bringe ich fundiertes Fachwissen und praktische Erfahrung in jedes Projekt ein. Mein Anspruch: Qualität, Zuverlässigkeit und eine saubere Ausführung – bei jedem Auftrag.",
    },
    {
      key: "about.values",
      value:
        "Wir arbeiten so, wie wir es selbst erwarten würden: sorgfältig, ehrlich und mit Respekt vor Ihrem Zuhause. Jedes Projekt wird mit der gleichen Hingabe behandelt – egal ob groß oder klein.",
    },
  ];

  for (const content of siteContent) {
    await prisma.siteContent.upsert({
      where: { key: content.key },
      update: { value: content.value },
      create: content,
    });
  }

  console.log(`✅ Seeded ${siteContent.length} site content entries`);

  // Seed sample gallery images (placeholders)
  // Clear existing gallery images to prevent duplicates on re-seed
  await prisma.galleryImage.deleteMany();

  const galleryImages = [
    {
      title: "Trockenbau Projekt",
      description: "Professioneller Trockenbau in einem Wohnhaus",
      category: "trockenbau",
      imageUrl: "/images/placeholders/placeholder-gallery.svg",
      order: 1,
    },
    {
      title: "Küchenmontage",
      description: "Komplette Küchenmontage mit Einbaugeräten",
      category: "kuechenmontage",
      imageUrl: "/images/placeholders/placeholder-gallery.svg",
      order: 2,
    },
    {
      title: "Bodenverlegung",
      description: "Laminatverlegung im Wohnzimmer",
      category: "bodenverlegung",
      imageUrl: "/images/placeholders/placeholder-gallery.svg",
      order: 3,
    },
    {
      title: "Terrassenbau",
      description: "Holzterrasse mit modernem Design",
      category: "terrassenbau",
      imageUrl: "/images/placeholders/placeholder-gallery.svg",
      order: 4,
    },
    {
      title: "Wandgestaltung",
      description: "Professionelle Wandaufbereitung",
      category: "wand-deckenaufbereitung",
      imageUrl: "/images/placeholders/placeholder-gallery.svg",
      order: 5,
    },
    {
      title: "Entrümpelung",
      description: "Komplette Entrümpelung einer Wohnung",
      category: "abbruch-entruempelung",
      imageUrl: "/images/placeholders/placeholder-gallery.svg",
      order: 6,
    },
  ];

  for (const image of galleryImages) {
    await prisma.galleryImage.create({ data: image });
  }

  console.log(`✅ Seeded ${galleryImages.length} gallery images`);
  console.log("🎉 Database seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
