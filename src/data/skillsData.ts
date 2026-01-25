// src/data/skillsData.ts

import type { SkillCategory } from "../types/SkillCategory";

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    category: "Frontend Development",
    icon: "fa-solid fa-code",
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Bootstrap5",
      "SASS",
      "JavaScript",
      "ES6",
      "TypeScript",
      "React.js",
      "Angular",
      "Next.js",
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    icon: "fa-solid fa-server",
    skills: [
      "Node.js",
      "Express.js",
      "mongoose",
      "MongoDB",
      "RESTful APIs",
      "GraphQL",
      "JWT Authentication",
    ],
  },
  {
    id: 3,
    category: "Database",
    icon: "fa-solid fa-database",
    skills: ["MongoDB"],
  },
  {
    id: 4,
    category: "AI Integration",
    icon: "fa-solid fa-robot",
    skills: ["OpenAI APIs"],
  },
  {
    id: 5,
    category: "UI/UX Design",
    icon: "fa-brands fa-figma",
    skills: ["Figma"],
  },
];
