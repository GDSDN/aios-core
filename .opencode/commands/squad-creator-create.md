---
description: "--- task: Create Squad responsavel: \"@squad-creator\" responsavel_type: agent atomic_layer: task Entrada: | - name: Nome do squad (kebab-case, obrigatorio) - description: Descricao (opcional, elicitacao) - author: Autor (opcional, default: git config user.name) - license: Licenca (opcional, default: MIT) - template: Template base (basic | etl | agent-only) - config_mode: extend | override | none Saida: | - squad_path: Caminho do squad criado - manifest: Conteudo do squad.yaml gerado - next_steps: Instrucoes para proximos passos Checklist: - \"[ ] Validar nome (kebab-case, nao existe)\" - \"[ ] Coletar informacoes via elicitacao\" - \"[ ] Gerar estrutura de diretorios\" - \"[ ] Gerar squad.yaml\" - \"[ ] Gerar arquivos de config (coding-standards, etc.)\" - \"[ ] Gerar exemplo de agent\" - \"[ ] Gerar exemplo de task\" - \"[ ] Executar validacao inicial\" - \"[ ] Exibir proximos passos\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-create** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-create`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-create*
