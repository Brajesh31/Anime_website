# 🧰 Maintenance guide

## Routine maintenance
- Review npm dependency advisories before release.
- Run `npm ci`, `npm run lint`, and `npm run build`.
- Check provider endpoint availability and response shape changes.
- Review API terms, rate policies, and content permissions.
- Test root and nested routes on a real hosting preview.
- Refresh demo screenshots when visible UI behavior changes.
- Keep feature status and known limitations accurate.

## Incident triage
1. Identify whether the failure is build, route, browser, provider, or media-host related.
2. Record route, timestamp, status code, and sanitized response shape.
3. Determine whether multiple routes are affected.
4. Avoid aggressive retries during rate limiting.
5. Disable an integration if rights or access is uncertain.
6. Record the resolution when user-visible behavior changes.

Use issues and pull requests to keep maintenance work reviewable.
