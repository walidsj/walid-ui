import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders an accessible button with type button by default", () => {
    render(<Button>Save changes</Button>);

    const button = screen.getByRole("button", { name: "Save changes" });

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("bg-primary", "h-10");
  });

  it("allows overriding the native type", () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  it("calls the click handler", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Save changes</Button>);
    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call the click handler when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Save changes
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Save changes" });
    await user.click(button);

    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="danger" size="lg">
        Delete account
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Delete account" });

    expect(button).toHaveClass("bg-danger", "h-12", "text-base");
  });

  it("merges custom classes with variant classes", () => {
    render(
      <Button variant="primary" className="w-full">
        Continue
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continue" });

    expect(button).toHaveClass("bg-primary", "w-full");
  });

  it("forwards a ref to the button element", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Continue</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
