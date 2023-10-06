import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "../button";
import Title from "../title";

import getImageURL from "/widgets/tools/get-image-url";

import "./styles.scss";

const Card = ({ title, shortDescribtion, imgUrls, onClick, className }) => (
  <div className={classnames("card", className)}>
    <img className="card-img" src={getImageURL(imgUrls[0])} alt={title} />
    <Title className="card-headline" level={5}>
      {title}
    </Title>
    <Title className="card-describe" level={6}>
      {shortDescribtion}
    </Title>
    <Button customSlassNames="card-button" onClick={onClick} mode={"active"}>
      Подробнее
    </Button>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  shortDescribtion: PropTypes.string,
  imgUrls: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Card;
