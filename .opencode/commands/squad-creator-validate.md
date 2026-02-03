---
description: "--- task: Validate Squad responsável: @squad-creator responsável_type: agent atomic_layer: task Entrada: | - squad_path: Path to the squad directory (default: ./squads/{name}) - name: Squad name (alternative to full path) - strict: If true, warnings become errors (default: false) - verbose: If true, show detailed output (default: false) Saída: | - validation_result: Object with { valid, errors, warnings, suggestions } - report: Formatted report for display - exit_code: 0 if valid, 1 if invalid Checklist: - [ ] Resolve squad path via squad-loader - [ ] Execute squad-validator.validate() - [ ] Format result for output - [ ] Return appropriate exit code ---"
agent: "aios-master"
---
Execute a skill **squad-creator-validate** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-validate`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-validate*
