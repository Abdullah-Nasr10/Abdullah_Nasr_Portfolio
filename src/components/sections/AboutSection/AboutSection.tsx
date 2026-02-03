import AboutPersonalInfo from "../../AboutSectionComponents/AboutPersonalInfo/AboutPersonalInfo";
import SectionTitle from "../../GlobalComponents/SectionTitle/SectionTitle";
import "./AboutSection.css";
function AboutSection() {
  return (
    <div className="container">
      {/* ========================== Section Title ===================================== */}
      <SectionTitle title="About Me" />

      {/*=====================about Personal Information================================*/}
      <AboutPersonalInfo />
    </div>
  );
}

export default AboutSection;
