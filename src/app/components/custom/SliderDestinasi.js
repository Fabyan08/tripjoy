"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import { CiClock2 } from "react-icons/ci";

// import {
//   Pagination,
//   Autoplay,
//   Navigation,
//   EffectCoverflow,
// } from "swiper/modules";
// // import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useRouter } from "next/navigation";
import { Scrollbar } from "swiper/modules";

const SliderDestinasi = ({ carouselImage }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="flex justify-center">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            spaceBetween={-100}
            initialSlide={1}
            modules={[Scrollbar]}
            className="mySwiper text-black"
            onInit={(swiper) => {
              // Set initial spaceBetween value based on screen width
              if (window.innerWidth < 640) {
                swiper.params.spaceBetween = 50;
                swiper.update(); // Update Swiper to apply changes
              }
            }}
            onResize={(swiper) => {
              // Update spaceBetween value when window is resized
              swiper.params.spaceBetween = window.innerWidth < 640 ? 50 : -100;
              swiper.update(); // Update Swiper to apply changes
            }}
          >
            <div className="flex justify-center">
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    src="/assets/img/popular/3.jpg"
                    className="object-cover md:h-[600px] w-[90%] mx-auto rounded-lg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    src="/assets/img/popular/3.jpg"
                    className="object-cover md:h-[600px] w-[90%] mx-auto rounded-lg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    src="/assets/img/popular/3.jpg"
                    className="object-cover md:h-[600px] w-[90%] mx-auto rounded-lg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderDestinasi;
