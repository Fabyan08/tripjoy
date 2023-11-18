"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { CiClock2 } from "react-icons/ci";
import { EffectCards } from "swiper/modules";

// import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useRouter } from "next/navigation";

const SliderAbout = ({ carouselImage }) => {
  const router = useRouter();

  return (
    <>
      <div className="carousel-container flex justify-center items-center">
        {/* <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        > */}
        <Swiper
          className="mt-4 mySwiper"
          navigation={true}
          grabCursor={true}
          modules={[EffectCards]}
          effect={"cards"}
        >
          {/* <style>
            {`
            .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
              background: #ffffff;
            }
            .swiper-pagination {
              padding-bottom:10px;
              border-radius: 50px;
            }
          `} */}
          {/* </style> */}
          {/* <SwiperSlide>
            <img
              src="/assets/img/mount2.jpg"
              className=" w-40 rounded-[14px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/mount2.jpg"
              className=" w-40 rounded-[14px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/mount2.jpg"
              className=" w-40 rounded-[14px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/mount2.jpg"
              className=" w-40 rounded-[14px] cursor-pointer"
            />
          </SwiperSlide> */}
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderAbout;
