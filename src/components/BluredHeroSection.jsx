import React from "react";

function BluredHeroSection({ title, text }) {
  return (
    <div className="section blured-hero-section">
      <div className="container blured-hero-content">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default BluredHeroSection;
