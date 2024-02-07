import React from "react";
import "./SectionTwo.css";
import BigImg from "./assets/hrana1.jpg";
import SmlImg1 from "./assets/hrana2.jpg";
import SmlImg2 from "./assets/hrana3.jpg";
import SmlImg3 from "./assets/hrana4.jpg";

function SectionTwo() {
  return (
    <div className="second-page">
      <div className="second-page-child text">
        <div className="second-page-text-container">
          <h1>Dry aged</h1>
          <h2>Alte Wutz, Dry Aged</h2>
          <p>
            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
            Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
            veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
            Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
            Stuttgart.
          </p>
          <p>
            id latine indoctum complectitur HugoClub Mate mea meliore denique
            nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
            assentior.
          </p>
          <div className="button-container">
            <a href="">Dry aged</a>
            <a href="">Alte Wurtz</a>
          </div>
        </div>
      </div>
      <div className="second-page-child">
        <div className="second-page-images">
          <div className="big-image">
            <img src={BigImg} alt="Big image" />
          </div>
          <div className="small-images-container">
            <img src={SmlImg1} alt="Small image 1" />
            <img src={SmlImg2} alt="Small image 2" />
            <img src={SmlImg3} alt="Small image 3" />
          </div>
        </div>
      </div>
      <div className="second-page-child hide-on-big">
        <div className="second-page-text-container">
          <div className="text-container">
            <h1>Heiko Brath</h1>
            <h1>Metzgermeister</h1>
            <p>
              Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
              Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne,
              nam Aperol Spritz probatus pertinax.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
