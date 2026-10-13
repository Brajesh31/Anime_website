# FAQ

## Does this repository host anime or manga?

No. It is a client prototype that requests metadata or media URLs from third-party services.

## Can I add any streaming provider?

Only if its terms, licensing, access rules, and technical behavior permit the intended use. Do not bypass DRM, authentication, paywalls, regional restrictions, or rate limits.

## Does the app have accounts?

No account or authentication backend is committed. Sign-in-like UI must not be presented as secure authentication.

## Where are secrets configured?

There are no private secrets required by the current prototype. Public `VITE_` variables are bundled into the browser and must never contain credentials.
