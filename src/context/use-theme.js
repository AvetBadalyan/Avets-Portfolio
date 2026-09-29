import { createContext, useContext } from "react";

// The context object lives here (not in theme-context.jsx) so that the
// provider module only exports a component. That keeps React Fast Refresh
// working reliably — a module mixing component and non-component exports
// triggers the react-refresh/only-export-components warning.
export const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);
