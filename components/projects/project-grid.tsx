import { projects } from "@/constants/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  return (
    <section id="projects">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-2 text-zinc-400">
          Selected software, products, and digital work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}