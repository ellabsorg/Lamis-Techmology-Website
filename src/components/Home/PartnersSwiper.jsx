import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./partners-swiper.css";
import "swiper/css";
import "swiper/css/navigation";

function PartnersSwiper() {
  const partners = [
    "BK-fire",
    "BMS",
    "Emploitic",
    "GAAN",
    "Hamoud-B",
    "Hasnaoui",
    "HIS-uni",
    "Huawei",
    "Icosnet",
    "Imychic",
    "Netlab",
    "Sonatrach",
    "USTHB",
    "VSL-event",
    "Wamda",
  ];
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      navigation
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="partnersSwiper"
    >
      {partners.map((partner, index) => (
        <SwiperSlide className="slider" key={index}>
          <img src={`/img/partners/${partner}.png`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PartnersSwiper;
