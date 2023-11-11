import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "./slidershutter.css";

import shutter_1 from "./../img/shutter-1.jpg";
import shutter_2 from "./../img/shutter-2.jpg";
import shutter_3 from "./../img/shutter-3.jpg";
import shutter_4 from "./../img/shutter-4.jpg";
import shutter_5 from "./../img/shutter-5.jpg";
import shutter_6 from "./../img/shutter-6.jpg";
import shutter_7 from "./../img/shutter-7.jpg";
import shutter_8 from "./../img/shutter-8.jpg";

export default function Slidershutter() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="swiper_sh"
      >
        <SwiperSlide>
          <img src={shutter_1} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_2} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_3} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_4} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_5} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_6} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_7} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shutter_8} alt="slider_image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
