# Architecture

## 1. Overview

`@walidsj/react-ui` is a prebuilt React component library.

``` text
Consumer React application
  ├── imports components from @walidsj/react-ui
  └── imports @walidsj/react-ui/style.css
                 │
                 ▼
          npm package exports
          ├── ESM JavaScript
          ├── TypeScript declarations
          └── compiled CSS
                 ▲
                 │ build
  ┌──────────────┴──────────────┐
  │ Vite library mode           │
  │ Tailwind CSS v4 Vite plugin │
  │ TypeScript declaration tool │
  └──────────────▲──────────────┘
                 │
  src/
  ├── components/
  ├── lib/
  ├── styles/
  └── index.ts
```

## 2. Layer responsibilities

### Components

Own public props, composition, and visual classes. Prefer Base UI
primitives for complex interactions and native HTML for simple controls.

### Utilities

Contain internal helpers such as `cn()`. Utilities are not public
exports unless deliberately promoted.

### Styles

Define semantic tokens and Tailwind theme mappings. The build must emit
a consumable CSS file.

### Build

Vite emits ESM output and CSS. Type declarations are generated for the
public API. React and React DOM are externalized.

### Package exports

The supported entry points are:

-   `@walidsj/react-ui`
-   `@walidsj/react-ui/style.css`

Do not rely on consumers importing private source paths.

## 3. Dependency policy

-   `react` and `react-dom`: peer dependencies and externalized from
    output.
-   `@base-ui/react`: runtime dependency because the library's
    components use it.
-   `cn`: runtime dependency used for class composition. The library does not
    use `clsx` or `tailwind-merge` directly.
-   Vite, Tailwind build plugin, TypeScript, testing libraries, and
    declaration tooling: development dependencies.

Before release, validate peer dependency ranges and ensure the actual
generated bundle does not accidentally include React.

## 4. CSS distribution contract

The library owns compilation of its Tailwind classes. The package must
include `dist/style.css`, and the export map must expose it.

The consumer imports CSS explicitly:

``` tsx
import { Button, Input } from "@walidsj/react-ui";
import "@walidsj/react-ui/style.css";
```

The consumer should not need to scan this package's source files with
Tailwind. Consumer-specific utility classes remain the consumer
application's responsibility.

## 5. Build validation

A valid build should provide:

-   `dist/index.js`
-   `dist/index.d.ts`
-   `dist/style.css`

Declaration paths may vary by declaration plugin configuration. If they
do, update `types` and `exports` to match the actual generated output.

Validate with `npm pack --dry-run`, then install the tarball into a
separate consumer application.

## 6. Future architecture

Add Storybook when component count warrants a dedicated visual
workbench. Add Changesets when several contributors or regular releases
make manual versioning error-prone. Consider subpath exports only when
there is a concrete tree-shaking or package-organization benefit.
