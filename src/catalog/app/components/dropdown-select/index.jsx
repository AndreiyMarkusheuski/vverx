import PropTypes from "prop-types";
import { useCallback } from "react";
import Select from "react-select";

import "./styles.scss";

const SelectDropdown = ({ values, onChange, defaultValue }) => {
  const parseValue = ({ id, title }) => ({ value: id, label: title });

  const handleChange = useCallback(
    ({ value }) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <Select
      value={
        defaultValue ? parseValue(defaultValue) : parseValue(values[0])
      }
      className="dropdown_select"
      classNamePrefix="dropdown_select-item"
      isSearchable={false}
      options={values.map(parseValue)}
      onChange={handleChange}
    />
  );
};

SelectDropdown.propTypes = {
  values: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.object,
};

export default SelectDropdown;
