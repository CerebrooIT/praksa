import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./Header.jsx";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
  </React.StrictMode>
);
