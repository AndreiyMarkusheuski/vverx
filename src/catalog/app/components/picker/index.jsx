import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "../button";
import Container from "../container";

import "./styles.scss";

const Picker = ({ onChange, values, className, activeId, isCommon }) => {
  const renderButton = ({ id, title }) => (
    <Button
      key={id}
      onClick={() => onChange(id)}
      size="s"
      mode={isCommon ? "secondary" : "white"}
      сlassName={classnames({ "--active": activeId === id })}
    >
      {title}
    </Button>
  );

  return (
    values.length > 0 && (
      <div className={classnames("picker", className)}>
        <Container>
          <div className="picker-wrapper">
            {values.map(renderButton)}
          </div>
        </Container>
      </div>
    )
  );
};

Picker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.array,
  activeId: PropTypes.string,
  isCommon: PropTypes.bool,
};

export default Picker;
