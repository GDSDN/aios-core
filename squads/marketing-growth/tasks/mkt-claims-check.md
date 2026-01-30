---
title: Claims Check
description: 'Ruthless evidence auditor. Validate copy against the truth engine.'
agent: editor-qa
version: 1.0.0
elicit: true
---

# mkt-claims-check

## Task Definition

- **Responsible**: `editor-qa`
- **Goal**: Ensure zero unproven claims in an asset before finalization.

## Execution Workflow

1. **Target Selection**: Specify the file path in `docs/marketing/OUTPUTS/`.
2. **Extraction**: Identify every claim (Quantitative, Qualitative, Comparative, Testimonial).
3. **Evidence Audit**: Cross-reference each claim against `docs/marketing/RESEARCH/` and `docs/marketing/CONTEXT.md`.
4. **Grading**: Write `docs/marketing/OUTPUTS/reviews/<slug>_claims_audit.md`.
   - **[PASS]**: Citation provided.
   - **[WARN]**: Likely true but citation missing (Label as Assumption).
   - **[FAIL]**: Unproven or contradicted by data (Must remove/rewrite).
5. **Resolution**: **Elicit decision** from the user to either:
   - A) Remove/rewrite the claim.
   - B) Run `*mkt-deep-research` to find proof.
   - C) Accept the risk (Label as Hypothesis).

## Post-Conditions

- [ ] Claims audit report is saved.
- [ ] Final status (Go/No-Go) is assigned to the asset.

---

_AIOS Skill - Synced for @editor-qa_
