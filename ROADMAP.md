# 🗺️ Roadmap

This roadmap describes proposed improvements, not features that are already implemented.

## Reliability
- [ ] Centralize anime and manga requests into provider service modules.
- [ ] Validate and normalize remote response schemas.
- [ ] Add request timeouts, cancellation, and safe retry behavior.
- [ ] Handle empty, unavailable, and rate-limited provider responses.
- [ ] Replace fixed playback source indexing with validated source selection.

## Product completeness
- [ ] Replace the home placeholder with a finished discovery landing page.
- [ ] Complete anime catalog states and accessible result cards.
- [ ] Complete manga search and metadata/details flow.
- [ ] Decide whether to implement a lawful light-novel data source or retire the placeholder route.
- [ ] Add not-found and route-level error experiences.

## Quality
- [ ] Add unit tests for response adapters and episode grouping.
- [ ] Add component tests with mocked provider responses.
- [ ] Add browser E2E coverage for key routes and nested-route refresh.
- [ ] Run keyboard and screen-reader reviews.
- [ ] Capture real desktop/mobile screenshots for the demo gallery.

## Platform and operations
- [ ] Document each provider's permissions, rate limits, and terms.
- [ ] Verify deployment rewrites against the actual hosting platform.
- [ ] Review dependency advisories and remove unused dependencies safely.
- [ ] Define privacy requirements before implementing accounts or persistence.
