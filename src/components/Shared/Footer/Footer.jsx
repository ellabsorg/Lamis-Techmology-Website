import React from "react";
import SMIcons from "../Social-Media-Icons/SocialMediaIcons";
import NavLinks from "../Navigation-Links/NavigationLinks";
import "./footer.css";

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
