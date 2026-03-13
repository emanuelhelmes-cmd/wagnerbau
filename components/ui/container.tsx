import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container component - max-width wrapper with horizontal padding
 */
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({ className, size = "default", children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-7xl": size === "default",
          "max-w-4xl": size === "narrow",
          "max-w-[1400px]": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
