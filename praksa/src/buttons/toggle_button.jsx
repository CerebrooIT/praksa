import React from "react";
import { useTheme } from "../ThemeContext";
import "./toggle_button.css";

function ToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}

export default ToggleButton;
