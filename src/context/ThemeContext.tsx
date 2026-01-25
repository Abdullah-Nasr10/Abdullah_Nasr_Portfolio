// src/context/ThemeContext.ts
import { createContext } from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export default ThemeContext;


// import { createContext } from "react";

// const ThemeContext = createContext(false);
// export default ThemeContext;