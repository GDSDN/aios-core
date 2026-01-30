---
title: Winback Email Sequence
description: 'Recover inactive users through loss aversion and incentive offers.'
agent: copy-lifecycle
version: 1.0.0
elicit: true
---

# mkt-email-sequence-winback

## Task Definition

- **Responsible**: `copy-lifecycle`
- **Goal**: Reactivate churned users using psychological triggers.

## Execution Workflow

1. **Churn Audit**: Read `docs/marketing/RESEARCH/` for known churn reasons.
2. **Incentive Design**: **Elicit the 'Winback Offer'** (e.g., a discount, a new feature unlock, or a free consult).
3. **Sequence Drafting**: Write `docs/marketing/OUTPUTS/lifecycle/email/winback_sequence.md`.
   - **Email 1 (The Acknowledge)**: "We missed you + what's new".
   - **Email 2 (The Gain)**: Highlighting the cost of inactivity (Loss Aversion).
   - **Email 3 (The Offer)**: The winback incentive.
   - **Email 4 (The Goodbye)**: Final call before data archival.
4. **Verification**: Run `*mkt-claims-check`.

## Post-Conditions

- [ ] 4-email winback sequence is saved.

---

_AIOS Skill - Synced for @copy-lifecycle_
