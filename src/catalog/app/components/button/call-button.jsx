import classnames from "classnames";
import PropTypes from "prop-types";

const CallButton = ({classNames}) => (
  <a href="callto:+375447262626" className={classnames("button --phone", classNames)}>
    <span>+375 (44) 726-26-26</span>
  </a>
);

CallButton.propTypes = {
  classNames: PropTypes.string
}

export default CallButton