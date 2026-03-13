import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button component with multiple variants and sizes
 * Primary uses gold accent, secondary uses dark theme
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent shadow-md hover:shadow-lg",
        secondary:
          "bg-primary text-white hover:bg-primary-light focus-visible:ring-primary shadow-md hover:shadow-lg",
        outline:
          "border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent",
        ghost:
          "text-primary hover:bg-primary/5 focus-visible:ring-primary",
        link:
          "text-accent underline-offset-4 hover:underline focus-visible:ring-accent p-0 h-auto",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20BD5A] focus-visible:ring-[#25D366] shadow-md hover:shadow-lg",
        danger:
          "bg-error text-white hover:bg-red-600 focus-visible:ring-error",
      },
      size: {
        sm: "h-9 px-4 text-sm gap-1.5",
        md: "h-11 px-6 text-base gap-2",
        lg: "h-13 px-8 text-lg gap-2.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
