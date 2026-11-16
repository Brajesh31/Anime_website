# 🧾 Product brief

## Product summary
Anime Website is a browser-first prototype for exploring anime catalog and episode information, with additional experiments around manga discovery and light novels. The current product demonstrates React routing, remote API consumption, and media-player integration.

## Problem framing
A visitor should be able to search a catalog, inspect item metadata, and follow an episode link into a playback interface. This repository explores that journey but relies on external providers and does not provide durable personal features.

## Intended audiences

| Audience | Potential need | Current support |
|---|---|---|
| Casual anime explorer | Search titles and inspect recent episodes | Partial |
| Returning viewer | Open a known episode route | Partial |
| Manga reader | Search a title and inspect details | Experimental |
| Contributor/learner | Study a small React SPA and integrations | Supported by source and docs |
| Maintainer | Understand provider dependencies and current gaps | Supported by docs |

## Product boundaries
The current project does not provide registration, sign-in, personalized recommendations, persistent watchlists, viewing history, owned media storage, billing, moderation, creator tools, or a guaranteed/licensed streaming source.

## Core journeys

### Find an anime
1. Open the anime route.
2. Enter a search query.
3. Submit the form.
4. Review returned result cards.
5. Select a title to open its detail page.

Current friction: the submit handler displays an alert, failures are logged, and loading/error feedback is incomplete.

### Inspect episodes
1. Open an anime detail route from a result.
2. Wait for provider metadata.
3. Read description and image.
4. Expand an episode group.
5. Select an episode.

Current friction: the component assumes valid metadata and episode fields.

### Open a recent episode
1. Open the recent feed.
2. Select an item.
3. Navigate to the recent player.
4. Load anime information and playback metadata.
5. Attempt playback in ReactPlayer.

Current friction: route/link behavior needs verification and playback uses a fixed source index.

### Search manga
1. Open the manga route.
2. Enter a query.
3. Submit through the configured proxy path.
4. Inspect experimental results.
5. Attempt to open a detail route.

Current friction: screen and cover/detail workflow are incomplete.

## Product quality goals
- Predictable navigation and direct route loading.
- Honest loading, empty, unavailable, and error states.
- Validated provider payloads.
- Keyboard-operable controls and readable content.
- Responsive layouts.
- No exposure of private credentials.
- Clear provider and content-rights boundaries.
- Reproducible setup and CI.

## Candidate success measures
Do not publish numerical targets until instrumentation and a baseline exist. Candidate measures include route smoke-test pass rate, requests ending in visible UI states, valid playback metadata rate, runtime error rate, keyboard completion of core journeys, mobile defects per release, and dependency/documentation validation status.

No analytics system currently measures these outcomes.
