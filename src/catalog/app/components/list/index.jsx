import PropTypes from "prop-types";
import { useState, useCallback, useEffect } from "react";

import Card from "../card";
import DetailedCard from "../detailed-card";
import Modal from "../modal";
import CustomSwitch from "../custom-switch";

import isDefined from "/scripts/tools/is-defined";

import "./styles.scss";

const SWITCH_TYPES = Object.freeze({
  block: "block",
  row: "row",
});

const List = ({ items }) => {
  const isValidItems = Array.isArray(items) && items.length > 0;
  const [modalItem, setModalItem] = useState(undefined);
  const [typeShape, setTypeShape] = useState(SWITCH_TYPES.block);
  const [shouldDisplaySwitches, setDisplaySwitches] = useState(true);

  useEffect(() => {
    setDisplaySwitchesRules(items.length > 1);
  }, [items]);

  const setDisplaySwitchesRules = (isMoreThenOne) => {
    setDisplaySwitches(isMoreThenOne);
    if (isMoreThenOne) {
      setTypeShape(SWITCH_TYPES.row);
    } else setTypeShape(SWITCH_TYPES.block);
  };

  const handleClick = useCallback((product) => {
    setModalItem(product);
  }, []);

  const handleClose = useCallback(() => {
    setModalItem(undefined);
  }, []);

  const handleChangeShape = useCallback((typeShape) => {
    setTypeShape(typeShape);
  }, []);

  const renderError = () => <div className="list-empry">Список пуск</div>;
  const renderCards = (product, index) => {
    const { title, shortDescribtion, imgUrls } = product;
    return (
      <Card
        key={title + index}
        title={title}
        shortDescribtion={shortDescribtion}
        imgUrls={imgUrls}
        onClick={() => handleClick(product)}
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
      {isDefined(modalItem) && (
        <Modal isOpen={isDefined(modalItem)} onClose={handleClose}>
          <DetailedCard item={modalItem} />
        </Modal>
      )}
    </>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
