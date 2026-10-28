import { Input as BaseInput } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, forwardRef, type Ref } from "react";
import { cn } from "../../lib/cn";

const inputVariants = cva(
  "flex w-full rounded-ui-md border border-border bg-background py-2 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
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

export type InputSize = NonNullable<VariantProps<typeof inputVariants>["size"]>;

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  invalid?: boolean;
  size?: InputSize;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { className, invalid = false, size = "md", "aria-invalid": ariaInvalid, ...props },
  ref,
) {
  return (
    <BaseInput
      {...props}
      ref={ref as Ref<HTMLElement>}
      aria-invalid={invalid || ariaInvalid}
      className={cn(
          inputVariants({ size, invalid }),
        className,
      )}
    />
  );
});
