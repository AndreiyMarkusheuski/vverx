import PropTypes from "prop-types";
import classnames from "classnames";
import { useMemo } from "react";

import Button from "../button";
import Container from "../container";
import SelectDropdown from "../dropdown-select";
import useWindowDimensions from "../../hooks/use-window-dem";

import "./styles.scss";

const Picker = ({ onChange, values, className, activeId, isCommon }) => {
  const { width } = useWindowDimensions();
  const renderButton = ({ id, title }) => (
    <Button
      key={id}
      onClick={() => onChange(id)}
      size="s"
      mode={isCommon ? "secondary" : "white"}
      customSlassNames={classnames({ "--active": activeId === id })}
    >
      {title}
    </Button>
  );

  const getActiveValue = useMemo(() => {
    return values.filter(({ id }) => id === activeId)[0];
  }, [activeId, values]);

  const getSecondaryPicker = () =>
    width > 1199 ? (
      values.map(renderButton)
    ) : (
      <SelectDropdown
        values={values}
        onChange={onChange}
        defaultValue={getActiveValue}
      />
    );

  return (
    <div className={classnames("picker", className)}>
      <Container>
        <div className="picker-wrapper">
          {isCommon ? values.map(renderButton) : getSecondaryPicker()}
        </div>
      </Container>
    </div>
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
