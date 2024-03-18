import PropTypes from "prop-types";
import { useState, useCallback, useEffect } from "react";

import Card from "../card";
import CustomSwitch from "../custom-switch";

import "./styles.scss";

const SWITCH_TYPES = Object.freeze({
  block: "block",
  row: "row",
});

const List = ({ items }) => {
  const isValidItems = Array.isArray(items) && items.length > 0;
  const [typeShape, setTypeShape] = useState(SWITCH_TYPES.row);
  const [shouldDisplaySwitches, setDisplaySwitches] = useState(true);

  useEffect(() => {
    setDisplaySwitchesRules(items.length > 1);
  }, [items]);

  const setDisplaySwitchesRules = (isMoreThenOne) => {
    setDisplaySwitches(isMoreThenOne);
    setTypeShape(SWITCH_TYPES.row);
  };

  const handleChangeShape = useCallback((typeShape) => {
    setTypeShape(typeShape);
  }, []);

  const renderError = () => <div className="list-empry">Список пуск</div>;
  const renderCards = product => {
    const { id, title, shortDescribtion, imgUrls } = product;
    return (
      <Card
        key={id}
        id={id}
        title={title}
        shortDescribtion={shortDescribtion}
        imgUrls={imgUrls}
        className={`--${typeShape}`}
      />
    );
  };

  return (
    <>
      <div className="list">
        <div className={`list-switches --${typeShape}`}>
          {shouldDisplaySwitches && (
            <>
              <CustomSwitch
                onClick={handleChangeShape}
                className="list-switch"
                switchDataType="block"
              />
              <CustomSwitch
                onClick={handleChangeShape}
                className="list-switch"
                switchDataType="row"
              />
            </>
          )}
        </div>
        {isValidItems && (
          <div className={`list-wrapper --${typeShape}`}>
            {items.map(renderCards)}
          </div>
        )}
        {!isValidItems && renderError()}
      </div>
    </>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
