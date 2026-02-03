---
description: "--- task: Download Squad responsavel: \"@squad-creator\" responsavel_type: agent atomic_layer: task status: active sprint: 8 story: SQS-6 Entrada: | - squad_name: Nome do squad para baixar (obrigatório) - version: Versão específica (opcional, default: latest) - list: Flag para listar squads disponíveis (--list) - overwrite: Flag para sobrescrever squad existente (--overwrite) Saida: | - squad_path: Caminho do squad baixado - manifest: Manifest do squad - validation_result: Resultado da validação Checklist: - \"[ ] Verificar se já existe localmente\" - \"[ ] Buscar no registry.json\" - \"[ ] Baixar arquivos do GitHub\" - \"[ ] Extrair para ./squads/{name}/\" - \"[ ] Validar squad baixado\" - \"[ ] Exibir próximos passos\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-download** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-download`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-download*
