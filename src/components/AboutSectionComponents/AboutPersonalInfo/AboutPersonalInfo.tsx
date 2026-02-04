import { personalInfo } from "../../../data/personalInfo";
import type { PersonalInfo } from "../../../types/PersonalInfo";
import {
  FaDownload,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Button from "../../GlobalComponents/Button/Button";
import aboutImg from "../../../assets/AboutImg.jpg";
import cvFile from "../../../assets/Abdullah Nasr_CV.pdf";
import "./AboutPersonalInfo.css";

function AboutPersonalInfo() {
  const personalInfoData: PersonalInfo = personalInfo;
  return (
    <article className="about-info-container row g-5">
      {/* ======================== About Image ======================== */}
      <figure
        className="col-lg-4 col-md-5 about-img order-1 center position-relative px-4"
        aria-label="Abdullah Nasr profile picture"
      >
        <div className="img-wrapper position-relative mx-auto">
          <img
            src={aboutImg}
            alt="Abdullah Nasr"
            className="w-100 h-100 object-fit-cover"
          />
          {/* -------------------------- Social Links ----------------------- */}
          <div
            className="social-links d-flex flex-column gap-2 position-absolute rounded-4 p-2"
            aria-label="Social media links"
          >
            <a
              className="social-link rounded-circle d-flex justify-content-center align-items-center"
              href="https://www.linkedin.com/in/abdullah-nasr-b66b11250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="social-link rounded-circle d-flex justify-content-center align-items-center"
              href="https://github.com/Abdullah-Nasr10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              className="social-link rounded-circle d-flex justify-content-center align-items-center"
              href="https://www.facebook.com/abdo.nasr02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
            >
              <FaFacebookF />
            </a>
            <a
              className="social-link rounded-circle d-flex justify-content-center align-items-center"
              href="https://wa.me/201033207428"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp contact"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </figure>

      {/* ======================== About Content ======================== */}
      <div
        className="col-lg-8 col-md-7 about-content d-flex flex-column gap-4 order-2"
        aria-label="About Abdullah Nasr personal information"
      >
        <header>
          <h2 className="aboutHeadingName fs-1 mb-0">
            {personalInfoData.name} - <span>{personalInfoData.title}</span>
          </h2>
        </header>

        <p className="aboutDescription fs-5 mb-0">
          {personalInfoData.description[0]}
        </p>
        <p className="aboutDescription fs-5 mb-0">
          {personalInfoData.description[1]}
        </p>
        <hr className="aboutSectionDivider my-2" />

        <h3 className="personalData text-capitalize mb-0 fs-3">
          personal information
        </h3>

        {/* ======================== Personal Information ======================== */}
        <dl className="personal-information row g-3 mb-0">
          <div className="col-md-6 d-flex align-items-center gap-2">
            <dt className="fs-5 text-capitalize mb-0">name:</dt>
            <dd className="fs-6 mb-0">{personalInfoData.name}</dd>
          </div>
          <div className="col-md-6 d-flex align-items-center gap-2">
            <dt className="fs-5 text-capitalize mb-0">age:</dt>
            <dd className="fs-6 mb-0">{personalInfoData.age}</dd>
          </div>
          <div className="col-md-6 d-flex align-items-center gap-2">
            <dt className="fs-5 text-capitalize mb-0">from:</dt>
            <dd className="fs-6 mb-0">{personalInfoData.location}</dd>
          </div>
          <div className="col-md-6 d-flex align-items-center gap-2">
            <dt className="fs-5 text-capitalize mb-0">email:</dt>
            <dd className="fs-6 mb-0">
              <a href={`mailto:${personalInfoData.email}`}>
                {personalInfoData.email}
              </a>
            </dd>
          </div>
        </dl>

        {/* ======================== Links Section ======================== */}
        <footer className="links d-flex flex-wrap align-items-center gap-3">
          <Button
            btnText="Download CV"
            btnIcon={FaDownload}
            href={cvFile}
            download="Abdullah-Nasr-CV.pdf"
          />
        </footer>
      </div>
    </article>
  );
}

export default AboutPersonalInfo;
