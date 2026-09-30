import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./use-theme";

// Matches --duration-theme in index.scss (the theme color-swap window).
const THEME_TRANSITION_MS = 200;

export const ThemeProvider = ({ children }) => {
  // Default to dark mode when the user has no saved preference.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // True only during the brief window right after a toggle. While true, the
  // page suppresses backdrop-filter recompositing (see .theme-changing in
  // index.scss) so the GPU only handles the color swap — this is what makes
  // the toggle smooth on mid-range mobile devices instead of stuttering as
  // ~10 blurred glass surfaces all recomposite in the same frame.
  const [isThemeChanging, setIsThemeChanging] = useState(false);
  const timerRef = useRef(null);

  const toggleTheme = useCallback(() => {
    setIsThemeChanging(true);
    setIsDarkMode((prev) => !prev);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => setIsThemeChanging(false),
      THEME_TRANSITION_MS,
    );
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const themeClass = `${isDarkMode ? "bg-2" : "bg-1"}${
    isThemeChanging ? " theme-changing" : ""
  }`;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};
