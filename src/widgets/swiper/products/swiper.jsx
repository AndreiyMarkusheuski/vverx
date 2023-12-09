import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

import data from "/data/products.json";
import Arrow from "/widgets/specific-components/arrow";
import getImageURL from "/widgets/tools/get-image-url";

import "swiper/css";
import "swiper/css/navigation";

const renderSlides = ({ id, name }) => (
  <SwiperSlide key={id} className="products-swiper-item">
    <a href={`./catalog/?type=rent&equipment=${id}`}>
      <img className="products-swiper-img" src={getImageURL(id)} alt={id} />
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
