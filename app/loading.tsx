export default function Loading() {
  return (
    <main className="loading-state" role="status" aria-live="polite" aria-busy="true">
      <span className="loading-mark" aria-hidden="true" />
      <p>Carregando catálogo de cursos...</p>
    </main>
  );
}
