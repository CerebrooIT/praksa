import React from "react";
import "./Footer.css";
import FooterLogo from "./assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faLocationDot,
  faPhone,
  faEnvelope,
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube
);

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-child contact">
          <div className="contact-container">
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              Klauprechtstraße 25
            </p>
            <p className="moved">76137 Karlsruhe, Germany</p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              +49 721 358060
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              info@partyservice-brath.de
            </p>
          </div>
        </div>
        <div className="footer-child logo">
          <img src={FooterLogo} alt="footer-icon" />
        </div>
        <div className="footer-child social">
          <p>Besuchen Sie uns auf:</p>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="nav-underline-footer">
        <div className="nav-underline-footer-div">
          <p>© 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
          <p></p>
          <p>
            Code and design by <span>StudioPresent</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
