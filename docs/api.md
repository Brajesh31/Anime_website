# API integrations

The frontend consumes third-party catalog, image, manga, and streaming services, including URLs configured in components and Vercel rewrites. These integrations are not a stable public API owned by this repository.

Document each provider's endpoint, response fields, attribution/license, rate limit, cache policy, failure fallback, and parameter validation before adding production usage. Never expose private credentials in Vite client variables.
