# 🔐 Security review and trust boundaries

## Scope and confidence
This is a source/configuration review, not a penetration test, formal security sign-off, or guarantee. It covers the browser app and third-party request boundaries.

## Assets to protect
- Repository write access and deployment configuration.
- Any future private provider credentials.
- Browser users' personal information if such features are added.
- Integrity of provider data rendered by the app.
- Integrity of URLs passed to the media player.
- Contributor environments and npm dependency supply chain.

## Trust boundaries
1. Browser input enters component state.
2. Pages send requests to third-party endpoints.
3. Provider responses return as untrusted JSON.
4. Image URLs are rendered by the browser.
5. Media URLs are passed to ReactPlayer.
6. Vite/Vercel route selected requests to external destinations.
7. npm packages execute during build or in browser runtime.

## Findings and controls

| Area | Observation | Risk | Recommended control |
|---|---|---|---|
| Client secrets | No private backend secret store | High if secrets are added incorrectly | Never put private secrets in VITE variables |
| Provider JSON | Components read nested properties directly | Medium | Validate and normalize payloads |
| Media source | Fixed array index used | High reliability/trust concern | Validate source, protocol and authorization |
| Remote images | Provider fields become image URLs | Medium | Validate URL shape and handle failures |
| Logging | Full response/error objects logged in places | Medium | Use sanitized diagnostics |
| Proxy configuration | External destinations configured in files | Medium | Review destination and allowed paths |
| Dependencies | Third-party packages installed from npm | Medium | Review advisories and lockfile changes |
| Content rights | External media/artwork not owned by project | Critical if used without permission | Verify rights and terms before enabling |
| User privacy | No account/persistence system | Scope-dependent | Define minimization, retention and deletion before collecting data |

## Threat scenarios

### Malformed provider payload
A provider returns a missing array or unexpected shape. A component can throw while reading nested properties. Validate responses before rendering and show an explicit unavailable state.

### Unexpected media URL
A response includes an unsupported protocol or untrusted destination. Validate URL and host before passing it to the player.

### Credential leakage
A developer adds a private key to a VITE_ variable. It becomes browser-visible. Keep privileged credentials server-side and rotate any exposed secret.

### Provider abuse or rights violation
An integration is used to evade rate limits, DRM, authentication, paywalls, or regional restrictions. Do not implement such behavior. Disable integrations when permitted use cannot be established.

### Supply-chain compromise
A dependency update introduces vulnerable or malicious code. Review package identity, lockfile changes, advisories, and release notes.

## Secure development checklist
- [ ] No secrets in source, docs, screenshots, build artifacts, or issue reports.
- [ ] Provider payloads are validated.
- [ ] URLs are validated before navigation/playback.
- [ ] Requests respect provider limits and terms.
- [ ] Console output is sanitized.
- [ ] Dependencies and lockfile changes are reviewed.
- [ ] Deployment rewrites have explicit destinations.
- [ ] Third-party content rights are checked.
- [ ] Future user data has a documented purpose and retention policy.

## Reporting
Follow SECURITY.md. Do not publish exploitable vulnerabilities or credentials in public issues.
