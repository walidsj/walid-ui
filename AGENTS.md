# Agent Instructions

These instructions apply to coding agents working in this repository.

## Project context

-   Package: `@walidsj/react-ui`
-   Purpose: custom React design system for public npm distribution
-   Stack: React, TypeScript, Base UI, Tailwind CSS v4, Vite
-   Current MVP: Button, Input, semantic theme tokens, CSS distribution,
    tests, and docs

## Mandatory workflow

1.  Read `README.md`, `PRD.md`, `DESIGN.md`, and `ARCHITECTURE.md`
    before making architectural changes.
2.  Inspect the current package scripts and lockfile before changing
    dependencies.
3.  Make the smallest coherent change that satisfies the request.
4.  Add or update tests for behavior changes.
5.  Run `npm run typecheck`, `npm test`, and `npm run build`.
6.  Inspect the package with `npm pack --dry-run` when changing exports,
    build settings, styles, or packaging.
7.  Report commands run and any checks that could not be completed.
    Never claim a check passed unless it was run.

## Design and implementation rules

-   Use TypeScript strict mode.
-   Keep public exports explicit in `src/index.ts`.
-   Do not expose internal helpers unless there is a clear public use
    case.
-   Use semantic design tokens rather than hard-coded brand colors where
    practical.
-   Use `cn()` for merging Tailwind classes and resolving common utility
    conflicts.
-   Prefer native HTML semantics or Base UI primitives where they are
    appropriate.
-   Do not reimplement complex keyboard, focus, popover, menu, or dialog
    behavior when a suitable Base UI primitive exists.
-   Preserve refs and native attributes where appropriate.
-   Ensure controls have accessible names and visible focus styles.
-   Do not add runtime dependencies without explaining why they are
    needed.
-   Keep React and React DOM external from the library bundle and
    declare them as peer dependencies.
-   Keep the published CSS path stable: `@walidsj/react-ui/style.css`.
-   Never assume that Tailwind utilities in source will work in
    consumers unless the library's build emits them into the published
    stylesheet.
-   Do not add dynamic class names that the Tailwind build cannot
    detect. Prefer complete static class strings or explicitly
    configured sources.
-   Avoid undocumented global CSS resets and selectors that unexpectedly
    affect consumer applications.

## API and compatibility rules

-   Use descriptive prop names and explicit union types for finite
    variants.
-   Avoid unnecessary polymorphic APIs until a concrete use case
    justifies their complexity.
-   Keep defaults consistent and document them.
-   Treat changes to exported names, props, tokens, CSS subpaths, and
    peer dependency ranges as API changes.
-   Do not silently change component appearance or interaction behavior.
-   Do not claim full accessibility compliance without tests and review.

## Documentation rules

-   Update README examples whenever public API changes.
-   Add a usage example for every new public component.
-   Document theme tokens and dark mode behavior.
-   Add migration notes for breaking changes.
-   Keep docs aligned with the actual package exports and generated
    files.

## Security and publishing

-   Never commit npm tokens, credentials, `.env` files, or private
    registry configuration.
-   Do not publish from an unreviewed working tree.
-   Inspect package contents before publishing.
-   Prefer trusted publishing/provenance where the repository and npm
    account support it.
-   Never bump or republish a version that already exists on npm; create
    a new version.
