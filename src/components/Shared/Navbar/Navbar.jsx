import React from "react";
import NavLinks from "../Navigation-Links/NavigationLinks";
import SMIcons from "../Social-Media-Icons/SocialMediaIcons";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="./img/techmology-black.png" alt="techmolgy" />
        </Link>
        <SMIcons size={"xl"} />
        <NavLinks showIcon={false} />
      </div>
    </div>
  );
}

export default Navbar;
