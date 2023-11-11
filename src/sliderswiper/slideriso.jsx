import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./slideriso.css";

import iso_1 from "./../img/ISO-1.jpg";
import iso_2 from "./../img/ISO-2.jpg";
import iso_3 from "./../img/ISO-3.jpg";
import iso_4 from "./../img/ISO-4.jpg";
import iso_5 from "./../img/ISO-5.jpg";

export default function Slideriso() {
  return (
    <>
      <Swiper className="swiper_iso">
        <SwiperSlide>
          <img src={iso_1} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iso_2} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iso_3} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iso_4} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={iso_5} alt="slider_image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
