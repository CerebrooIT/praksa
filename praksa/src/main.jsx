import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./Header.jsx";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";
import SectionThree from "./SectionThree.jsx";
import SectionFour from "./SectionFour.jsx";
import SectionFive from "./SectionFive.jsx";
import SectionSix from "./SectionSix.jsx";
import SectionSeven from "./SectionSeven.jsx";
import Footer from "./Footer.jsx";
import Popup from "./PopUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
    <SectionFour></SectionFour>
    <SectionFive></SectionFive>
    <SectionSix></SectionSix>
    <SectionSeven></SectionSeven>
    <Footer></Footer>
    <Popup></Popup>
  </React.StrictMode>
);
