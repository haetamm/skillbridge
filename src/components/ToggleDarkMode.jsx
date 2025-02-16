import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleDarkMode = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <>
      <div className="toggle">
        <div onClick={toggleTheme} className="cursor-pointer ">
          {theme === "dark" ? (
            <FaSun className="icon" />
          ) : (
            <FaMoon className="icon" />
          )}
        </div>
      </div>
    </>
  );
};

export default ToggleDarkMode;
