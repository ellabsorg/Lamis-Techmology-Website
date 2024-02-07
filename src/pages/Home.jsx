import React from "react";
import { faBox, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import FeedniSwiper from "../components/FeedniSwiper";
import PartnersSwiper from "../components/PartnersSwiper";
import { Link } from "react-router-dom";

function Home() {
  const heroSectionIcons = [
    { icon: faGraduationCap, name: "formations" },
    { icon: faBox, name: "produits" },
    { icon: faCalendarCheck, name: "evenement" },
  ];
  return (
    <div className="content home-content">
      <div className=" section hero-section">
        <div className="container hero-content">
          <div className="box"></div>
          <div className="title">
            The <br /> Effective <br />
            Science.
          </div>
        </div>
      </div>
      <div className="container action-btns">
        {heroSectionIcons.map((item, index) => (
          <Link to={item.name}  key={index}>
            <button className="action-btn">
              <FontAwesomeIcon icon={item.icon} size="2xl" /> {item.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="section feedni-section">
        <div className="container feedni-content">
          <div className="left">
            <h2 className="title">Feedni</h2>
            <p className="text">a journey of knowledge</p>
          </div>
          <div className="right">
            <div className="title">Feedni</div>
            <div className="text">
              Un voyage de connaissances sous forme de série vidéos dans lequel
              nous abordons une thématique différente pour chaque épisode avec
              nos aimables invités. Son but est de vulgariser cette thématique
              afin de la rendre plus accessible et plus simplifiée pour le grand
              publique.
            </div>
            <FeedniSwiper />
          </div>
        </div>
      </div>
      <div className="partners-section">
        <div className="partners-content">
          <h2 className="title">Nos partenaires</h2>
          <PartnersSwiper />
        </div>
      </div>
    </div>
  );
}

export default Home;
