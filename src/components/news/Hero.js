'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Link from 'next/link';


const Hero = (props) => {
    const slider = props['slider'];

    return (
        <div className='container mx-8 px-11 mt-8'>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >

                {
                    slider.map((item, index) => {
                        return (
                            <SwiperSlide key={index}><Link href={`/details?id=${item['id']}`} ><img className=' h-96 w-full border' src={item['img1']} alt="" /></Link> </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>

    );
}

export default Hero
