import React from "react";
import "./buttons.css";

function Button({ color, text }) {
  return (
    <a className={color} href="#">
      {text}
    </a>
  );
}

export default Button;
