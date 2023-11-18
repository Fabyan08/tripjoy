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

const SliderEvent = ({ carouselImage }) => {
  const router = useRouter();

  return (
    <>
      <div className="carousel-container flex justify-center items-center">
        <Swiper
          className="mt-4 mySwiper"
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, EffectCoverflow, Navigation]}
          spaceBetween={-10}
          // slidesPerView={2.5}
          centeredSlides={true}
          initialSlide={2}
          grabCursor={true}
          autoplay={{ delay: 8000 }}
          effect={"coverflow"}
          slidesPerView={1.1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2, // 2.5 slides per view on desktop
            },
          }}
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
              className="event-images rounded-[14px] cursor-pointer"
            />
            <div className="absolute md:text-xl md:pt-40 bottom-0 md:pb-10 md:space-y-2 rounded-xl p-2 w-full bg-gradient-to-b from-bl2/10 via-bl2/70 to-bl">
              <h1 className="font-bold">
                Everest Mountain, Nepal, Tibet | Rp 20.000.000
              </h1>
              <h3 className="text-base">Best Track For Adrenaline Soul!</h3>
              <div className="flex items-center space-x-2 text-orange-300">
                <CiClock2 /> <h1>2 Agustus 2023</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] cursor-pointer"
            />
            <div className="absolute md:text-xl md:pt-40 bottom-0 md:pb-10 md:space-y-2 rounded-xl p-2 w-full bg-gradient-to-b from-bl2/10 via-bl2/70 to-bl">
              <h1 className="font-bold">
                Everest Mountain, Nepal, Tibet | Rp 20.000.000
              </h1>
              <h3 className="text-base">Best Track For Adrenaline Soul!</h3>
              <div className="flex items-center space-x-2 text-orange-300">
                <CiClock2 /> <h1>2 Agustus 2023</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] cursor-pointer"
            />
            <div className="absolute md:text-xl md:pt-40 bottom-0 md:pb-10 md:space-y-2 rounded-xl p-2 w-full bg-gradient-to-b from-bl2/10 via-bl2/70 to-bl">
              <h1 className="font-bold">
                Everest Mountain, Nepal, Tibet | Rp 20.000.000
              </h1>
              <h3 className="text-base">Best Track For Adrenaline Soul!</h3>
              <div className="flex items-center space-x-2 text-orange-300">
                <CiClock2 /> <h1>2 Agustus 2023</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] cursor-pointer"
            />
            <div className="absolute md:text-xl md:pt-40 bottom-0 md:pb-10 md:space-y-2 rounded-xl p-2 w-full bg-gradient-to-b from-bl2/10 via-bl2/70 to-bl">
              <h1 className="font-bold">
                Everest Mountain, Nepal, Tibet | Rp 20.000.000
              </h1>
              <h3 className="text-base">Best Track For Adrenaline Soul!</h3>
              <div className="flex items-center space-x-2 text-orange-300">
                <CiClock2 /> <h1>2 Agustus 2023</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderEvent;
