import Link from "next/link";
import { Container } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

/**
 * 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container size="narrow" className="text-center">
        <h1 className="text-8xl font-bold text-accent/20 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Seite nicht gefunden</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
          Kehren Sie zur Startseite zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className={buttonVariants({ variant: "primary", size: "lg", className: "gap-2" })}>
            <Home className="h-5 w-5" />
            Zur Startseite
          </Link>
          <Link href="/kontakt" className={buttonVariants({ variant: "outline", size: "lg", className: "gap-2" })}>
            <ArrowLeft className="h-5 w-5" />
            Kontakt
          </Link>
        </div>
      </Container>
    </div>
  );
}
