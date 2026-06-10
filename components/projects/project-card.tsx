import { Card } from "@/components/ui/card";
import { Project } from "@/types/project";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700">
      <div className="h-48 rounded-2xl bg-zinc-800" />

      <h3 className="mt-5 text-xl font-semibold">
        {project.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-900 px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}