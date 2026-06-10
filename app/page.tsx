import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="flex min-h-screen items-center justify-center">
        <Card className="max-w-xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Phase 2
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Design System Ready
          </h1>

          <p className="mt-4 text-zinc-400">
            Core UI components, reusable layout helpers, and project constants
            are now set up.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </Card>
      </Container>
    </main>
  );
}