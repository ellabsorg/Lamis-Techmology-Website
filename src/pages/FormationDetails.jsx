import React, { useState } from "react";
import { faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formations from "../constants/fomations";
import formation_mapper from "../constants/formation_mapper";
import FormationsSwiper from "../components/FormationsSwiper";
import { useParams } from "react-router-dom";

function FormationDetails() {
  const { category, formation } = useParams();

  const data = formations[category][formation_mapper[formation].id - 1];
  console.log("data = ", data);

  const [show, setShow] = useState({});
  const toggleNiveau = (index) => {
    setShow((prevShow) => ({
      ...prevShow,
      [index]: !prevShow[index],
    }));
  };

  return (
    <div className="content formation-details-content">
      <div className="container formation-details-container">
        <div className="left">
          <h1 className="title">{data?.title}</h1>
          {data?.text?.map((paragraph, index) => (
            <p className="text" key={index}>
              {paragraph}
            </p>
          ))}
          <button>S'inscrire</button>
        </div>
        <div className="right">
          <FormationsSwiper slidesPerView={1} />
        </div>
      </div>
      <div className="buts-container">
        <h1 className="title">Buts du formation</h1>
        <ul className="list">
          {data?.buts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="buts-container">
        <h1 className="title">Niveaux</h1>
        <div className="niveaux-container">
          {data?.niveaux?.map((niveau, index) => (
            <div className="niveau" key={index}>
              <div className="niveau-title" onClick={() => toggleNiveau(index)}>
                <FontAwesomeIcon
                  icon={!show[index] ? faCaretRight : faCaretUp}
                />
                <h4>{niveau.title}</h4>
              </div>
              {show[index] && (
                <div className="niveau-details">
                  {niveau?.sections?.map((section, subIndex) => (
                    <div key={subIndex} className="section">
                      <h2 className="section-title">{section.title}</h2>
                      <p>{section.text}</p>
                      <ul className="section-list">
                        {section?.list?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormationDetails;
