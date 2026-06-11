import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProfileCard() {
  return (
    <Card className="sticky top-6">
      <div className="flex flex-col items-center text-center">
       <Image
  src="/images/profile.jpg"
  alt="Your Name Profile Picture"
  width={128}
  height={128}
  className="rounded-full object-cover"
/>
        <h1 className="mt-6 text-2xl font-bold">
          Aaron Joseph Baldon
        </h1>

        <p className="mt-1 text-zinc-400">
          Computer Science Student | Content Creator
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500">
          Passionate about software engineering, web development,
          and building scalable digital products.
        </p>

        <div className="mt-8 grid w-full grid-cols-3 gap-3">
          <div>
            <p className="text-xl font-bold">10+</p>
            <p className="text-xs text-zinc-500">Projects</p>
          </div>

          <div>
            <p className="text-xl font-bold">500K+</p>
            <p className="text-xs text-zinc-500">Views</p>
          </div>

          <div>
            <p className="text-xl font-bold">3+</p>
            <p className="text-xs text-zinc-500">Years</p>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3">
          <Button>
            Download Resume
          </Button>

          <Button variant="secondary">
            Contact Me
          </Button>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-zinc-400">
  <a
    href="https://github.com/Aaron-Baldon"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://www.youtube.com/@Guideonn"
    target="_blank"
    rel="noopener noreferrer"
  >
    YouTube
  </a>
</div>
      </div>
    </Card>
  );
}