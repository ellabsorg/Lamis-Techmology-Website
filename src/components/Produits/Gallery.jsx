import React from "react";
import "./gallery.css";

function Gallery({ gallery, setSelectedImageId, setShowGallerySwiper }) {
  return (
    <div className="gallery">
      {gallery.map((image, index) => (
        <img
          key={index}
          className={`img${index + 1}`}
          src={image}
          onClick={() => {
            setSelectedImageId(index);
            setShowGallerySwiper(true);
          }}
        />
      ))}
    </div>
  );
}

export default Gallery;
