import type { Project } from "../../../types/Project";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import { getTechColor } from "../../../utils/techColorMapper";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card border rounded-4 d-flex flex-column h-100">
      {/* =================== Project Image =================== */}
      <figure className="project-image position-relative m-0 overflow-hidden rounded-top-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-100 h-100 object-fit-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="image-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </figure>

      {/* =================== Project Content =================== */}
      <div className="p-3 d-flex flex-column gap-3 flex-grow-1">
        <h3 className="project-name fs-3 fw-bold m-0">{project.name}</h3>
        <p className="project-description fs-6 fw-light m-0 text-secondary">
          {project.description}
        </p>

        {/* =================== Technologies =================== */}
        <div className="d-flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`tech-badge badge rounded-pill px-3 py-2 ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* =================== Links =================== */}
        <div
          className="mt-auto pt-3"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <ProjectLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            figmaUrl={project.figmaUrl}
            videoUrl={project.videoUrl}
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
