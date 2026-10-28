# @walidsj/react-ui

A customizable React design system built with Base UI, TypeScript, and
Tailwind CSS v4.

> Status: early development. Public APIs and visual tokens may change
> before `1.0.0`.

## Features

-   Typed React components with native prop and ref forwarding.
-   Base UI primitives for interactive behavior where appropriate.
-   Custom visual styling with Tailwind CSS v4.
-   Semantic design tokens with light and dark themes.
-   Compiled stylesheet distributed with the npm package.
-   ESM output with TypeScript declarations and tree-shaking support.

## Installation

``` bash
npm install @walidsj/react-ui
```

Requires React 19. The package is ESM-only.

## Usage

Import the compiled stylesheet once, then use components from the package
root:

``` tsx
import { Button, Input } from "@walidsj/react-ui";
import "@walidsj/react-ui/style.css";

export function Example() {
  return (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "24rem" }}>
      <Input aria-label="Full name" placeholder="Full name" />
      <Button variant="primary" size="md">
        Save changes
      </Button>
    </div>
  );
}
```

## Components

### Button

Renders a native `<button>`, defaults to `type="button"`, and forwards
native button props and refs.

| Prop        | Type                                                       | Default     |
| ----------- | ---------------------------------------------------------- | ----------- |
| `variant`   | `primary \| secondary \| outline \| ghost \| danger`       | `primary`   |
| `size`      | `sm \| md \| lg`                                           | `md`        |
| `type`      | Native button type                                         | `button`    |
| `disabled`  | `boolean`                                                  | `false`     |
| `className` | `string`                                                   | —           |

Icon-only buttons must receive an accessible name from the consumer,
for example `aria-label`.

### Input

Renders a native `<input>` and forwards native input props and refs.

| Prop        | Type      | Default |
| ----------- | --------- | ------- |
| `invalid`   | `boolean` | `false` |
| `size`      | `sm \| md \| lg` | `md` |
| `className` | `string`  | —       |

`invalid` sets `aria-invalid="true"` and applies error styling. A
consumer-provided `aria-invalid` value is preserved when `invalid` is
not set. Labels, descriptions, and error messages are composed by the
consumer.

Both components merge `className` with their internal classes. Conflicting
Tailwind utilities are resolved with `tailwind-merge`.

## Styling

The package ships a precompiled stylesheet at
`@walidsj/react-ui/style.css`. Consumers do not need Tailwind or a Tailwind
configuration to compile the library's CSS.

The stylesheet includes only the utilities used by the published
components and the semantic theme tokens. It intentionally does not
include Tailwind Preflight, and it does not set the host application's
global background, text color, or font family.

### Theme tokens

Override these variables on a wrapping element to customize the theme:

| Token                        | Purpose                     |
| ---------------------------- | --------------------------- |
| `--ui-background`            | Main component surface      |
| `--ui-foreground`            | Main text                   |
| `--ui-primary`               | Primary action surface      |
| `--ui-primary-foreground`    | Text on primary surface     |
| `--ui-secondary`             | Secondary surface           |
| `--ui-secondary-foreground`  | Text on secondary surface   |
| `--ui-muted`                 | Subtle surface              |
| `--ui-muted-foreground`      | Secondary text              |
| `--ui-border`                | Default border              |
| `--ui-ring`                  | Focus ring                  |
| `--ui-danger`                | Destructive action surface  |
| `--ui-danger-foreground`     | Text on destructive surface |
| `--ui-radius-sm`             | Small radius                |
| `--ui-radius-md`             | Medium radius               |
| `--ui-radius-lg`             | Large radius                |

``` css
.brand-theme {
    --ui-primary: oklch(0.55 0.18 150);
    --ui-ring: oklch(0.55 0.18 150);
    --ui-radius-md: 0.25rem;
}
```

### Dark mode

Apply the `dark` class to any ancestor of the components:

``` tsx
<div className="dark">
    <Button>Dark theme button</Button>
</div>
```

## Development

This repository uses Bun for dependency management and development
scripts.

``` bash
bun install
bun run typecheck
bun run lint
bun run test
bun run build
npm pack --dry-run
```

`bun run dev` watches the library build. `bun run test:watch` runs
Vitest in watch mode.

## Documentation

-   Product requirements: `PRD.md`
-   Design tokens and component rules: `DESIGN.md`
-   Architecture: `ARCHITECTURE.md`
-   Testing: `TESTING.md`
-   Contributing: `CONTRIBUTING.md`
-   Release: `RELEASE.md`
-   Agent instructions: `AGENTS.md`
-   Security: `SECURITY.md`

## License

MIT. See `LICENSE`.
# walid-ui
