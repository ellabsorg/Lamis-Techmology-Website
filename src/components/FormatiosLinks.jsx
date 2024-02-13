import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormatiosLinks() {
  const links = [
    {
      label: "kids",
      dropDown: [
        {
          label: "robotique",
          path: "/robotique",
        },
        {
          label: "Programmation Intelligence Artificielle",
          path: "/programmation-intelligence-artificielle",
        },
        {
          label: "Sciences et Chimie",
          path: "/sciences-et-chimie",
        },
      ],
    },
    {
      label: "robotique & electronique",
      dropDown: [
        {
          label: "arduino",
          path: "/arduino",
        },
        {
          label: "IOT",
          path: "/IOT",
        },
        {
          label: "PCB",
          path: "/PCB",
        },
      ],
    },
    {
      label: "programmation",
      dropDown: [
        {
          label: "C++",
          path: "/C++",
        },
        {
          label: "Programmation Oriente Objet",
          path: "/programmation-oriente-objet",
        },
      ],
    },
    {
      label: "développement software",
      dropDown: [
        {
          label: "Développement Web",
          path: "/développement-web",
        },
      ],
    },
    { label: "design", path: "/", dropDown: [] },
    {
      label: "soft skills",
      dropDown: [
        {
          label: "digital marketing",
          path: "/digital-marketing",
        },
      ],
    },
    { label: "training for trainers", path: "/", dropDown: [] },
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
            {link.label}
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
                <Link to={`/formations${item.path}`} key={index}>
                  {item.label}
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
