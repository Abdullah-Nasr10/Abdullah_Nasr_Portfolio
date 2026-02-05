import type { Project } from "../types/Project";

// Import images from assets/projectsImages
import MobileMasrWebsite from "../assets/projectsImages/MobileMasrWebsite.png";
import MobileMasrDashboard from "../assets/projectsImages/MobileMasrDashboard.png";
import ShopCo from "../assets/projectsImages/ShopCo.png";
import Movies from "../assets/projectsImages/Movies.png";
import FishGame from "../assets/projectsImages/FishGame.png";
import UIUX from "../assets/projectsImages/UIUX.png";
import Portfolio from "../assets/projectsImages/OldPortfolio.png";
import Healix from "../assets/projectsImages/HealixWebsite.png";
import TazaMarket from "../assets/projectsImages/TazaMarketWebsite.png";

export const projectsData: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Movies Project",
    description: "A movie search application built with the react.js.",
    image: Movies,
    liveUrl: "https://a-n-movies.vercel.app/",
    githubUrl: "https://github.com/Abdullah-Nasr10/A.NMovies",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    category: "Frontend",
  },
  {
    id: 5,
    name: "Fish Game",
    description: "A fun fish-catching game",
    image: FishGame,
    liveUrl: "https://abdullah-nasr10.github.io/FishGame/",
    githubUrl: "https://github.com/Abdullah-Nasr10/FishGame",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Game",
  },
  {
    id: 6,
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
    id: 7,
    name: "Personal Portfolio",
    description: "My personal portfolio showcasing my projects and skills.",
    image: Portfolio,
    liveUrl: "https://abdullah-nasr10.github.io/A.NPortfolio/",
    githubUrl: "https://github.com/Abdullah-Nasr10/A.NPortfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
  },
  {
    id: 8,
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
    id: 9,
    name: "Taza Market",
    description: "An online grocery store providing fresh food and essentials.",
    image: TazaMarket,
    liveUrl: "https://abdullah-nasr10.github.io/TazaMarket/",
    githubUrl: "https://github.com/Abdullah-Nasr10/TazaMarket",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
  },
];
