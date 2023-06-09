import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import slide1 from '../../../assets/slider/slide_1.jpg'
import slide2 from '../../../assets/slider/slide_2.jpg'
import slide3 from '../../../assets/slider/slide_3.jpg'

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;