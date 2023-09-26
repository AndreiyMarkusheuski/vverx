import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";

// @ts-ignore
import data from "/src/data/products.json";
// @ts-ignore
import Arrow from "/src/widgets/specific-components/arrow";
// @ts-ignore
import getImageURL from "/src/widgets/tools/get-image-url";

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
