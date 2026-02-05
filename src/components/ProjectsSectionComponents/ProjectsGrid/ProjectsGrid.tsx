import type { Project } from "../../../types/Project";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsGrid.css";

interface ProjectsGridProps {
  projects: Project[];
}

function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="projects-grid row g-4">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4">
            <ProjectCard project={project} />
          </div>
        ))
      ) : (
        <div className="col-12 text-center py-5">
          <p className="fs-4 text-secondary">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectsGrid;
