import React from "react";
import "./SectionFour.css";
import Logo from "./assets/Group.svg";
import ImageData from "./json/fourth.json";

function SectionFour() {
  return (
    <div className="forth-page">
      <div className="trecina-prva">
        <div className="text-container">
          <h2>Das Handwerk</h2>
          <h3>alles über unsere Hausgemachte Produkte</h3>
          <p>
            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
            Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
            veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat.
          </p>
          <p>
            Wiener Schnitzel aute irure dolor in Guten Tag mollit anim
            Stuttgart.
          </p>
          <p>
            id latine indoctum complectitur HugoClub Mate mea meliore denique
            nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
            assentior
          </p>
          <div className="button-container">
            <a href="#">Das Handwerk</a>
          </div>
          <hr className="line" />
          <div className="image-container">
            <img src={Logo} alt="Your Image" className="centered-image" />
          </div>
        </div>
      </div>
      <div className="trecina-druga image-container">
        <div className="small-images-f">
          {ImageData.images.map((image, index) => (
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
