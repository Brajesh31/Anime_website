# Troubleshooting

## A route is blank after refresh

Configure the host's SPA fallback to `index.html` and preserve the route rewrites in `vercel.json`.

## Catalog data is missing

Check provider availability, browser network errors, response status, CORS, rate limits, and changed response fields. Do not bypass provider controls.

## Playback does not start

Verify that the selected provider returned a permitted playable URL, that the browser supports the format, and that autoplay restrictions are satisfied. Display an actionable error instead of assuming source index `2` exists.

## Build or lint fails

Run `npm ci`, then `npm run lint` and `npm run build` with the repository's Node.js version.
