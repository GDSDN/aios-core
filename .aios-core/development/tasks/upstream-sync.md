# Upstream Sync (OpenCode Fork)

## Purpose

Compare upstream commits against the OpenCode fork, classify relevance, and create a safe adaptation story when systemic changes are worth porting.

## Preconditions

- `upstream` remote is configured
- Working tree is clean or changes are stashed

## Steps

1. **Fetch Upstream**
   - Run `git fetch upstream`
   - List new commits: `git log HEAD..upstream/main --oneline`

2. **Classify Commits**
   - Categorize into: Core Runtime, OpenCode Integration, IDE-Specific, Docs/Chore/CI
   - Mark each commit as Relevant / Optional / Ignore

3. **Decision Framework**
   - Pull if: affects core runtime, OpenCode commands/prompt behavior
   - Defer if: docs-only or CI-only
   - Ignore if: other IDEs or incompatible changes

4. **Create Report**
   - Write summary to `docs/opencode/upstream-sync-report.md`
   - Include commit list, category, and rationale

5. **Create Story (If Needed)**
   - If relevant commits exist, create `docs/guides/opencode-upstream-adaptation.story.md`
   - Include: goal, scope, risks, acceptance criteria, and tasks

## Output

- `docs/opencode/upstream-sync-report.md`
- `docs/guides/opencode-upstream-adaptation.story.md` (only if relevant changes exist)

## Notes

- Use `todowrite`/`todoread` to track each step.
- Keep the report concise and CLI-friendly.
