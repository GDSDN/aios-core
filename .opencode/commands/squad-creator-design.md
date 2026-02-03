---
description: "--- task: Design Squad from Documentation responsavel: \"@squad-creator\" responsavel_type: agent atomic_layer: task elicit: true Entrada: | - docs: Documentation sources (text, files, or verbal description) - domain: Optional domain hint to guide analysis - output_path: Where to save blueprint (default: ./squads/.designs/) Saida: | - blueprint_path: Path to generated squad-design.yaml - summary: Human-readable summary of recommendations - confidence: Overall confidence score (0-1) Checklist: - \"[ ] Collect documentation input\" - \"[ ] Analyze domain and extract concepts\" - \"[ ] Generate agent recommendations\" - \"[ ] Generate task recommendations\" - \"[ ] Present recommendations for refinement\" - \"[ ] Apply user adjustments\" - \"[ ] Generate blueprint file\" - \"[ ] Display next steps\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-design** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-design`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-design*
