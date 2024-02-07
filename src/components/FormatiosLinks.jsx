import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormatiosLinks() {
  const links = [
    {
      name: "kids",
      path: "/kids",
      dropDown: [
        {
          name: "robotique",
          to: "/robotique",
        },
        {
          name: "Programmation Intelligence Artificielle",
          to: "/programmation-intelligence-artificielle",
        },
        {
          name: "Sciences et Chimie",
          to: "/sciences-et-chimie",
        },
      ],
    },
    {
      name: "robotique & electronique",
      path: "/robotique-electronique",
      dropDown: [
        {
          name: "arduino",
          to: "/arduino",
        },
        {
          name: "IOT",
          to: "/IOT",
        },
        {
          name: "PCB",
          to: "/PCB",
        },
      ],
    },
    {
      name: "programmation",
      path: "/programmation",
      dropDown: [
        {
          name: "C++",
          to: "/C++",
        },
        {
          name: "Programmation Oriente Objet",
          to: "/programmation-oriente-objet",
        },
      ],
    },
    {
      name: "développement software",
      path: "/developpement-software",
      dropDown: [
        {
          name: "Développement Web",
          to: "/développement-web",
        },
      ],
    },
    { name: "design", path: "/", dropDown: [] },
    {
      name: "soft skills",
      path: "/soft-skills",
      dropDown: [
        {
          name: "digital marketing",
          to: "/digital-marketing",
        },
      ],
    },
    { name: "training for trainers", path: "/", dropDown: [] },
  ];
  const [showDropDown, setShowDropDown] = useState({});

  return (
    <div className="links">
      {links.map((link, index) => (
        <div key={index} className="link">
          <div
            className="link-title"
            onMouseEnter={() =>
              setShowDropDown({ ...showDropDown, [index]: true })
            }
            onMouseLeave={() =>
              setShowDropDown({ ...showDropDown, [index]: false })
            }
          >
            {link.name}
            {!!link.dropDown.length && <FontAwesomeIcon icon={faCaretDown} />}
          </div>

          {!!link.dropDown.length && showDropDown[index] && (
            <div
              className="dropDown"
              onMouseEnter={() =>
                setShowDropDown({ ...showDropDown, [index]: true })
              }
              onMouseLeave={() =>
                setShowDropDown({ ...showDropDown, [index]: false })
              }
            >
              {link.dropDown.map((item, index) => (
                <Link to={`/formations${link.path + item.to}`} key={index}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormatiosLinks;
