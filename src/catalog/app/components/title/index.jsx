import PropTypes from "prop-types";
import classnames from "classnames";

import "./styles.scss";

const Title = (props) => {
  const defaultProps = {
    classNames: undefined,
    children: undefined,
    isBottomShift: true,
    level: 1,
    tag: undefined,
    type: "graceful",
  };

  const {
    classNames = defaultProps.classNames,
    children = defaultProps.children,
    level = defaultProps.level,
    tag = defaultProps.tag,
    type = defaultProps.type,
  } = props;
  const Tag = tag || `h${level}`;

  return (
    <Tag
      className={classnames(
        "title",
        `title--level--${type}_${level}`,
        `title--type--${type}`,
        classNames
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

Title.propTypes = {
  classNames: PropTypes.string,
  level: PropTypes.oneOf([1 | 2 | 3 | 4 | 5 | 6]),
  type: PropTypes.oneOf(["graceful" | "clumsy" | "collapsed" | "reduced"]),
  children: PropTypes.node,
  tag: PropTypes.string,
};

export default Title;
