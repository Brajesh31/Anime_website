# 🌐 API integrations and observed contracts

## 1. Scope and ownership
The frontend currently calls third-party services directly or through configured proxy paths. There is no owned API server or formally versioned provider contract. Endpoint observations below are based on checked-in source and should be rechecked when provider code changes.

## 2. Integration inventory

| Integration | Observed endpoint pattern | Source caller | Expected data |
|---|---|---|---|
| Anime search | https://animeapi-xi.vercel.app/anime/gogoanime/{query} | AnimeHome.jsx | Object with results collection |
| Recent episodes | https://animeapi-xi.vercel.app/anime/gogoanime/recent-episodes | AnimeHome.jsx | Object with results collection |
| Anime info | https://animeapi-xi.vercel.app/anime/gogoanime/info/{id} | AnimeDescPage.jsx, RecentAnimePlayer.jsx | image, description, episodes and metadata |
| Playback metadata | https://animeapi-xi.vercel.app/anime/gogoanime/watch/{episodeId} | Player components | sources array containing URL fields |
| Manga search | Local /aviv2/manga/info/{query} | Mangadex22.jsx | data collection with nested attributes |
| Manga cover | Local /aviv2/manga/cover/{id} | Manga configuration/experiments | Proxy-specific response |
| Manga image | Local /avi2/manga/image/{id}/{file} in rewrite config | Manga experiments/configuration | Image response |

The anime host and manga proxy are external. This repository does not establish their ownership, uptime, terms, or service guarantees.

## 3. Anime search response assumptions
AnimeHome expects data.results to be usable as an array. Each result card reads:
- id, to construct the detail route.
- title, for the visible label.
- image, for the image source.

The code does not validate each property. Missing or malformed fields can create broken cards or navigation.

## 4. Recent episode assumptions
The recent feed expects data.results. Rendered entries read:
- id, used as anime identifier.
- episodeId, used for playback.
- image, used by the card.
- title, displayed as series name.
- episodeNumber, displayed as episode label.

No formal runtime schema validator exists.

## 5. Anime information assumptions
The detail page reads image, description, and episodes[]. Episode entries are expected to include id, number, and title. The component groups the array into chunks of ten. An absent or non-array episodes field is not handled comprehensively.

The recent player also reads description and otherName.

## 6. Playback assumptions
The player components read response.data.sources[2].url. This assumes the response has a sources array, at least three entries, a url field at index 2, a supported media URL, and a source authorized for the intended use.

This is not a reliable provider contract. The code does not implement a robust selection policy or complete unavailable/error state.

## 7. Manga response assumptions
Mangadex22 requests /aviv2/manga/info/{query} and reads resp.data.data. Rendering expects each item to expose id and attributes.title.en. The current component has incomplete cover-fetch logic and experimental rendering. Vite proxy and Vercel rewrites are separate mechanisms.

## 8. Proposed normalized frontend models
These are future models, not current provider schemas:

```ts
type CatalogResult = { id: string; title: string; imageUrl?: string };
type Episode = { id: string; number: string | number; title?: string };
type AnimeDetails = {
  id: string; title?: string; imageUrl?: string;
  description?: string; episodes: Episode[];
};
type PlaybackSource = {
  url: string; quality?: string; format?: string; isDefault?: boolean;
};
```

A provider adapter should validate raw responses and return normalized results or typed errors. UI components should not depend on arbitrary provider payloads.

## 9. Resilience requirements
- Set request timeouts and cancel stale requests.
- Validate status codes and payload shapes.
- Handle missing and empty collections.
- Normalize identifiers and URLs.
- Avoid logging complete provider payloads.
- Distinguish provider unavailable, invalid response, no results, and unauthorized source.
- Avoid retries that amplify outages.
- Respect rate limits and terms.

## 10. Contract test plan
Use sanitized fixtures for valid/empty search, missing results, malformed result items, recent episodes without episodeId, detail with no episodes, playback with zero/one/multiple sources, and manga data with missing nested title. Routine CI should not depend on a live third-party API.
