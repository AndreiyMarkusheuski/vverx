import classnames from "classnames";
import PropTypes from "prop-types";

import jsonData from "/data/common.json";

const CallButton = ({ classNames }) => (
  <a
    href={`callto:${jsonData.phone}`}
    className={classnames("button --phone", classNames)}
  >
    <span>{jsonData.phone}</span>
  </a>
);

CallButton.propTypes = {
  classNames: PropTypes.string,
};

export default CallButton;
