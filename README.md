# Sitech

Catálogo responsivo de cursos técnicos da Etec Sales Gomes, construído com Next.js, React e TypeScript.

## Executar localmente

Requer Node.js 20.9 ou superior.

```powershell
npm install
Copy-Item .env.example .env
npm run db:push
npm run dev
```

Para validar os tipos e gerar a versão de produção:

```bash
npm run typecheck
npm run build
```

## Conteúdo do catálogo

Os cursos estão intencionalmente ausentes do banco SQLite. A lista oficial, as
matrizes e suas descrições devem ser adicionadas somente após confirmação pela
coordenação e registro de suas fontes. A interface já oferece filtros por curso
e área, estado sem resultados e detalhes expansíveis da matriz curricular.
Somente cursos marcados como publicados são exibidos. Se conteúdo temporário for
aprovado, marque curso ou disciplina com `isMock: true` e registre a fonte ou o
motivo da ausência dos dados oficiais.

Autenticação administrativa, notícias e edição de cursos não fazem parte deste
escopo.
