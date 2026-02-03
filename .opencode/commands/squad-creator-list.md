---
description: "--- task: List Squads responsavel: \"@squad-creator\" responsavel_type: agent atomic_layer: task Entrada: | - path: Caminho alternativo (opcional, default: ./squads) - format: Formato de output (table | json | yaml) Saida: | - squads: Lista de squads encontrados - count: Numero total de squads Checklist: - \"[ ] Usar squad-generator.listLocal()\" - \"[ ] Formatar output conforme format\" - \"[ ] Exibir informacoes basicas de cada squad\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-list** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-list`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-list*
