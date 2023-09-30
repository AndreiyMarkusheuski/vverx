import classnames from "classnames";
import PropTypes from "prop-types";

import "./styles.scss";

const ButtonIcon = (props) => {
  const defaultProps = {
    component: "button",
    className: undefined,
    contentClassName: undefined,
    onClick: undefined,
    mode: "secondary",
  };

  const {
    icon,
    className,
    title,
    label,
    onClick,
    contentClassName,
    component: Component = defaultProps.component,
    mode = defaultProps.mode,
  } = props;

  const handleKeyDown = (e) => {
    const { component: Component = defaultProps.component } = props;

    if (e.key === "Enter" && Component === "button") {
      if (typeof onClick === "function") {
        onClick(e);
      }
    }
  };

  const onButtonClick = (event) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <Component
      className={classnames("icon", `icon--mode--${mode}`, className)}
      aria-label={label}
      title={title}
      onClick={onButtonClick}
      onKeyDown={handleKeyDown}
      type={Component === "button" ? "button" : undefined}
      {...props}
    >
      <div className={classnames("icon-content", contentClassName)}>{icon}</div>
    </Component>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  contentClassName: PropTypes.string,
  component: PropTypes.node,
  mode: PropTypes.string,
};

export default ButtonIcon;
