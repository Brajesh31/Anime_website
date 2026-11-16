# 🔧 Maintenance guide

## Routine maintenance

### Every change
- Inspect affected source and current route usage.
- Keep docs synchronized with actual behavior.
- Run npm run build and documentation checks.
- Review screenshots and assets for secrets and rights.
- Preserve package-lock consistency.

### Dependency updates
- Review package release notes and security advisories.
- Confirm whether the dependency is used.
- Update focused package groups.
- Review lockfile changes.
- Run clean install, lint, build, and route checks.
- Document breaking changes.

### Provider integration changes
- Reconfirm endpoint ownership and terms.
- Capture sanitized response examples.
- Update API inventory and data-flow diagrams.
- Validate schema and error behavior.
- Confirm rate limits and permitted usage.
- Test local and deployed proxy behavior separately.

### Documentation maintenance
- Keep README status labels accurate.
- Update route and structure docs after source changes.
- Verify Mermaid diagrams render in GitHub.
- Verify all referenced images exist.
- Remove stale instructions only after checking current source.
- Never fabricate metrics, screenshots, or provider guarantees.

## Periodic review
At least before each public release, review:
- Dependencies and vulnerabilities.
- Route behavior and host rewrites.
- Accessibility.
- External provider terms and content rights.
- Risk register.
- Roadmap and changelog.
- CI status and outstanding lint debt.

## Backups and recovery
The current project is source-controlled in Git and deployed as a static frontend. Use Git history and hosting-provider deployment history for recovery. No application database backup procedure exists because there is no project-owned database.
