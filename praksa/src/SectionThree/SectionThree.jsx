import React from "react";
import "./SectionThree.css";
import ThirdPageImg from "../assets/third-hrana.jpg";
import spanData from "../json/text.json";
import Buttons from "../buttons/buttons";

function SectionThree() {
  return (
    <>
      <div className="third-page">
        <div className="left-half">
          <div className="text-container">
            <h2>Buchen Sie den</h2>
            <h2>Grillkurs jetzt</h2>
            <div className="left-half-spans">
              {spanData.spans.map((span, index) => (
                <span key={index}>{span}</span>
              ))}
            </div>
            <div className="button-container">
              <Buttons color="white" text="Grillkus"></Buttons>
            </div>
          </div>
        </div>
        <div className="right-half">
          <img src={ThirdPageImg} alt="Third Page Image" />
        </div>
      </div>
    </>
  );
}

export default SectionThree;
