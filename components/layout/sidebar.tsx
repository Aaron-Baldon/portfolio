import { Card } from "@/components/ui/card";

export function Sidebar() {
  return (
    <Card className="h-fit">
      <div className="space-y-4">
        <div className="h-24 w-24 rounded-full bg-zinc-800" />

        <div>
          <h2 className="text-xl font-semibold">
            Your Name
          </h2>

          <p className="text-sm text-zinc-400">
            Computer Science Student
          </p>
        </div>
      </div>
    </Card>
  );
}