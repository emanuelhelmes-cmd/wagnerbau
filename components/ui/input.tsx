import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Input component with consistent styling
 * Supports error state and integrated label
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border border-border bg-surface px-4 py-2 text-base transition-colors",
            "placeholder:text-muted-light",
            "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus:ring-error/30 focus:border-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
