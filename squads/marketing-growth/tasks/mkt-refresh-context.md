---
title: Refresh Marketing Context
description: 'Sync project reality with CONTEXT.md and identify knowledge gaps.'
agent: marketing-master
version: 1.0.0
elicit: true
---

# mkt-refresh-context

## Task Definition

- **Responsible**: `marketing-master`
- **Goal**: Update `CONTEXT.md` based on recent product changes or research artifacts.

## Execution Workflow

1. **Audit Phase**: Read `docs/marketing/CONTEXT.md` and scan the latest artifacts in `docs/marketing/RESEARCH/`.
2. **Gap Analysis**: Compare the current `CONTEXT.md` with the "Evidence Folder". Identify sections with missing or outdated proof.
3. **Sync**: Update `CONTEXT.md` only where confirmed evidence exists.
4. **Log Gaps**: Write `docs/marketing/OUTPUTS/ops/context-refresh_<timestamp>.md`.
   - **Confirmed Facts**: List with paths to evidence.
   - **Knowledge Gaps**: List specific questions that block copy production.
   - **Hypotheses**: List assumptions needing validation.
5. **Propose Next Actions**: **Elicit decision** on which gap to close first via `*mkt-deep-research`.

## Post-Conditions

- [ ] `CONTEXT.md` reflects current grounded truth.
- [ ] Knowledge gap log is saved.

## Verification

- Run `*mkt-claims-check` on `docs/marketing/CONTEXT.md` to ensure zero unproven claims.

---

_AIOS Skill - Synced for @marketing-master_
