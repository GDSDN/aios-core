---
title: Landing Page Copy
description: 'Construct a high-conversion landing page based on Awareness Level and Traffic Source.'
agent: copy-direct-response
version: 2.0.0
elicit: true
---

# mkt-landing-page

## 1. Task Definition

- **Responsible**: `copy-direct-response`
- **Goal**: Draft a landing page that strictly follows the psychological journey of the user.
- **Framework**: Eugene Schwartz (Awareness) + Claude Hopkins (Scientific Advertising).

## 2. Pre-Conditions

- [ ] `OFFERS.md` contains a finalized offer.
- [ ] `MESSAGING.md` contains approved RTBs (Reasons to Believe).
- [ ] `VOICE.md` is available.

## 3. Execution Algorithm

### Phase 1: Diagnosis (The Setup)

1. **Elicit Traffic Source**: Where are they coming from? (Ad, Email, SEO, Social).
2. **Determine Awareness Level**:
   - **Unaware**: "I don't know I have a problem." -> Story/Secret Lead.
   - **Problem Aware**: "I have a problem but no solution." -> Benefit/Empathy Lead.
   - **Solution Aware**: "I know solutions exist, why yours?" -> Mechanism/Proof Lead.
   - **Product Aware**: "I know you, make me an offer." -> Deal Lead.
   - **Most Aware**: "I want it." -> Price Lead.
3. **Select Lead Type**: Based on the above, choose the opening Hook.

### Phase 2: Construction (The Draft)

_Create file: `docs/marketing/OUTPUTS/copy/landing/<slug>.md`_

1. **The Hero Section (Above the Fold)**:
   - **Headline**: Use the 4 U's (Urgent, Unique, Ultra-specific, Useful).
   - **Subhead**: Explain the "How" or the "Who".
   - **CTA**: High contrast, specific action (not "Submit").
2. **The Lead (The Bridge)**:
   - Transition from the ad/source.
   - Validate the user's current state/pain.
3. **The Argument (The Body)**:
   - **Unique Mechanism**: How does it work? (The "Secret Sauce").
   - **Value Stacking**: Bullet points of benefits (not features).
   - **Proof Stacking**: Testimonials, logos, data points (Placeholders [PROOF_NEEDED] if missing).
4. **The Offer (The Close)**:
   - Restate the Deliverables.
   - Reveal the Price Anchor.
   - Present the Guarantee (Risk Reversal).
   - **Final CTA**.

### Phase 3: Optimization (The Polish)

1. **Scannability Check**: Bolding, subheads, short paragraphs.
2. **Voice Check**: Does it sound like `VOICE.md`?
3. **The "So What?" Test**: Read every sentence. Ask "So what?". If no answer, delete.

## 4. Post-Conditions

- [ ] Markdown file created in `docs/marketing/OUTPUTS/copy/landing/`.
- [ ] All claims are verified or flagged.

## 5. Verification

- **Run Skill**: `*mkt-claims-check` on the draft.
- **User Review**: Elicit feedback on the Hook and the Offer.

---

_AIOS Skill - High Density v2.0_
