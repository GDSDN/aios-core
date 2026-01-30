---
title: Init Marketing KB
description: 'Bootstrap the entire marketing file system with high-fidelity templates and rules.'
agent: marketing-master
version: 2.0.0
elicit: true
---

# mkt-init-project-kb

## 1. Task Definition

- **Responsible**: `marketing-master`
- **Goal**: To create a standardized, evidence-first Knowledge Base structure that forces discipline from Day 1.

## 2. Execution Algorithm

### Phase 1: Safety & Structure

1. **Safety Check**: If `docs/marketing/` exists, create a timestamped backup in `docs/marketing/_BACKUPS/`.
2. **Directory Creation**:
   - `docs/marketing/OUTPUTS/` (Final Assets)
   - `docs/marketing/RESEARCH/` (Raw Data & Reports)
   - `docs/marketing/RESEARCH/_briefs/` (Planning)
   - `docs/marketing/CAMPAIGNS/` (Launch Plans)
   - `docs/marketing/EXPERIMENTS/` (Hypothesis Logs)
   - `docs/marketing/ASSETS/` (Images/Files)

### Phase 2: Template Deployment

_Write the following files with high-density prompts/questions inside them._

1.  **`docs/marketing/CONTEXT.md`**:
    - _Sections_: Product Definition, Business Model, Current Traction, Tech Constraints, The "Do Not Say" List.
2.  **`docs/marketing/VOICE.md`**:
    - _Sections_: Archetype Definition, Tonal Scale (1-5), Vocabulary (Use/Avoid), Grammar Rules.
3.  **`docs/marketing/MESSAGING.md`**:
    - _Sections_: One-Liner, Value Pillars, Reasons to Believe (RTB), Objection Matrix.
4.  **`docs/marketing/ICP.md`**:
    - _Sections_: Demographic, Psychographic, Jobs-to-be-Done, Trigger Events, Pain Points.
5.  **`docs/marketing/OFFERS.md`**:
    - _Sections_: The Core Offer, The Stack, Pricing Tiers, Guarantees, Scarcity Logic.
6.  **`docs/marketing/CHANNELS.md`**:
    - _Sections_: Channel Strategy (Bullseye), CAC Targets, Unit Economics.
7.  **`docs/marketing/EXPERIMENTS.md`**:
    - _Sections_: The Backlog (ICE Score), Active Tests, Learning Log.

### Phase 3: The Index

1. **Create `docs/marketing/README.md`**:
   - Define the "Rules of the Road".
   - Link to the core files.
   - Explicitly state: "No Evidence = No Output."

### Phase 4: Initialization

1. **Prompt User**: "The structure is ready. Please open `docs/marketing/CONTEXT.md` and fill in the initial product details."

## 3. Post-Conditions

- [ ] Complete folder hierarchy exists.
- [ ] All 7 core templates are present and empty (ready for input).
- [ ] Backup created if collision occurred.

## 4. Verification

- **Run Command**: `ls -R docs/marketing/`
- **Check**: Confirm no missing files.

---

_AIOS Skill - High Density v2.0_
