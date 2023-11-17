"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
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
          modules={[Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={2.5}
          centeredSlides={true}
          initialSlide={2}
          grabCursor={true}
          autoplay={{ delay: 8000 }}
          effect={"coverflow"}
          coverflow={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/trip1.jpg"
              className="event-images rounded-[14px] Mobile-M:rounded-[16px] Mobile-L:rounded-[20px] cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderEvent;
