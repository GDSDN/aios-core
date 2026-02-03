# Story: OpenCode Upstream Adaptation (Systemic Changes)

## Goal

Safely port upstream systemic improvements that benefit the OpenCode fork without breaking the OpenCode command/agent architecture.

## Scope

**In Scope**:

- Workflow runtime engine (subagent spawning)
- Workflow system standardization and gap fixes
- Agent Foundation Refactor
- Security hardening (TOCTOU checks, manifest signature validation)
- Windows path normalization

**Out of Scope**:

- IDE-specific changes (.windsurf, other IDE configs)
- Pure docs/CI changes unless required by core updates

## Risks

- Workflow runtime changes may conflict with OpenCode command routing
- Agent refactors may require prompt/template changes
- Security changes may affect installer flows

## Acceptance Criteria

- [ ] Workflow runtime engine changes are integrated or intentionally declined with rationale
- [ ] Agent Foundation Refactor is integrated or a compatible subset is adopted
- [ ] Security fixes are applied or documented as incompatible
- [ ] Windows path normalization is applied
- [ ] OpenCode command routing and prompts continue to function
- [ ] Regression tests (lint/typecheck) pass if applicable

## Tasks

1. Analyze upstream workflow runtime engine changes and assess compatibility with OpenCode command routing.
2. Identify minimal subset of Agent Foundation Refactor that benefits OpenCode identity.
3. Port security hardening changes (TOCTOU checks, manifest signature validation).
4. Port Windows path normalization fix.
5. Validate that agent prompts and command mappings still behave as expected.
6. Document any skipped changes and reasons.

## Notes

- Use the upstream-sync report as the source of truth.
- Keep changes focused to avoid regressions.
