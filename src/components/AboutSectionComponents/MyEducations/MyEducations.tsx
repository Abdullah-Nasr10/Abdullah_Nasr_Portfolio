import { FaGraduationCap } from "react-icons/fa";
import AboutSectionHeading from "../AboutSectionsHeading/AboutSectionHeading";
import { educationData } from "../../../data/educationData";
import "./MyEducations.css";

function MyEducations() {
  return (
    <section>
      <AboutSectionHeading
        subTitle="MY EDUCATIONS"
        title="Education Background"
      />
      <div className="row g-4 mt-5">
        {educationData.map((education, index) => (
          <div key={education.id} className="col-lg-4 col-md-6">
            <article
              className={`education-box education-box-${index + 1} p-4 rounded-3 d-flex gap-3 h-100`}
              data-aos="fade-up"
            >
              <div className="education-icon-wrapper">
                <div className="education-icon rounded-circle center">
                  <FaGraduationCap />
                </div>
              </div>
              <div className="education-details">
                <h3 className="education-date fs-5 mb-2">{education.period}</h3>
                <h4 className="education-title fs-4 mb-3">
                  {education.degree} | <span>{education.institution}</span>
                </h4>
                <p className="education-description fs-6">
                  {education.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyEducations;
