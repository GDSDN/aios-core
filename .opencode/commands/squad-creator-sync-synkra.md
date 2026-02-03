---
description: "--- task: Sync Squad to Synkra responsavel: \"@squad-creator\" responsavel_type: agent atomic_layer: task status: active sprint: 8 story: SQS-5 version: 1.0.0 Entrada: | - squad_path: Caminho do squad para sincronizar (obrigatório) - visibility: public | private (default: private) - official: Flag para marcar como oficial (--official, apenas SynkraAI) - dry_run: Preview sem sincronizar (--dry-run) Saida: | - sync_result: Resultado do sync (created | updated | skipped) - squad_url: URL do squad no marketplace (quando público) - squad_id: ID único do squad - checksum: Checksum do squad sincronizado Checklist: - \"[x] Validar squad localmente\" - \"[x] Obter token de autenticação\" - \"[x] Calcular checksum\" - \"[x] Enviar para Synkra API\" - \"[x] Exibir URL do marketplace\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-sync-synkra** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-sync-synkra`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-sync-synkra*
