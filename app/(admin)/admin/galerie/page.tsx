import Image from "next/image";
import prisma from "@/lib/db";
import { Card, CardContent, Badge } from "@/components/ui";
import { ImageIcon } from "lucide-react";
import { GalleryActions } from "./components/gallery-actions";

/**
 * Admin Gallery page
 * Manage project gallery images
 */
export default async function GaleriePage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Galerie</h1>
        <Badge variant="accent">{images.length} Bilder</Badge>
      </div>

      <p className="text-muted mb-6">
        Hier können Sie Ihre Projektbilder verwalten. Die Bilder werden auf der
        Website in den jeweiligen Leistungsseiten angezeigt. Aktuell sind Platzhalter
        gesetzt – ersetzen Sie diese durch echte Projektfotos.
      </p>

      {images.length === 0 ? (
        <Card>
          <CardContent className="text-center py-16">
            <ImageIcon className="h-12 w-12 text-muted-light mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Keine Bilder</h3>
            <p className="text-muted">
              Laden Sie Projektbilder hoch, um Ihre Galerie zu füllen.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <Card key={img.id} className={!img.isActive ? "opacity-60" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <Image
                  src={img.imageUrl}
                  alt={img.title}
                  fill
                  className="object-cover"
                />
                {!img.isActive && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Badge variant="error">Deaktiviert</Badge>
                  </div>
                )}
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">{img.title}</h3>
                {img.description && (
                  <p className="text-sm text-muted mb-2">{img.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {img.category}
                  </Badge>
                  <GalleryActions id={img.id} isActive={img.isActive} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
