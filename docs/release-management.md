# 🚢 Release management and change control

## Release principles
A release should be reproducible, traceable to a commit, and honest about known limitations. A green build is necessary but not sufficient for a user-facing release.

## Pre-release checks
- [ ] Confirm the target commit and branch.
- [ ] Review the changelog and roadmap.
- [ ] Run npm ci from a clean checkout.
- [ ] Review ESLint output and resolve new findings.
- [ ] Run npm run build.
- [ ] Run python scripts/check_docs.py.
- [ ] Verify route smoke tests.
- [ ] Check provider behavior and applicable terms.
- [ ] Review dependency advisories and lockfile changes.
- [ ] Review keyboard, responsive, and accessibility behavior.
- [ ] Confirm no secrets or unauthorized media are included.
- [ ] Confirm README status labels and screenshots match the release.

## Versioning
The current package manifest uses 0.0.0. No mature release/versioning policy is established. Before publishing tagged releases, choose a versioning scheme and document compatibility expectations.

## Changelog discipline
Record user-visible changes, fixes, security changes, and breaking changes. Avoid listing internal file churn as a feature. Link changes to commits or issues where possible.

## Deployment and rollback
Deploy the exact reviewed commit. Keep the previous known-good deployment available. Roll back frontend releases that break core routes or introduce severe runtime regressions. A rollback does not fix an upstream provider outage.

## Release evidence
Record commit SHA, build result, test results, known failures, deployment URL if public, and rollback reference. Do not claim all tests pass if a workflow step is advisory or skipped.
