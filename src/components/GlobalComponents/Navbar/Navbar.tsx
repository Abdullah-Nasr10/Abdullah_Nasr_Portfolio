import { useEffect, useState } from "react";
import "./Navbar.css";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
interface NavbarProps {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}
function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="flex-grow-1 d-flex flex-column justify-content-center"
    >
      <ul className="nav-icons p-0 m-0 d-flex flex-column gap-3">
        {/*  --------------Home-------------------  */}
        <li>
          <a
            href="#home"
            className={`navigatePages center gap-3 p-3 mx-1 ${activeSection === "home" ? "active" : ""}`}
            onClick={() => setIsOpen && setIsOpen(false)}
            aria-label="Navigate to Home section"
          >
            <FaHome aria-hidden="true" />
            {isOpen && <span className="pageName">Home</span>}
          </a>
        </li>
        {/* --------------About me------------------- */}
        <li>
          <a
            href="#about"
            onClick={() => setIsOpen && setIsOpen(false)}
            className={`navigatePages center gap-3 p-3 mx-1 ${activeSection === "about" ? "active" : ""}`}
            aria-label="Navigate to About me section"
          >
            <FaUser aria-hidden="true" />
            {isOpen && <span className="pageName">About me</span>}
          </a>
        </li>
        {/* --------------Projects------------------- */}
        <li>
          <a
            href="#projects"
            onClick={() => setIsOpen && setIsOpen(false)}
            className={`navigatePages center gap-3 p-3 mx-1 ${activeSection === "projects" ? "active" : ""}`}
            aria-label="Navigate to Projects section"
          >
            <FaProjectDiagram aria-hidden="true" />
            {isOpen && <span className="pageName">Projects</span>}
          </a>
        </li>
        {/* --------------Contact me------------------- */}
        <li>
          <a
            href="#contact"
            onClick={() => setIsOpen && setIsOpen(false)}
            className={`navigatePages center gap-3 p-3 mx-1 ${activeSection === "contact" ? "active" : ""}`}
            aria-label="Navigate to Contact me section"
          >
            <FaEnvelope aria-hidden="true" />
            {isOpen && <span className="pageName">Contact me</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
