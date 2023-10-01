import PropTypes from "prop-types";
import { useMemo, useCallback } from "react";
import Select from "react-select";

import "./styles.scss";

const SelectDropdown = ({ values, onChange }) => {
  const parsedOption = useMemo(
    () => values.map(({ id, title }) => ({ value: id, label: title })),
    [values]
  );

  const handleChange = useCallback(
    ({ value }) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <Select
      defaultValue={parsedOption[0]}
      className="dropdown_select"
      classNamePrefix="dropdown_select-item"
      isSearchable={false}
      options={parsedOption}
      onChange={handleChange}
    />
  );
};

SelectDropdown.propTypes = {
  values: PropTypes.array,
  onChange: PropTypes.func,
};

export default SelectDropdown;
