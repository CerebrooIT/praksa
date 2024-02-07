import React, { useState } from "react";
import "./Header.css";
import Logo from "./assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faXmark,
  faBars,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import navLinks from "./json/nav.json";
library.add(faFilePdf, faXmark, faBars, faClock);

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <nav>
        <div className="icon">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={isActive ? "active" : ""}>
          <div className="nav-divider">
            {navLinks.navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </div>
        </ul>
        <a className="download-btn" href="">
          <i>
            <FontAwesomeIcon icon={faFilePdf} />
          </i>
          download
        </a>
        <a className="toggle-nav" onClick={toggleNav}>
          <i>
            {isActive ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </i>
        </a>
      </nav>
      <div className="nav-underline-header">
        <div className="nav-time">
          <span>
            <i>
              <FontAwesomeIcon icon={faClock} />
            </i>
            Opentime:
          </span>
          <span>Di.-Fr.:07:00-13:00 und 15:00-18:30. Sa.:07:30-12:30</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
