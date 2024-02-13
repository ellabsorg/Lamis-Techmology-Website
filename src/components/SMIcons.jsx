import React from "react";
import { Link } from "react-router-dom";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SMIcons({ size }) {
  const iconsList = [
    { icon: faLinkedin, path: "https://dz.linkedin.com/company/techmology" },
    { icon: faFacebook, path: "https://www.facebook.com/techmlg" },
    { icon: faInstagram, path: "https://www.instagram.com/tech.mology/?hl=en" },
    {
      icon: faYoutube,
      path: "https://www.youtube.com/results?search_query=techmology",
    },
  ];
  return (
    <div className="icons">
      {iconsList.map((item, index) => (
        <Link to={item.path} target="_blank" key={index}>
          <FontAwesomeIcon className="icon" icon={item.icon} size={size} />
        </Link>
      ))}
    </div>
  );
}

export default SMIcons;
