import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function FeedniSwiper() {
  const links = [
    "https://www.youtube.com/embed/qPPEb9YAJco?si=DPKVR17haRYvcVnM",
    "https://www.youtube.com/embed/xSNuJ85tXKs?si=7RSOgUQhb2QedvCa",
    "https://www.youtube.com/embed/ji2cHFCmY5A?si=GxPtnVznvIxui0hp",
    "https://www.youtube.com/embed/pafXpcfxztg?si=UjiEt9PZwWMwvH0v",
    "https://www.youtube.com/embed/41EBkJJx8pk?si=ED-oUMSVC2X5kJc0",
    "https://www.youtube.com/embed/cSQ3Eakgp44?si=f6-klNfBzmofsQSP",
  ];

  return (
    <div className="videos">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop
        className="feedniSwiper"
      >
        {links.map((link, index) => (
          <SwiperSlide className="slider" key={index}>
            <iframe
              src={link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeedniSwiper;
