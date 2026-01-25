import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="layout">
      {/* ========================== Sidebar ============================= */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* ========================== Overlay ============================= */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* ======================== Main Content ===========================*/}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
