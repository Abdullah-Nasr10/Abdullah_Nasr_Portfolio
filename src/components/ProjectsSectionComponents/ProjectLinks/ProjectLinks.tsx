import { FaGithub, FaExternalLinkAlt, FaFigma, FaVideo } from "react-icons/fa";
import "./ProjectLinks.css";

interface ProjectLinksProps {
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  videoUrl?: string;
}

function ProjectLinks({
  liveUrl,
  githubUrl,
  figmaUrl,
  videoUrl,
}: ProjectLinksProps) {
  const links = [
    {
      url: githubUrl,
      icon: FaGithub,
      label: "GitHub",
      className: "github-link",
    },
    {
      url: liveUrl,
      icon: FaExternalLinkAlt,
      label: "Live Demo",
      className: "live-link",
    },
    { url: figmaUrl, icon: FaFigma, label: "Figma", className: "figma-link" },
    { url: videoUrl, icon: FaVideo, label: "Video", className: "video-link" },
  ];

  return (
    <div className="project-links d-flex flex-wrap gap-2">
      {links.map(
        (link) =>
          link.url && (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 ${link.className}`}
            >
              <link.icon />
              <span>{link.label}</span>
            </a>
          ),
      )}
    </div>
  );
}

export default ProjectLinks;
