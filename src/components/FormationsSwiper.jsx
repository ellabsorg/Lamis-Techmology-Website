import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function FormationsSwiper({ slidesPerView }) {
  const sliders = [
    "slider-1",
    "slider-2",
    "slider-3",
    "slider-4",
    "slider-5",
    "slider-6",
    "slider-7",
  ];
  return (
    <Swiper
      slidesPerView={slidesPerView}
      centeredSlides={true}
      navigation
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="formationsSwiper"
    >
      {sliders.map((slider, index) => (
        <SwiperSlide className="slider" key={index}>
          <img src={`/img/formations/${slider}.jpg`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FormationsSwiper;
