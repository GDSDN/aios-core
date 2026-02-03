# AIOS Autonomy Protocol (OpenCode Edition)

Este protocolo define como o sistema deve operar para alcançar a máxima autonomia e proatividade, mantendo o controle através da documentação.

## 1. O Loop de Execução Autônomo (Objective-Driven)

Sempre que um objetivo for apresentado, o agente deve seguir este ciclo sem interrupção:

1.  **Context Discovery**: Ler o PRD e a Story ativa para entender o "porquê".
2.  **Step Decomposition**: Usar `todowrite` para listar todos os passos técnicos necessários.
3.  **Skill Mapping**: Se o passo envolver uma Skill (*), carregar a definição da skill e adicionar seus sub-passos ao `todowrite`.
4.  **Autonomous Execution**: Executar cada passo sequencialmente. Se um passo exigir outro agente, use `task` imediatamente.
5.  **Self-Correction**: Se uma ferramenta retornar erro, tente uma correção lógica (ex: mudar diretório, corrigir sintaxe) antes de pedir ajuda ao usuário.
6.  **Progress Sync**: Atualizar o `todowrite` e os checkboxes da Story a cada passo concluído.

## 2. Regras de Decisão

*   **Ação Silenciosa**: Instalações de pacotes, criação de arquivos de teste, refatoração de código e leituras de logs devem ser feitas sem confirmação.
*   **Confirmação Exigida**: Apenas para exclusões de arquivos importantes, alterações estruturais no `opencode.json` ou push para branch principal (se não solicitado).
*   **Modo YOLO**: Quando o modo YOLO estiver ativo (ou inferido pelo contexto de urgência), minimize mensagens de status e foque na conclusão da tarefa.

## 3. Integração com Tools do OpenCode

*   **todowrite/todoread**: É o cockpit do agente. Se não está no `todo`, não está sendo feito.
*   **skill**: Não apenas execute a skill, mas explique no log da Story qual skill foi usada para aquele incremento.

---
_Protocolo de Autonomia Orion v1.0_
