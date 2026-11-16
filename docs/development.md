# 🧑‍💻 Development guide

## Development loop

1. Read the route and component before editing.
2. Confirm whether a component is active in `src/App.jsx`.
3. Reproduce the behavior with local Vite.
4. Inspect network calls and response shapes in browser developer tools.
5. Implement loading, empty, error, and success states.
6. Test at narrow and wide viewport sizes.
7. Run ESLint and a production build.
8. Update relevant docs and demo captures only after the UI is verified.

## Available npm scripts

| Command | Action |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Build production assets |
| `npm run preview` | Preview production output |

## Component conventions

- Keep components focused on a page or a reusable interface element.
- Use descriptive state names and avoid unused imports/state.
- Move repeated HTTP logic into a provider service module when implementing the planned service layer.
- Validate remote data before reading nested properties.
- Avoid raw response dumps in production logs.
- Give images meaningful alt text or empty alt text when purely decorative.
- Use stable IDs from the provider for list keys where valid.
- Make loading and failure states visible to users.

## Debugging remote requests

Inspect request URL, status code, response headers, CORS messages, and JSON payload. Redact tokens and personal information from logs or screenshots. A remote endpoint can fail even when the local app compiles correctly.
