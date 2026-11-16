# ADR-0001: Client-side React single-page application

- **Status:** Accepted, records the current architecture
- **Date:** 2026-11-16

## Context
The repository uses React 18 and Vite. React Router selects page components in the browser. No application backend or database exists in the current tree.

## Decision
Retain the client-side SPA for the prototype. Use Vite for development and production bundling and React Router for route selection.

## Consequences
### Benefits
- Straightforward local setup.
- Component-based page composition.
- Static hosting can serve the built application.
- Existing routes can evolve incrementally.

### Trade-offs
- Hosting must provide nested-route fallback.
- Browser-side calls expose endpoint usage and cannot safely contain private credentials.
- Provider availability and CORS affect app behavior.
- Client state is not durable.
- Complex provider integrations may eventually need a server-side adapter.

## Revisit when
The product needs private provider credentials, user accounts, durable progress, server-side caching, moderation, or controlled media delivery.
