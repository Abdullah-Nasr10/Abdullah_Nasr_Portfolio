import {
  FaLayerGroup,
  FaCode,
  FaLaptopCode,
  FaGamepad,
  FaPaintBrush,
} from "react-icons/fa";
import "./ProjectsFilter.css";

interface ProjectsFilterProps {
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

function ProjectsFilter({
  activeCategory,
  onFilterChange,
}: ProjectsFilterProps) {
  const categories = [
    { name: "All", icon: FaLayerGroup },
    { name: "Full-Stack", icon: FaCode },
    { name: "Frontend", icon: FaLaptopCode },
    { name: "Game", icon: FaGamepad },
    { name: "Design", icon: FaPaintBrush },
  ];

  return (
    <div
      className="projects-filter d-flex justify-content-center flex-wrap gap-3 mb-5"
      data-aos="fade-up"
    >
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.name}
            className={`filter-btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill ${activeCategory === cat.name ? "active" : ""}`}
            onClick={() => onFilterChange(cat.name)}
          >
            <Icon className="filter-icon" />
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ProjectsFilter;
