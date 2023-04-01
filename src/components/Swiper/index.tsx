import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function ({avatar}:any) {


  return (
    <>
      <Swiper

        slidesPerView={1.3}
        spaceBetween={10}
        pagination={{
          clickable:true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={avatar} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={avatar} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={avatar} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={avatar} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={avatar} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={avatar} alt="img" /></SwiperSlide>
      </Swiper>

    </>
  );
}
