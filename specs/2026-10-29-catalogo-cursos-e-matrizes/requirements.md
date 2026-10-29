# Requisitos

## Contexto

Esta entrega cobre a confirmacao das fontes de conteudo e a implementacao do catalogo de cursos tecnicos com suas matrizes curriculares. A missao e a stack de referencia estao em `specstyssa/mission.md` e `specstyssa/tech-stack.md`.

O catalogo deve corresponder aos cursos de ensino tecnico da Etec Sales Gomes indicados pela coordenacao. Nomes de disciplinas e descricoes devem seguir as matrizes e fontes aprovadas pela coordenacao.

## Escopo

- Apresentar os cursos tecnicos confirmados pela coordenacao.
- Permitir filtrar o catalogo por curso e area.
- Exibir a matriz curricular e as descricoes das disciplinas de cada curso.
- Funcionar em dispositivos moveis e navegadores modernos, com interacao acessivel.
- Permitir mocks somente quando dados oficiais estiverem ausentes; identificar esses dados como temporarios.

## Decisoes

- A entrega inclui confirmacao das fontes e implementacao do catalogo e das matrizes.
- Os filtros incluidos sao por curso e area; nao ha busca textual ou outros filtros definidos neste escopo.
- A stack proposta nas referencias e Next.js, React e TypeScript, com SQLite e Prisma para persistencia. A referencia registra TypeScript e SQLite como decisoes explicitas da equipe; as demais tecnologias sao propostas.
- A autenticacao e o cadastro de noticias nao fazem parte desta entrega.

## Fora de escopo

- Administracao de cursos ou edicao de matrizes por usuarios.
- Noticias, autenticacao administrativa e publicacao do site.
- Acrescentar cursos que nao estejam no catalogo tecnico confirmado pela coordenacao.