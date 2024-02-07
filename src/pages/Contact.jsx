import React from "react";
import BluredHeroSection from "../components/BluredHeroSection";

function Contact() {
  const heroSection = {
    title: "Toujours a votre écoute",
    text: "",
  };
  return (
    <div className="contact-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />
    </div>
  );
}

export default Contact;
