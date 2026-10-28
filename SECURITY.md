# Security Policy

## Supported versions

Security fixes are generally targeted at the latest published version.
Support for older versions is assessed case by case.

## Reporting a vulnerability

Do not publish exploitable details in a public issue. Contact the
package maintainer privately through the security contact configured in
the npm or repository metadata. Include reproduction steps, impact,
affected versions, and a suggested mitigation where possible.

## Package security practices

-   Never commit npm tokens, credentials, or private environment files.
-   Review dependency updates before merging.
-   Keep dependencies and the lockfile up to date.
-   Inspect package contents before publication.
-   Use CI checks and protected publishing permissions.
-   Avoid executing untrusted scripts in privileged release workflows.
-   Use trusted publishing/provenance where available.
