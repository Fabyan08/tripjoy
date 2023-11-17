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
          modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
          spaceBetween={5}
          slidesPerView={1}
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
            .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
              background: #ffffff;
            }
            .swiper-pagination {
              padding-bottom:10px;
              border-radius: 50px;
            }
          `}
          </style>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, maxime?</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, maxime?</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, maxime?</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className=" w-full h-32 md:h-52 rounded-[14px] cursor-pointer"
            />
            <h1 className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, maxime?</h1>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
};

export default SliderHome;
