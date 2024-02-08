import React, { useState, useEffect } from "react";
import "./PopUp.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPopup(true);
      document.body.classList.add("no-scroll");
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClosePopup = () => {
    document.body.classList.remove("no-scroll");
    setShowPopup(false);
  };

  return (
    <div className={`popup ${showPopup ? "show" : ""}`}>
      <div className="popup-content">
        <span className="close" onClick={handleClosePopup}>
          &times;
        </span>
        <h2>Welcome to our website!</h2>
      </div>
    </div>
  );
};

export default Popup;
