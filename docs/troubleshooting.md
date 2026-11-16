# 🧰 Troubleshooting guide

## Start with evidence
Open browser developer tools. Inspect Console and Network. Record the route, request method, sanitized URL, status, response shape, and browser. Do not share tokens, cookies, or personal data.

## Installation and build

| Symptom | Checks |
|---|---|
| npm ci fails | Confirm Node/npm versions, network, and package-lock consistency |
| Vite fails to start | Read the first build error and check the port |
| Build fails | Inspect module resolution and Vite output; do not assume a provider outage |
| Lint fails | Review ESLint output; legacy findings are known and lint is advisory in CI |

## Anime search and recent feed

1. Open /anime.
2. Submit a short known query.
3. Inspect the anime provider request.
4. Check HTTP status and response JSON.
5. Confirm the response has results.
6. Confirm each result has the fields used by the component.

A blank result region can mean no results, a missing results field, a provider error, or a rendering problem. These cases are not consistently distinguished in the current UI.

## Anime detail

Check that the route parameter is a provider identifier and not a display title. Inspect the info response for image, description, and an episodes array. The component assumes these values exist.

## Playback

The current player reads sources[2].url. Inspect the complete sanitized sources array and verify that the selected URL is valid and authorized. A request failure or missing third source may leave the visible loading message in place. Do not attempt to bypass provider restrictions to make playback work.

## Manga

The active manga component requests /aviv2/manga/info/{query}. Compare the browser request with the Vite development proxy and Vercel rewrite. The two configurations are separate. The current component also has incomplete rendering and cover-fetch logic.

## Nested route refresh

If in-app navigation works but refreshing a nested route returns 404, configure the host to return the SPA entry document for valid browser routes. Test the deployed host, not only Vite dev.

## Image failures

Inspect the exact image URL and HTTP status. Possible causes include expired provider URLs, missing fields, remote host policy, CORS, or network errors.

## When reporting a defect
Include exact steps, expected/actual result, route, browser, viewport, sanitized console/network evidence, and whether it reproduces with the provider unavailable. Use the GitHub bug report template.
