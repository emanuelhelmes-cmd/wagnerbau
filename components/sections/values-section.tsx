"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Container, Section } from "@/components/ui";
import { valueIconMap } from "@/components/icons/value-icons";
import { VALUES } from "@/lib/constants";

/**
 * Values section – alternating slide-in cards from left and right,
 * triggered on scroll via IntersectionObserver with React state.
 * Premium card design with gold accent line and large custom icons.
 */
export function ValuesSection() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => new Set(prev).add(idx));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="default">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl mb-4">
            Darauf können Sie sich{" "}
            <span className="text-accent">verlassen</span>
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto text-lg">
            Qualität, Zuverlässigkeit und persönlicher Service – das zeichnet
            unsere Arbeit aus.
          </p>
        </div>

        {/* Values List – alternating left/right slide-in */}
        <div className="flex flex-col gap-5 max-w-3xl mx-auto overflow-hidden">
          {VALUES.map((value, index) => {
            const Icon = valueIconMap[value.icon];
            const fromLeft = index % 2 === 0;
            const isVisible = visible.has(index);

            return (
              <div
                key={value.title}
                ref={setRef(index)}
                data-index={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : fromLeft
                      ? "translateX(-100px)"
                      : "translateX(100px)",
                  transition: `opacity 0.6s ease-out ${index * 0.12}s, transform 0.6s ease-out ${index * 0.12}s`,
                }}
                className={`group relative flex items-center gap-6 rounded-2xl bg-white px-7 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] ${
                  fromLeft ? "self-start" : "self-end"
                }`}
              >
                {/* Gold accent bar on left edge */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-accent"
                  style={{ height: "40%" }}
                />

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 shrink-0 rounded-2xl bg-[#faf6ee]">
                  {Icon && <Icon className="w-9 h-9 text-accent" />}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-[17px] font-bold mb-0.5 text-[#1a1a1a] tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-[#666666] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
