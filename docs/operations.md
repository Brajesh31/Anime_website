# 🛠️ Operations and incident response

## Operating model
The application is a static client-side bundle dependent on external APIs and media hosts. There is no project-owned application server, database, queue, cache, or centralized telemetry service.

Operational responsibilities are split between the static host, browser runtime, external metadata providers, and remote media hosts.

## First evidence source

| Symptom | First check | Likely boundary |
|---|---|---|
| Site unavailable | Hosting deployment status and browser console | Static host/build |
| Nested route 404 | Direct URL and rewrite config | SPA routing/hosting |
| Search fails | Browser Network request | Anime provider/client |
| Manga proxy 404 | Exact path and Vite/Vercel rules | Proxy routing |
| Player never starts | Playback JSON and media request | Provider/media host |
| Images fail | Image URL and response status | Remote image host |

## Severity guide

| Severity | Example | Response |
|---|---|---|
| Critical | Site unavailable broadly or confirmed credential exposure | Disable affected deployment/integration, preserve evidence, notify maintainers |
| High | Core anime routes fail consistently | Determine provider vs frontend failure; roll back if deployment caused it |
| Medium | Manga experiment or one provider integration unavailable | Document degraded behavior; do not use unsafe workarounds |
| Low | Visual or documentation defect | Track and schedule a focused fix |

## Incident response
1. Record time, route, browser, and environment.
2. Reproduce without sharing secrets or private data.
3. Determine whether the issue is local, deployment-wide, or provider-wide.
4. Capture sanitized request status and error details.
5. Avoid retry storms or provider rate-limit evasion.
6. Roll back if a recent deployment caused widespread failure.
7. If the provider is unavailable, document degraded behavior honestly.
8. Record root cause, impact, mitigation, and follow-up.

## Logging and privacy
The source currently logs request data and errors in places. Future improvements should log concise error categories rather than complete payloads. Never capture authorization headers, tokens, private identifiers, or unnecessary personal information in issue reports.

## Recovery limits
A static deployment rollback can restore an earlier frontend bundle. It cannot repair an upstream provider outage, a changed response schema, or an unauthorized media source.
