import PropTypes from "prop-types";

const CustomSwitch = ({ className, switchDataType, onClick }) => (
  <div
    data-type={switchDataType}
    className={`--${switchDataType} ${className}`}
    onClick={() => onClick(switchDataType)}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

CustomSwitch.propTypes = {
  className: PropTypes.string,
  switchDataType: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomSwitch;
