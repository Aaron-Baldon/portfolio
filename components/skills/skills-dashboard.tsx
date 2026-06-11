import { skills } from "@/constants/skills";
import { SkillCategory } from "./skill-category";

export function SkillsDashboard() {
  return (
    <section id="skills" className="mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Technical Skills
        </h2>

        <p className="mt-2 text-zinc-400">
          Technologies and tools I use to build software.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SkillCategory
          title="Languages"
          items={skills.languages}
        />

        <SkillCategory
          title="Frameworks"
          items={skills.frameworks}
        />

        <SkillCategory
          title="Databases"
          items={skills.databases}
        />

        <SkillCategory
          title="Tools"
          items={skills.tools}
        />

        <SkillCategory
          title="AI & Automation"
          items={skills.ai}
        />
      </div>
    </section>
  );
}