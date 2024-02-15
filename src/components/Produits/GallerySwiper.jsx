import React, { useEffect, useState } from "react";
import {
  faAngleLeft,
  faAngleRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./gallery-swiper.css";

function GallerySwiper({
  gallery,
  selectedImageId,
  setSelectedImageId,
  showGallerySwiper,
  setShowGallerySwiper,
  selectedImageSrc,
}) {
  const prevSlider = () => {
    if (selectedImageId > 0) {
      setSelectedImageId(selectedImageId - 1);
    }
  };

  const nextSlider = () => {
    if (selectedImageId <= gallery.length - 1) {
      setSelectedImageId(selectedImageId + 1);
    }
  };

  return (
    <div
      className={
        showGallerySwiper
          ? "gallery-Swiper-section active"
          : "gallery-Swiper-section"
      }
    >
      <div
        className={
          showGallerySwiper
            ? "gallery-Swiper-content active"
            : "gallery-Swiper-content"
        }
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2xl"
          className="left-arrow"
          onClick={() => prevSlider()}
          style={{ visibility: selectedImageId <= 0 && "hidden" }}
        />

        <img src={selectedImageSrc} />

        <FontAwesomeIcon
          icon={faAngleRight}
          size="2xl"
          className="right-arrow"
          onClick={() => nextSlider()}
          style={{
            visibility: selectedImageId >= gallery.length - 1 && "hidden",
          }}
        />

        {/* --------------------------- */}

        <FontAwesomeIcon
          icon={faClose}
          size="xl"
          className="hide-gallery-swiper"
          onClick={() => {
            setShowGallerySwiper(false);
          }}
        />
      </div>
    </div>
  );
}

export default GallerySwiper;
