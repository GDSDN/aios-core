---
description: "--- task: Migrate Squad responsável: @squad-creator responsável_type: agent atomic_layer: task Entrada: | - squad_path: Path to the squad directory to migrate (required) - dry_run: If true, preview changes without modifying files (--dry-run) - verbose: If true, show detailed output (--verbose) Saída: | - migration_result: Object with { success, actions, validation, backupPath } - report: Formatted migration report - exit_code: 0 if successful, 1 if failed Checklist: - \"[ ] Analyze squad for migration needs\" - \"[ ] Create backup in .backup/\" - \"[ ] Execute migration actions\" - \"[ ] Validate migrated squad\" - \"[ ] Generate migration report\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-migrate** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-migrate`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-migrate*
