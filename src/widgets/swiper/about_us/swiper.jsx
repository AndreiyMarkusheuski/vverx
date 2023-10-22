import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

import data from "/data/about_us.json";
import getImageURL from "/widgets/tools/get-image-url";

import "swiper/css";
import "swiper/css/pagination";

const renderSlides = ({ id, title, text, svg }) => (
  <SwiperSlide key={id} className="about_us-swiper-item">
    <img
      className="about_us-swiper-img"
      src={getImageURL(svg)}
      alt={svg}
    />
    <h3 className="about_us-swiper-title">{title}</h3>
    <p className="about_us-swiper-text">{text}</p>
  </SwiperSlide>
);

export default function AboutUsSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="about_us-swiper"
        breakpoints={{
          200: {
            centeredSlides: true
          },
          1000: {
            centeredSlides: false,
            freeMode: true
          },
        }}
      >
        {data.map(renderSlides)}
      </Swiper>
    </>
  );
}
