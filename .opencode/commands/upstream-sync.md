---
name: 'upstream-sync'
description: "Compare upstream changes against the current OpenCode fork, classify relevance, and generate an adaptation story only for changes that are systemic and safe to port."
---
# Upstream Sync

RUN git remote -v
RUN git fetch upstream
RUN git log HEAD..upstream/main --oneline

Summarize relevant changes for the OpenCode fork, generate `docs/opencode/upstream-sync-report.md`, and create `docs/guides/opencode-upstream-adaptation.story.md` if systemic changes should be ported.
