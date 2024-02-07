import React from "react";

import NavLinks from "./NavLinks";
import SMIcons from "./SMIcons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="section navbar">
      <div className=" container navbar-container">
        <Link to="/" className="logo">
          <img src="./img/techmology-black.png" alt="techmolgy" />
        </Link>
        <SMIcons size={"xl"} />
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
