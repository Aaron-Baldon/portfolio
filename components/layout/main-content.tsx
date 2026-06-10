import { ProjectGrid } from "@/components/projects/project-grid";
import { SkillsDashboard } from "@/components/skills/skills-dashboard";
import { TimelineSection } from "@/components/timeline/timeline-section";

export function MainContent() {
  return (
    <div className="space-y-16">
      <ProjectGrid />
      <SkillsDashboard />
      <TimelineSection />
    </div>
  );
}