export type Discipline = {
  name: string;
  description: string;
  source: string;
  isMock: boolean;
  workloadHours?: number;
};

export type CurriculumTerm = {
  name: string;
  disciplines: Discipline[];
};

export type Course = {
  id: string;
  name: string;
  area: string;
  description: string;
  source: string;
  isMock: boolean;
  curriculum: CurriculumTerm[];
};

export function getAreas(items: Course[]): string[] {
  return [...new Set(items.map((course) => course.area))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
}

export function filterCourses(
  items: Course[],
  courseId: string,
  area: string,
): Course[] {
  return items.filter(
    (course) =>
      (!courseId || course.id === courseId) &&
      (!area || course.area === area),
  );
}
