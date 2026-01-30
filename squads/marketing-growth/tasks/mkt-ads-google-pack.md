---
title: Google Ads Pack
description: 'Engineer search intent clusters and high-relevance RSA copy.'
agent: paid-search-google
version: 1.0.0
elicit: true
---

# mkt-ads-google-pack

## Task Definition

- **Responsible**: `paid-search-google`
- **Goal**: Create intent-matched search campaigns that maximize Quality Score.

## Execution Workflow

1. **Keyword Mapping**: Read `MESSAGING.md` and recent search research.
2. **Clustering**: Group keywords into **Tight Intent Buckets** (Commercial vs Transactional).
3. **RSA Production**: Write `docs/marketing/OUTPUTS/paid/google/campaign_<slug>.md`.
   - **15 Headlines**: Varying between Benefit, Feature, and Trust.
   - **4 Descriptions**: Focusing on the "Unique Mechanism".
   - **Extensions**: Sitelinks, Callouts, and Structured Snippets.
4. **Budgeting**: **Elicit target CPA** or Daily Budget constraints.
5. **QA**: Run `*mkt-claims-check` on all headlines.

## Post-Conditions

- [ ] Campaign structure and copy are saved.
- [ ] Negative keyword list is generated.

---

_AIOS Skill - Synced for @paid-search-google_
