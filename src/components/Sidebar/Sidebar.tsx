import { FaBars, FaChevronRight } from "react-icons/fa";
import "./Sidebar.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { IoIosSunny } from "react-icons/io";
import { MdNightsStay } from "react-icons/md";
import Navbar from "../GlobalComponents/Navbar/Navbar";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <aside
        className={`sidebar position-fixed start-0 top-0 vh-100 d-flex flex-column ${isOpen ? "open" : ""}`}
        style={{ zIndex: 1000 }}
      >
        {/* ====================== Toggle Button ============================= */}
        <button
          className="toggle-btn center rounded-circle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaChevronRight
            className="OpenSidebarIcon"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>

        {/* ====================== Profile Image and Name ===================== */}
        <header className="imgTitle d-flex flex-column align-items-center gap-2 px-2 pb-3">
          <div className="profileImg rounded-circle overflow-hidden">
            <img src="/MyPhoto.png" alt="Abdullah Nasr - Portfolio" />
          </div>
          {isOpen && (
            <h1 className="nameTitle fs-2 m-0 text-center">Abdullah Nasr</h1>
          )}
        </header>

        {/* ====================== Navigation Icons =========================== */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* ======================== Toggle Theme ============================ */}
        <button
          className="toggle-theme center rounded-circle my-3 mx-auto"
          onClick={toggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          type="button"
        >
          {isDarkMode ? (
            <IoIosSunny aria-hidden="true" />
          ) : (
            <MdNightsStay aria-hidden="true" />
          )}
        </button>
      </aside>
      {/* ====================== Mobile Toggle Button ====================== */}

      {isOpen || (
        <button
          className="mobile-toggle d-md-none d-flex justify-content-center align-items-center rounded-4"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      )}
    </>
  );
}

export default Sidebar;
