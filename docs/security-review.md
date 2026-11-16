# 🔐 Security review

## Scope

This review covers the source and deployment configuration in this repository. It is not a penetration test or a guarantee that external services are safe.

## Observed trust boundaries

1. Browser UI receives untrusted data from anime and manga providers.
2. Provider metadata contains strings and image URLs rendered by React.
3. Player components receive remote media URLs.
4. Vercel and Vite configuration route some requests to external hosts.
5. Dependencies are installed from npm using the committed lockfile.

## Findings and recommendations

| Topic | Observation | Recommendation |
|---|---|---|
| Secrets | No server-side secret store is present | Do not expose credentials through Vite env variables |
| Provider responses | Nested fields are trusted in several components | Validate schemas and handle missing values |
| Media URLs | Provider response controls selected source | Allow only expected safe protocols and authorized sources |
| Logging | Components log provider response/error objects | Remove noisy logs and redact sensitive values |
| Proxy rules | Proxy paths target external services | Keep only necessary routes; review destination and access controls |
| Dependencies | Many third-party packages are installed | Review advisories and remove unused packages deliberately |
| Content rights | External media is not owned by this repository | Verify authorization and provider terms before displaying |
| User privacy | No account system is included | Do not collect unnecessary personal data |

## Abuse-resistant design

Do not implement paywall circumvention, DRM bypass, authentication bypass, region restriction evasion, scraper evasion, or rate-limit circumvention. Cache only where provider terms permit it. Apply request throttling if a future backend proxies authorized content.

## Release gate

A release owner should record the provider, permitted usage, rate-limit policy, data collected, and endpoint owner for every external integration. If rights or permission cannot be confirmed, disable the integration rather than attempting to bypass restrictions.
