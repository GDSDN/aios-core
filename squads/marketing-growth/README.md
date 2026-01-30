# Marketing & Growth Squad (marketing-growth)

This squad provides an evidence-first marketing and growth system for OpenCode + AIOS.

Core contract:

- Project-local marketing knowledge base lives at `docs/marketing/`.
- Research artifacts MUST be saved under `docs/marketing/RESEARCH/`.
- Outputs MUST be saved under `docs/marketing/OUTPUTS/`.

This squad includes:

- `marketing-master` primary orchestrator agent.
- Specialist subagents for strategy, research, copy, paid channels, lifecycle, ops, and QA.
- OpenCode skills that map to executable workflows.
- A Vertex AI (Gemini) Deep Research custom tool using `gcloud` auth (no API keys).

Quick start

1. Install global OpenCode artifacts (agents/skills/tools):
   - Run: `powershell -ExecutionPolicy Bypass -File squads/marketing-growth/scripts/install-opencode.ps1`
2. Initialize a project marketing KB:
   - Run: `*mkt-init-project-kb`
3. Run research loop:
   - Run: `*mkt-deep-research --query "..." --grounded`

Notes

- The Deep Research tool writes to `docs/marketing/RESEARCH/<timestamp>__<slug>/`.
- Claims are never invented. If a stat/claim cannot be cited, it must be labeled as an assumption.

Integration points (no MCP)

- Auth: `gcloud auth print-access-token` (no API keys).
- Project: reads `gcloud config get-value project`.
- Vertex AI: uses `generateContent` on the configured model (default `gemini-3-pro-preview`).
- Optional grounding: adds `tools: [{ googleSearch: ... }]` when `grounded=true`.
