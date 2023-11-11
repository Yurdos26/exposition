import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "./slideraperture.css";

import aperture_1 from "./../img/aperture-1.jpg";
import aperture_2 from "./../img/aperture-2.jpg";
import aperture_3 from "./../img/aperture-3.jpg";

export default function Slideraperture() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper_a"
      >
        <SwiperSlide>
          <img src={aperture_1} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aperture_2} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aperture_3} alt="slider_image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
