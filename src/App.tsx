import { useState, useEffect } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // Default to dark
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <AppRoutes />
    </ThemeContext.Provider>
  );
}

export default App;
