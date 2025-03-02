"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel() {
    return (
        <div className="container mx-auto pt-8">
            <Swiper spaceBetween={50} slidesPerView={1}>
                <SwiperSlide style={{ height: '30rem' }} className="relative">
                    <img
                        className="w-full h-full object-cover"
                        src="/slider/slide1.png"
                        alt="Slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide style={{ height: '30rem' }} className="relative">
                    <img
                        className="w-full h-full object-cover"
                        src="/slider/slide1.png"
                        alt="Slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide style={{ height: '30rem' }} className="relative">
                    <img
                        className="w-full h-full object-cover"
                        src="/slider/slide1.png"
                        alt="Slide 1"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
