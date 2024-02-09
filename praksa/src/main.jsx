import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./Header/Header.jsx";
import SectionOne from "./SectionOne/SectionOne.jsx";
import SectionTwo from "./SectionTwo/SectionTwo.jsx";
import SectionThree from "./SectionThree/SectionThree.jsx";
import SectionFour from "./SectionFour/SectionFour.jsx";
import SectionFive from "./SectionFive/SectionFive.jsx";
import SectionSix from "./SectionSix/SectionSix.jsx";
import SectionSeven from "./SectionSeven/SectionSeven.jsx";
import Footer from "./Footer/Footer.jsx";
import Popup from "./Popup/PopUp.jsx";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {" "}
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
    </ThemeProvider>
  </React.StrictMode>
);
