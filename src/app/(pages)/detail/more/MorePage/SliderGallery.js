"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useRouter } from "next/navigation";

const SliderGallery = ({ carouselImage }) => {
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
          modules={[Pagination, EffectCoverflow, Navigation]}
          // spaceBetween={-10}
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
              src="/assets/img/popular/1.jpg"
              className="event-images rounded-[14px] cursor-pointer relative"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/popular/2.jpg"
              className="event-images rounded-[14px] cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="/assets/img/popular/3.jpg"
                className="event-images rounded-[14px] cursor-pointer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/popular/4.jpg"
              className="event-images rounded-[14px] cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderGallery;
