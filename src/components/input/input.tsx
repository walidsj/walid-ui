import { Input as BaseInput } from "@base-ui/react/input";
import { type ComponentPropsWithoutRef, forwardRef, type Ref } from "react";
import { cn } from "../../lib/cn";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid = false, "aria-invalid": ariaInvalid, ...props },
  ref,
) {
  return (
    <BaseInput
      {...props}
      ref={ref as Ref<HTMLElement>}
      aria-invalid={invalid || ariaInvalid}
      className={cn(
        "flex h-10 w-full rounded-ui-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger/30",
        className,
      )}
    />
  );
});
