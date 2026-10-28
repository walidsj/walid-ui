# Contributing

Thanks for helping improve `@walidsj/react-ui`.

## Before making changes

-   Read `PRD.md`, `DESIGN.md`, `ARCHITECTURE.md`, and `AGENTS.md`.
-   Check existing conventions and package scripts.
-   Open an issue or discussion for substantial API or architecture
    changes.

## Development setup

``` bash
bun install
bun run typecheck
bun run test
bun run build
```

## Pull requests

A pull request should:

-   Explain the problem and intended outcome.
-   Include tests for behavior changes.
-   Update README or component docs when public behavior changes.
-   Avoid unrelated formatting or refactoring.
-   State any compatibility or migration implications.
-   Pass type checking, tests, and build checks.

## Component contribution checklist

-   [ ] Props are typed and documented.
-   [ ] Native attributes and refs are preserved where appropriate.
-   [ ] Accessible name and keyboard behavior are considered.
-   [ ] Focus and disabled states are visible and correct.
-   [ ] Styling uses semantic tokens where practical.
-   [ ] Tests cover relevant behavior.
-   [ ] Public exports and README are updated.
-   [ ] Package build and consumer usage are validated.

## Commit and release conventions

Use clear commit messages. Do not publish from a feature branch. Release
maintainers are responsible for versioning, changelog review, package
inspection, and npm publishing.
