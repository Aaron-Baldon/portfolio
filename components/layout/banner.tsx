import { FadeIn } from "@/components/shared/fade-in";

export function Banner() {
  return (
    <div className="relative h-72 overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative flex h-full flex-col justify-center px-10">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
            Portfolio
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight">
            Building Software, Products, and Digital Experiences
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Computer Science student focused on modern web development,
            software engineering, and digital growth.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}