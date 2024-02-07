import React from "react";
import { Link } from "react-router-dom";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SMIcons from "./SMIcons";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-1">
          <div className="links-wrapper">
            <NavLinks showIcon={true} />
          </div>
        </div>
        <div className="footer-2">
          <h2 className="footer-title">FAISONS QUELQUE CHOSE DE GÉNIAL !</h2>
          <button className="footer-btn">Contactez-nous</button>
        </div>
        <div className="footer-3">
          <div className="logo">
            <img src="./img/techmology-white.png" alt="techmolgy" />
          </div>
          <h4>2022 © Techmology. Tous droits réservés.</h4>
          <SMIcons size={"2xl"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
