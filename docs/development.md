# 🧑‍💻 Development guide

## Development principles
- Preserve existing behavior unless the task explicitly changes it.
- Confirm whether a component is active in src/App.jsx before modifying it.
- Keep implementation status honest in docs.
- Treat remote provider payloads as untrusted.
- Do not add secrets or copyrighted media to the repository.
- Prefer focused changes that can be verified.

## Development loop
1. Read the route, component, and related config.
2. Confirm whether the component is active or an experiment.
3. Reproduce behavior using the local Vite server.
4. Inspect request URL, status, response headers, and payload.
5. Implement the smallest safe change.
6. Add loading, empty, error, and success behavior where applicable.
7. Test narrow and wide viewports.
8. Run lint, build, and documentation checks.
9. Update docs and capture screenshots only after UI behavior is verified.

## Available scripts

| Command | Action |
|---|---|
| npm run dev | Start Vite |
| npm run lint | Run ESLint |
| npm run build | Build production assets |
| npm run preview | Preview dist |
| python scripts/check_docs.py | Validate relative Markdown links |

## Component conventions
- Keep components focused on a screen or reusable UI element.
- Use descriptive state names.
- Remove unused imports/state only in a source-focused change.
- Move repeated HTTP logic into provider services when implementing that architecture.
- Validate remote data before reading nested properties.
- Avoid raw response dumps in production logs.
- Give meaningful images useful alt text; decorative images should not be announced.
- Use stable provider IDs for React keys where valid.
- Make loading and failure states visible.
- Avoid assuming a fixed position in a remote sources array.

## Debugging remote requests
Inspect the request URL, method, status, response headers, CORS errors, and JSON structure. Compare the actual response with the component's assumptions. Redact tokens and personal information from logs and screenshots.

## Route and deployment awareness
A route may work through in-app navigation but fail on refresh if the host lacks SPA fallback. Vite proxy configuration is local-only; Vercel rewrites are separate. Test both environments independently.

## Pull request evidence
Include affected routes, provider assumptions, rights/terms considerations, exact validation commands, known failures, and genuine screenshots for UI changes when possible.
