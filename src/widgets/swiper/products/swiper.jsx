import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

import data from "/data/products.json";
import Arrow from "/widgets/specific-components/arrow";

import articulatedBoomLiftsIcon from '/public/assets/images/articulated-boom-lifts.png'
import backhoeLoadersIcon from '/public/assets/images/backhoe_loaders.png'
import scissorLiftsIcon from '/public/assets/images/scissor-lifts.png'
import plitsIcon from '/public/assets/images/plits.png'
import telehandlersIcon from '/public/assets/images/telehandlers.png'

import "swiper/css";
import "swiper/css/navigation";

const iconObj = Object.freeze({
  'articulated-boom-lifts': articulatedBoomLiftsIcon,
  'backhoe_loaders': backhoeLoadersIcon,
  'scissor-lifts': scissorLiftsIcon,
  'plits': plitsIcon,
  'telehandlers': telehandlersIcon
})

const renderSlides = ({ id, name, imgUrl }) => (
  <SwiperSlide key={id} className="products-swiper-item">
    <a href={`./catalog/${id}/`}>
      <img loading="lazy" className="products-swiper-img" src={iconObj[imgUrl]} alt={id} />
      <p className="products-swiper-text">{name}</p>
    </a>
  </SwiperSlide>
);

export default function ProductsSwiper() {
  return (
    <>
      <button className="products-swiper-button-prev button">
        <Arrow />
      </button>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, FreeMode]}
        className="products-swiper"
        navigation={{
          nextEl: ".products-swiper-button-next",
          prevEl: ".products-swiper-button-prev",
        }}
        breakpoints={{
          200: {
            centeredSlides: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            freeMode: false,
          },
          1000: {
            freeMode: true,
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 20
          },
        }}
      >
        {data.map(renderSlides)}
      </Swiper>
      <button className="products-swiper-button-next button">
        <Arrow />
      </button>
    </>
  );
}
