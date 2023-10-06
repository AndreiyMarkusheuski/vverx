import PropTypes from "prop-types";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import CallButton from "../button/call-button";
import Title from "../title";

import getImageURL from "/widgets/tools/get-image-url";

import "./styles.scss";

const DetailedCard = ({ item }) => {
  const { title, shortDescribtion, imgUrls, describtionList } = item;

  const getDescribeList = useMemo(
    () => (
      <div className="detailed_card-describe">
        <Title className="detailed_card-describe-text" level={7}>
          Технические характеристики:
        </Title>
        <ul className="detailed_card-describe-list">
          {describtionList.map((item) => (
            <li className="detailed_card-describe-list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
    [describtionList]
  );

  const renderSwiper = (imgUrls) => {
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="detailed_card-swiper"
      >
        {imgUrls.map((image) => (
          <SwiperSlide key={image}>
            <img
              className="detailed_card-img"
              src={getImageURL(image)}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div className="detailed_card">
      {Array.isArray(imgUrls) && renderSwiper(imgUrls)}
      <div className="detailed_card-info">
        <Title className="detailed_card-headline" level={5}>
          {title}
        </Title>
        <Title className="detailed_card-short_describe" level={6}>
          {shortDescribtion}
        </Title>
        {getDescribeList}
        <CallButton className="detailed_card-button" />
        <p className="detailed_card-short_describe">
          Или напишите нам на почту{" "}
          <a href="mailto:director@vverx.by">director@vverx.b</a>
        </p>
      </div>
    </div>
  );
};

DetailedCard.propTypes = {
  item: PropTypes.object,
};

export default DetailedCard;
