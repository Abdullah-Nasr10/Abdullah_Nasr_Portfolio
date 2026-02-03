import AboutPersonalInfo from "../../AboutSectionComponents/AboutPersonalInfo/AboutPersonalInfo";
import MyEducations from "../../AboutSectionComponents/MyEducations/MyEducations";
import MySkills from "../../AboutSectionComponents/MySkills/MySkills";
import SectionTitle from "../../GlobalComponents/SectionTitle/SectionTitle";
import "./AboutSection.css";
function AboutSection() {
  return (
    <div className="container">
      {/* ========================== Section Title ===================================== */}
      <SectionTitle title="About Me" />

      {/*=====================about Personal Information================================*/}
      <AboutPersonalInfo />
      <hr className="aboutSectionDivider my-5" />
      {/*=====================My Skills================================*/}
      <MySkills />
      <hr className="aboutSectionDivider my-5" />
      {/*=====================My Educations================================*/}
      <MyEducations />
    </div>
  );
}

export default AboutSection;
