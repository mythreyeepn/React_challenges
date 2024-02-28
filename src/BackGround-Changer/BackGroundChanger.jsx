import { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext();

const BackGroundChanger = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const theme = darkMode ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, BackGroundChanger };
