import React, { useState } from "react";
import BluredHeroSection from "../components/Shared/Blured-Hero-Section/BluredHeroSection";
import Gallery from "../components/Produits/Gallery";
import GallerySwiper from "../components/Produits/GallerySwiper";

function Produits() {
  const heroSection = {
    title: "Nos Produits",
    text: "",
  };

  const galleryImages = [
    "/img/Photo-Mobot-1.jpg",
    "/img/Photo-Mobot-2.jpg",
    "/img/Photo-Mobot-3.jpg",
    "/img/Photo-Mobot-4.jpg",
    "/img/Photo-Mobot-5.jpg",
  ];

  const [selectedImageId, setSelectedImageId] = useState(0);
  const [showGallerySwiper, setShowGallerySwiper] = useState(false);

  return (
    <div className="produits-content">
      <BluredHeroSection title={heroSection.title} text={heroSection.text} />
      <div className="mobot-section">
        <div className="mobot-content">
          <div className="left">
            <img src="/img/MOBOT-logo.jpg" />
          </div>
          <div className="right">
            <div className="title">MoBot</div>
            <div className="text">
              MoBot est une série de kit de robotique gradué par niveau de
              complexité dédie aux petits comme aux grands développé et produits
              en Algérie. Ils ont comme objectif de faire voyager leurs chanceux
              détenteurs dans le vaste domaine de la robotique tout en leurs
              apprenant les différentes notions nécessaires pour chaque kit a
              travers des playlists de vidéos.
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="left">
            <div className="title">MoBot-1</div>
            <div className="text">
              Un kit de robot suiveur de ligne pour débutant sans programmation.
              Avec ses formations et tutoriels inclus, ce kit va vous permettre
              d'apprendre facilement son principe de fonctionnement ainsi que
              les connaissances en physiques, mécaniques et électroniques
              requises pour le faire fonctionner. Amusez-vous en construisant le
              MoBot et commencez votre exploration dans le monde de la
              robotique!
            </div>
            <Gallery
              gallery={galleryImages}
              setSelectedImageId={setSelectedImageId}
              setShowGallerySwiper={setShowGallerySwiper}
            />
          </div>
          <div className="right">
            <iframe
              src="https://www.youtube.com/embed/khtyy3sG8I0?si=VghNJZu3qPPBZD-o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <GallerySwiper
        gallery={galleryImages}
        setSelectedImageId={setSelectedImageId}
        selectedImageId={selectedImageId}
        showGallerySwiper={showGallerySwiper}
        setShowGallerySwiper={setShowGallerySwiper}
        selectedImageSrc={galleryImages[selectedImageId]}
      />
    </div>
  );
}

export default Produits;
