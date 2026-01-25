import type { Education } from "../types/Education";

// src/data/educationData.ts
export const educationData: Education[] = [
  {
    id: 1,
    period: "2020 – 2024",
    degree: "B.Sc. in Computer and Information Sciences",
    institution: "SVU",
    description:
      "Graduated with a grade of Very Good (B). Gained solid knowledge in computer science fundamentals, programming, databases, and software development.",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    id: 2,
    period: "Nov 4, 2022 – Jan 20, 2023",
    degree: "Web Design Training",
    institution: "NTI",
    description:
      "Completed 120 hours of training with a score of 95%. Covered HTML, CSS, JavaScript, Bootstrap, and jQuery, focusing on building responsive and interactive websites.",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    id: 3,
    period: "Jul 5, 2025 – Nov 26, 2025",
    degree: "Full-Stack MEARN Track",
    institution: "ITI",
    description:
      "Hands-on training in MongoDB, Express.js, Angular/React, and Node.js. Focused on developing full-stack applications and integrating front-end with back-end technologies.",
    icon: "fa-solid fa-graduation-cap",
  },
];
