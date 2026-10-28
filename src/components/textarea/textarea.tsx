import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../lib/cn";

const textareaVariants = cva(
  "flex w-full resize-y rounded-ui-md border border-border bg-background py-2 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "min-h-16 px-2.5 text-sm",
        md: "min-h-20 px-3 text-sm",
        lg: "min-h-28 px-4 text-base",
      },
      invalid: {
        true: "border-danger focus-visible:ring-danger/30",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

export type TextareaSize = NonNullable<
  VariantProps<typeof textareaVariants>["size"]
>;

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  invalid?: boolean;
  size?: TextareaSize;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, invalid = false, size = "md", "aria-invalid": ariaInvalid, ...props }, ref) {
    return (
      <textarea
        {...props}
        ref={ref}
        aria-invalid={invalid || ariaInvalid}
        className={cn(
          textareaVariants({ size, invalid }),
          className,
        )}
      />
    );
  },
);
