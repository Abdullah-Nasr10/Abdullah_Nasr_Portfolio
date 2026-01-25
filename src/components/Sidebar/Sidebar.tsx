import {
  FaChevronRight,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import "./Sidebar.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { IoIosSunny } from "react-icons/io";
import { MdNightsStay } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <aside
      className={`sidebar position-fixed start-0 top-0 vh-100 ${isOpen ? "open" : ""}`}
      style={{ zIndex: 1000 }}
    >
      {/* ====================== Toggle Button ============================= */}
      <button
        className="toggle-btn center rounded-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaChevronRight />
      </button>
      {/* ====================== Profile Image and Name ===================== */}
      <header className="imgTitle">
        <img
          src="/MyPhoto.png"
          alt="Abdullah Nasr - Portfolio"
          className="profileImg"
        />
        {isOpen && <h1 className="nameTitle fs-5">Abdullah Nasr</h1>}
      </header>

      {/* ====================== Navigation Icons =========================== */}
      <nav aria-label="Main navigation">
        <ul className="nav-icons p-0 mt-5 d-flex flex-column gap-3">
          {/*  --------------Home-------------------  */}
          <li>
            <a
              href="#home"
              className="navigatePages"
              aria-label="Navigate to Home section"
            >
              <FaHome className="center" aria-hidden="true" />
              {isOpen && <span className="pageName">Home</span>}
            </a>
          </li>
          {/* --------------About me------------------- */}
          <li>
            <a
              href="#about"
              className="navigatePages"
              aria-label="Navigate to About me section"
            >
              <FaUser className="center" aria-hidden="true" />
              {isOpen && <span className="pageName">About me</span>}
            </a>
          </li>
          {/* --------------Projects------------------- */}
          <li>
            <a
              href="#projects"
              className="navigatePages"
              aria-label="Navigate to Projects section"
            >
              <FaProjectDiagram className="center" aria-hidden="true" />
              {isOpen && <span className="pageName">Projects</span>}
            </a>
          </li>
          {/* --------------Contact me------------------- */}
          <li>
            <a
              href="#contactMe"
              className="navigatePages"
              aria-label="Navigate to Contact me section"
            >
              <FaEnvelope className="center" aria-hidden="true" />
              {isOpen && <span className="pageName">Contact me</span>}
            </a>
          </li>
        </ul>
      </nav>
      {/* ======================== Toggle Theme ============================ */}
      <button
        className="toggle-theme center"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        type="button"
      >
        {isDarkMode ? (
          <IoIosSunny aria-hidden="true" />
        ) : (
          <MdNightsStay aria-hidden="true" />
        )}
      </button>
    </aside>
  );
}

export default Sidebar;
