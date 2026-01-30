---
title: Deep Research (Vertex AI)
description: 'Iterative grounded intelligence loop using Vertex AI Gemini.'
agent: growth-analyst
version: 2.0.0
elicit: true
---

# mkt-deep-research

## 1. Task Definition

- **Responsible**: `growth-analyst`
- **Goal**: To close a specific knowledge gap using high-fidelity, grounded AI research.
- **Philosophy**: "Research is not searching; it is synthesizing."

## 2. Pre-Conditions

- [ ] User has defined the "Decision to be made" (Why are we doing this?).
- [ ] `docs/marketing/RESEARCH/_briefs/` directory exists.
- [ ] Google Cloud authentication is active (`gcloud auth print-access-token` works).

## 3. Execution Algorithm

### Phase 1: The Brief (Planning)

1. **Elicit Topic**: Ask user for the core topic or question.
2. **Define Scope**:
   - **Knowns**: What is already in `CONTEXT.md`?
   - **Unknowns**: What specifically is missing?
   - **Constraints**: Exclude domains? Date range?
3. **Write Brief**: Create `docs/marketing/RESEARCH/_briefs/<timestamp>__<slug>.md`.
   ```markdown
   # Research Brief: [Topic]

   - Objective: ...
   - Hypotheses to test: ...
   - Required Data Points: ...
   ```

### Phase 2: The Loop (Execution)

_Repeat 1-3 times if depth requires it._

1. **Construct Query**: Formulate a prompt for the `mkt-deep-research` tool.
   - Use `grounded: true`.
   - Use specific entity names.
   - Ask for data, dates, and sources.
2. **Execute Tool**: Run the tool.
   - Output Path: `docs/marketing/RESEARCH/<timestamp>__<slug>/`
3. **Analyze Raw Output**: Read `raw.json` and `report.md`.
   - **Check**: Did we answer the specific questions from Phase 1?
   - **If NO**: Refine query and run again (Phase 2, Iteration 2).

### Phase 3: The Synthesis (Delivery)

1. **Extraction**: Pull the key facts, stats, and quotes.
2. **Writing**: Create `docs/marketing/OUTPUTS/research/<slug>_synthesis.md`.
   - **Executive Summary**: 3 bullet points.
   - **Evidence Locker**: The hard data with citation links to the `report.md`.
   - **Implications**: "Because X is true, we should do Y."
3. **Update Truth**: If findings contradict `CONTEXT.md`, flag for `marketing-master` review.

## 4. Post-Conditions

- [ ] `raw.json` saved (Audit trail).
- [ ] `report.md` saved (AI output).
- [ ] `synthesis.md` saved (Human-ready insight).

## 5. Verification

- **Validation**: Does every claim in the synthesis have a `[Source]` link?
- **Utility**: Does this enable the copywriter/strategist to do their job?

---

_AIOS Skill - High Density v2.0_
