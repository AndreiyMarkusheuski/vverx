import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Card from "../card";
import DetailedCard from "../detailed-card";
import Modal from "../modal";
import CustomSwitch from "../custom-switch";

import isDefined from "/scripts/tools/is-defined";

import "./styles.scss";

const List = ({ items }) => {
  const isValidItems = Array.isArray(items) && items.length > 0;
  const [modalItem, setModalItem] = useState(undefined);
  const [typeShape, setTypeShape] = useState("block");

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
  const renderCards = (product) => {
    const { title, shortDescribtion, imgUrls } = product;
    return (
      <Card
        title={title}
        shortDescribtion={shortDescribtion}
        imgUrls={imgUrls}
        onClick={() => handleClick(product)}
        classNames={`--${typeShape}`}
      />
    );
  };

  return (
    <>
      <div className="list">
        <div className={`list-switches --${typeShape}`}>
          <CustomSwitch
            onClick={handleChangeShape}
            classNames="list-switch"
            switchDataType="block"
          />
          <CustomSwitch
            onClick={handleChangeShape}
            classNames="list-switch"
            switchDataType="row"
          />
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
