# OpenCode Integration Update (2026-02-03)

## Scope

This update aligns AIOS prompts and templates with OpenCode Plan/Build execution modes and introduces an upstream sync workflow for safe adaptations.

## Completed Work

1. **OpenCode Plan/Build Modes**
   - Added PLAN/BUILD mode directives to all `.opencode/agents/*.md`.
   - Updated agent template to include execution mode guidance and shared-state rules.

2. **Todo Tracking in Task Templates**
   - Added `todowrite/todoread` tracking requirements in task templates:
     - `.aios-core/product/templates/personalized-task-template.md`
     - `.aios-core/product/templates/personalized-task-template-v2.md`
     - `.aios-core/product/templates/task-template.md`

3. **OpenCode Command/Skill Templates**
   - Added:
     - `.aios-core/product/templates/opencode/command-template.md`
     - `.aios-core/product/templates/opencode/skill-template.md`

4. **Upstream Sync Workflow**
   - New skill: `.opencode/skills/upstream-sync/SKILL.md`
   - New command: `.opencode/commands/upstream-sync.md`
   - New task: `.aios-core/development/tasks/upstream-sync.md`
   - Report: `docs/opencode/upstream-sync-report.md`
   - Story: `docs/guides/opencode-upstream-adaptation.story.md`

5. **Prompt Source Cache**
   - Extracted OpenCode built-in prompt directives:
     - `docs/opencode/BUILTIN-PROMPTS.md`

## Notes

- OpenCode upstream repo is archived; prompt directives were extracted from source files.
- The fork remains OpenCode-only; other IDE artifacts are removed.

## Next Steps

- Execute the upstream adaptation story and selectively port relevant changes.
- Validate command routing and agent behaviors after porting runtime changes.
