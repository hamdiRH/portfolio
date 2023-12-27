// import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SlideItem1 from '../../../assets/images/slide-item-1.png'
import SlideItem2 from '../../../assets/images/slide-item-2.png'
import SlideItem3 from '../../../assets/images/slide-item-3.png'
import SlideItem4 from '../../../assets/images/slide-item-4.png'

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper brand_slider py-6 px-6 rounded-xl dark:bg-black"
            >
                <SwiperSlide>
                    <div className="slide_item py-4 px-8 rounded-md">
                        <img src={SlideItem1} alt="slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_item py-4 px-8 rounded-md">
                        <img src={SlideItem2} alt="slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_item py-4 px-8 rounded-md">
                        <img src={SlideItem3} alt="slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_item py-4 px-8 rounded-md">
                        <img src={SlideItem4} alt="slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_item py-4 px-8 rounded-md">
                        <img src={SlideItem1} alt="slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_item py-4 px-8 rounded-md">
                        <img src={SlideItem2} alt="slide" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider
