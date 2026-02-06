import { useState } from "react";
import SectionTitle from "../../GlobalComponents/SectionTitle/SectionTitle";
import ProjectsFilter from "../../ProjectsSectionComponents/ProjectsFilter/ProjectsFilter";
import ProjectsGrid from "../../ProjectsSectionComponents/ProjectsGrid/ProjectsGrid";
import { projectsData } from "../../../data/projects";
import "./ProjectsSection.css";

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // =================== Filter Projects ===================
  const filteredProjects =
    activeCategory === "All"
      ? [...projectsData].reverse()
      : projectsData
          .filter((project) => project.category === activeCategory)
          .reverse();

  return (
    <div className="container">
      <SectionTitle title="My Projects" />
      <ProjectsFilter
        activeCategory={activeCategory}
        onFilterChange={setActiveCategory}
      />
      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
}

export default ProjectsSection;
