import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("supports native attributes and an accessible label", () => {
    render(<><label htmlFor="message">Message</label><Textarea id="message" name="message" required /></>);
    expect(screen.getByRole("textbox", { name: "Message" })).toBeRequired();
  });

  it("marks the textarea invalid and preserves consumer values", () => {
    const { rerender } = render(<Textarea aria-label="Message" invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    rerender(<Textarea aria-label="Message" aria-invalid="grammar" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "grammar");
  });

  it("forwards a ref and merges custom classes", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea aria-label="Message" ref={ref} className="bg-red-500" />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    expect(screen.getByRole("textbox")).toHaveClass("bg-red-500");
  });

  it("supports textarea sizes", () => {
    const { rerender } = render(<Textarea aria-label="Message" size="sm" />);
    expect(screen.getByRole("textbox")).toHaveClass("min-h-16");
    rerender(<Textarea aria-label="Message" size="lg" />);
    expect(screen.getByRole("textbox")).toHaveClass("min-h-28");
  });
});
