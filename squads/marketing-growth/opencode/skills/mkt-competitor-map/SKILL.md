---
name: mkt-competitor-map
description: Build a dated competitor map and comparison table anchored to sourced claims.
license: MIT
compatibility: opencode
metadata:
  squad: marketing-growth
  kb_root: docs/marketing
  owner: competitive-intel
---

## Workflow

1. Read `docs/marketing/CONTEXT.md` and `docs/marketing/ICP.md`.
2. Identify:

- 3-7 direct competitors
- 3-7 indirect alternatives
- status quo

3. For each top competitor, run `mkt-deep-research` with a narrow prompt:

- positioning
- pricing/packaging
- ICP and jobs
- proof/claims

4. Write:

- `docs/marketing/OUTPUTS/competitive/competitor-map.md` (table + narrative)
- optional battlecards in `docs/marketing/OUTPUTS/competitive/battlecards/<name>.md`

5. Run `mkt-claims-check`.

## Outputs

- `docs/marketing/OUTPUTS/competitive/competitor-map.md`
- `docs/marketing/OUTPUTS/competitive/battlecards/`
