import { useEffect, useState } from "react";
import { ThemeContext } from "./use-theme";

export const ThemeProvider = ({ children }) => {
  // Default to dark mode when the user has no saved preference.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const themeClass = isDarkMode ? "bg-2" : "bg-1";

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};
