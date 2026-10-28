import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, forwardRef, type Ref } from "react";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center whitespace-nowrap rounded-ui-md font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted active:bg-muted/70",
        ghost:
          "bg-transparent text-foreground hover:bg-muted active:bg-muted/70",
        danger:
          "bg-danger text-danger-foreground hover:bg-danger/90 active:bg-danger/80",
      },
      size: {
        sm: "h-8 gap-1.5 px-3 text-sm",
        md: "h-10 gap-2 px-4 text-sm",
        lg: "h-12 gap-2.5 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
export type ButtonSize = NonNullable<
  VariantProps<typeof buttonVariants>["size"]
>;

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref,
  ) {
    return (
      <BaseButton
        {...props}
        ref={ref as Ref<HTMLElement>}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
      />
    );
  },
);
