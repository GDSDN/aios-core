---
description: "Compare upstream changes against the current OpenCode fork, classify relevance, and generate an adaptation story only for changes that are systemic and safe to port."
---
# Upstream Sync

## Purpose

Compare upstream changes against the current OpenCode fork, classify relevance, and generate an adaptation story only for changes that are systemic and safe to port.

## Workflow

1. **Fetch Upstream**
   - Ensure `upstream` remote exists.
   - Run `git fetch upstream` and list commits not present in the current branch.

2. **Classify Changes**
   - Group commits by category:
     - **Core Runtime** (workflow engine, task orchestration, agent foundation)
     - **OpenCode Integration** (commands, prompts, CLI behavior)
     - **IDE-Specific** (other IDE integrations → ignore)
     - **Docs/Chore/CI** (low risk, optional)
   - Mark each commit as **Relevant**, **Optional**, or **Ignore**.

3. **Decision Framework**
   - **Pull** if: change affects core runtime or OpenCode integration.
   - **Defer** if: change is documentation-only or unrelated to OpenCode fork.
   - **Ignore** if: change is IDE-specific or conflicts with OpenCode constraints.

4. **Generate Report**
   - Write a summary report to `docs/opencode/upstream-sync-report.md`.
   - Include commit list, categories, and rationale.

5. **Story Creation (If Needed)**
   - If relevant commits exist, create a story in `docs/guides/opencode-upstream-adaptation.story.md` with:
     - Goal
     - Scope
     - Risks
     - Acceptance Criteria
     - Tasks

## Output

- `docs/opencode/upstream-sync-report.md`
- `docs/guides/opencode-upstream-adaptation.story.md` (only if relevant changes exist)

## Notes

- Use `todowrite` and `todoread` to track each step.
- Keep outputs concise and CLI-friendly.
