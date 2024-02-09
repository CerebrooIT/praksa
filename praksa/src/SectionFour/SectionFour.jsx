import React from "react";
import { useTheme } from "../ThemeContext";
import "../Theme/light_dark.css";
import "./SectionFour.css";
import Logo from "../assets/Group.svg";
import Text from "../json/text.json";
import Images from "../json/images.json";
import Buttons from "../buttons/buttons.jsx";

function SectionFour() {
  const { isDarkMode } = useTheme();
  return (
    <div className="forth-page">
      <div
        className={
          isDarkMode ? "light-mode trecina-prva" : "dark-mode trecina-prva"
        }
      >
        <div className="text-container">
          <h2>Das Handwerk</h2>
          <h3>alles über unsere Hausgemachte Produkte</h3>
          {Text.contents_section_four.map((item, index) => (
            <p key={index}>{item.content}</p>
          ))}
          <div className="button-container">
            <Buttons color="red" text="Das Hendwerk"></Buttons>
          </div>
          <hr className="line" />
          <div className="image-container">
            <img className="centered-image" src={Logo} alt="Your Image" />
          </div>
        </div>
      </div>
      <div
        className={
          isDarkMode
            ? "light-mode trecina-druga image-container"
            : "dark-mode trecina-druga image-container"
        }
      >
        <div className="small-images-f">
          {Images.images.map((image, index) => (
            <div className="container-overpicture-text" key={index}>
              <img src={image.src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
