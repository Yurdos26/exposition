import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import "./sliderhome.css";

import home_1 from "./../img/Home-1.jpg";
import home_2 from "./../img/Home-2.jpg";
import home_3 from "./../img/Home-3.jpg";
import home_4 from "./../img/Home-4.jpg";
import home_5 from "./../img/Home-5.jpg";
import home_6 from "./../img/Home-6.jpg";
import home_7 from "./../img/Home-7.jpg";
import home_8 from "./../img/Home-8.jpg";
import home_9 from "./../img/Home-9.jpg";
import home_10 from "./../img/Home-10.jpg";
import home_11 from "./../img/Home-11.jpg";
import home_12 from "./../img/Home-12.jpg";

export default function Sliderhome() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="swiper_h"
      >
        <SwiperSlide>
          <img src={home_1} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_2} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_3} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_4} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_5} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_6} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_7} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_8} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_9} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_10} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_11} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home_12} alt="slider_image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
