# Validacao

## Evidencias para merge

- [ ] A lista de cursos foi conferida com a coordenacao ou fonte aprovada.
- [ ] Matrizes, disciplinas e descricoes correspondem as fontes aprovadas.
- [ ] Todo conteudo temporario esta identificado como mock e tem os dados ausentes registrados.
- [ ] Os filtros por curso e area funcionam, inclusive quando nao ha resultados.
- [ ] Catalogo e matrizes permanecem utilizaveis em telas moveis e desktop.
- [ ] Controles podem ser operados por teclado e possuem rotulos acessiveis.
- [ ] As alteracoes foram verificadas nos navegadores modernos suportados pelo projeto.
- [ ] Checagens automatizadas disponiveis no projeto foram executadas; falhas e limitacoes estao registradas.

## Registro da implementacao

Preencher antes de solicitar merge:

- **Fontes de conteudo conferidas:**
- **Mocks restantes e motivo:** Nenhum. O catalogo esta vazio ate a confirmacao de fontes oficiais.
- **Dispositivos e navegadores verificados:**
- **Verificacoes de acessibilidade realizadas:** Revisao de implementacao: rotulos explicitos, controles nativos, foco visivel, link para pular ao conteudo, estados anunciados e preferencia por movimento reduzido. Teste manual pendente.
- **Testes e checagens executados:** Diagnosticos do editor sem erros e `git diff --check` sem problemas. Build, typecheck e inicializacao do SQLite pendentes: Node.js/npm nao estao disponiveis no ambiente.
- **Problemas conhecidos ou limitacoes:**

## Estado desta implementacao

- Interface, filtros, visualizacao de matriz e estados vazios implementados.
- Cursos, areas, matrizes, descricoes e fontes oficiais aguardam confirmacao da coordenacao.
- Validacao automatizada, testes manuais de acessibilidade e verificacao em navegadores/dispositivos permanecem pendentes.
