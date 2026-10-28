# Release and Publishing Guide

## 1. Before the first release

-   Confirm `@walidsj/react-ui` is available to your npm account or
    organization.
-   Confirm package metadata, license, repository URL, and README are
    correct.
-   Confirm `bun.lock` is committed.
-   Run all tests and build checks.
-   Inspect package contents.
-   Install the tarball in a separate consumer app.
-   Confirm the published CSS path and type declarations work.

## 2. Local validation

``` bash
bun install --frozen-lockfile
bun run typecheck
bun run test
bun run build
npm pack --dry-run
```

The `prepublishOnly` script runs the release checks with Bun, so Bun must
be installed on the publishing machine.

Inspect the tarball file list and ensure it contains only intended
distributable files.

## 3. First public release

``` bash
npm login
npm whoami
npm publish --access public
```

The package's `publishConfig.access` may also set public access. Keep
`--access public` on the initial scoped public publish for clarity.

## 4. Subsequent releases

-   Patch: bug fixes that do not change the public contract.
-   Minor: backward-compatible features.
-   Major: breaking API, styling, token, or package export changes after
    1.0.0.

Update the package version and changelog before publishing. Never try to
overwrite an existing published version.

## 5. Changesets adoption

When adopting Changesets:

1.  Install `@changesets/cli` as a development dependency.
2.  Run `npx changeset init`.
3.  Add a changeset for each user-facing change.
4.  Review generated version bumps and changelog.
5.  Publish from a clean, validated release commit.

## 6. CI and trusted publishing

Start with CI validation. Add automated publishing only after
permissions and release controls have been reviewed. Prefer npm trusted
publishing with GitHub Actions OIDC and provenance when supported by the
repository and npm account. Do not store long-lived npm tokens in source
code. If a token is required, store it as a protected secret and grant
the minimum required permissions.

## 7. Post-release verification

-   Install the exact published version in a clean project.
-   Verify package root imports and stylesheet import.
-   Check npm package metadata and tarball contents.
-   Confirm README instructions match the published artifact.
-   Record any known issues and prepare a patch release if necessary.
