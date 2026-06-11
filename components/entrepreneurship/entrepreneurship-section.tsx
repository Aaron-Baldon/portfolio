import { growthMetrics } from "@/constants/entrepreneurship";
import { Card } from "@/components/ui/card";

export function EntrepreneurshipSection() {
  return (
    <section id="entrepreneurship" className="mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Digital Entrepreneurship</h2>
        <p className="mt-2 text-zinc-400">
          Building content systems, SEO-driven tutorials, and audience growth.
        </p>
      </div>

      <Card>
        <div className="grid gap-6 md:grid-cols-2">
          {growthMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <p className="text-sm text-zinc-500">{metric.label}</p>
              <p className="mt-2 text-2xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-zinc-400">
          Developed a tutorial-focused content workflow using keyword research,
          search intent analysis, thumbnail optimization, and structured upload
          systems to reach hundreds of thousands of monthly viewers.
        </p>
      </Card>
    </section>
  );
}