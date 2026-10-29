# Stack tecnica

## Direcao

A equipe pediu uma stack popular baseada em TypeScript e indicou SQLite como banco de dados inicial. As tecnologias abaixo sao uma proposta para orientar a implementacao; somente TypeScript e SQLite foram explicitamente indicados pela equipe.

## Proposta

- **Aplicacao:** Next.js com React e TypeScript.
- **Estilos:** CSS Modules, mantendo componentes e estilos organizados sem exigir uma biblioteca visual adicional.
- **Persistencia:** SQLite para o MVP, com Prisma como ORM.
- **Autenticacao:** Auth.js para proteger o acesso administrativo de cadastro de noticias.
- **Conteudo:** cursos, matrizes curriculares e noticias armazenados de forma estruturada; noticias publicadas aparecem na pagina inicial.
- **Compatibilidade:** interfaces responsivas e testes nos navegadores modernos definidos para o projeto.

## Restricoes

- O catalogo deve conter apenas os cursos de ensino tecnico do link indicado pela coordenacao: https://etecsalesgomes.cps.sp.gov.br/ensino-tecnico/.
- Matrizes curriculares e descricoes devem seguir o material de referencia da coordenacao; mocks sao temporarios quando o material nao estiver disponivel.
- SQLite e uma escolha inicial, sujeita a reavaliacao conforme os requisitos de hospedagem e crescimento.
- A area administrativa deve exigir autenticacao; credenciais e sessoes devem ser tratadas com mecanismos seguros, sem armazenamento de senhas em texto puro.