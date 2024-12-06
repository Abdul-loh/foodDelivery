import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import admImage from "../../assets/profile_image.png";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="adminLOgo">
        <img src={logo} alt="" />
      </div>
      <div className="adminImage">
        <img src={admImage} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
