# Coding standards (marketing-growth)

This squad ships OpenCode artifacts (agents/skills/tools) and a custom tool.

Standards

- ASCII only.
- Prefer TypeScript for tools; provide JavaScript fallback when practical.
- No secrets, no API keys. Auth uses `gcloud auth print-access-token`.
- All files written by tools must be under `docs/marketing/` in the current project.
