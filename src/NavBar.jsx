import { useContext } from "react";
import { ThemeContext } from "./BackGround-Changer/BackGroundChanger";
import "./index.css";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMode = () => {
    toggleTheme();
  };
  return (
    <>
      <div className="container_nav">
        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleMode}
              checked={theme === "dark"}
            />
            <span>Theme : {theme}</span>
            {/* <span className="slider round"></span> */}
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
