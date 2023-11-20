"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { CiClock2 } from "react-icons/ci";

import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
// import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useRouter } from "next/navigation";

const SliderHome = ({ carouselImage }) => {
  const router = useRouter();

  return (
    <>
      <div className="carousel-container flex justify-center items-center">
        <Swiper
          className="mt-4 mySwiper"
          // pagination={{
          //   type: "progressbar",
          // }}
          navigation={true}
          modules={[ Autoplay, EffectCoverflow, Navigation]}
          spaceBetween={15}
          slidesPerView={1.5}
          initialSlide={2}
          // centeredSlides={true}
          // initialSlide={2}
          // grabCursor={true}
          // autoplay={{ delay: 100 }}
          // slidesPerView={1.1}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2.2, // 2.5 slides per view on desktop
          //   },
          // }}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <style>
            {`
            .swiper-pagination-bullet-active {
              background: #ffffff;
              width: 40px;
              border-radius: 50px;

            }
            .swiper-pagination-bullet {
              padding-bottom:10px;
              background: #ffffff;
              border-radius: 50px;
              animation: 
            }
         
          `}
          </style>
          <SwiperSlide>
            <img
              src="/assets/img/home/1.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">
              Experience the fun of exploring the snow
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/home/2.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">
            Exploring the beach with beauty view
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/home/3.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">
              Jungle with wild view? No problem! Lets Go to Go!
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/home/4.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">
            Snowy View, Cold Ice. An Unbeliavable Experience
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderHome;
