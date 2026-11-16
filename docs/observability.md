# 🔎 Observability and diagnostics

## Current state
There is no dedicated telemetry SDK, metrics backend, tracing system, or error-reporting service. Diagnostics are primarily browser developer tools and console statements in components.

## Evidence to collect for a failed request
- Route and sanitized identifier.
- Request method and URL with sensitive query values removed.
- HTTP status and response content type.
- CORS/network error text.
- Sanitized response shape.
- Browser and viewport.
- Commit/deployment version.

Never capture authorization headers, cookies, tokens, personal data, or full private payloads.

## Diagnostic categories
- **Navigation:** route mismatch, bad relative URL, missing SPA fallback.
- **Build:** dependency resolution, Vite transform, production bundle.
- **Provider:** DNS, network, HTTP error, rate limit, CORS, changed schema.
- **Rendering:** missing fields, invalid arrays, image load failure.
- **Playback:** absent source, unsupported format, remote host denial.
- **Deployment:** rewrite mismatch, stale assets, cache behavior.

## Recommended future instrumentation
If error reporting is added, collect minimal technical context. Define retention, access control, user notice, and opt-out requirements before collecting user data. Avoid sending complete provider responses.

## Useful health signals
- Route-level JavaScript error rate.
- Search request success/error/empty counts.
- Metadata request failure categories.
- Playback metadata availability, separately from actual playback success.
- Build/deployment status.
- Accessibility and route test results.

No current metric values are asserted. Establish a baseline before publishing dashboards or targets.
