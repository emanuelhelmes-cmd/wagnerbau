import Image from "next/image";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui";

/**
 * Hero section – full-viewport landing with background image,
 * gradient overlay, white text and glassmorphic trust indicators.
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay – dark left for text, fading right to show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

      {/* Main content – grows to push trust indicators down */}
      <div className="relative z-10 flex-1 flex items-center">
        <Container className="py-24 sm:py-32 md:py-40 lg:py-48">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-1 sm:px-4 sm:py-1.5 mb-6 sm:mb-8">
            <MapPin className="h-3.5 w-3.5 text-accent-light" />
            <span className="text-xs sm:text-sm font-medium text-white/90">
              Weilheim i.OB &amp; Umgebung
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-5 sm:mb-6 max-w-4xl">
            <span className="text-white">Renovieren, montieren, anpacken —</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-accent-light">Ihr Partner vor Ort.</span>
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Von der Küchenmontage bis zum Trockenbau — wir übernehmen die
            handwerklichen Arbeiten, für die Ihnen die Zeit oder das Werkzeug
            fehlt. Zuverlässig, sauber und zum fairen Preis.
          </p>
        </Container>
      </div>

      {/* Trust indicators – pinned to bottom */}
      <div className="relative z-10 pb-6 sm:pb-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              { icon: Clock, text: "Schnelle Terminvergabe" },
              { icon: CheckCircle, text: "Saubere Arbeit" },
              { icon: MapPin, text: "Aus der Region" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3 sm:px-5 sm:py-4"
              >
                <Icon className="h-5 w-5 text-accent-light shrink-0" />
                <span className="text-sm sm:text-base font-medium text-white/90">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
