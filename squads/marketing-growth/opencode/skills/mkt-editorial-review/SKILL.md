---
title: Editorial Review
description: 'Final gate for voice, clarity, and consistency.'
agent: editor-qa
version: 1.0.0
elicit: true
---

# mkt-editorial-review

## Task Definition

- **Responsible**: `editor-qa`
- **Goal**: Ensure the asset is ready for public release.

## Execution Workflow

1. **Voice Check**: Read `VOICE.md` and compare against the target file.
2. **Clarity Audit**: Remove 20% of the words while keeping 100% of the meaning.
3. **Consistency**: Ensure terminology matches `MESSAGING.md`.
4. **Review Report**: Write `docs/marketing/OUTPUTS/reviews/<slug>_editorial_audit.md`.
   - **Must-Fix**: Critical voice or grammar violations.
   - **Nice-to-Fix**: Stylistic suggestions.
5. **Resolution**: **Elicit decision** to approve or request another draft.

## Post-Conditions

- [ ] Asset is marked "Final" or returned for edits.

---

_AIOS Skill - Synced for @editor-qa_
