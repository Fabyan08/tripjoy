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
            modules={[Scrollbar]}
            className="mySwiper text-black"
          >
            <div className="flex justify-center">
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    src="/assets/img/popular/3.jpg"
                    className="w-[90%] md:w-[63%] rounded-lg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    src="/assets/img/popular/3.jpg"
                    className="w-[90%] md:w-[63%] rounded-lg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    src="/assets/img/popular/3.jpg"
                    className="w-[90%] md:w-[63%] rounded-lg"
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
