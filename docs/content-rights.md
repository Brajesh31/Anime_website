# ⚖️ External content, provider terms, and rights

## Purpose
The application experiments with third-party anime and manga metadata and remote media URLs. The repository's source-code license does not grant rights to content returned by those services.

## Ownership boundaries

| Material | Controlled by this repository? | Required care |
|---|---|---|
| Original project source | Yes, subject to repository license | Follow MIT terms |
| Third-party package code | No | Follow each package license |
| Anime metadata | No | Follow provider terms and applicable rights |
| Manga metadata and page images | No | Follow provider and rights-holder terms |
| Remote video/media | No | Confirm authorization before access or display |
| Logos, posters, character artwork | No, unless independently licensed | Confirm reuse permission |

## Integration review checklist
Before enabling or documenting an external provider:
- Identify the provider and official documentation.
- Read terms, acceptable-use rules, and rate limits.
- Confirm intended use is permitted.
- Understand whether the service is an index, metadata API, proxy, or media host.
- Avoid collecting or redistributing content without authorization.
- Do not bypass authentication, DRM, paywalls, regional restrictions, or anti-abuse controls.
- Provide a way to disable an integration if permission or availability changes.
- Record the review date and responsible maintainer.

## Test media
Use only media samples explicitly authorized for testing. Do not commit copyrighted episodes, manga pages, private API responses, or provider credentials as demo assets.

## License distinction
The repository MIT license applies to the project's own code as described in LICENSE. It does not sublicense third-party content, package dependencies, trademarks, or remote services.

This document is project guidance, not legal advice. If rights are unclear, do not assume permission.
