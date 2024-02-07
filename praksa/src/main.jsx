import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./Header.jsx";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";
import SectionThree from "./SectionThree.jsx";
import SectionFour from "./SectionFour.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
    <SectionFour></SectionFour>
  </React.StrictMode>
);
