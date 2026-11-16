# 🤝 Contributing

Thank you for considering a contribution. The most useful contributions improve a real user journey, reliability, accessibility, security, or maintainability. This project is currently a React/Vite prototype with partial third-party integrations, so keep changes aligned with the actual implementation.

## Before you start
1. Read the root README and relevant architecture/API docs.
2. Check whether the component is used by the active route table.
3. Search existing issues and avoid duplicate work.
4. Confirm whether a requested behavior depends on a third-party provider.
5. Review provider terms and content rights before changing integrations.
6. For substantial changes, open an issue to agree on scope first.

## Local setup

```bash
git clone https://github.com/Brajesh31/Anime_website.git
cd Anime_website
npm ci
npm run dev
```

## Development expectations
- Preserve existing application behavior unless the change explicitly targets it.
- Keep source changes focused.
- Validate provider payloads and URLs.
- Do not add secrets to source or VITE_ variables.
- Do not bypass DRM, paywalls, authentication, regional restrictions, or rate limits.
- Use semantic HTML and keyboard-operable controls.
- Add tests for new behavior where a test framework exists; document manual verification otherwise.
- Update README/docs when routes, endpoints, configuration, or feature status changes.
- Do not label generated artwork or mockups as real screenshots.

## Before submitting

```bash
npm ci
npm run lint
npm run build
python scripts/check_docs.py
```

Lint currently has known legacy findings and is advisory in CI. Report the exact output rather than describing lint as clean.

## Pull request description
Include:
- Problem and intended result.
- Routes and components affected.
- Provider/API assumptions.
- Rights/terms considerations for external content.
- Tests and exact commands run.
- Known failures or limitations.
- Genuine screenshots for visual changes when available.

## Documentation contributions
Use source-backed statements, label future proposals, verify links, keep Mermaid diagrams synchronized, and avoid invented metrics or service guarantees.

## Review
Changes may be requested if they introduce unrelated refactors, unsafe provider behavior, unverified claims, missing tests, inaccessible controls, or undocumented breaking changes.
