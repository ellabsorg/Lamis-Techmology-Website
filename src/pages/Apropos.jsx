import React from "react";
import BluredHeroSection from "../components/Shared/Blured-Hero-Section/BluredHeroSection";

function Apropos() {
  const heroSection = {
    title: "Qui sommes-nous ?",
    text: "Réaliser des prestations de qualité et utiliser la science de manière efficace de façon à rendre le quotidien de chacun plus agréable",
  };
  return (
    <div className="aPropos-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />
    </div>
  );
}

export default Apropos;
