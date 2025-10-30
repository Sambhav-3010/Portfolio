import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const chipVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        blue: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        cyan: "border-transparent bg-cyan-600 text-white hover:bg-cyan-700",
        "blue-light": "border-transparent bg-blue-100 text-blue-800",
        "cyan-light": "border-transparent bg-cyan-100 text-cyan-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  label: string;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(chipVariants({ variant }), className)}
        {...props}
      >
        {label}
      </div>
    );
  }
);
Chip.displayName = "Chip";

export default Chip;
