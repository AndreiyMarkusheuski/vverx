import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

import data from "/data/products.json";
import Arrow from "/widgets/specific-components/arrow";
import getImageURL from "/widgets/tools/get-image-url";

import "swiper/css";
import "swiper/css/navigation";

const renderSlides = ({ id, name, img_url }) => (
  <SwiperSlide key={id} className="products-swiper-item">
    <img
      className="products-swiper-img"
      src={getImageURL(img_url)}
      alt={img_url}
    />
    <p className="products-swiper-text">{name}</p>
  </SwiperSlide>
);

export default function ProductsSwiper() {
  return (
    <>
      <button className="products-swiper-button-prev button">
        <Arrow />
      </button>
      <Swiper
        slidesPerView={"auto"}
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
            centeredSlides: true
          },
          876: {
            centeredSlides: false,
            freeMode: true
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