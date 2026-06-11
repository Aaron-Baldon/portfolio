import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Personal portfolio built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/portfolio.png",
  },

{
  id: "converter",
  title: "Convertly",
  description:
    "Privacy-first file conversion platform focused on speed, simplicity, and modern user experience.",
  tags: [
    "Vite",
    "React",
    "TypeScript",
    "shadcn/ui",
    "Tailwind CSS",
  ],
  image: "/images/convertly.png",
},

  {
    id: "youtube",
    title: "YouTube Channel (Tutorials)",
    description:
      "Content tutorials channel generating hundreds of thousands of monthly views.",
    tags: ["SEO", "Analytics", "Automation"],
    image: "/images/YTchannel.png",
  },
];