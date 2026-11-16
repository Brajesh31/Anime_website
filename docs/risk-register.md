# ⚠️ Project risk register

Ratings are qualitative and should be revisited after code and provider changes.

| ID | Risk | Likelihood | Impact | Current mitigation | Follow-up |
|---|---|---|---|---|---|
| R-01 | Anime API outage/schema change | High | High | Some request errors are caught | Add provider adapter, schema validation and visible states |
| R-02 | Playback source index 2 absent | High | High | Request catch exists | Validate and select sources by supported properties |
| R-03 | Player route/link mismatch | Medium | High | Route discrepancy documented | Add direct-route and navigation tests |
| R-04 | Manga proxy differs between dev/prod | High | Medium | Separate configs exist | Test deployed rewrites |
| R-05 | Untrusted provider fields reach UI/player | Medium | High | React escapes text by default | Validate field types and URLs |
| R-06 | Content rights unclear | Medium | Critical | Docs state external content is not owned | Verify terms and rights; disable unapproved integrations |
| R-07 | Legacy lint debt hides regressions | High | Medium | Lint runs advisory | Fix findings and make lint blocking |
| R-08 | No automated route tests | High | Medium | Manual QA matrix | Add component and browser tests |
| R-09 | Accessibility gaps | Medium | High | Checklists documented | Perform keyboard/screen-reader audit |
| R-10 | No persistence/account controls | Certain | Low in current scope | No personal-data feature claimed | Define privacy design before adding accounts |
| R-11 | Hard-coded provider URLs | High | Medium | API inventory documents locations | Centralize config and adapters |
| R-12 | Console logs expose excess payload | Medium | Medium | Security guide flags issue | Use sanitized diagnostics |

## Risk acceptance rules
- Unclear content rights must not be accepted merely to keep a feature working.
- Provider failures must not be addressed by evading rate limits or access controls.
- A production security exposure requires disabling the affected integration or deployment until mitigated.
- Experimental features must not be marketed as complete.
- A green build does not close runtime, accessibility, or provider risks.

## Review cadence
Review before production releases, after provider changes, before introducing accounts/persistence, and after security incidents. Update status and evidence rather than deleting resolved risks without a record.
