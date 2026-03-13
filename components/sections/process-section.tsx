import { Container, Section } from "@/components/ui";
import { WORKFLOW_STEPS } from "@/lib/constants";

/**
 * Process/workflow section for homepage
 * Shows the 5-step process to build trust and reduce friction
 */
export function ProcessSection() {
  return (
    <Section variant="default">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Einfach &amp; transparent
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-5">
            So funktioniert die{" "}
            <span className="text-accent">Zusammenarbeit</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Von der ersten Kontaktaufnahme bis zur Abnahme – transparent und unkompliziert.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.step} className="relative text-center group">
              {/* Connector line (hidden on mobile, visible on md+) */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-accent/20" />
              )}

              {/* Step number */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-bold text-lg mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                {step.step}
              </div>

              {/* Title */}
              <h3 className="font-bold text-base mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
