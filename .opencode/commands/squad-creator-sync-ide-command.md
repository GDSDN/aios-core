---
description: "--- task: Sync Command to IDE Configurations responsavel: '@squad-creator' responsavel_type: agent atomic_layer: task status: active sprint: 9 story: SQC-12 version: 1.0.0 Entrada: | - type: agent | task | workflow | squad (obrigatório) - name: Nome do componente para sincronizar (obrigatório) - ides: Lista de IDEs alvo (opcional, default: todas ativas) - dry_run: Preview sem sincronizar (--dry-run) - force: Sobrescrever existentes (--force) Saida: | - sync_results: Mapa de resultados por IDE - files_created: Lista de arquivos criados - files_updated: Lista de arquivos atualizados - files_skipped: Lista de arquivos pulados Checklist: - '[x] Carregar .aios-sync.yaml' - '[x] Localizar arquivo fonte em squads/' - '[x] Verificar arquivos existentes nos destinos' - '[x] Sincronizar para cada IDE ativa' - '[x] Validar arquivos criados' ---"
agent: "aios-master"
---
Execute a skill **squad-creator-sync-ide-command** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-sync-ide-command`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-sync-ide-command*
