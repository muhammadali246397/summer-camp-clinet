import React from 'react';
import 'animate.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import slide1 from '../../../assets/slider/slide_1.jpg'
import slide2 from '../../../assets/slider/slide_2.jpg'
import slide3 from '../../../assets/slider/slide_3.jpg'
import { Slide, } from 'react-awesome-reveal';

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="hero min-h-screen" style={{backgroundImage:`url(${slide1})`}}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
              <div className="">
             <Slide direction='right'>
             <h1 className="mb-5 text-8xl font-semibold">Pursue Your Passion. <br />Create Your Life..</h1>
             </Slide>
             <Slide direction='left'>
              <button className='btn hover:text-orange-600 mt-4 text-xl bg-[#B2AB8C] text-white border-none rounded-none font-bold'>Explore Our Camp</button>
             </Slide>
               
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen" style={{backgroundImage:`url(${slide2})`}}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                
             <Slide direction='down'>
             <h1 className="mb-5 text-8xl font-semibold">Founded by artist and <br /> supporting artist since 1875</h1>
             </Slide>
             <Slide direction='up'>
              <button className='btn hover:text-orange-600 mt-4 text-xl bg-[#B2AB8C] text-white border-none rounded-none font-bold'>Explore Our Camp</button>
             </Slide>
               
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen" style={{backgroundImage:`url(${slide3})`}}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
              <div className="">
               <Slide direction='left'>
               <h1 className="mb-5 text-8xl font-semibold">Experiences for the <br /> artist in you</h1>
               </Slide>
               <Slide direction='right'>
              <button className='btn hover:text-orange-600 mt-4 text-xl bg-[#B2AB8C] text-white border-none rounded-none font-bold'>Explore Our Camp</button>
             </Slide>
              
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;