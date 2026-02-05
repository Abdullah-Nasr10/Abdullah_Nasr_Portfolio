export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  videoUrl?: string;
  technologies: string[];
  category: string;
}
