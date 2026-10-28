# Testing Strategy

## 1. Test layers

### Unit and component tests

Use Vitest, jsdom, React Testing Library, and `user-event`.

Verify observable behavior rather than implementation details.

For Button: - Accessible role and name. - Click handler invocation. -
Disabled behavior. - Variant and custom class application. - Default
`type` behavior.

For Input: - Native input attributes. - Value entry. - Disabled and
invalid states. - Ref forwarding. - Accessible name when used with a
label.

### Type checking

Run `bun run typecheck` with TypeScript strict mode. Public component
props must compile for valid usage and reject invalid variants and
sizes.

### Build test

Run `bun run build`. Verify that JavaScript, declaration files, and CSS
are generated at the paths referenced by `package.json`.

### Package smoke test

1.  Run `npm pack`.
2.  Create or use a separate React consumer app.
3.  Install the generated `.tgz`.
4.  Import `Button` and `Input`.
5.  Import `@walidsj/react-ui/style.css`.
6.  Run the consumer build.
7.  Check browser output for missing styles or runtime errors.

### Accessibility checks

For interactive components, test keyboard behavior and accessible names.
For dialogs and menus, test focus entry, focus return, Escape behavior,
and expected keyboard navigation. Supplement automated checks with
manual review.

## 2. Required commands

``` bash
bun run typecheck
bun run test
bun run build
npm pack --dry-run
```

## 3. Release gate

Do not publish if any required check fails, the package export paths do
not exist, or the packed artifact cannot be installed into a clean
consumer project.

## 4. Test maintenance

When a component API or behavior changes, update tests and documentation
in the same change. Avoid tests that depend on private implementation
details unless the detail is itself a deliberate contract.
