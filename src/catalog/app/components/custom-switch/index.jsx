import PropTypes from "prop-types";

const CustomSwitch = ({ classNames, switchDataType, onClick }) => (
  <div
    data-type={switchDataType}
    className={`--${switchDataType} ${classNames}`}
    onClick={() => onClick(switchDataType)}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

CustomSwitch.propTypes = {
  classNames: PropTypes.string,
  switchDataType: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomSwitch;
