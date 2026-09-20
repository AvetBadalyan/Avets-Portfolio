import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check localStorage or default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    // Default to dark mode if no preference saved
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Save preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Generate theme class for main element
  const themeClass = isDarkMode ? "bg-2" : "bg-1";

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
