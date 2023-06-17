import React from 'react';
import Title from '../../Share/ReuseTitle/Title';
import bg from '../../../assets/extra/bg-3.jpg'
import img1 from '../../../assets/extra/img1.jpg'
import img2 from '../../../assets/extra/img2.jpg'
import img3 from '../../../assets/extra/img3.jpg'
import img4 from '../../../assets/extra/img4.jpg'
import img5 from '../../../assets/extra/img5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const ExtraSection = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='my-20 h-[90vh]'>
            <div className=''>
                <div className='w-1/2 ml-auto p-10'>

                    <p className='mt-10'>Team</p>
                    <h2 className='text-5xl font-bold my-10'>A Legendary <br /> Community</h2>
                    <p>
                        At Crown Art School we are teaching different art techniques to students of all ages. During my lessons I try to bring out the inner artists of students to help build their skills.</p>
                </div>
                <div className='w-1/2 ml-auto'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-1/2 text-end "
                    >
                        <SwiperSlide>
                        <img src={img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={img5} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;