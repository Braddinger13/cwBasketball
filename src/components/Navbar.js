import React from "react";
import "../style/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  //state of navbar scroll
  const [background, setBackground] = useState("transparent");

  const changeColor = () => {
    //checks pixel count on verticle scroll
    if (window.scrollY >= 60) {
      //transparent
      setBackground("#032f38");
    } else {
      //solid
      setBackground("transparent");
    }
  };

  const hover = () => {
    setBackground("#032f38");
  };

  useEffect(() => {
    //scroll event listener
    window.addEventListener("scroll", changeColor);
  });

  return (
    <div id="nav">
      {/* Make on hover and scorll */}
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        style={{ backgroundColor: background }}
        onMouseOver={hover}
      >
        <div className="container">
          <a href="/#" className="navbar-brand" style={{ color: "orange" }}>
            CW Basketball
          </a>
          <div className="navLinks me-2">
            <a href="https://www.instagram.com/cwbasketball_" target='_blank' rel="noreferrer">
              <span className="h2 bi bi-instagram mx-2"></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
