# 🗄️ Database and persistence status

## Current state
There is no application database in this repository. The source tree contains no database schema, migration directory, ORM configuration, backend persistence API, or user-account storage.

The application is a frontend prototype. Data fetched from providers is held in component state and normally disappears when a page is reloaded or unmounted.

## Data currently handled in the browser
- Search query text.
- Search result arrays.
- Recent episode entries.
- Anime metadata and episode arrays.
- Selected playback URL.
- Manga search results.
- Temporary component-level values used during rendering.

These values do not form a durable user library.

## Persistence capabilities not implemented
- User registration, authentication, and sessions.
- Watchlist/favorites.
- Watch progress and viewing history.
- Reading progress and bookmarks.
- Cross-device preferences.
- User ratings or reviews.
- Admin or moderation records.

## Conceptual future model
A future product might need user, catalog item, watchlist item, and viewing progress entities. The conceptual ER diagram in diagrams/flows.md is only a discussion aid. It is not a schema and should not be used to generate migrations without product and security review.

## Design requirements before adding persistence
1. Define which user problem persistence solves.
2. Identify the data owner and authoritative catalog identifiers.
3. Define authentication and authorization.
4. Minimize stored personal data.
5. Define retention, export, and deletion behavior.
6. Restrict every user-owned record to its owner.
7. Define backup, recovery, and incident response.
8. Document database migrations and rollback.
9. Add tests for authorization boundaries.
10. Review applicable privacy requirements.

## Security notes
Do not store passwords directly. Prefer a reputable identity provider. Enforce authorization on the server for every user-owned record. Keep service credentials server-side. Do not assume localStorage is a secure substitute for a backend session design.

No database technology is selected by the current implementation.
