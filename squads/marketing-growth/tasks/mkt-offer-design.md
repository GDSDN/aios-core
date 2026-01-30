---
title: Offer Design
description: 'Engineer a Grand Slam Offer using the Value Equation and Risk Reversal.'
agent: pricing-offer-architect
version: 2.0.0
elicit: true
---

# mkt-offer-design

## 1. Task Definition

- **Responsible**: `pricing-offer-architect`
- **Goal**: To maximize the perceived value of the product while minimizing the perceived risk.
- **Framework**: $100M Offers (Alex Hormozi).

## 2. Pre-Conditions

- [ ] `ICP.md` defines the Dream Outcome clearly.
- [ ] `CONTEXT.md` defines the hard constraints (COGS, Delivery).

## 3. Execution Algorithm

### Phase 1: The Equation (Math)

1. **Identify Dream Outcome**: What is the "Heaven" the user wants?
2. **Identify Perceived Likelihood**: How can we prove they will get it? (Case studies, stats).
3. **Identify Time Delay**: How fast can they get a result? (Speed is value).
4. **Identify Effort & Sacrifice**: How can we do the work for them? (Done-for-you vs Do-it-yourself).

### Phase 2: The Stack (Engineering)

_Create file: `docs/marketing/OUTPUTS/offers/offer_stack_<slug>.md`_

1. **The Core Offer**: What is the main thing they are buying?
2. **The Obstacle Audit**: List every reason why they might fail _after_ buying.
3. **The Bonus Creation**: Create a bonus to solve each specific obstacle.
   - _Example: Obstacle = "I don't know how to install it." -> Bonus = "Free Installation Concierge"._
   - **Rule**: Bonuses should have High Perceived Value but Low Marginal Cost.

### Phase 3: The Wrapper (Psychology)

1. **Scarcity**: Is there a limited quantity? (Seats, units, batches).
2. **Urgency**: Is there a deadline? (Cohort start, discount expiry).
3. **Guarantee**: Design the Risk Reversal.
   - _Draft 3 Options_: Unconditional, Conditional, and Anti-Guarantee.
4. **Naming**: Give the offer a "Magic Name" (e.g., "The 30-Day Growth Accelerator" vs "Consulting").

### Phase 4: Finalization

1. **Price Selection**: Present 3 price points (Anchor, Core, Downsell).
2. **Update KB**: Write the winning offer to `docs/marketing/OFFERS.md`.

## 4. Post-Conditions

- [ ] `OFFERS.md` is updated.
- [ ] Offer Strategy document is saved in `OUTPUTS/offers/`.

## 5. Verification

- **Sanity Check**: Does the offer economics work? (LTV > CAC).
- **Compliance**: Is the guarantee legally viable?

---

_AIOS Skill - High Density v2.0_
