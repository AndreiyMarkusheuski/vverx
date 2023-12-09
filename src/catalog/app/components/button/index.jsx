import classnames from "classnames";
import PropTypes from "prop-types";

import isDefinedNotEmpty from "/scripts/tools/is-defined-and-not-empty";
import "./styles.scss";

const Button = (props) => {
  const defaultProps = {
    сlassName: "",
    component: "button",
    mode: "secondary",
    role: "button",
    size: "m",
    tabIndex: 0,
    type: "button",
    children: null,
    label: "",
    labelMode: "word-wrap",
  };

  const {
    label,
    children,
    сlassName = defaultProps.сlassName,
    component: Component = defaultProps.component,
    mode = defaultProps.mode,
    role = defaultProps.role,
    size = defaultProps.size,
    tabIndex = defaultProps.tabIndex,
    type = defaultProps.type,
    labelMode = defaultProps.labelMode,
  } = props;

  // In the majority of cases setting an ARIA role and/or aria-* attribute that matches the default implicit ARIA
  // semantics is unnecessary and not recommended as these properties are already set by the browser.
  return (
    <Component
      className={classnames(
        {
          "styled-button": true,
          [`styled-button--mode--${mode}`]: !!mode,
          [`styled-button--size--${size}`]: !!size,
        },
        `styled-button--text_align--${labelMode}`,
        сlassName
      )}
      aria-label={isDefinedNotEmpty(label) ? undefined : label}
      role={type === role || Component === "button" ? undefined : role}
      type={type}
      title={label}
      tabIndex={tabIndex}
      {...props}
    >
      {label}
      {children}
    </Component>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  сlassName: PropTypes.string,
  component: PropTypes.node,
  mode: PropTypes.oneOf([
    "primary", "secondary", "white", "active", "link", "text",
  ]),
  role: PropTypes.string,
  size: PropTypes.oneOf(["xs",  "s",  "m"]),
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  labelMode: PropTypes.oneOf(["nowrap", "word-wrap"]),
};

export default Button;
