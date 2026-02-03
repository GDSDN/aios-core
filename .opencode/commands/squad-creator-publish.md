---
description: "--- task: Publish Squad responsavel: \"@squad-creator\" responsavel_type: agent atomic_layer: task status: active sprint: 8 story: SQS-6 Entrada: | - squad_path: Caminho do squad para publicar (obrigatório) - dry_run: Flag para simular sem criar PR (--dry-run) - category: Categoria do squad (community | official) Saida: | - pr_url: URL do Pull Request criado - branch: Nome do branch criado - validation_result: Resultado da validação pré-publish Checklist: - \"[ ] Validar squad (deve passar sem errors)\" - \"[ ] Verificar autenticação GitHub\" - \"[ ] Verificar se squad já existe no registry\" - \"[ ] Criar branch no fork/clone\" - \"[ ] Copiar arquivos do squad\" - \"[ ] Atualizar registry.json\" - \"[ ] Criar Pull Request\" - \"[ ] Exibir URL do PR\" ---"
agent: "aios-master"
---
Execute a skill **squad-creator-publish** com os seguintes argumentos: $ARGUMENTS

Instruções:
1. Usar a ferramenta nativa `skill` para executar: `*squad-creator-publish`
2. Passar os argumentos: $ARGUMENTS
3. Permanecer como @aios-master durante a execução.

---
*AIOS Skill Command - Sincronizado para /squad-creator-publish*
