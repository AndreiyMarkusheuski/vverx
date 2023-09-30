import PropTypes from "prop-types";

import Button from "../button";
import Title from "../title";
import getImageURL from "../../tools/get-image-url";

import "./styles.scss";

const Card = ({ title, shortDescribtion, imgUrls, onClick }) => (
  <div className="card">
    <img className="card-img" src={getImageURL(imgUrls[0])} alt={title} />
    <Title classNames="card-headline" level={5}>
      {title}
    </Title>
    <Title classNames="card-describe" level={6}>
      {shortDescribtion}
    </Title>
    <Button classNames="card-button" onClick={onClick} mode={"active"}>
      Подробнее
    </Button>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  shortDescribtion: PropTypes.string,
  imgUrls: PropTypes.array,
  onClick: PropTypes.func,
};

export default Card;
