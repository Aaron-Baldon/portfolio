import { timelineItems } from "@/constants/timeline";
import { Card } from "@/components/ui/card";

export function TimelineSection() {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Education & Experience</h2>
        <p className="mt-2 text-zinc-400">
          Academic background, projects, and growth milestones.
        </p>
      </div>

      <div className="space-y-6">
        {timelineItems.map((item) => (
          <Card key={item.title}>
            <p className="text-sm text-zinc-500">{item.date}</p>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{item.organization}</p>
            <p className="mt-4 text-zinc-500">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}