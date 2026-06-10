import { Card } from "@/components/ui/card";

export function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card>
      <h3 className="mb-4 text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}