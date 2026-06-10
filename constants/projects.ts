import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Personal portfolio built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/project-1.jpg",
  },

  {
    id: "converter",
    title: "File Converter SaaS",
    description:
      "Privacy-first file conversion platform.",
    tags: ["Next.js", "Supabase", "CloudConvert"],
    image: "/images/project-2.jpg",
  },

  {
    id: "youtube",
    title: "YouTube Growth System",
    description:
      "Content pipeline generating hundreds of thousands of monthly views.",
    tags: ["SEO", "Analytics", "Automation"],
    image: "/images/project-3.jpg",
  },
];