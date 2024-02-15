import React from "react";
import BluredHeroSection from "../components/Shared/Blured-Hero-Section/BluredHeroSection";
import { faCalendar, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./evenements.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Evenements() {
  const heroSection = {
    title: "Nos Evènements",
    text: "Organisation de manifestations scientifiques et culturelles!",
  };
  return (
    <div className="evenements-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />

      <div className="event-section">
        <div className="event-content">
          <div className="left">
            <h2 className="title">League Of Robotics - ALGERIA</h2>
            <div className="date-location">
              <div className="date">
                <FontAwesomeIcon icon={faCalendar} size="lg" />
                09 Octobre 2021
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faLocation} size="lg" />
                Palais de la culture Moufdi Zakaria
              </div>
            </div>
            <div className="decouvrire">
              <Link
                to="https://www.youtube.com/watch?v=_j_b5K6hmrQ"
                target="_blank"
              >
                <button>Découvrire</button>
              </Link>
              <div className="links">
                <Link to={"https://www.facebook.com/techmlg"} target="_blank">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFacebook}
                    size="xl"
                  />
                </Link>
                <Link
                  to={"https://www.instagram.com/tech.mology/?hl=en"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faInstagram}
                    size="xl"
                  />
                </Link>
              </div>
            </div>
            <div className="text">
              League Of Robotics est la première édition de la compétition
              nationale de la robotique, organisée par Techmology. LOR est une
              compétition qui s'articule autour de l'innovation dans le domaine
              de la robotique en Algérie, et qui a pour but de vulgariser les
              sciences technique et d'offrir diverses opportunités au étudiants
              et jeune diplômes, la compétition a réuni des participants
              talentueux venant des quartes coins de l'Algérie, qui ont conçue
              deux robots: un robot autonome et un autre téléguide.
            </div>
            <div className="statics">
              <button>
                <div className="number">600</div>
                <div className="text">Participants</div>
              </button>
              <button>
                <div className="number">260</div>
                <div className="text">Robots</div>
              </button>
              <button>
                <div className="number">39</div>
                <div className="text">Wilayas</div>
              </button>
            </div>
          </div>
          <div className="right">
            <img src="img/league-of-robotics.gif" />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="event-section">
        <div className="event-content">
          <div className="right">
            <img src="img/junction-x.gif" />
          </div>
          <div className="left">
            <h2 className="title">JunctionX Algiers</h2>
            <div className="date-location">
              <div className="date">
                <FontAwesomeIcon icon={faCalendar} size="lg" />
                16-18 Décembre 2021
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faLocation} size="lg" />
                HIS - Higher Institute of Sciences
              </div>
            </div>
            <div className="decouvrire">
              <Link to="https://www.youtube.com/" target="_blank">
                <button>Découvrire</button>
              </Link>
              <div className="links">
                <Link to={"https://www.facebook.com/techmlg"} target="_blank">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFacebook}
                    size="xl"
                  />
                </Link>
                <Link
                  to={"https://www.instagram.com/tech.mology/?hl=en"}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faInstagram}
                    size="xl"
                  />
                </Link>
              </div>
            </div>
            <div className="text">
              Junction est un hackathon de concept finlandais où les entreprises
              partenaires et sponsors proposent des problématiques réelles aux
              participants qui ont de 48h à 72h pour trouver des solutions aux
              problématiques proposées. Notre équipe, pour une première en
              Afrique, fièrement ramené ce concept en Algérie. 150 participants
              ont pu proposer leurs solutions aux différentes entreprises
              sponsors de l'événement.
            </div>
            <div className="statics">
              <button>
                <div className="number">300</div>
                <div className="text">Participants</div>
              </button>
              <button>
                <div className="number">45</div>
                <div className="text">Projets</div>
              </button>
              <button>
                <div className="number">6</div>
                <div className="text">Workshops</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evenements;
