import classnames from "classnames";
import PropTypes from "prop-types";

import jsonData from "/data/common.json";

const CallButton = ({className}) => (
  <a
    href={`tel:${jsonData.phone}`}
    className={classnames("button --phone", className)}
  >
    <span>{jsonData.phone}</span>
  </a>
);

CallButton.propTypes = {
  className: PropTypes.string,
};

export default CallButton;
