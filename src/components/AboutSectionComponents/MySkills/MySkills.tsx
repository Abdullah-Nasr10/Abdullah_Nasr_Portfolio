import { FaCode, FaServer, FaDatabase, FaRobot, FaFigma } from "react-icons/fa";
import { skillsData } from "../../../data/skillsData";
import AboutSectionHeading from "../AboutSectionsHeading/AboutSectionHeading";
import "./MySkills.css";

// Map category to icon
const categoryIcons: Record<string, React.ElementType> = {
  "Frontend Development": FaCode,
  "Backend Development": FaServer,
  Database: FaDatabase,
  "AI Integration": FaRobot,
  "UI/UX Design": FaFigma,
};

function MySkills() {
  return (
    <section className="skills">
      <AboutSectionHeading subTitle="MY SKILLS" title="Technical Skills" />

      <div className="skillsContainer row g-4 mt-5">
        {skillsData.map((skillCategory) => {
          const Icon = categoryIcons[skillCategory.category];
          return (
            <article
              key={skillCategory.id}
              className="col-lg-4 col-md-6"
              aria-label={skillCategory.category}
            >
              <div className="skill-box rounded-3 p-4 d-flex flex-column align-items-center gap-3 h-100">
                <div className="skillsIcon rounded-circle d-flex justify-content-center align-items-center">
                  {Icon && <Icon />}
                </div>
                <h3 className="skillTitle fs-4 text-center mb-0">
                  {skillCategory.category}
                </h3>
                <div className="mySkill text-center">
                  {skillCategory.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="d-inline-block px-3 py-2 rounded-pill m-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default MySkills;
