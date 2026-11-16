# 🔐 Security policy

## Scope
This repository is a browser-based React/Vite application with external metadata and media integrations. It does not currently include a project-owned backend or database. Security reports may concern source code, deployment configuration, dependency supply chain, provider integration, or accidental secret exposure.

## Reporting a vulnerability
Please do not publish exploitable details, access tokens, passwords, private URLs, or personal data in a public issue.

Use GitHub's private vulnerability reporting feature for this repository when available. If it is unavailable, contact the repository maintainer through a private channel listed in the GitHub profile. Include:
- A concise description and affected component/path.
- Reproduction steps that do not expose other users' data.
- Potential impact and realistic attack conditions.
- Suggested mitigation, if known.
- A safe way to reproduce or validate the issue.

Do not perform destructive testing, access other people's data, or test third-party services beyond their permitted scope.

## Response expectations
The maintainer should acknowledge a report, assess severity and scope, coordinate a fix, and publish an advisory when appropriate. No fixed response-time SLA is currently established.

## Security requirements for contributions
- Never commit credentials or private tokens.
- Remember VITE_ variables are exposed to browser code.
- Treat provider JSON and URLs as untrusted.
- Do not bypass authentication, DRM, paywalls, regional restrictions, or provider rate limits.
- Review dependency and lockfile changes.
- Avoid logging secrets or unnecessary personal data.
- Confirm content and asset permissions.

## Supported versions
The repository does not currently publish a formal version support matrix. Report issues against the latest code on the default branch and include the commit SHA.

## Related documentation
See docs/security-review.md, docs/content-rights.md, docs/dependencies.md, and docs/operations.md.
