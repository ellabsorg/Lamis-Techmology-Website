import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./navigation-links.css";

function NavigationLinks({ showIcon }) {
  const links = [
    { name: "accueil", path: "/" },
    { name: "à propos", path: "/a-propos" },
    { name: "formations", path: "/formations" },
    { name: "produits", path: "/produits" },
    { name: "évenements", path: "/evenements" },
    { name: "contact", path: "/contact" },
  ];
  return (
    <div className="links">
      {links.map((link, index) => (
        <Link to={link.path} key={index} className="link">
          {showIcon && <FontAwesomeIcon icon={faCaretRight} />}
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavigationLinks;
