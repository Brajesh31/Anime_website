# ⚠️ Known limitations and non-goals

This document records current gaps observed in source. It is not a list of features that are promised to be delivered.

## Application limitations

### Anime search
- Requests a third-party endpoint directly from the browser.
- Expects a results collection.
- Uses an alert on form submission.
- Logs request failures instead of consistently displaying actionable error states.
- Has limited loading and empty-state handling.

### Anime details
- Assumes image, description, and episodes fields exist.
- Assumes episode entries expose expected identifiers and labels.
- Does not comprehensively handle invalid IDs or malformed provider responses.

### Playback
- Reads sources[2].url from the provider response.
- Assumes the source array has at least three elements.
- Does not provide robust source fallback or a complete unavailable state.
- Actual playback depends on the remote media host and browser support.

### Manga
- Manga search/detail screens are experimental.
- Proxy configuration differs between Vite development and Vercel deployment.
- Cover and image retrieval paths need verification.
- The active component contains incomplete request/rendering logic.

### Light novels
- The route is a placeholder, not a catalog or reader.

## Platform capabilities not present
- Owned backend/API.
- Database or persistent user data.
- Authentication and authorization.
- Watchlist, favorites, history, or bookmarks.
- Payments/subscriptions.
- Recommendation engine.
- Moderation/admin dashboard.
- Owned content CDN or media storage.
- Offline mode.
- Automated browser end-to-end suite.
- Full accessibility audit.

## Operational limitations
- External provider uptime and schema are outside project control.
- No telemetry service or published uptime/performance metrics exist.
- No formal release version policy exists.
- Real browser screenshots are not yet committed.
- Lint is advisory in CI due existing source findings.

## Non-goals and safety boundaries
The project should not bypass DRM, paywalls, authentication, regional restrictions, provider anti-abuse measures, or rate limits. It should not claim ownership of third-party media.

## Updating this document
When a limitation is resolved, verify the change in source and tests before removing it. Link the evidence in the changelog and update README and feature inventory.
