import React from "react";
import BluredHeroSection from "../components/BluredHeroSection";

function Evenements() {
  const heroSection = {
    title: "Nos Evènements",
    text: "Organisation de manifestations scientifiques et culturelles!",
  };
  return (
    <div className="evenements-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />
    </div>
  );
}

export default Evenements;
