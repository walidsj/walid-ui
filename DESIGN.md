# Design System Specification

## 1. Design principles

1.  **Clear hierarchy:** primary actions are visually distinct from
    secondary actions.
2.  **Predictability:** component variants and states behave
    consistently.
3.  **Accessibility by default:** semantic elements, keyboard access,
    visible focus, and accessible names.
4.  **Customization:** semantic CSS variables enable brand and theme
    changes without rewriting components.
5.  **Composability:** components should work independently and in
    common application layouts.
6.  **Low surprise:** styles should not leak into unrelated consumer
    elements.

## 2. Visual direction

The initial visual direction is custom, modern, and neutral enough for
business applications. A blue-violet primary hue is the initial example
palette, not a permanent brand constraint. Final brand colors should be
reviewed for contrast and consistency before a stable release.

-   Surfaces: neutral, with restrained contrast.
-   Primary action: saturated blue-violet.
-   Controls: medium density, clear borders, rounded corners.
-   Focus: visible ring with sufficient contrast.
-   Motion: short transitions; honor reduced-motion preferences where
    animation is introduced.
-   Typography: system sans-serif stack with optional Inter when
    supplied by the host application.

## 3. Token layers

### Primitive tokens

Raw values that define the palette, spacing, typography, radii, and
shadows. Keep these internal unless a public API is deliberately
designed.

### Semantic tokens

Tokens express intent and should be consumed by components:

  Token                         Purpose
  ----------------------------- ---------------------------------------
  `--ui-background`             Main component surface
  `--ui-foreground`             Main text
  `--ui-primary`                Primary action surface
  `--ui-primary-foreground`     Text on primary surface
  `--ui-secondary`              Secondary surface
  `--ui-secondary-foreground`   Text on secondary surface
  `--ui-muted`                  Subtle surface
  `--ui-muted-foreground`       Secondary text
  `--ui-border`                 Default border
  `--ui-ring`                   Focus ring
  `--ui-danger`                 Destructive action and error emphasis
  `--ui-danger-foreground`      Text on destructive surfaces
  `--ui-radius-sm`              Small corner radius
  `--ui-radius-md`              Medium corner radius
  `--ui-radius-lg`              Large corner radius

Tailwind theme mappings expose utilities such as `bg-primary`,
`text-foreground`, `border-border`, and `outline-ring`.

## 4. Themes

-   Light theme is the default.
-   Dark theme activates when `.dark` is present on an ancestor.
-   Components must consume semantic tokens, not duplicate light and
    dark values per component.
-   Host applications may override documented `--ui-*` variables.
-   Avoid setting the host application's global background or text color
    unless explicitly documented as an opt-in feature.

## 5. Component API conventions

### Variants

Use explicit string unions. Initial Button variants:

-   `primary`
-   `secondary`
-   `outline`
-   `ghost`
-   `danger`

### Sizes

Initial Button sizes:

-   `sm`
-   `md`
-   `lg`

### State conventions

Components should account for relevant states:

-   default
-   hover
-   focus-visible
-   active, where useful
-   disabled
-   invalid, where applicable
-   loading, only where behavior and semantics are clearly defined

Do not add states that the component cannot correctly implement.

## 6. Component specifications

### Button

-   Uses a semantic button primitive or native button.
-   Default `type` is `button` to avoid accidental form submission.
-   Supports native button props and ref forwarding.
-   Variants and sizes are typed.
-   Disabled state prevents interaction and communicates disabled
    appearance.
-   Focus-visible indicator is visible.
-   Icon-only buttons must have an accessible name supplied by the
    consumer.

### Input

-   Uses a native input element.
-   Supports native input attributes and ref forwarding.
-   Does not invent an inaccessible placeholder-only label pattern.
-   Invalid state can be communicated through `aria-invalid`.
-   Labels, descriptions, and error messages are composed by the
    consumer until a dedicated form-field component exists.

## 7. Accessibility requirements

-   Use semantic HTML and Base UI accessibility behavior where
    applicable.
-   Every interactive control must have an accessible name.
-   Focus must remain visible.
-   Disabled controls must not behave as enabled controls.
-   Menus, dialogs, popovers, and selects require keyboard and focus
    tests.
-   Color must not be the only means of conveying status.
-   Check contrast for text and focus indicators before stable release.
-   Automated tests supplement but do not replace manual keyboard and
    screen-reader checks.

## 8. CSS conventions

-   Use Tailwind CSS v4 in the source stylesheet.
-   Ship compiled CSS as `dist/style.css`.
-   The published stylesheet excludes Tailwind Preflight so it does not
    reset consumer elements.
-   Use documented semantic CSS variables for theme overrides.
-   Do not add broad element selectors or global resets without
    documenting their effects.
-   Keep `sideEffects` metadata configured so bundlers retain the
    stylesheet import.
-   Verify that generated CSS includes every class used by the published
    components.

## 9. Change policy

Visual changes that alter size, spacing, color, focus, disabled
appearance, or layout should include updated tests or visual examples.
Changes to public tokens or variants must be documented. Breaking
changes require migration notes.
