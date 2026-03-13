import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Textarea component with consistent styling
 * Supports error state
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border border-border bg-surface px-4 py-3 text-base transition-colors resize-y",
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
Textarea.displayName = "Textarea";

export { Textarea };
