# 🗄️ Database and persistence

## Current state

There is no application database in this repository. The project does not include database schema files, migrations, ORM configuration, backend persistence, or user account storage.

The current screens keep transient data in React component state. That state is normally lost when a page is reloaded or the component is unmounted.

## Data presently handled in the browser

- Search query text.
- Search result arrays returned by external providers.
- Recent episode entries.
- Anime metadata and episode arrays.
- Selected media URL.
- Manga search results and temporary image object URLs.

These values are not a durable user library.

## Persistence features not implemented

- User registration, sign-in, and session management.
- Watchlist or favorites.
- Watch progress and viewing history.
- Reading progress and bookmarks.
- Personal preferences synchronized across devices.
- User-generated ratings or reviews.

## Future data model considerations

A future backend should define data ownership and retention before storing user information. A possible design could include users, watchlist items, viewing progress, manga bookmarks, and preference records. This is a proposal only, not an existing schema.

Security requirements would include password hashing through a reputable identity provider, authorization checks on every user-owned record, data minimization, retention/deletion flows, and secure secret management.
