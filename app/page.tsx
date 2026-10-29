import Catalog from "@/components/catalog";
import { prisma } from "@/lib/prisma";
import type { Course } from "@/lib/catalog";

export default async function Home() {
  const records = await prisma.course.findMany({
    where: { published: true },
    orderBy: { name: "asc" },
    include: {
      area: true,
      curriculumEntries: {
        orderBy: [{ semester: "asc" }, { position: "asc" }],
        include: { discipline: true },
      },
    },
  });

  const courses: Course[] = records.map((course) => {
    const terms = new Map<number, Course["curriculum"][number]>();

    for (const entry of course.curriculumEntries) {
      let term = terms.get(entry.semester);
      if (!term) {
        term = {
          name: `${entry.semester}º semestre`,
          disciplines: [],
        };
        terms.set(entry.semester, term);
      }

      term.disciplines.push({
        name: entry.discipline.name,
        description: entry.discipline.description,
        source: entry.discipline.source,
        isMock: entry.discipline.isMock,
        workloadHours: entry.workloadHours ?? undefined,
      });
    }

    return {
      id: course.id,
      name: course.name,
      area: course.area.name,
      description: course.description,
      source: course.source,
      isMock: course.isMock,
      curriculum: [...terms.values()],
    };
  });

  return <Catalog courses={courses} />;
}
