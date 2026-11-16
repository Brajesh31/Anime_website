# ADR-0001: Client-side React single-page application

- **Status:** Accepted as the current implementation record
- **Date:** 2026-11-16
- **Decision scope:** Frontend application composition

## Context
The repository is built with React 18 and Vite. It mounts a browser application from src/main.jsx and uses React Router DOM to map paths to page components. The current product areas are primarily interactive browser screens that request catalog and playback metadata from external services.

## Decision
The current application remains a client-side React SPA. Vite is retained as the development server and production bundler. Browser routing remains the route composition mechanism.

## Alternatives considered
- **Multi-page application:** would require a different route/document architecture and is not necessary to describe the current implementation.
- **Server-rendered React:** could improve initial HTML and server-side integration control, but no server-rendering architecture currently exists.
- **Backend-for-frontend:** could centralize provider calls and protect private credentials, but introduces an owned server and operational responsibilities that are not currently present.
- **Native/mobile client:** outside the current repository architecture.

## Consequences
### Positive
- Simple local development and static production build.
- Existing React components can be composed by route.
- No application server is required for the current public frontend behavior.

### Negative
- Provider calls from the browser expose endpoint structure and depend on CORS.
- Private provider credentials cannot safely be stored in client variables.
- Client-side route refresh depends on hosting fallback configuration.
- External provider response changes can break screens.
- There is no server-side persistence or authorization layer.

## Follow-up decisions
A backend or BFF should be proposed only when a concrete requirement exists, such as private credentials, provider contract normalization, permitted caching, or user-owned persistence. Any such proposal needs security, privacy, deployment, and cost analysis.
