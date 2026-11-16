# 📈 Observability and diagnostics

## Current state
There is no monitoring platform, centralized telemetry, error-reporting service, or backend logging. Some components write HTTP response/error objects to the browser console.

## Local diagnostics
Use browser developer tools to inspect console warnings, network status and timing, CORS failures, response shape, media errors, and React runtime exceptions.

## Future instrumentation
- Count request outcomes without collecting unnecessary search terms.
- Use coarse error categories rather than logging complete provider payloads.
- Redact tokens, cookies, authorization headers, and personal data.
- Monitor rate-limit responses.
- Add client error boundaries.
- Keep analytics privacy-aware and disclosed.

Do not publish invented uptime, latency, or usage analytics.
