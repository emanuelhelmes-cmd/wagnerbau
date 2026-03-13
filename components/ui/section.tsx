import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Section component - consistent vertical spacing for page sections
 */
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark" | "accent";
}

export function Section({ className, variant = "default", children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        {
          "bg-background": variant === "default",
          "bg-surface": variant === "muted",
          "bg-primary text-white": variant === "dark",
          "bg-accent/5": variant === "accent",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
