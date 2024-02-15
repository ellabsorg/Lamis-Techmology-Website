import React from "react";
import BluredHeroSection from "../components/Shared/Blured-Hero-Section/BluredHeroSection";
import {
  faHandshake,
  faMessage,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormatiosLinks from "../components/Formations/FormatiosLinks";
import FormationsForm from "../components/Formations/FormationsForm";
import FormationsSwiper from "../components/Formations/FormationsSwiper";
import "./formations.css";

function Formations() {
  const heroSection = {
    title: "Nos Formations",
    text: "Nous sommes convaincus de l'importance du partage des connaissances. C'est pour cela que nous formons des jeunes motivés pour les aider à acquérir de nouvelles compétences qui leur permettront d'exceller dans leur vie professionnelle et de se construire un meilleur avenir.",
  };

  const whyUs = [
    {
      title: "Contenu riche",
      text: "Notre programme est conçu pour vous donner toutes les connaissances et le bagage nécessaires pour améliorer vos compétences techniques ainsi que vos soft skills, ce qui vous permet de réussir dans votre vie professionnelle.",
      icon: faRocket,
    },
    {
      title: "Formation interactif",
      text: "Nous croyons en l'apprentissage par la pratique. Toutes nos formations sont interactives et riches en mini-projets pour s'assurer que vous acquerrez toutes les compétences pratiques nécessaires, pour vous donner la chance de créer vos propres projets et pour assurer que vous serez bien capable de réaliser vos propres idées par la suite.",
      icon: faMessage,
    },
    {
      title: "Instructeurs qualifiés",
      text: "Nos formateurs sont des individus expérimentés et exceptionnellement talentueux qui non seulement vont vous donner toutes les compétences nécessaires pour accélérer votre carrière professionnelle, mais qui sont également très aimables et vont garantir que vous vous amuserez en apprenant.",
      icon: faHandshake,
    },
  ];

  return (
    <div className="formations-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />
      <FormatiosLinks />
      <div className="swiper-section">
        <div className="swiper-content">
          <FormationsSwiper slidesPerView={3} />
        </div>
      </div>

      <div className="whyUs-section">
        <div className="whyUs-content">
          <h1 className="title">POURQOUI NOUS!</h1>
          {whyUs.map((item, index) => (
            <div className="why" key={index}>
              <div className="why-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              <div className="why-content">
                <h1 className="title">{item.title}</h1>
                <p className="text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-location-section">
        <div className="contact-location-content">
          <div className="contact">
            <div className="title">contact rapide</div>
            <FormationsForm />
          </div>
          <div className="location">
            <div className="title">localisation</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d86034.65410257108!2d3.4309139571960765!3d36.73980257222857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5305531cebfb%3A0x748f95878587df15!2zVGVjaG1vbG9neSDYqtmK2YPZhdmI2YTZiNis2YrYpw!5e0!3m2!1sfr!2sus!4v1707320414413!5m2!1sfr!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formations;
