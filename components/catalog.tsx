"use client";
import { useMemo, useState } from "react";
import { filterCourses, getAreas, type Course } from "@/lib/catalog";

export default function Catalog({ courses }: { courses: Course[] }) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const areas = useMemo(() => getAreas(courses), [courses]);
  const filteredCourses = useMemo(
    () => filterCourses(courses, selectedCourse, selectedArea),
    [selectedCourse, selectedArea],
  );
  const hasFilters = Boolean(selectedCourse || selectedArea);

  function clearFilters() {
    setSelectedCourse("");
    setSelectedArea("");
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Etec Sales Gomes, início">
            <span className="brand-mark" aria-hidden="true">
              SG
            </span>
            <span className="brand-copy">
              <strong>ETEC SALES GOMES</strong>
              <span>Ensino técnico</span>
            </span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#catalogo">Cursos</a>
            <a className="nav-cta" href="#catalogo">
              Explorar catálogo <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                SEU PRÓXIMO PASSO COMEÇA AQUI
              </p>
              <h1 id="hero-title">
                Conhecimento que
                <br />
                <span>abre caminhos.</span>
              </h1>
              <p className="hero-description">
                Explore os cursos técnicos da Etec Sales Gomes e descubra o que
                você pode construir para o seu futuro.
              </p>
              <a className="hero-link" href="#catalogo">
                Conheça os cursos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-ring art-ring-one" />
              <div className="art-ring art-ring-two" />
              <div className="art-sun" />
              <div className="art-panel">
                <span className="panel-kicker">EDUCAÇÃO TÉCNICA</span>
                <span className="panel-number">01</span>
                <span className="panel-rule" />
                <span className="panel-caption">
                  Aprender.
                  <br />
                  Fazer.
                  <br />
                  Transformar.
                </span>
              </div>
              <span className="art-dot art-dot-one" />
              <span className="art-dot art-dot-two" />
            </div>
            <div className="hero-note">
              <span className="note-marker" aria-hidden="true" />
              <span>Formação conectada ao mundo do trabalho</span>
            </div>
          </div>
        </section>

        <section className="catalog-section" id="catalogo" aria-labelledby="catalog-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">ENCONTRE SEU CAMINHO</p>
              <h2 id="catalog-title">Cursos técnicos</h2>
            </div>
            <p className="section-intro">
              Consulte as áreas de formação e conheça as disciplinas de cada
              matriz curricular.
            </p>
          </div>

          <div className="catalog-panel">
            <div className="filter-heading">
              <div>
                <span className="filter-label">FILTRAR CATÁLOGO</span>
                <span className="filter-hint">
                  Refine por curso ou área de formação
                </span>
              </div>
              {hasFilters && (
                <button className="clear-button" onClick={clearFilters} type="button">
                  Limpar filtros
                </button>
              )}
            </div>

            <div className="filter-controls">
              <label className="filter-field">
                <span>Curso</span>
                <select
                  disabled={courses.length === 0}
                  onChange={(event) => setSelectedCourse(event.target.value)}
                  value={selectedCourse}
                >
                  <option value="">Todos os cursos</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="filter-field">
                <span>Área de formação</span>
                <select
                  disabled={areas.length === 0}
                  onChange={(event) => setSelectedArea(event.target.value)}
                  value={selectedArea}
                >
                  <option value="">Todas as áreas</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>
              <p className="results-count" aria-live="polite">
                {filteredCourses.length}{" "}
                {filteredCourses.length === 1 ? "curso" : "cursos"}
              </p>
            </div>

            {courses.length === 0 ? (
              <div className="empty-state" role="status">
                <span className="empty-icon" aria-hidden="true">
                  +
                </span>
                <p className="empty-kicker">CATÁLOGO EM PREPARAÇÃO</p>
                <h3>Em breve, novos caminhos para explorar.</h3>
                <p className="empty-description">
                  A lista de cursos, as matrizes e as descrições serão publicadas
                  aqui após a confirmação das fontes oficiais pela coordenação.
                  Nenhum curso ou dado curricular foi inventado.
                </p>
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="empty-state" role="status">
                <span className="empty-icon" aria-hidden="true">
                  ↗
                </span>
                <p className="empty-kicker">NENHUM RESULTADO</p>
                <h3>Não encontramos cursos com esses filtros.</h3>
                <p className="empty-description">
                  Tente outra combinação ou limpe os filtros para ver todos os
                  cursos.
                </p>
                <button className="reset-button" onClick={clearFilters} type="button">
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="course-list">
                {filteredCourses.map((course, index) => (
                  <article className="course-card" key={course.id}>
                    <div className="course-card-top">
                      <span className="course-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="area-tag">{course.area}</span>
                    </div>
                    <h3>{course.name}</h3>
                    <p className="course-description">{course.description}</p>
                    {course.isMock && (
                      <p className="mock-notice">
                        Conteúdo provisório (mock), aguardando validação.
                      </p>
                    )}
                    <details className="curriculum">
                      <summary>Ver matriz curricular</summary>
                      <div className="curriculum-content">
                        <p className="source-note">Fonte: {course.source}</p>
                        {course.curriculum.map((term) => (
                          <section
                            className="term"
                            key={`${course.id}-${term.name}`}
                            aria-label={term.name}
                          >
                            <h4>{term.name}</h4>
                            <ul>
                              {term.disciplines.map((discipline) => (
                                <li key={`${term.name}-${discipline.name}`}>
                                  <div>
                                    <strong>{discipline.name}</strong>
                                    <p>{discipline.description}</p>
                                    {discipline.isMock && (
                                      <p className="mock-notice">
                                        Conteúdo provisório (mock), aguardando validação.
                                      </p>
                                    )}
                                    <p className="source-note">
                                      Fonte: {discipline.source}
                                    </p>
                                  </div>
                                  {discipline.workloadHours !== undefined && (
                                    <span className="workload">
                                      {discipline.workloadHours} h
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    </details>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-brand" href="#inicio">
            ETEC SALES GOMES
          </a>
          <span>Educação pública que transforma.</span>
        </div>
      </footer>
    </>
  );
}
