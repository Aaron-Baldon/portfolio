import { Banner } from "@/components/layout/banner";
import { MainContent } from "@/components/layout/main-content";
import { ProfileCard } from "@/components/layout/profile-card";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="py-8">
        <Banner />

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
          <ProfileCard />
          <MainContent />
        </div>
      </Container>
    </main>
  );
}