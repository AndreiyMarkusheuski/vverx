import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// @ts-ignore
import data from "/src/data/products.json";
// @ts-ignore
import Arrow from "/src/widgets/specific-components/arrow";

import "swiper/css";
import "swiper/css/navigation";

type TSlide = {
  id: string;
  name: string;
  img_url: string;
};

const renderSlides = ({ id, name, img_url }: TSlide) => (
  <SwiperSlide key={id} className="products-swiper-item">
    <img
      className="products-swiper-img"
      src={`/src/assets/images/${img_url}.png`}
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
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="products-swiper"
        navigation={{
          nextEl: ".products-swiper-button-next",
          prevEl: ".products-swiper-button-prev",
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
