import { useEffect, useState } from "react";
import { ThemeContext } from "./use-theme";

export const ThemeProvider = ({ children }) => {
  // Resolve the initial theme with the same precedence as the pre-paint script
  // in index.html, so React's first render matches what the browser already
  // painted (no flash / mismatch):
  //   1. explicit saved choice  2. OS prefers-color-scheme  3. dark default
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved === "true" || saved === "false") {
        return saved === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Persist the explicit choice and keep <html data-theme> in sync so the
  // pre-paint script reads the right value on the next load. Writing it here
  // (not just in the inline script) covers in-session toggles.
  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    try {
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [isDarkMode]);

  const themeClass = isDarkMode ? "bg-2" : "bg-1";

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};
