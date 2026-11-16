# ❓ Frequently asked questions

## Is this a production streaming platform?
No. It is a React/Vite prototype with partial anime and manga integrations. Provider availability, content rights, and playback are outside this repository's control.

## Does the project own or host anime episodes?
No. The player receives remote URLs from external provider responses. This repository does not host or own the media.

## Why can search return no results?
The external provider may be unavailable, the query may not match, the response schema may have changed, or the request may be blocked by CORS/network policy. Inspect the browser Network tab.

## Why does the player remain on Loading?
The current player code expects response.data.sources[2].url. If the request fails or the third source is missing, the UI has no complete fallback state.

## Is there a user account or watchlist?
No. There is no authentication, database, watchlist, or history persistence.

## Is manga reading complete?
No. The manga route and related components are experimental. The repository does not provide a complete chapter reader.

## Are light novels supported?
No. The /ln route currently renders a placeholder.

## Why does a nested route return 404 after refresh?
The static host may not be configured to return the SPA entry document for browser routes. Review the deployment guide and hosting rewrite rules.

## Why are CI checks green if lint has errors?
The lint step is currently advisory because legacy source findings exist. CI success does not mean lint is clean. The production build and docs link validation are separate checks.

## Are screenshots available?
The repository has project artwork and technical diagrams. Genuine browser screenshots remain pending until each route is captured from the running application.

## Can I add an API key to a VITE_ variable?
Do not put private credentials in VITE_ variables. They are exposed to browser code after build.

## How do I report a security issue?
Follow SECURITY.md. Do not publish secrets or exploitable details in a public issue.
