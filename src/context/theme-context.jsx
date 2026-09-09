import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";
import {
  backgroundColorClassNames,
  defaultThemeState,
  primaryColorClassNames,
} from "../theme/data";

export const ThemeContext = createContext();

const sanitizeThemeState = (themeState) => ({
  primary: primaryColorClassNames.includes(themeState?.primary)
    ? themeState.primary
    : defaultThemeState.primary,
  background: backgroundColorClassNames.includes(themeState?.background)
    ? themeState.background
    : defaultThemeState.background,
});

const getStoredThemeState = () => {
  try {
    return JSON.parse(localStorage.getItem("themeSettings"));
  } catch {
    return null;
  }
};

// get theme settings from local storage, or use the curated default theme
const initialThemeState = sanitizeThemeState(getStoredThemeState());

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  // save theme settings to local storage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("themeSettings", JSON.stringify(themeState));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [themeState.primary, themeState.background, themeState]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook to use our theme context wherever we want in our project
export const useTheme = () => {
  return useContext(ThemeContext);
};
