import React from "react";
import BluredHeroSection from "../components/Shared/Blured-Hero-Section/BluredHeroSection";
import ContactForm from "../components/Contact/ContactForm";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";

function Contact() {
  const heroSection = {
    title: "Toujours a votre écoute",
    text: "",
  };

  const social = [
    {
      id: 0,
      icon: faLocationDot,
      text: "Rue B18 El djeniena Ilot 79 El Mohammadia.",
    },
    {
      id: 1,
      icon: faEnvelope,
      text: "contact@techmology-dz.com",
    },
    {
      id: 2,
      icon: faPhone,
      text: "+(213) 780-264-008",
    },
    {
      id: 3,
      icon: faPersonWalking,
      text: "Dimanche - Jeudi / 8h30 - 16h30",
    },
  ];

  return (
    <div className="contact-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />
      <div className="contact-social-section">
        <div className="contact-social-content">
          <div className="contact">
            <div className="title">Contactez-nous</div>
            <ContactForm />
          </div>
          <div className="social">
            <div className="title">Notre siege social</div>
            <div className="contacts">
              {social.map((item) => (
                <div className="contact" key={item.id}>
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="location-section">
        <div className="location-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d86034.65410257108!2d3.4309139571960765!3d36.73980257222857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5305531cebfb%3A0x748f95878587df15!2zVGVjaG1vbG9neSDYqtmK2YPZhdmI2YTZiNis2YrYpw!5e0!3m2!1sfr!2sus!4v1707320414413!5m2!1sfr!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
