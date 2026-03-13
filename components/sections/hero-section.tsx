import { MapPin, Clock, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * Hero section - main landing area with headline and trust indicators
 * Cream background, fully responsive (mobile / tablet / desktop)
 */
export function HeroSection() {
  return (
    <section className="bg-[#f5f0e8]">
      <Container className="py-16 sm:py-24 md:py-32 lg:py-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3.5 py-1 sm:px-4 sm:py-1.5 mb-6 sm:mb-8">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs sm:text-sm font-medium text-accent-dark">
            Weilheim i.OB &amp; Umgebung
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-5 sm:mb-6 max-w-4xl">
          <span className="text-[#111111]">Renovieren, montieren, anpacken —</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-accent">Ihr Partner vor Ort.</span>
        </h1>

        {/* Subline */}
        <p className="text-base sm:text-lg md:text-xl text-[#333333] leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-2xl">
          Von der Küchenmontage bis zum Trockenbau — wir übernehmen die
          handwerklichen Arbeiten, für die Ihnen die Zeit oder das Werkzeug
          fehlt. Zuverlässig, sauber und zum fairen Preis.
        </p>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {[
            { icon: Clock, text: "Schnelle Terminvergabe" },
            { icon: CheckCircle, text: "Saubere Arbeit" },
            { icon: MapPin, text: "Aus der Region" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl bg-white/60 border border-accent/10 px-4 py-3 sm:px-5 sm:py-4"
            >
              <Icon className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm sm:text-base font-medium text-[#222222]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
