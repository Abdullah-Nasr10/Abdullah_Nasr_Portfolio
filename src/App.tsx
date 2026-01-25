import { useState, useEffect } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <AppRoutes />
    </ThemeContext.Provider>
  );
}

export default App;

/*
<div className={isDarkMode ? 'bg-dark text-white min-vh-100' : 'bg-light text-dark min-vh-100'}>
        <div className="container py-5">
          <h1 className="text-center mt-5 text-danger">Welcome to React with TypeScript and Bootstrap!</h1>
        </div>
      </div>
*/
