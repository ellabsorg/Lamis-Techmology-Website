import React, { useState } from "react";
import { faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formations from "../constants/fomations";
import formation_mapper from "../constants/formation_mapper";
import FormationsSwiper from "../components/Formations/FormationsSwiper";
import { useParams } from "react-router-dom";
import "./formation-details.css";

function FormationDetails() {
  const { formation } = useParams();
  const data = formations[formation_mapper[formation]?.id - 1];

  const [show, setShow] = useState({});
  const toggleNiveau = (index) => {
    setShow((prevShow) => ({
      ...prevShow,
      [index]: !prevShow[index],
    }));
  };

  return data ? (
    <div className="content formation-details-content">
      <div className="container formation-details-container">
        <div className="left">
          <h1 className="title">{data?.title}</h1>
          {data?.description?.map((paragraph, index) => (
            <p className="text" key={index}>
              {paragraph}
            </p>
          ))}
          <button>S'inscrire</button>
        </div>
        {formation === "robotique" && (
          <div className="right">
            <FormationsSwiper slidesPerView={1} />
          </div>
        )}
      </div>
      <div className="container buts-container">
        <h1 className="title">Buts du formation</h1>
        <ul className="list">
          {data?.goals.map((item) => (
            <li key={item.id}>{item.goal}</li>
          ))}
        </ul>
      </div>
      {data?.multiple ? (
        <div className="container buts-container">
          <h1 className="title">Niveaux</h1>
          <div className="niveaux-container">
            {data?.levels?.map((level) => (
              <div className="niveau  " key={level.id}>
                <div
                  className="niveau-title"
                  onClick={() => toggleNiveau(level.id)}
                >
                  <FontAwesomeIcon
                    icon={!show[level.id] ? faCaretRight : faCaretUp}
                  />
                  <h4>{level.name}</h4>
                </div>
                {show[level.id] && (
                  <div className="niveau-details">
                    {level?.description && (
                      <div className="section">
                        <h2 className="section-title">
                          Descriptions de la formation:
                        </h2>
                        <p>{level.description}</p>
                      </div>
                    )}
                    {level?.details && (
                      <div className="section">
                        <h2 className="section-title">
                          Détailles de la formation:
                        </h2>
                        <ul className="section-list">
                          {level?.details?.map((item) => (
                            <li key={item.id}>{item.description}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="section">
                      {level?.description && (
                        <h2 className="section-title">
                          Programme de la formation:
                        </h2>
                      )}
                      <ul className="section-list">
                        {level?.programme?.map((item) => (
                          <li key={item.id}>
                            {item.description}
                            <ul>
                              {item?.subDescription?.map((subList) => (
                                <li key={item.id}>{subList.description}</li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container buts-container">
          <h1 className="title">Programme</h1>
          <div className="niveaux-container">
            {data?.programme?.map((item) => (
              <div className="niveau" key={item.id}>
                <li key={item.id}>
                  {item.description}
                  <ul>
                    {item?.subDescription?.map((subList) => (
                      <li key={item.id}>{subList.description}</li>
                    ))}
                  </ul>
                </li>
              </div>
            ))}
          </div>
        </div>
      )}
      {data?.details && (
        <div className=" container buts-container">
          <h2 className="title">Détailles de la formation:</h2>
          <ul className="section-list">
            {data?.details?.map((item) => (
              <li key={item.id}>{item.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : (
    window.location.replace("/404")
  );
}

export default FormationDetails;
