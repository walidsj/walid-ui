# Product Requirements Document --- @walidsj/react-ui

-   **Status:** Draft
-   **Version target:** 0.1.0
-   **Package:** `@walidsj/react-ui`
-   **Stack:** React, TypeScript, Base UI, Tailwind CSS v4
-   **Distribution:** Public npm package
-   **Initial audience:** React developers building dashboards, admin
    panels, and business applications

## 1. Product summary

`@walidsj/react-ui` is a customizable React design system built on Base UI
primitives and styled with Tailwind CSS v4. It provides a consistent
visual language, typed component APIs, accessible interactions, design
tokens, documentation, and a predictable npm distribution.

The library owns the visual design and public component API. Base UI
supplies interaction primitives where appropriate; Tailwind CSS v4
supplies the styling build pipeline.

## 2. Problem statement

Teams often recreate buttons, inputs, dialogs, menus, and form patterns
across projects. This causes inconsistent visuals, duplicated
implementation work, accessibility gaps, and maintenance overhead. The
library should provide reusable components that can be installed and
updated as a versioned package.

## 3. Goals

-   Publish `@walidsj/react-ui` as a public npm package.
-   Provide stable, typed React component APIs.
-   Establish semantic design tokens for light and dark themes.
-   Compile and ship a stylesheet so consumers do not need to scan
    library source with their own Tailwind configuration.
-   Use Base UI primitives for complex interactive behavior when
    suitable.
-   Document components, variants, accessibility behavior, and theming.
-   Validate releases with type checking, tests, build checks, and
    package inspection.

## 4. Non-goals for v0.1.0

-   A full application framework or dashboard template.
-   A source-copy CLI or component registry.
-   A separate icon library.
-   A server-side component system.
-   Guaranteed support for every React framework before integration
    testing.
-   A promise that every component meets every accessibility requirement
    without consumer testing.

## 5. Target users

1.  Developers maintaining multiple React applications.
2.  Teams building administrative dashboards and internal tools.
3.  Developers who want a custom visual system without reimplementing
    headless interaction primitives.

## 6. MVP scope

### Included

-   Design tokens and light/dark theme variables.
-   `Button` with `primary`, `secondary`, `outline`, `ghost`, and
    `danger` variants and `sm`, `md`, and `lg` sizes.
-   `Input` with native input attributes and typed props.
-   Public TypeScript declarations.
-   ESM package output.
-   Published CSS entry point: `@walidsj/react-ui/style.css`.
-   README installation and usage examples.
-   Unit tests for core behavior.
-   CI checks for type checking, tests, build, and package contents.
-   Public npm publishing process.

### Planned after MVP

-   Label, Textarea, Checkbox, Radio, Switch, Badge, Skeleton.
-   Dialog, Popover, Tooltip, Select, Combobox, Dropdown Menu, Tabs,
    Accordion.
-   Storybook or equivalent interactive documentation.
-   Changesets-based versioning and automated release workflow.
-   Visual regression and accessibility automation.

## 7. Functional requirements

  ------------------------------------------------------------------------------
  ID                      Requirement             Acceptance criteria
  ----------------------- ----------------------- ------------------------------
  FR-01                   Install from npm        A clean React project can
                                                  install `@walidsj/react-ui`.

  FR-02                   Import components       Consumers can import `Button`
                                                  and `Input` from the package
                                                  root.

  FR-03                   Import CSS              Consumers can import
                                                  `@walidsj/react-ui/style.css`.

  FR-04                   Type declarations       TypeScript resolves exported
                                                  component and prop types.

  FR-05                   Theme tokens            Semantic tokens are available
                                                  in the published CSS.

  FR-06                   Theme switching         Applying `.dark` to an
                                                  ancestor activates dark
                                                  tokens.

  FR-07                   Button API              Variants, sizes, disabled
                                                  state, children, and click
                                                  handlers work.

  FR-08                   Input API               Standard input attributes,
                                                  refs, disabled state, and
                                                  invalid state work.

  FR-09                   Quality gates           Type check, tests, build, and
                                                  `npm pack --dry-run` succeed
                                                  before release.

  FR-10                   Public release          A version can be published
                                                  under public npm access and
                                                  installed by version.
  ------------------------------------------------------------------------------

## 8. Non-functional requirements

-   TypeScript strict mode is enabled.
-   React and React DOM are peer dependencies, not bundled copies.
-   CSS is emitted as a documented package subpath.
-   Public exports are explicit and intentional.
-   Components support keyboard and focus behavior appropriate to their
    role.
-   Package contents exclude tests, local environment files, and
    development-only artifacts.
-   Dependencies and peer dependency ranges are tested against the
    supported versions.
-   Release artifacts are reproducible from a clean checkout and
    lockfile.

## 9. Compatibility policy

-   Declare only React versions that are tested in CI.
-   Use the Tailwind CSS v4 build pipeline internally; consumers should
    not need Tailwind to compile the library's shipped CSS.
-   Test the package from a separate consumer app before each stable
    release.
-   Treat breaking changes to exported props, exports, CSS tokens, or
    package paths as semver-major changes after 1.0.0.

## 10. Success metrics

-   A new consumer app can install and render the package using the
    README instructions.
-   All required CI checks pass on the release commit.
-   No missing CSS or TypeScript declaration errors in the consumer
    smoke test.
-   Each public component has usage examples, prop documentation, and
    tests.
-   Published package contents match the intended distribution.

## 11. Risks and mitigations

-   **CSS not included or incorrect:** test `dist/style.css` and install
    the packed artifact in a clean app.
-   **Tailwind class conflicts:** keep tokens semantic, use `cn()` for
    class composition, and document class customization.
-   **Duplicate React:** externalize React and React DOM from the build.
-   **Base UI API drift:** pin through the lockfile and test primitive
    usage before dependency upgrades.
-   **Inaccessible components:** test keyboard behavior and accessible
    names; document known limitations.
-   **Unintentional package contents:** inspect `npm pack --dry-run` and
    the generated tarball.

## 12. MVP release definition

Version `0.1.0` is ready when Button and Input are exported, CSS and
declarations are present, tests and type checking pass, the tarball
installs in a clean React app, documentation is accurate, and the npm
package name is available and correctly scoped.
