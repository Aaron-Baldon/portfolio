import { EntrepreneurshipSection } from "@/components/entrepreneurship/entrepreneurship-section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SkillsDashboard } from "@/components/skills/skills-dashboard";
import { FadeIn } from "@/components/shared/fade-in";
import { TimelineSection } from "@/components/timeline/timeline-section";

export function MainContent() {
  return (
    <div className="space-y-16">
      <FadeIn>
        <ProjectGrid />
      </FadeIn>

      <FadeIn delay={0.1}>
        <SkillsDashboard />
      </FadeIn>

      <FadeIn delay={0.2}>
        <TimelineSection />
      </FadeIn>

      <FadeIn delay={0.3}>
        <EntrepreneurshipSection />
      </FadeIn>
    </div>
  );
}