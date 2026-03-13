import {
  Heart, Clock, Sparkles, Wrench, MessageCircle, MapPin,
} from "lucide-react";
import { Container, Section, Card, CardContent } from "@/components/ui";
import { VALUES } from "@/lib/constants";

/** Map value icon names to Lucide components */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Clock, Sparkles, Wrench, MessageCircle, MapPin,
};

/**
 * Values section - displays trust indicators and value propositions
 */
export function ValuesSection() {
  return (
    <Section variant="default">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl mb-4">
            Darauf können Sie sich{" "}
            <span className="heading-accent heading-accent-center text-accent">
              verlassen
            </span>
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto text-lg">
            Qualität, Zuverlässigkeit und persönlicher Service – das zeichnet
            unsere Arbeit aus.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => {
            const Icon = iconMap[value.icon] || Heart;
            return (
              <Card key={value.title} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-5">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-[#111111]">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
