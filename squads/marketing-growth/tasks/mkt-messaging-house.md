---
title: Messaging House
description: 'Build the single source of truth for messaging pillars, proof, and objections.'
agent: product-marketer
version: 2.0.0
elicit: true
---

# mkt-messaging-house

## 1. Task Definition

- **Responsible**: `product-marketer`
- **Goal**: To align the entire squad on "What we say" and "How we prove it".
- **Framework**: The Value Pillar Matrix.

## 2. Pre-Conditions

- [ ] `positioning.md` (from `brand-strategist`) is complete.
- [ ] `ICP.md` is complete.

## 3. Execution Algorithm

### Phase 1: The Foundation (Positioning)

1. **Import**: Read `docs/marketing/OUTPUTS/brand/positioning.md`.
2. **Extract**: The "One-Liner" (The Promise) and the "Elevator Pitch".

### Phase 2: The Pillars (Structure)

_Create file: `docs/marketing/OUTPUTS/strategy/messaging-house.md`_

1. **Define 3-4 Value Pillars**:
   - These are the specific "Buckets of Value" (e.g., Speed, Intelligence, Security).
   - **Rule**: Pillars must be Mutually Exclusive and Collectively Exhaustive (MECE).
2. **Attach Features**: Map specific product features to each pillar.
3. **Attach RTBs (Reasons to Believe)**:
   - For every pillar, you MUST cite evidence.
   - _Example: Pillar = Speed. RTB = "Benchmarks show 300ms latency (Source: internal_test_v2.json)."_

### Phase 3: The Defense (Objections)

1. **List Top 5 Objections**: Why would the ICP say no?
2. **Draft Rebuttals**:
   - **Empathy**: Validate the concern.
   - **Reframing**: Shift the perspective.
   - **Proof**: Kill the objection with data.

### Phase 4: The Ladder (CTAs)

1. **Primary CTA**: The money step (Buy, Demo).
2. **Secondary CTA**: The lead gen step (Webinar, Whitepaper).
3. **Tertiary CTA**: The content step (Read, Follow).

### Phase 5: Codification

1. **Update Master**: Copy the finalized structure into `docs/marketing/MESSAGING.md`.
2. **Lock**: Mark as "Approved" by `marketing-master`.

## 4. Post-Conditions

- [ ] `MESSAGING.md` is the undisputed source of truth.
- [ ] All RTBs have citations or [HYPOTHESIS] tags.

## 5. Verification

- **Consistency Check**: Does the Messaging House align with the Voice?
- **Completeness**: Are there any "Orphan Features" not mapped to a pillar?

---

_AIOS Skill - High Density v2.0_
