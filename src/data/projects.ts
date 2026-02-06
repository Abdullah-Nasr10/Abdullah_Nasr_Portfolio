import type { Project } from "../types/Project";

// Import images from assets/projectsImages
import MobileMasrWebsite from "../assets/projectsImages/MobileMasrWebsite.webp";
import MobileMasrDashboard from "../assets/projectsImages/MobileMasrDashboard.webp";
import ShopCo from "../assets/projectsImages/ShopCo.webp";
import Movies from "../assets/projectsImages/Movies.webp";
import FishGame from "../assets/projectsImages/FishGame.webp";
import UIUX from "../assets/projectsImages/UIUX.webp";
import OldPortfolio from "../assets/projectsImages/OldPortfolio.webp";
import NewPortfolio from "../assets/projectsImages/NewPortfolio.png";
import Healix from "../assets/projectsImages/HealixWebsite.webp";
import TazaMarket from "../assets/projectsImages/TazaMarketWebsite.webp";

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Taza Market",
    description: "An online grocery store providing fresh food and essentials.",
    image: TazaMarket,
    liveUrl: "https://abdullah-nasr10.github.io/TazaMarket/",
    githubUrl: "https://github.com/Abdullah-Nasr10/TazaMarket",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
  },
  {
    id: 2,
    name: "Healix",
    description:
      "A medical supplies website offering trusted products and services.",
    image: Healix,
    liveUrl: "https://abdullah-nasr10.github.io/Healix/",
    githubUrl: "https://github.com/Abdullah-Nasr10/Healix",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
  },
  {
    id: 3,
    name: "Personal Portfolio V1",
    description:
      "My first portfolio website with interactive design and smooth animations.",
    image: OldPortfolio,
    liveUrl: "https://abdullah-nasr10.github.io/A.NPortfolio/",
    githubUrl: "https://github.com/Abdullah-Nasr10/A.NPortfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
  },
  {
    id: 4,
    name: "Fish Game",
    description: "A fun fish-catching game",
    image: FishGame,
    liveUrl: "https://abdullah-nasr10.github.io/FishGame/",
    githubUrl: "https://github.com/Abdullah-Nasr10/FishGame",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Game",
  },
  {
    id: 5,
    name: "UI/UX Design",
    description: "A UI/UX design project created with Figma.",
    image: UIUX,
    liveUrl:
      "https://www.figma.com/proto/EpBPfTtdBbVEkLxbJPXqs4/Constructopia?node-id=6-7&p=f&t=LykJqgPzMmQCJM04-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A7",

    figmaUrl:
      "https://www.figma.com/design/EpBPfTtdBbVEkLxbJPXqs4/Constructopia?node-id=0-1&p=f&t=DaLUqzxz5ZLHcmj9-0",
    technologies: ["Figma"],
    category: "Design",
  },
  {
    id: 6,
    name: "Movies Project",
    description: "A movie search application built with the react.js.",
    image: Movies,
    liveUrl: "https://a-n-movies.vercel.app/",
    githubUrl: "https://github.com/Abdullah-Nasr10/A.NMovies",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    category: "Frontend",
  },
  {
    id: 7,
    name: "Shop.Co Project",
    description:
      "A modern e-commerce website built with Angular, featuring AI-powered functionality.",
    image: ShopCo,
    videoUrl:
      "https://drive.google.com/file/d/1U-KkEBZ3Y8WgshCOvebBms_mXuKHOdq0/view?usp=sharing",
    githubUrl: "https://github.com/Abdullah-Nasr10/Shop.Co",
    technologies: ["HTML", "CSS", "JavaScript", "SCSS", "Bootstrap", "Angular"],
    category: "Frontend",
  },
  {
    id: 8,
    name: "Mobile Masr Dashboard",
    description:
      "An admin dashboard with AI assistant integration for efficient e-commerce management and data analytics.",
    image: MobileMasrDashboard,
    videoUrl:
      "https://drive.google.com/file/d/1LJFQ0kFqCrfBKkU7NpaNOTnYe6HL5GCN/view?usp=sharing",
    githubUrl: "https://github.com/Abdullah-Nasr10/MobileMasr-Dashboard",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "Node.js",
      "MongoDB",
      "RAG",
    ],
    category: "Full-Stack",
  },
  {
    id: 9,
    name: "Mobile Masr",
    description:
      "A full-featured e-commerce platform for mobile devices with smart search, product comparison, and bilingual support.",
    image: MobileMasrWebsite,
    liveUrl: "https://mobile-masr.vercel.app/",
    githubUrl: "https://github.com/Abdullah-Nasr10/Mobile-Masr",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    category: "Full-Stack",
  },
  {
    id: 10,
    name: "Personal Portfolio V2",
    description:
      "Modern and responsive portfolio built with React and TypeScript, featuring dark/light theme, Firebase integration, and real-time visitor tracking.",
    image: NewPortfolio,
    liveUrl: "https://abdullah-nasr-portfolio.vercel.app/",
    githubUrl: "https://github.com/Abdullah-Nasr10/Abdullah_Nasr_Portfolio",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Bootstrap",
      "Firebase",
      "Vite",
    ],
    category: "Frontend",
  },
];
